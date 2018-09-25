<template>
  <div class="login-page">
    <loginComponent  v-on:enviar="onEnviar($event)" v-on:noData="noData($event)"></loginComponent>
    <alerts v-if="alerts.isActive" :alerts="alerts"></alerts>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created: function () {
  },
  methods: {
    onEnviar: function (event) {
      console.log(event)
      this.$store.dispatch('login', { event })
    },
    noData: function (e) {
      this.$store.dispatch('hideAlert', {
        message: 'Introduce todos los datos',
        isActive: 1,
        type: 'error',
        time: 5000
      })
    }
  },
  computed: {
    alerts () {
      return this.$store.state.alertState
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
