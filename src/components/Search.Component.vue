<template>
  <div id="search">
    <div class="search-container">
      <div class="row">
        <div class="col-6-m">
          <p class="search-text">Fecha desde</p>
          <input class="search-input-date" type="date" v-model="dateStart" v-on:change="checkDates()">
        </div>
        <div class="col-6-m">
          <p class="search-text">Fecha hasta</p>
          <input class="search-input-date" type="date" v-model="dateEnd" v-on:change="checkDates()">
        </div>
      </div>
      <div class="row">
        <div class="col-12-m">
          <input class="search-input-number" v-on:keyup.enter="checkText()" v-model="searchText" placeholder="Buscar..." type="text">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      dateStart: '',
      dateEnd: '',
      searchText: ''
    }
  },
  methods: {
    checkDates: function () {
      if (this.dateStart !== '' && this.dateEnd !== '') {
        let dateStart = new Date(this.dateStart)
        let dateEnd = new Date(this.dateEnd)
        if (dateStart <= dateEnd) {
          this.$emit('searchMsgByDate', {
            from: this.dateStart,
            to: this.dateEnd,
            pagination: 1
          })
        }else {
          this.$store.dispatch('hideAlert', {
            message: 'La fecha desde debe ser anterior de la fecha hasta',
            isActive: 1,
            type: 'error',
            time: 5000
          })
        }
      }
    },
    checkText: function () {
      if(this.searchText !== '') {
        this.$emit('searchMsgByText', {
          text: this.searchText,
          pagination: 1
        })
      }
    }
  }
}
</script>

<style scoped>

input[type="date"]::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    opacity: 1;
    display: block;
    background: url(../assets/icons/chevron-down.png) no-repeat;
    width: 24px;
    height: 24px;
    border-width: thin;
}

.search-container {
  width: 90%;
  margin-left: 5%;
}

.search-input-date {
  width: 90%;
  height: 35px;
  background-color: #34495E;
  color: #fff;
  border: 1px solid #D6D6D6;
}

.search-input-number {
  width: 100%;
  border: 1px solid #D6D6D6;
  height: 35px;
  color: #111;
  margin-top: 20px;
  background: #EEEFF0 url(../assets/icons/magnify.png) no-repeat;
  background-position: right;
  box-sizing: border-box;
  padding: 10px;
}

.search-text {
  margin: 15px 0 5px 0;
  font-size: 15px;
}

</style>
