<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

body {
  font-family: 'Source Sans Pro';
  margin: 0;
}

#app {
  color: #313131;
  margin: 0;
}

/* Aquí irán las clases aplicables a todo el proyecto y se podría armará un microframeork CSS*/

.row {
  display: table;
  width: 100%;
}

/* Cols Mobile */
.col-12-m {
  width: 100%;
  float: left;
}

.col-9-m {
  width: 75%;
  float: left;
}

.col-8-m {
  width: 66.6666%;
  float: left;
}

.col-6-m {
  width: 50%;
  float: left;
}

.col-5-m {
  width: 41.6666%;
  float: left;
}

.col-4-m {
  width: 33.3333%;
  float: left;
}

.col-3-m {
  width: 25%;
  float: left;
}

.col-2-m {
  width: 16.6666%;
  float: left;
}

.col-1-m {
  width: 8.3333%;
  float: left;
}

.text-align-center {
  text-align: center;
}

.text-align-left {
  text-align: left;
}

</style>
