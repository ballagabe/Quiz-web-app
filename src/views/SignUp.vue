<template>
  <div id="signUp">
    <h1 id="title">QUIZ GAME</h1>
    <h4>SIGN UP</h4>
    <b-form @submit="signUp" id="form">
      <b-form-group
        id="input-group-1"
        label="Nickname:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.nickName"
          type="text"
          required
          placeholder="Enter nickname"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Password:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <div id="buttons">
        <b-button type="submit" class="submitButton">Sign Up</b-button>
        <router-link to="/"><b-button class="submitButton">Sign In </b-button></router-link>
      </div>
    </b-form>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'SignUp',
  components: {
    //HelloWorld
  },
  data: function () {
      return {
          form: {
            nickName: '',
            password: ''
          }
      }
  },
  methods: {
      signUp: () => {
        alert("szia")
      }
  },
  mounted() {
    if(this.$store.getters.isLogged){
      this.$router.push({ path: 'dashboard' })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:900');

#signUp {
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
}

#title {
    font-style: bold;
    flex: 1;
    margin: 5% 0 1% 0;
    font-size: 3em;
}

#title:hover {
    margin-left: 20px;
    transition: color .5s, margin-left .5s;
}

#form {
    display: flex;
    flex-direction: column;
    width: 25%;
    align-items: center;
    justify-content: center;
}

#buttons {
    display: flex;
    flex-shrink: 2;
}

.submitButton {
    margin: 5px;
}
</style>