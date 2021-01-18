<template>
    <div 
        v-if="showserverwindow" 
        class="window-warp"
        @mouseenter="enterwindow"
        @mouseleave="leavewindow"
    >
        <div class="window-part left-part">
            <div class="part-title left-title clearfix">
                <span>
                    <i 
                        class="el-icon-minus" 
                        style="transform:rotate(90deg) scaleY(2.0);color:#409EFF"
                    ></i>
                    政策
                </span>
            </div>
            <div class="left-body" v-if="windowtabs.policy.length">
                <ul class="window-item-warp clearfix" style="padding-left:10px">
                    <li class="window-item" v-for="(v,i) in windowtabs.policy">
                        <nuxt-link :to="v.path">
                            <img :src="v.iconUrl" style="display:block;height:32px;width:32px;">
                            <span>{{v.title}}</span>
                        </nuxt-link>
                    </li>
                </ul>
                
            </div>
        </div>
        <div class="window-part middle-part">
            <div class="part-title middle-title clearfix">
                <span>
                    <i 
                        class="el-icon-minus" 
                        style="transform:rotate(90deg) scaleY(2.0);color:#409EFF"
                    ></i>
                    办事指南
                </span>
            </div>
            <div class="middle-body" v-if="windowtabs.guide.length">
                <ul class="window-item-warp clearfix" style="padding-left:10px">
                    <li class="window-item" v-for="(v,i) in windowtabs.guide">
                        <nuxt-link :to="v.path">
                            <img :src="v.iconUrl" style="display:block;height:32px;width:32px;margin:0 auto;">
                            <span>{{v.title}}</span>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="window-part right-part">
            <div class="part-title right-title clearfix">
                <span>
                    <i 
                        class="el-icon-minus" 
                        style="transform:rotate(90deg) scaleY(2.0);color:#409EFF"
                    ></i>
                    常见问题
                </span>
            </div>
            <div class="left-body" v-if="windowtabs.questions.length">
                <ul class="window-item-warp clearfix" style="padding-left:10px">
                    <li class="window-item" v-for="(v,i) in windowtabs.questions">
                        <nuxt-link :to="v.path">
                            <img :src="v.iconUrl" style="display:block;height:32px;width:32px;">
                            <span>{{v.title}}</span>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
export default{
    data(){
        return{}
    },
    computed:{
      ...mapState(['showserverwindow','windowtabs'])
    },
    methods:{
        ...mapMutations(['enterwindow','leavewindow'])
    }
}
</script>
<style scoped>
.window-warp{
    position:absolute;
    top:0;
    left:318px;
    width:795px;
    height:100%;
    z-index:1000;
    background-color:#fff;
    border:1px solid #409EFF;
    display:flex;
    justify-content:center;
    align-items:center;
}
.window-part {
    flex:1;
    height:100%;
    border-right:1px solid #ccc;
}
.window-part:n-th(3){
    border:none;
}
.part-title{
    border-bottom:1px solid #ccc;
    padding:6px 8px;
}
.clearfix:before,
.clearfix:after {
display: table;
content: "";
}
.clearfix:after {
clear: both
}
.window-item-warp{
    padding-top:14px;
}
.window-item{
    width:32%;
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