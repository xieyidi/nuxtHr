<template>
    <div class="card-warp">
        <div slot="header" class="clearfix header-style">
            <span>
                <i 
                    class="el-icon-minus" 
                    style="transform:rotate(90deg) scaleY(2.0);color:#409EFF"
                ></i>
                任务中心
            </span>
            <el-button style="float: right; padding: 3px 0" type="text">更多 ></el-button>
        </div>
        <div class="linktab-warp">
            <div v-for="(o,i) in linktab" :key="o.text+i" class="text item">
                <img 
                    class="f-left"
                    style="width: 32px; height: 32px; margin-top: 20px; margin-left: 30px;margin-right:15px;" 
                    :src="o.linkicon" 
                >
                <nuxt-link :to="o.path" class="f-left tab-a">{{ o.text }}</nuxt-link>
                <span class="f-left">0</span>
                <div v-if="i<3" class="line f-right"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            linktab:[
                {
                    text:'我的待办',
                    path:'/',
                    linkicon:'/home/taskcenter-todo.png'
                },
                {
                    text:'我的待阅',
                    path:'/',
                    linkicon:'/home/taskcenter-toread.png'
                },
                {
                    text:'在途申请',
                    path:'/',
                    linkicon:'/home/taskcenter-apply.png'
                },
                {
                    text:'我的已办',
                    path:'/',
                    linkicon:'/home/taskcenter-done.png'
                }
            ]
        }
    }
}
</script>
<style scoped>
.line{
    display:block;
    height:20px;
    background-color:#ccc;
    width:1px;
    margin-top:20px;
}
.tab-a{
    text-decoration:none;
}
  .f-left{
      float:left;
  }
  .f-right{
      float:right;
  }
  .linktab-warp{
      display:flex;
      justify-content:center;
      align-items:center;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
    margin-top:18px;
    flex:1;
    min-height:64px;
    text-align:center;
    vertical-align:center;
    line-height:64px;
  }
  .item span{
      padding-left:15px;
      padding-right:15px;
  }
  .header-style {
      background-color:rgb(244,244,244);
      padding:10px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>