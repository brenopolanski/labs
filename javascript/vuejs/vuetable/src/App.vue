<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Table />
  </div>
</template>

<script>
import Table from "./components/Table.vue";

export default {
  name: "app",
  components: {
    Table
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
