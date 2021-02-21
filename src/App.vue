<template>
  <img alt="Vue logo" src="./assets/logo.png" width="100" />
  <img alt="Vue logo" src="./assets/gql.png" width="100" />
  <Main stack="Vue.js 💚 GraphQL" />
</template>

<script>
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Main,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
