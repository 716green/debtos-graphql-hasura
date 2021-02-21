<template>
  <div class="hello">
    <h1>{{ stack }}</h1>
    <code>npm run docker</code><br />
    <code>http://localhost:8080/console</code>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    stack: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
code {
  color: white;
  background-color: black;
}
</style>
