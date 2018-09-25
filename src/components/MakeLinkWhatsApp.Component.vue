<template>
  <div id="link-wp">
    <div class="link-wp-container">
      <div class="row link-wp-header">
        <h1 class="link-wp-title">{{data.title}}</h1>
        <p class="link-wp-subtitle">Ingresa el número y el mensaje que deseas enviar</p>
      </div>
      <div class="row">
        <div class="col-12-m text-align-left">
          <p class="text">Tu número</p>
        </div>
        <div class="col-6-m">
          <input class="link-wp-input-number" v-model="number" type="text">
        </div>
        <div class="col-6-m">
          <button v-if="data.saveNumber" v-on:click="saveNumber()" class="link-wp-btn-save">guardar</button>
        </div>
      </div>
      <div class="row">
        <div class="col-12-m">
          <p class="text-align-left">Tu mensaje</p>
        </div>
        <div class="col-12-m">
          <textarea class="link-wp-textarea" name="message" id="" v-model="msg"></textarea>
        </div>
        <div class="col-12-m">
          <button v-on:click="saveLink()" class="link-wp-btn-make">Generar liga</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MakeLinkWhatsApp',
  data() {
    return {
      number: this.data.number,
      msg: this.data.message
    }
  },
  props: ['data'],
  methods: {
    saveNumber: function () {
      if (this.number.length === 10){
        this.$emit('saveNumber', {
          number: this.number,
          id: this.$route.params.id
        })
      }else {
        this.$emit('noData', {msg: 'Introduce 10 digitos'})
      }
    },
    makeLink: function (num, msg) {
      let msgText = encodeURIComponent(msg.trim())
      return `https://wa.me/521${num}?text=${msgText}`
    },
    saveLink: function () {
      if(this.msg == '' || this.number.length !== 10) {
        this.$emit('noData', {msg: 'Introduce todos los datos'})
      }else {
        let link = this.makeLink(this.number, this.msg)
        this.$emit('saveLink', {
          number: this.number,
          link,
          msg: this.msg,
          id: this.$route.params.id
        })
      }
    }
  }
};
</script>

<style>


  #link-wp {
    width: 100vw;
  }

  .link-wp-btn-save {
    background-color: #16A085;
    width: 80%;
    height: 45px;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.15);
    font-weight: bold;
  }

  .link-wp-btn-make {
    background-color: #16A085;
    width: 80%;
    height: 45px;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.15);
    margin-top: 30px;
    font-weight: bold;
  }

  .link-wp-container {
    width: 90%;
    margin-left: 5%;
    text-align: center;
  }

  .link-wp-i-close {
    width: 25px;
    margin-top: 7px;
  }

  .link-wp-input-number {
    background-color: #EEEEEE;
    width: 97%;
    height: 40px;
    border: 2px solid #E1E1E1;
    border-radius: 3px;
    font-size: 18px;
  }

  .link-wp-subtitle {
    font-size: 16px;
  }

  .link-wp-textarea {
    background-color: #EEEEEE;
    width: 97%;
    height: 120px;
    border: 2px solid #E1E1E1;
    border-radius: 3px;
  }

  .link-wp-title {
    font-size: 22px;
  }


</style>
