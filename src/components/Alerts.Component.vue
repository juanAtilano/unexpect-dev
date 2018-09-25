<template>
  <div id="alerts">
    <div v-if="isActive" v-bind:class="`alerts-container alerts-${alerts.type}`">
      <p class="alerts-text">{{alerts.message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alerts",
  props: ['alerts'],
  computed: {
    isActive: function () {
      return this.$store.state.alertState.isActive
    }
  },
  methods: {
    hideAlert() {
      const context = this
      setTimeout(function () {
        context.$store.dispatch('hideAlert', {
          message: null,
          type: 'success',
          isActive: 0
        })
      }, context.alerts.time)
    }
  },
  created: function () {
    this.hideAlert()
  },
  updated: function () {
    this.hideAlert()
  }
};
</script>

<style scoped>

#alerts {
  position: fixed;
  top: 10px;
  right: 10px;
}

.alerts-container {
  max-width: 80vw;
  box-sizing: border-box;
  color: #fff;
  background-color: #00796b;
  padding: 10px;
}

.alerts-text {
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 1.5px;
  margin: 0;
}
/* alerts colors */

.alerts-error {
  background-color:#d32f2f;
}

.alerts-success {
  background-color: #00796b;
}

.alerts-warning {
  background-color: #f57c00;
}

</style>
