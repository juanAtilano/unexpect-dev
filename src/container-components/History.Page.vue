<template>
  <div id="history-page">
    <headerMobile></headerMobile>
    <div class="history-container">
      <h1 class="history-title">Historial de ligas creadas</h1>
      <search v-on:searchMsgByDate="searchMsgByDate($event)" v-on:searchMsgByText="searchMsgByText($event)"></search>
      <pagination :type="type" :pages="pages" :isActive="isActive" v-on:changePagination="changePagination($event)"></pagination>
      <historyMsg v-on:editMsg="editMsg($event)" :messages="messages" v-on:countCopy="countCopy($event)"></historyMsg>
    </div>
    <alerts v-if="alerts.isActive" :alerts="alerts"></alerts>
  </div>
</template>


<script>
export default {
  name: 'HistoryPage',
  created: function(){
    if (localStorage.getItem('token') == '' || localStorage.getItem('token') == null) {
      this.$store.dispatch('chanceDirectory', {
        name: 'Login',
        params: {}
      })
    }
    this.$store.dispatch('getMessages', {
      pagination: this.$route.params.pagination,
      type: 'history'
    })
  },
  methods: {
    searchMsgByDate: function (e) {
      this.$store.dispatch('searchMsgByDate', e)
    },
    searchMsgByText: function (e) {
      this.$store.dispatch('searchMsgByText', e)
    },
    changePagination: function (e) {
      if (e.type === "history") {
        this.$store.dispatch('getMessages', e)
      } else if (e.type === 'date'){
        this.$store.dispatch('searchMsgByDate', {
          from: this.$route.params.from,
          to: this.$route.params.to,
          pagination: e.pagination
        })
      }else if ('text') {
        console.log(this.$route.params.text)
        this.$store.dispatch('searchMsgByText', {
          text: this.$route.params.text,
          pagination: e.pagination
        })
      }
    },
    countCopy(e) {
      this.$store.dispatch('countCopy', {
        event: e,
        alerts: {
          message: 'Se ha copiado satisfactoriamente en el Portapapeles.',
          type: 'success',
          isActive: 1,
          time: 5000
        }
      })
    },
    editMsg(e) {
      console.log(e)
      this.$store.dispatch('chanceDirectory', {
        name: 'EditMsg',
        params: {
          id: e.id,
          msg: e.msg,
          number: e.numero
        }
      })
    }
  },
  computed: {
    messages () {
      return this.$store.state.paginationState.messages
    },
    alerts () {
      return this.$store.state.alertState
    },
    pages () {
      return this.$store.state.paginationState.pages
    },
    isActive() {
      return this.$store.state.paginationState.actualPage
    },
    type() {
      return this.$store.state.paginationState.type
    }
  }
}
</script>

<style scoped>

  #history-page {
    margin-top: 50px;
  }

  .history-title {
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    background-color: #EA184D;
    color: #fff;
    padding: 14px 0 14px 15px;
    line-height: 22px;
  }

</style>


