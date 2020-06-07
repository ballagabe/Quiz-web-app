<template>
  <div id="dashBoard">
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
</template>

<script>

export default {
  name: 'DashBoard',
  data: function () {
      return {
        rankList: [
          {
            name: 'Benedek',
            score: 5436
          },
          {
            name: 'Gabor',
            score: 5321
          },
          {
            name: 'Benedek',
            score: 5436
          },
          {
            name: 'Gabor',
            score: 5321
          },
          {
            name: 'Benedek',
            score: 5436
          },
          {
            name: 'Gabor',
            score: 5321
          },
          {
            name: 'Benedek',
            score: 5436
          },
          {
            name: 'Benedek',
            score: 5436
          },
          {
            name: 'Gabor',
            score: 5321
          },
          {
            name: 'Benedek',
            score: 5436
          },
          {
            name: 'Gabor',
            score: 5321
          }
          ],
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
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:900');
#dashBoard {
  display: flex;
  font-family: 'Montserrat', sans-serif;
}

#rankList {
  margin-left: 1%;
  margin-top: 1%;
  width: 39%;
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
  width: 68%;
  color: white;
  background-color: rgba(91, 98, 120, 0.2);
  box-shadow: 0px 0px 293px -73px rgba(0, 0, 0, 0.2);
  border-radius: 1%;
}

#gameMenu h2 {
  margin-left: 15%;
  margin-top: 3%;
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