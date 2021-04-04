<template>
  <div class="dashboard-container">
      <left-nav/>
      <div class="router-container">
        <router-view/>
      </div>
  </div>
</template>

<script>
import leftNav from '../components/LeftNav.vue';

export default {
    components: {
        leftNav,
    }
}
</script>

<style lang="less" scoped>
.dashboard-container {
    height: calc(100% - 60px);
    overflow: hidden;
    .router-container {
        overflow: auto;
        width: calc(100% - 200px);
        float: right;
        height: 100%;
        background-color: rgb(241, 241, 241);
    }
}

.router-container::-webkit-scrollbar {
  display: none !important;
}
</style>