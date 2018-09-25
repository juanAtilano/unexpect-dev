<template>
  <div id="home">
    <headerMobile></headerMobile>
    <makeLinkWhatsApp :data="msg" v-on:saveNumber="onSendNumber($event)" v-on:saveLink="onSendLink($event)"  v-on:noData="noData($event)"></makeLinkWhatsApp>
    <alerts v-if="alerts.isActive" :alerts="alerts"></alerts>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: {
        number: '',
        message: '',
        title: 'Crear Botón WhatsApp',
        saveNumber: 1
      }
    }
  },
  created: function () {
    if (localStorage.getItem('token') == null || localStorage.getItem('token') == 'null') {
      this.$store.dispatch('chanceDirectory', {
        name: 'Login',
        params: {}
      })
    }
  },
  methods: {
    onSendNumber: function (event) {
      this.$store.dispatch('saveNumber', event)
    },
    onSendLink: function (event) {
      this.$store.dispatch('saveLink', event)
    },
    noData: function (e) {
      this.$store.dispatch('hideAlert', {
        message: e.msg,
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

<style scoped>

#home{
  margin-top: 50px;
}

</style>
