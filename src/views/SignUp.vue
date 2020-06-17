<template>
  <div id="signUp">
    <h1 id="title">QUIZER</h1>
    <h4>SIGN UP</h4>
    <b-form @submit="signUp" id="form">
      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="text"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Nickname:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.nickname"
          type="text"
          required
          placeholder="Enter nickname"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="Password:"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <div id="buttons">
        <b-button :click="signUp" type="submit" class="submitButton">Sign Up</b-button>
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
          email: '',
          nickname: '',
          password: ''
        }
    }
  },
  methods: {
    signUp() {
      let loginData = {
        email: this.form.email,
        nickname: this.form.nickname,
        password: this.form.password
      }
      fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      })
      .then(response => response.json())
      .then(data => {
        if(data.signUp){
          this.$router.push({ path: '/' })
        }else{
          console.log('hiba')
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    }
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
        if(data.log){
          this.$router.push({ path: 'dashboard' })
        }else{
          localStorage.removeItem('token')
          localStorage.removeItem('log')
          console.log('Not valid token')
        }
      })
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