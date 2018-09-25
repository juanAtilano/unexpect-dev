<template>
  <div id="edit-message">
    <makeLinkWhatsApp :data="msg" v-on:saveLink="onSendLink($event)"></makeLinkWhatsApp>
  </div>
</template>

<script>
export default {
  name: 'EditMsg',
  data(){
    return {
      msg: {
        number: this.$route.params.number,
        message: this.$route.params.msg,
        title: 'Editar Link',
        saveNumber: 0
      }
    }
  },
  created: function () {
    if (localStorage.getItem('token') == '' || localStorage.getItem('token') == null) {
      this.$store.dispatch('chanceDirectory', {
        name: 'Login',
        params: {}
      })
    }
  },
  methods: {
    onSendLink: function (event) {
      this.$store.dispatch('editLink', event)
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

#edit-message {
  margin-top: 50px;
}

</style>
