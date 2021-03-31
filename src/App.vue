<template>
  <div id="app">
    <topbar title="DashBoard"/>
    <router-view/>
  </div>
</template>

<script>

import topbar from './components/Topbar.vue';

export default {
  name: 'App',
  components: {
    topbar
  }
}
</script>

<style>
html body {
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
