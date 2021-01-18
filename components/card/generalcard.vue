<template>
<div class="card-warp">
    <div slot="header" class="clearfix header-style">
        <span>
            <i 
                class="el-icon-minus" 
                style="transform:rotate(90deg) scaleY(2.0);color:#409EFF"
            ></i>
            {{cardtitle}}
        </span>
        <el-button style="float: right; padding: 3px 0" type="text">更多 ></el-button>
    </div>
    <div class="card-body">
        <ul class="clearfix" style="padding-left:10px">
            <li class="window-item" v-for="(v,i) in cardtabsf">
                <nuxt-link :to="v.path">
                    <img :src="v.iconUrl" style="display:block;height:32px;width:32px;margin:0 auto;">
                    <span>{{v.title}}</span>
                </nuxt-link>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
export default{
    props:['cardtabs','cardtitle'],
    data(){
        return{
            additem:{
                title:"添加查询",
                iconUrl:"/carditem/generalsearch/addicon.png",
                path:"/"
            }
        }
    },
    
    computed:{
        cardtabsf:function(){return[...this.cardtabs,this.additem]}
    }
}
</script>
<style scoped>
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
.card-body{
    padding:24px 0;
}
.card-body ul{
}
.window-item{
    width:60px;
    float:left;
    list-style:none;
    text-align:center;
}
.window-item span{
    font-size:10px;
    text-overflow : ellipsis;
}
.window-item a{
    text-decoration:none;
}
</style>