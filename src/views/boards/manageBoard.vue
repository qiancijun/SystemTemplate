<template>
  <div class="manage-container">

    <div class="manage-title">{{ manageTitle }}</div>

    <div class="status-container">
      <div class="fan-container">
        <div class="fan-title">{{ fanTitle }}</div>
        <div class="fan-handle">
          <div class="switch">
            <span>关</span>
            <el-switch
              v-model="fanSwitch"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
            <span>开</span>
          </div>
        </div>
      </div>
      <div class="report-container">
        <div class="report-title">{{ reportTitle }}</div>
        <div class="report-handle">
          <div class="switch">
            <span>关</span>
            <el-switch
              v-model="reportSwitch"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
            <span>开</span>
          </div>
        </div>
      </div>
    </div>

    <div class="error-container">
      <div class="error-title">{{ errorTitle }}</div>
      <div class="pie-container" id="pieBox"></div>
    </div>
  </div>
</template>

<script>
import { Pie } from '@antv/g2plot';

export default {
  data() {
    return {
      errorTitle: "设备运行情况监控",
      piePlot: null,
      data: [
        { type: '故障机器', value: 80 },
        { type: '总开机', value: 2803 }
      ],
      manageTitle: "设备运行状态管理",
      fanTitle: "风扇管理",
      reportTitle: "警报管理",
      fanStatus: "关闭",
      fanSwitch: false,
      reportSwitch: false,
    }
  },
  methods: {

  },
  mounted() {
    this.piePlot = new Pie('pieBox', {
      appendPadding: 10,
      data: this.data,
      angleField: 'value',
      radius: 1,
      // 设置圆弧起始角度
      // startAngle: Math.PI,
      // endAngle: Math.PI * 1.5,
      colorField: 'type', // 部分图表使用 seriesField
      color: ['rgb(244, 67, 25)', 'rgb(20, 225, 255)'],
      label: {
        type: 'inner',
        offset: '-8%',
        content: '{name}',
        style: { fontSize: 14 },
      },
      innerRadius: 0.5,
      interactions: [{ type: 'element-active' }],
      pieStyle: {
        lineWidth: 0,
      },
      statistic: {
        content: {
          formatter: () => {
            return parseInt(this.data[0].value / (this.data[0].value + this.data[1].value) * 100) + '%';
          }
        }
      }
    });
    this.piePlot.render();
  }
}
</script>

<style lang="less" scoped>
.manage-container {

  .manage-title {
    line-height: 100px;
    font-size: 30px;
    text-align: center;
    letter-spacing: 6px;
    font-weight: bold;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }

  .status-container {
    width: 98%;
    height: 400px;
    background-color: #fff;
    margin: 0 auto;
    box-shadow: 0px 0px 11px 0px rgb(0 0 0 / 25%);
    .fan-container {
      width: 80%;
      height: 170px;
      margin: 0 auto;
      .fan-title  {
        line-height: 50px;
        font-size: 30px;
        font-family: "YouYuan";
        letter-spacing: 4px;
        margin-left: 10px;
      }
      .fan-handle {
        height: 120px;
        .switch {
          margin-left: 10px;
          margin-top: 40px;
          span {
            margin: 0 10px;
          }
        }
      }
    }
    .report-container {
      width: 80%;
      height: 170px;
      margin: 60px auto;
      .report-title  {
        line-height: 50px;
        font-size: 30px;
        font-family: "YouYuan";
        letter-spacing: 4px;
        margin-left: 10px;
      }
      .report-handle {
        height: 120px;
        .switch {
          margin-left: 10px;
          margin-top: 40px;
          span {
            margin: 0 10px;
          }
        }
      }
    }
  }

  .error-container {
    background: #fff;
    margin: 40px;
    width: 400px;
    box-shadow: 0px 0px 11px 0px rgb(0 0 0 / 25%);
    .error-title {
      height: 10px;
      line-height: 30px;
      font-size: 20px;
      font-family: "YouYuan";
      text-align: center;
    }
    .pie-container {
      margin: auto;
    }
  }
}
</style>