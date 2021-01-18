<template>
  <div class="container">
    <nav class="border-card">
      <nuxt-link 
        class="nav-tab-item nav-tab-item-img" 
        :to="{name:'home/home'}"
        @click.native="changeTab('home')"
        exact
      >
      <img class="nav-tab-img" src="/home/nav-logo.png" />
      </nuxt-link>
      <nuxt-link 
        class="nav-tab-item" 
        :class="{ active: activeTab==='home' }"
        :to="{name:'home/home'}"
        @click.native="changeTab('home')"
        exact
      >
      首页
      </nuxt-link>
      <nuxt-link 
        class="nav-tab-item" 
        :class="{ active: activeTab==='grade' }"
        :to="{name:'grade/home'}"
        @click.native="changeTab('grade')"
        exact
      >
      绩效管理
      </nuxt-link>
      <nuxt-link 
        class="nav-tab-item" 
        :class="{ active: activeTab==='people' }"
        :to="{name:'people/home'}"
        @click.native="changeTab('people')"
        exact
      >
      人才发展
      </nuxt-link>
      <nuxt-link 
        class="nav-tab-item" 
        :class="{ active: activeTab==='question' }"
        :to="{name:'question/home'}"
        @click.native="changeTab('question')"
        exact
      >
      问卷调查
      </nuxt-link>
      <div class="nav-right float-right">
        <div class="input-warp">
          <input class="nav-search-input" type="search" placeholder="请输入搜索内容">
          <i class="iconfont icon-search"></i>
        </div>
        <el-dropdown>
          <span class="el-dropdown-link">
            运营中心<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>帮助中心</el-dropdown-item>
            <el-dropdown-item>意见反馈</el-dropdown-item>
            <el-dropdown-item>联系我们</el-dropdown-item>
            <el-dropdown-item>发版日志</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <template v-if="user">
          <div class="avatar-warp">
            <img class="avatar-img" :src="circleUrl">
          </div>
        </template>
        <template v-else>
            <nuxt-link class="nav-link" to="/login">&nbsp;登录</nuxt-link>
            <nuxt-link class="nav-link" to="/register">&nbsp;注册</nuxt-link>
        </template>
      </div>
      
    </nav>
    <turn></turn>
    <nuxt-child />
  </div>
</template>

<script>
import turn from '~/components/turn.vue'
import {mapState} from 'vuex'
export default {
  created () { 
  },
  data(){
    return{
      activeTab:'home',
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    }
  },
  computed:{
    ...mapState(['user'])
  },
  methods:{
    changeTab: function(tabName){
      this.activeTab = tabName
    }
  },
  components:{
    turn
  }
}
</script>

<style scoped>
.container {
  margin: 0;
  min-height: 100vh;
  min-width: 100vw;
  display: block;
}
.border-card{
  background-color:#409EFF;
  height:50px;
  overflow:hidden;
}
.nav-tab-item{
  float:left;
  display:inline-block;
  color:white;
  background-color:#409EFF;
  font-weight:300;
  font-size:14px;
  padding:0 19px;
  height:100%;
  width:auto;
  text-align:center;
  vertical-align:middle;
  line-height:50px;
  text-decoration:none;
}
.nav-tab-item-img{
  display:flex;
  justify-content:center;
  align-items:center;
  margin-left:20px;
  width:189px;
}
.nav-tab-img{
  width:189px;
  height:18px;
}
.nav-tab-item.active{
  background-color:#0A75E5;
  color:white;
  font-weight:600;
}
.nav-search-input{
  width:180px;
  height:30px;
  line-height:30px;
  padding-left:30px;
  padding-right:30px;
  margin-top:10px;
  color:#fff;
  opacity:1;
  border-radius:2px;
  border: 1px solid rgba(255,255,255,0.5);
  border-left:none;
  border-right:none;
  background-color:transparent;
}
.float-left{
  float:left;
}
.float-right{
  float:right;
}
.nav-right{
  display:block;
  margin-right:30px;
}
.el-dropdown .el-dropdown-link:focus {
  outline: 0;
}
.input-warp{
  position:relative;
  display:inline-block;
  width:190px;
  height:100%;
  margin-right:15px;
}
input:-ms-input-placeholder { /* Internet Explorer 10+ */
  color:rgba(255,255,255,0.5);
  font-size: 14px;
} 
input::-webkit-input-placeholder { /* WebKit browsers */
  color:rgba(255,255,255,0.5);
  font-size: 14px;
}

input::-moz-placeholder { /* Mozilla Firefox 19+ */
  color:rgba(255,255,255,0.5);
  font-size: 14px;
}
input:focus{
  outline:none;
  border-top:#fff solid 1px;
  border-bottom:#fff solid 1px;
}
.icon-search{
  position:absolute;
  right:20px;
  top:16px;
  color:rgba(255,255,255,0.5);
  cursor:point;
}

@font-face {
  font-family: "icomoon";
  src: url('/fonts/icomoon.eot?7kkyc2');
  src: url('/fonts/icomoon.eot?7kkyc2#iefix') format('embedded-opentype'),
      url('/fonts/icomoon.ttf?7kkyc2') format('truetype'),
      url('/fonts/icomoon.woff?7kkyc2') format('woff'),
      url('/fonts/icomoon.svg?7kkyc2#icomoon') format('svg');
  font-style: normal;
}
.iconfont {
    font-family: "icomoon";
}
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.avatar-warp{
  display:inline-block;
  border-radius:50%;
  vertical-align:middle;
  margin-left:15px;
}
.avatar-img{
  width:32px;
  height:32px;
}
.nav-link{
  text-decoration:none;
  color:#fff;
  font-size:14px;
  margin-left:15px;
}
.nav-link:nth-child(4){
  margin-right:15px;
}
</style>
