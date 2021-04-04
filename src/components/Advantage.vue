<template>
  <div class="advantage-container">
      <div class="icon-box">
          <div class="icon">
              <img :src="src">
          </div>
      </div>
      <div class="title">{{ advantageTitle }}</div>
      <div class="info">{{ advantageInfo }}</div>
  </div>
</template>

<script>
export default {
    props: {
        advantageTitle: String,
        advantageInfo: String,
        src: String,
    }
}
</script>

<style lang="less" scoped>
.advantage-container {
    // width: 300px;
    margin: auto;
    .icon-box {
        border: grey solid 3px;
        width: 120px;
        height: 120px;
        border-radius: 100%;
        // text-align: center;
        .icon {
            width: 50px;
            height: 50px;
            margin: 25px 30px;
        }
    }
    .title {
        height: 40px;
        font-size: 20px;
        letter-spacing: 4px;
        color: white;
        margin-top: 10px;
        margin-left: 10px;
    }
    .info {
        width: 100px;
        height: 50px;
        line-height: 20px;
        color: grey;
        // margin-left: 10px;
        font-size: 16px;
        letter-spacing: 2px;
        margin-left: 10px;
    }
}

.icon-box:hover {
    border: skyblue solid 3px;
    transition: 0.5s;
}
.title:hover {
    color: aqua;
    transition: 1s;
}
</style>