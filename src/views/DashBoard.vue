<template>
  <div id="dashBoard">
    <div id="rankList">
      <h2>Ranklist</h2>
      <b-table striped borderless small :items="rankList" id="table"></b-table>
    </div>
    <id id="gameMenu">
      <h2>Game settings:</h2>
      <div id="box">
        <h5>Select category:</h5>
        <b-dropdown id="category" text="Category" variant="info">
          <b-dropdown-item>Action A</b-dropdown-item>
          <b-dropdown-item>Action B</b-dropdown-item>
        </b-dropdown>
        <h5>Select difficulty:</h5>
        <b-dropdown id="difficulty" text="Difficulty" variant="info">
          <b-dropdown-item><div :click="difficulty">Easy</div></b-dropdown-item>
          <b-dropdown-item><div :click="difficulty">Easy</div></b-dropdown-item>
          <b-dropdown-item><div :click="difficulty">Easy</div></b-dropdown-item>
        </b-dropdown>
      </div>
    </id>
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
          ]
      }
  },
  methods: {
    diffculty: () => {
      console.log(123)
    }
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
  margin-left: 6%;
  margin-top: 3%;
}

#box {
  display: flex;
  flex-direction: column; 
  text-align: center;
  align-items: center;
  width: 60%;
  margin-top: 5%;
  margin-left: 4%;

}

#category {
  width: 35%;
  margin-top: 1%;
  margin-bottom: 6%;
}
</style>