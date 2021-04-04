<template>
  <div class="advantage-module">
      <div class="title">{{ title }}</div>
      <div class="info-box">
          <div class="info">{{ info }}</div>
          <div class="icon">
            <img :src="src" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        info: String,
        src: String,
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.advantage-module {
    width: 300px;
    border: white solid 1px;
    margin: auto;
    .title {
        height: 50px;
        line-height: 50px;
        color: white;
        margin-left: 10px;
        font-size: 20px;
        letter-spacing: 4px;
    }
    .info-box {
        overflow: hidden;
        .info {
            // display: inline-block;
            width: 100px;
            height: 50px;
            line-height: 20px;
            color: grey;
            margin-left: 10px;
            font-size: 16px;
            letter-spacing: 2px;
            float: left;
            // text-align: ;
        }
        .icon {
            // display: inline-block;
            float: right;
            margin: 10px;
        }
    }
}
.advantage-module:hover {
    border: skyblue solid 1px;
    transition: 0.5s;
}
</style>