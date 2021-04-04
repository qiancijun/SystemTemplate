<template>
<!-- 
        @open="handleOpen"
        @close="handleClose" -->
<div class="leftnav-container">
    <el-menu
        class="side-menu"
        background-color="rgb(45,47,51)"
        text-color="#fff"
        active-text-color="#ffd04b">

        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-data-analysis"></i>
                <span>折线图监控</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="1-1" @click="goto('/dashboard/humidityBoard')">湿度</el-menu-item>
                <el-menu-item index="1-2" @click="goto('/dashboard/temperatureBoard')">温度</el-menu-item>
                <el-menu-item index="1-3" @click="goto('/dashboard/vocBoard')">voc(有害气体含量)</el-menu-item>
            </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="2" @click="goto('/dashboard/manageBoard')">
            <i class="el-icon-menu"></i>
            <span slot="title">控制面板</span>
        </el-menu-item>
        
        <el-menu-item index="3" @click="gotoNoHistory('/home')">
            <i class="el-icon-switch-button"></i>
            <span slot="title">退出</span>
        </el-menu-item>
    </el-menu>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        goto: function(path) {
            this.$router.push(path);
        },
        gotoNoHistory: function(path) {
            this.$router.replace(path);
        }
    },
    created() {

    }
}
</script>

<style lang="less" scoped>
.leftnav-container {
    width: 200px;
    height: 100%;
    background-color: rgb(45,47,51);
    float: left;
    .side-menu {
        display: block !important;
        height: 100%;
        width: 100%;
        border-right: 0px !important;
        overflow: hidden;
    }
}
</style>