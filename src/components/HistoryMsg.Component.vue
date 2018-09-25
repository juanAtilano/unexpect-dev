<template>
  <div id="history-msg">
    <div class="historyMsg-container">
      <div class="row historyMsg-row" v-for="message in messages">
        <div class="row">
          <div class="col-4-m historyMsg-col-style">
            <p class="historyMsg-text">Fecha</p>
            <p class="historyMsg-number-cel">{{message.created_at.split(" ")[0]}}</p>
          </div>
          <div class="col-8-m historyMsg-col-style">
            <p class="historyMsg-text">Mensaje</p>
            <p class="historyMsg-number-cel">{{message.msg}}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4-m historyMsg-col-style">
            <p class="historyMsg-text">Celular</p>
            <p class="historyMsg-number-cel">{{message.numero}}</p>
          </div>
          <div class="col-4-m historyMsg-col-style text-align-center">
            <p class="historyMsg-text">Cant. Copias</p>
            <p class="historyMsg-percent">{{message.counter}}</p>
          </div>
          <div class="col-4-m historyMsg-col-style">
            <button class="historyMsg-btn-copy" v-on:click="countCopy(message)"><img class="historyMsg-btn-img" src="../assets/icons/content-copy.svg" alt=""></button>
            <button class="historyMsg-btn-edit" v-on:click="editMsg(message)"><img class="historyMsg-btn-img" src="../assets/icons/edit.svg" alt=""></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryMsg',
  props: ['messages'],
  data () {
    return {
      link: '' 
    }
  },
  methods: {
    countCopy: function (message) {
      const context = this
      navigator.clipboard.writeText(message.link).then(function() {
        context.$emit('countCopy', {
          id: message.id,
          pagination: context.$route.params.pagination
        })
      }, function() {

      });
    },
    editMsg: function (message) {
      this.$emit('editMsg', message)
    }
  }
}
</script>

<style scoped>

.historyMsg-btn-copy {
  background-color: #EA184D;
  border: 1px solid #fff;
  width: 40px;
  height: 40px;
  margin-top: 5px;
}

.historyMsg-btn-edit {
  background-color: #34495E;
  border: 1px solid #fff;
  width: 40px;
  height: 40px;
  margin-top: 5px;
}

.historyMsg-btn-img {
  width: 17px;
}

.historyMsg-container {
  width: 90%;
  margin-left: 5%;
}

.historyMsg-row {
  margin-top: 5px;
}

.historyMsg-col-style {
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #fff;
  background-color: #EEEFF0;
  height: 70px;
}

.historyMsg-number-cel {
  margin: 8px 0 0 0;
  font-size: 15px;
}

.historyMsg-percent {
  margin: 8px 0 0 0;
  font-size: 15px;
  font-weight: bold;
}

.historyMsg-text {
  margin: 0;
  font-size: 13px;
}

</style>
