<template>
<div class="humidity-container">
    <div class="humidity-title">
        {{ humidityTitle }}
    </div>
    <div class="line-container" id="humidityBox"></div>
</div>
</template>

<script>
import { Line } from '@antv/g2plot';

export default {
    data() {
        return {
            humidityTitle: "湿度监测面板",
        }
    },
    methods: {
        getData: function() {
            let data = [];
            let time = new Date().getTime();
            console.log(data);
            console.log(time);
            for (let i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.random() + 0.2,
                });
            }
            return data;
        }
    },
    mounted() {
        const line = new Line("humidityBox", {
            data: this.getData(),
            padding: 'auto',
            xField: 'x',
            yField: 'y',
            xAxis: {
                type: 'time',
                mask: 'HH:MM:ss',
                // title: '时间',
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
                fields: ['x', 'y'],
            }
        });
        line.render();

        // setInterval(() => {
        //     const x = new Date().getTime(), // current time
        //         y = Math.random() + 0.2;
        //     const newData = line.options.data.slice(1).concat({ x, y });
        //     line.changeData(newData);
        // }, 1000);
    }
}
</script>

<style lang="less" scoped>
.humidity-container {
    height: 100%;
    margin: 10px 30px 30px 30px;
    .line-container {
        width: 40%;
        height: 400px;
    }
    .humidity-title {
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
}
</style>