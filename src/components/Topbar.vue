<template>
  <div class="topbar-container">
      <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style lang="less" scoped>
.topbar-container {
    background: rgb(37, 42, 47);
    width: 100%;
    height: 60px;
    .title {
        color: white;
        line-height: 60px;
        margin-left: 20px;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
    }
}
</style>
