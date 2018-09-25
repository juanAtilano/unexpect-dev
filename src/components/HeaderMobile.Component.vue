<template>
  <div id="header">
    <div class="header-menu" v-on:click="showMenu()">
      <img class="header-icons" src="../assets/icons/menu.svg" alt="">
    </div>
    <div class="header-logo">
      <img class="header-img" src="../assets/logo.png" alt="">
    </div>
    <div class="header-side" v-if="active">
      <div class="row">
        <img src="../assets/icons/close.svg" v-on:click="hideMenu()" alt="">
      </div>
      <div class="row">
        <a v-on:click="inicio()">Inicio</a>
      </div>
      <div class="row">
        <a v-on:click="history()">History</a>
      </div>
      <div class="row">
        <a v-on:click="logout()">Logout</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderMobile',
  data() {
    return {
      active: 0
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
    },
    inicio(){
      this.hideMenu()
      this.$store.dispatch('chanceDirectory', {
        name: 'Home',
        params: {
          id: 1
        }
      })
    },
    history(){
      this.hideMenu()
      this.$store.dispatch('chanceDirectory', {
        name: 'History',
        params: {
          pagination: 1
        }
      })
    },
    showMenu: function () {
      this.active = 1
    },
    hideMenu: function () {
      this.active = 0
    }
  }
}
</script>


<style scoped>

#header {
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ddd;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.3);
  top: 0;
  background-color: #fff;
}

.header-icons {
  height: 40px;
  margin-top: 5px;
}

.header-img {
  height: 50px;
  width: auto;
  margin-left: 10px;
}

.header-logo {
  max-height: 50px;
  width: auto;
}

.header-menu {
  float: left;
  height: 50px;
  border-right: 1px solid #ddd;
}

.header-side {
  padding-top: 40px;
  width: 100vw;
  position: fixed;
  text-align: center;
  top: 0;
  bottom: 0;
  background-color: #fff;
  border-right: 1px solid #ddd;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.3);
}

.header-side div {
  padding: 10px 0;
}

.header-side div a{
  text-decoration: none;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #313131;
}

</style>
