<template>
  <div id="app">
    <topbar title="农业智能管理系统"/>
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
body::-webkit-scrollbar {
  display: none !important;
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
