<template>
    <div 
        class="carditem-warp"
        :class="{active: activeitem}" 
        @mouseenter="enteritem"
        @mouseleave="leaveitem"
    >
        <div class="carditem-top clearfix">
            <div class="carditem-left f-left">
                <img style="width:20px; height:20px; vertical-align:middle;" :src="cardinfo.iconUrl" >
                <span>{{cardinfo.title}}</span>
            </div>
            <div class="carditem-right f-right">
                <span>></span>
            </div>
        </div>
        <div class="carditem-bottom" v-if="cardinfo.spans.length">
            <span v-for="(v,i) in cardinfo.spans" :key="i">
                {{v}}
            </span>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default{
    props:['cardinfo'],
    data(){
        return {activeitem:false}
    },
    methods:{
      ...mapMutations(['openserverwindow','closeserverwindow']),
      enteritem(){
          this.openserverwindow(this.cardinfo.windowtabs)
          this.activeitem = true
      },
      leaveitem(){
          this.closeserverwindow()
          this.activeitem = false
      }
    }
}
</script>
<style scoped>
.carditem-warp{
    font-size:12px;
    border-bottom:1px solid rgb(233,233,233);
}
.active{
    border-left:1px solid #409EFF;
    border-top:1px solid #409EFF;
    border-bottom:1px solid #409EFF;
}
.f-left{
    float:left;
}
.f-right{
    float:right;
}
.carditem-top{
    padding: 10px 10px;
}
.carditem-bottom{
    padding:8px 27px 18px 27px;
}
.carditem-left span{
    vertical-align:middle;
}
.carditem-bottom span{
    margin:3px 5px;
}
.clearfix:before,
.clearfix:after {
display: table;
content: "";
}
.clearfix:after {
clear: both
}
</style>