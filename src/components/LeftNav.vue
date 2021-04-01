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
                <i class="el-icon-location"></i>
                <span>折线图监控</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="1-1" @click="goto('/dashboard/humidityBoard')">湿度</el-menu-item>
                <el-menu-item index="1-2">气温</el-menu-item>
            </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item>

        <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
        
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
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
    width: 10%;
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