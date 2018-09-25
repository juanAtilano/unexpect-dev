<template>
  <div id="login">
    <div class="login-container">
      <img src="../assets/logo.png" alt="">
      <div class="login-form">
        <div class="row">
            <input class="login-input" v-model="email" type="text">
        </div>
        <div class="row">
            <input class="login-input" v-model="password" type="password">
        </div>
        <div class="row">
            <button class="login-btn" v-on:click="onClick()">Iniciar Sesión</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "example@mail.com",
      password: ''
    };
  },
  methods: {
    onClick: function() {
      if (this.email === '' || this.password === '') {
        this.$emit('noData')
      } else {
        this.$emit('enviar', {
          email: this.email,
          password: this.password
        })
      }
    }
  }
};
</script>


<style scoped>
#login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-btn {
  width: 350px;
  height: 60px;
  border: none;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.3);
  background-color: #ea184d;
  color: #fff;
  text-transform: uppercase;
  font-size: 20px;
  margin: 10px 0 40px 0;
}

.login-container {
  width: 50%;
  margin: 0 auto;
  text-align: center;
}

.login-form {
  display: block;
  margin-top: 30px;
}

.login-input {
  width: 350px;
  height: 60px;
  border: 2px solid #ddd;
  border-radius: 3px;
  margin: 15px 0;
  text-align: center;
  font-size: 20px;
}

.login-recover-pass {
  color: #2c3e50;
  font-size: 20px;
  margin-top: 15px;
}

@media only screen and (max-width: 576px) {
  #login {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-btn {
    width: 70%;
    height: 45px;
    border: none;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.3);
    background-color: #ea184d;
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
    margin: 10px 0 40px 0;
  }

  .login-container {
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }

  .login-form {
    display: block;
    margin-top: 30px;
  }

  .login-input {
    width: 70%;
    height: 45px;
    border: 2px solid #ddd;
    border-radius: 3px;
    margin: 15px 0;
    text-align: center;
    font-size: 20px;
  }

  .login-recover-pass {
    color: #2c3e50;
    font-size: 20px;
    margin-top: 15px;
  }
}

</style>
