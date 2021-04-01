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
    .router-container {
        width: 90%;
        float: right;
    }
}
</style>