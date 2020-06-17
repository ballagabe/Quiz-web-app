<template>
  <div>
      <div id="questionBoard">
        <div id="game">
          <div class="buttons" v-if="!started">
            <b-button @click="start" variant="success" class="answerButton">Start game</b-button>
          </div>
          <div class="afterStart" v-else>
            <div v-if="!end">
              <div class="points">
                <h4>Acquired points: {{this.points}}</h4>
              </div>
              <b-progress :value="queue + 1" :max="maxQueue" show-value class="mb-3 w-25 m-auto"></b-progress>
              <h4>{{this.time}}</h4>
              <h4>Question:</h4>
              <h5>{{questions[queue].question}}</h5>
              <div class="buttons">
                <b-button @click="next(true)" variant="info" class="answerButton">True</b-button>
                <b-button @click="next(false)" variant="info" class="answerButton">False</b-button>
              </div>
            </div>
            <div v-else>
              <h3>You reached {{points}} point</h3>
              <router-link class="buttons" to="/dashboard">
                <b-button variant="success">Go back to dashboard</b-button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Game',
  props: ['type'],
  data: function () {
    return {
      gameType: null,
      questions: [0],
      started: false,
      points: 0,
      queue: 0,
      maxQueue: 5,
      time: 15,
      end: false
    }
  },
  methods: {
    start() {
      this.started = true
      setInterval(this.countdown, 1000);
    },
    next(decision){
      if(this.queue < 4) {
        this.checkAnswer(decision)
        this.time = 15
        this.queue++
      }else {
        !this.end ? this.checkAnswer(decision) : false
        this.end = true
        this.endGame()
      }
    },
    countdown() {
      this.started ? this.time-- : false
      this.time === 0 ? this.next(0) : false  
    },
    endGame() {
      let token = localStorage.getItem('token')
      fetch('http://localhost:3000/question/push', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({token: token, points: this.points}),
      })
      .then(data => data.json())
      .then(data => {
        console.log(data)
        localStorage.removeItem('token')
        localStorage.setItem('token', data.newToken)
      })
    },
    checkAnswer(decision) {
      if(decision == true){
        this.questions[this.queue].correct_answer == "True" ? this.points++ : false
      }
      if(decision == false){
        this.questions[this.queue].correct_answer == "False" ? this.points++ : false
      }
    }
  },
  mounted() {
    this.type ? this.gameType = this.type : this.$router.push('/')
    //fetch questions
    fetch('http://localhost:3000/question?diff=' + this.type, {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(data => data.json())
    .then(data => this.questions = data.results)
  },
  beforeCreate() {
    if(localStorage.getItem('token') && localStorage.getItem('log')){
      // Validate token
      let token = localStorage.getItem('token')
      fetch('http://localhost:3000/validate', {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          },
          body: JSON.stringify({token: token}),
      })
      .then(data => data.json())
      .then(data => {
        if(!data.log){
          localStorage.removeItem('token')
          localStorage.removeItem('log')
          console.log('Not valid token')
          this.$router.push({ path: '/' })
        }
      })
    }else{
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:900');
#questionBoard {
  display: flex;
  font-family: 'Montserrat', sans-serif;
}

#game {
  margin: 1%;
  width: 100%;
  color: white;
  background-color: rgba(91, 98, 120, 0.2);
  box-shadow: 0px 0px 293px -73px rgba(0, 0, 0, 0.2);
  border-radius: 1%;
  padding: 2%;
}
h3, h4, h5{
  text-align: center;
  margin: 1%;
}

.points {
  position: absolute;
  left: 5vw
}

.answerButton {
  margin: 0 0.5vw 0 0.5vw;
}

.buttons {
  display: flex;
  justify-content: center;
  text-decoration: none;
}
</style>