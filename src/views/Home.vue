<template>
  <div class="home-container">
      <div class="desc-container">
          <div class="title-box">{{ titleMsg }}</div>
          <div class="info-box">{{ infoMsg }}</div>
          <div class="login-btn">进入使用</div>
      </div>

      <div class="advantage-container">
          <div class="subtitle-container">
              <div class="advantage-box">Advantage</div>
              <div class="advantage-title"> {{ AdvantageTitle }} </div>
          </div>
          <div class="advantages">
              <Advantage advantageTitle="标题" advantageInfo="信息" :src="require('../assets/icon/齿轮.png')"></Advantage>
              <Advantage advantageTitle="标题" advantageInfo="信息" :src="require('../assets/icon/齿轮.png')"></Advantage>
              <Advantage advantageTitle="标题" advantageInfo="信息" :src="require('../assets/icon/齿轮.png')"></Advantage>
              <Advantage advantageTitle="标题" advantageInfo="信息" :src="require('../assets/icon/齿轮.png')"></Advantage>
          </div>
      </div>

      <div class="product-container">
          <div class="subtitle-container">
              <div class="products-box">Products</div>
              <div class="products-title"> {{ productsTitle }} </div>
          </div>
          <div class="product-box">
              <Product title="标题" info="信息" :src="require('../assets/icon/齿轮.png')"></Product>
              <Product title="标题" info="信息" :src="require('../assets/icon/齿轮.png')"></Product>
              <Product title="标题" info="信息" :src="require('../assets/icon/齿轮.png')"></Product>
              <Product title="标题" info="信息" :src="require('../assets/icon/齿轮.png')"></Product>
          </div>
      </div>
  </div>
</template>

<script>
import Product from '../components/Product.vue';
import Advantage from '../components/Advantage.vue';

export default {
    components: {
        Product,
        Advantage,
    },
    data() {
        return {
            titleMsg: "标题",
            infoMsg: "信息",
            productsTitle: "我们的产品",
            AdvantageTitle: "我们的优势",
        }
    },
}
</script>

<style lang="less" scoped>
.home-container {
    // height: 800px;
    background-color: black;
    overflow: auto;
    .desc-container {
        // height: 200px;
        // line-height: 150px;
        background-color: pink;
        width: 50%;
        margin: 50px auto 0 auto;
        .title-box{
            height: 120px;
            line-height: 120px;
            text-align: center;
            background: red;
            width: 100%;
            font-size: 40px;
            color: white;
            letter-spacing: 10px;
            font-family:"YouYuan";
            font-weight: bolder;
        }
        .info-box {
            height: 80px;
            line-height: 80px;
            text-align: center;
            width: 100%;
            font-size: 20px;
            color: rgb(160, 164, 177);
            letter-spacing: 5px;
            font-family:"YouYuan";
        }
        .login-btn {
            height: 50px;
            line-height: 50px;
            // background-color: #fff;
            width: 200px;
            border: #fff solid 2px;
            margin: 20px auto 0 auto;
            text-align: center;
            cursor: pointer;
            color: #fff;
        }
    }

    .advantage-container {
        .subtitle-container {
            width: 100%;
            margin-top: 200px;
            .advantage-box {
                height: 30px;
                line-height: 30px;
                color: rgb(33, 65, 92);
                // width: 100%;
                text-align: center;
                margin: 0 auto;
                font-size: 20px;
                font-family:"YouYuan";
            }
            .advantage-title {
                height: 70px;
                line-height: 70px;
                color: white;
                // width: 100%;
                text-align: center;
                margin: 0 auto;
                font-size: 40px;
                letter-spacing: 4px;
                border-bottom: radial-gradient(#6495ED, white) solid 10px;
                font-family:"YouYuan";
            }
        }
        .advantages {
            display: flex;
            width: 80%;
            margin: 0 auto;
        }
    }

    .product-container {
        // height: 200px;
        // background: yellow;
        .subtitle-container {
            width: 100%;
            margin-top: 100px;
            .products-box {
                height: 30px;
                line-height: 30px;
                color: rgb(33, 65, 92);
                // width: 100%;
                text-align: center;
                margin: 0 auto;
                font-size: 20px;
                font-family:"YouYuan";
            }
            .products-title {
                height: 70px;
                line-height: 70px;
                color: white;
                // width: 100%;
                text-align: center;
                margin: 0 auto;
                font-size: 40px;
                letter-spacing: 4px;
                border-bottom: radial-gradient(#6495ED, white) solid 10px;
                font-family:"YouYuan";
            }
        }
        .product-box {
            display: flex;
            margin: 0 auto;
            width: 80%;
        }
    }
}
</style>