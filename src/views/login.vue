<template>
<div class="login-container">

    <div class="desc-container">
        <div class="desc-title">
            {{dTitle}}
        </div>
        <div class="desc-content">
            {{dContent}}
        </div>
    </div>

    <div class="login">
        <div class="container">
            <div class="title">
                登&ensp;录
            </div>
            <div class="u">
                <input type="text" class="uname" v-model="userName" placeholder="请输入用户名" autocomplete="off"/>
            </div>
            <div class="p">
                <input type="password" class="pwd" v-model="password" placeholder="请输入密码" />
            </div>
            <div class="l" @click="login" >
                <button @keyup.enter="login">进入</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            dTitle: "Title",
            dContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, omnis incidunt rem cumque consequatur id qui minima perferendis quasi aspernatur dolorem dolores beatae ex. Expedita voluptate praesentium ducimus maiores eveniet!",
            userName: "",
            password: "",
        }
    },
    methods: {
        login: function() {
            if (this.userName == "admin" && this.password == "admin") {
                sessionStorage.setItem("Authorization", true);
                this.$router.replace('/dashboard');
            } else if (this.userName != "admin") {
                this.$message({
                    type: 'error',
                    message: "用户名错误",
                });
            } else {
                this.$message({
                    type: 'error',
                    message: "密码错误",
                })
            }
        }
    },
    created() {
        document.onkeydown = () => {
            // console.log(e);
            let key = window.event.keyCode;
            if (key == 13) {
                this.login();
            }
        }
    }
}
</script>

<style lang="less" scoped>
.login-container {
    // background-color: skyblue;
    width: 100%;
    height: calc(100% - 60px);
    background: url("../assets/bk2.png") no-repeat;
    background-attachment: fixed;
    background-size: cover;
    .desc-container {
        width: 30%;
        position: absolute;
        top: 25%;
        left: 5%;
        .desc-title {
            margin-bottom: 30px;
            font-size: 50px;
            color: #FFFFFF;
        }
        .desc-content {
            line-height: 30px;
            font-size: 20px;
            color: #FFFFFF;
        }
    }
    
    .login {
        position: absolute;
        background-color: rgba(255, 255, 255, .7);
        top: 25%;
        left: 62%;
        right: 12%;
        bottom: 25%;
        border-radius: 30px;
        background-size: 100% 100%;
        .title,
        .u,
        .p,
        .l {
            position: absolute;
            width: 100%;
            .uname,
            .pwd {
                background-color: #EEEEEE;
            }
        }
    }
}




input {
    height: 60px;
    border: 0px;
    border-radius: 10px;
    width: 77%;
    padding-left: 20px;
    box-sizing: border-box;
}


button {
    height: 50px;
    background-color: #467FE6;
    border: 0px;
    border-radius: 10px;
    width: 77%;
    color: #FFFFFF;
    font-size: 16px;
}

.title {
    top: 0%;
    bottom: 100%;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    padding-top: 40px;
    box-sizing: border-box;
}

.u {
    top: 30%;
    text-align: center;
}

.p {
    top: 50%;
    text-align: center;
}

.l {
    top: 75%;
    text-align: center;
}
</style>