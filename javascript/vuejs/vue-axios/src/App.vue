<template>
  <div id="app">
    <ExampleComponent2 />
  </div>
</template>

<script>
import ExampleComponent2 from "./components/ExampleComponent2.vue";

export default {
  name: "app",
  components: {
    ExampleComponent2
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
