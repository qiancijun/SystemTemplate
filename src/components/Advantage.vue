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
        width: 100px;
        height: 100px;
        border-radius: 100%;
        // text-align: center;
        .icon {
            width: 50px;
            height: 50px;
            margin: 18px 22px;
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
</style>