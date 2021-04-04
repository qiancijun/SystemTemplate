<template>
<div class="voc-container">
    <div class="voc-title">
        {{ vocTitle }}
    </div>
    <div class="tool-container">
        <div class="btn" @click="begin()"><el-button type="primary" round><i class="el-icon-s-promotion"/>开始检测</el-button></div>
        <div class="btn" @click="clean()"><el-button type="info" round ><i class="el-icon-scissors"/>清空数据</el-button></div>
        <div class="btn" @click="stop()"><el-button type="danger" round ><i class="el-icon-close"/>停止检测</el-button></div>
    </div>
    <div class="graph-container">
      <div class="line-container" id="vocBox"></div>
      <div class="gauge-container" id="gaugeBox"></div>
    </div>
</div>
</template>

<script>
import { Line } from '@antv/g2plot';
import { Gauge } from '@antv/g2plot';


export default {
    data() {
        return {
            vocTitle: "voc（有害气体含量）监测面板",
            data: [],
            line: null,
            readData: null,
            gauge: null,
            currVal: 0,
            isOpen: false,
            curr: 0,
        }
    },
    methods: {
        getData: function() {
            let data = [];
            let time = new Date().getTime();
            for (let i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: 0
                });
            }
            this.data = data;
            return data;
        },
        begin: function() {
            let _line = this.line;
            let _gauge = this.gauge;
            let _this = this;
            // let cnt = 0; // 计数器
            this.readData = setInterval(() => {
                const x = new Date().getTime(), // current time
                    y = Math.random() * 100;
                let newData;
                newData = _line.options.data.slice(1).concat({ x, y });
                _line.changeData(newData);
                _this.curr = y;
                _gauge.changeData(y / 100);
            }, 1000);
        },
        stop: function() {
            clearInterval(this.readData);
        },
        clean: function() {
            this.line.options.data = this.getData();
            this.line.render();
        },
        receiveData: function() {
            
        }
    },
    mounted() {
        this.line = new Line("vocBox", {
            data: this.getData(),
            padding: 'auto',
            xField: 'x',
            yField: 'y',
            yAxis: {
                title: {
                    text: '有害气体含量',
                    style: {
                        fontSize: 20,
                        fontWeight: "bold",
                    }
                }
            },
            xAxis: {
                type: 'time',
                mask: 'HH:MM:ss',
                title: {
                    text: '时刻',
                    style: {
                        fontSize: 20,
                        fontWeight: "bold",
                    }
                }
            },
            autoFit: true,
            smooth: true,
            point: {
                color: "red",
            },
            tooltip: {
                enterable: true,
                formatter: (datum) => {
                    return {name: "温度", value: datum.y + '℃'};
                }
            },
            animation: 'wave-in',
        });
        this.line.render();


        this.gauge = new Gauge('gaugeBox', {
            animation: true,
            percent: 0,
            range: {
                ticks: [0, 1 / 3, 2 / 3, 1],
                color: ['#F4664A', '#FAAD14', '#30BF78'],
            },
            axis: {
                label: {
                formatter: (text, item, index) => {
                    text = index;
                    // console.log(index);
                    return item.value * 100;
                }
                }
            },
            indicator: {
                pointer: {
                style: {
                    stroke: '#D0D0D0',
                },
                },
                pin: {
                style: {
                    stroke: '#D0D0D0',
                },
                },
            },
            statistic: {
                content: {
                style: {
                    fontSize: '36px',
                    lineHeight: '36px',
                },
                formatter: () => {
                    return parseInt(this.curr) + '℃';
                }
                },
            },
        });
        this.gauge.render();
    }
}
</script>

<style lang="less" scoped>
.voc-container {
    height: 100%;
    margin: 10px 30px 30px 30px;
    overflow: hidden;
    .graph-container {
      display: flex;
      width: 98%;
      height: 60%;
      background: white;
      margin: 0 auto;
      box-shadow: 0px 0px 11px 0px rgb(0 0 0 / 25%);
      .line-container {
          width: 40%;
          margin: 0 auto;
      }
      .gauge-container {
        width: 30%;
        margin: 0 auto;
      }
    }
    .line-container {
        width: 90%;
        // height: 100%;
        margin: 0 auto;
    }
    .voc-title {
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
    .tool-container {
        display: flex;
        width: 98%;
        height: 100px;
        margin: 20px auto;
        background-color: #fff;
        box-shadow: 0px 0px 11px 0px rgb(0 0 0 / 25%);
        // text-align: center;
        .btn {
            margin: auto;
        }
    }
}
</style>