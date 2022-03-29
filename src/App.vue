<template>
  <div id="app">
    <CalcView />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CalcView from './components/calc/CalcView.vue';

export default Vue.extend({
  name: 'App',
  components: {
    CalcView,
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 20px 10px 20px;
}
input {
  margin: 10px;
  padding: 7px 5px;
}
button {
  padding: 7px 12px;
  cursor: pointer;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 4px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
