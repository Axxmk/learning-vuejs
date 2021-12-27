<template>
  <div id="app">
    <AppBar></AppBar>
    <Login></Login>
    <router-view></router-view>
  </div>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import Login from "./components/Login.vue";

export default {
  components: {
    AppBar,
    Login,
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  font-family: "Noto Sans HK", sans-serif;

  margin: 0;
  padding: 0;

  background-color: whitesmoke;
}

#app {
  margin-top: 5.5rem;
}
</style>