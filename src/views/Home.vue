<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="100" />
    <img alt="Vue logo" src="../assets/gql.png" width="100" />
    <Main stack="Vue 💚 GraphQL" />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main.vue";

export default {
  name: "Home",
  components: {
    Main,
  },
};
</script>
