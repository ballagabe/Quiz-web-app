<template>
  <div>
  <b-button v-on:click="this.logout">Logout</b-button>
    <div id="dashBoard">
      <div id="userInfo">
        <h2>Hi {{userInfo.nickname}}</h2>
        <h4>You have {{userInfo.points}} points!</h4>
      </div>
      <div id="rankList">
        <h2>Ranklist</h2>
        <b-table striped borderless small :items="rankList" id="table"></b-table>
      </div>
      <div id="gameMenu">
        <h2>Game settings:</h2>
        <div id="box">
          <h5>Difficulty:</h5>
          <b-form-select v-model="type" :options="options" class="select"></b-form-select>
          <router-link :to="{ name: 'Game', params: { type } }">
            <b-button class="submitButton">Sart game</b-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DashBoard',
  data: function () {
      return {
        userInfo: {
          username: '',
          points: 0
        },
        rankList: [],
        type: null,
        options: [
          { value: null, text: 'Please select difficulty' },
          { value: 'easy', text: 'Easy' },
          { value: 'medium', text: 'Medium' },
          { value: 'hard', text: 'Hard' }
        ]
      }
  },
  methods: {
    logout: function(){
      localStorage.removeItem('token')
      localStorage.removeItem('log')
      this.$router.push({ path: '/' })
    }
  },
  mounted() {
    // Get user's data
    let token = localStorage.getItem('token')
    fetch('http://localhost:3000/info', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({token: token}),
    })
    .then(data => data.json())
    .then(data => {
      this.userInfo = data
      this.rankList = this.userInfo.ranklist
    })
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
* {
  font-family: 'Montserrat', sans-serif;
}
#dashBoard {
  display: flex;
  padding-bottom: 5%;
}

#userInfo {
  margin-left: 1%;
  margin-top: 1%;
  width: 33%;
  color: white;
  background-color: rgba(91, 98, 120, 0.2);
  box-shadow: 0px 0px 293px -73px rgba(0, 0, 0, 0.2);
  border-radius: 1%;
  padding-bottom: 5%;
}

#userInfo h2 {
  margin-left: 26%;
  margin-top: 5%;
}

#userInfo h4 {
  margin-left: 23%;
  margin-top: 5%;
}

#rankList {
  margin-left: 1%;
  margin-top: 1%;
  padding-bottom: 5%;
  width: 33%;
  color: white;
  background-color: rgba(91, 98, 120, 0.2);
  box-shadow: 0px 0px 293px -73px rgba(0, 0, 0, 0.2);
  border-radius: 1%;
}

#table {
  color:white;
  width: 50%;
  margin-left: 23%;
}

#rankList h2{
  margin-left: 26%;
  margin-top: 5%;
}

#gameMenu {
  margin-left: 1%;
  margin-right: 1%;
  margin-top: 1%;
  width: 33%;
  color: white;
  background-color: rgba(91, 98, 120, 0.2);
  box-shadow: 0px 0px 293px -73px rgba(0, 0, 0, 0.2);
  border-radius: 1%;
}

#gameMenu h2 {
  margin-left: 15%;
  margin-top: 5%;
}

#box {
  display: flex;
  flex-direction: column; 
  width: 60%;
  margin-left: 13%;
}

#box h5 {
  margin-top: 5%;
}

#category {
  width: 35%;
  margin-top: 1%;
  margin-bottom: 6%;
}

.select {
  width: 50%;
}

.submitButton {
  width: 50%;
  margin-top: 3%;
}
</style>