<template>
    <div class="container page">
        <div class="page-body">
            <h1 class="page-title">{{isLogin ? "登录" : "注册"}}</h1>
            <p class="son-title">
            <nuxt-link v-if="isLogin" to="/register">还没有账号？</nuxt-link>
            <nuxt-link v-else to="/login">已经拥有账号?</nuxt-link>
            </p>

            <ul class="error-messages">
                <template v-for="(messages,field) in err">
                <li v-for="(message, index) in messages" :key="message">{{field}}{{message}}</li>
                </template>
                
            </ul>

            <form @submit.prevent="onsubmit">
                <fieldset v-if="!isLogin" class="form-group">
                    <input class="form-control form-control-lg" v-model="user.name" type="text" placeholder="昵称" required>
                </fieldset>
                <fieldset class="form-group">
                    <input class="form-control form-comtrol-lg" v-model="user.email" type="email" placeholder="邮箱" required>
                </fieldset>
                <fieldset class="form-group">
                    <input class="form-control form-control-lg" v-model="user.password" type="password" placeholder="密码" required>
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right">{{isLogin ? "登录" : "注册"}}</button>
            </form>
        </div>
    </div>
</template>
<script>
import { login, register } from '@/api/users'
// (2)只在客户端加载js-cookie
const Cookie = process.client?require('js-cookie'):undefined
export default{
    name:'login',
    computed:{
        isLogin(){
            return this.$route.name === "login"
        }
    },
    data(){
        return {
            "user":{},
            err:{}
        }
    },
    methods:{
        async onsubmit(){
            try{
                console.log('000',this.user)
                const { data } = this.isLogin ? await login({
                    user:this.user
                }) : await register({
                    user:this.user
                })
                console.log('000',this.user,data)
                //（1）下面只是内存的数据，页面刷新就没了，需要持久化
                // 不能仅仅本地存储 服务端拿不到
                this.$store.commit('setUser',data.user)
                //(3)持久化,在应用程序-Cookie中可以找到不会消失的user数据
                //需要初始化容器中的数据store
                Cookie.set('user',data.user)
                this.$route.push('/')
            } catch(err){
                console.log('请求失败')
                this.err = err.response.data.errors
            }
        }
    }
}
</script>
<style scoped>
a{
    text-decoration:none;
    color:#409EFF;
}
h1{
    margin:15px auto;
}
fieldset{
    border:none;
    padding-left:0;
}
.container{
    height:100%;
    min-height:600px;
    text-align:center;
}
.page-body{
    width:654px;
    min-height:314px;
    max-height:510px;
    margin:0 auto;
    height:50%;
    text-align:left;
}
.page-body a{
    margin:8px auto;
}
.form-control{
    width:100%;
    border:1px solid #ccc;
    background-color:#fff;
}
input{
    border:1px solid #409EFF;
    outline:none;
    height:28px;
    border-radius:4px;
    text-indent:6px;
}
.btn-lg{
    width:66px;
    height:36px;
    background-color:#409EFF;
    color:#fff;
    border:#409EFF;
    border-radius:6px;
}
</style>