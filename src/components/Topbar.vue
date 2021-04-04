<template>
  <div class="topbar-container">
      <span class="title">{{ title }}</span>
      <span class="home" @click="goto('/home')">首页</span>
  </div>
</template>

<script>
export default {
    props: {
        title: String
    },
    methods: {
        goto: function(path) {
            this.$router.push(path);
        },
        gotoNoHistory: function(path) {
            this.$router.replace(path);
        }
    }
}
</script>

<style lang="less" scoped>
.topbar-container {
    background: rgb(37, 42, 47);
    width: 100%;
    height: 60px;
    overflow: hidden;
    .title {
        color: white;
        line-height: 60px;
        margin-left: 10%;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
    }
    .home {
        float: right;
        color: white;
        line-height: 60px;
        margin-right: 100px;
        cursor: pointer;
    }
}
</style>
