<template>
    <div class="card-warp">
        <div slot="header" class="clearfix header-style">
            <div class="title-warp f-left" :class="{current:current==='notice'}" @click="current='notice'">
                <h3>信息公告</h3>
            </div>
            <div class="title-warp f-left" :class="{current:current==='policy'}" @click="current='policy'">
                <h3>政策文件</h3>
            </div>
            <el-button style="float: right; padding: 3px 0" type="text">更多 ></el-button>
        </div>
        <div class="card-body">
            <ul class="bl-news" style="padding-left:14px;">
                <li class="clearfix">
                    <div title="关于在线公司面向系统内公开招聘的通知" class="content-div f-left" style="width: 460px; margin-right: 10px;">
                        <span style="color: red; font-size: 12px;">
                        【置顶】
                        </span>
                        关于在线公司面向系统内公开招聘的通知
                    </div> 
                    <span>2021-01-11</span>
                </li>
                <li class="clearfix">
                    <div title="关于上海产业研究院面向系统内公开招聘纪委办公室（纪检审计部）负责人的通知" class="content-div f-left" style="width: 460px; margin-right: 10px;">
                        <span style="color: red; font-size: 12px;">
                        【置顶】
                        </span>
                        关于上海产业研究院面向系统内公开招聘纪委办公室（纪检审计部）负责人的通知
                    </div> 
                    <span>2020-12-30</span>
                </li>
                <li>
                    <div title="关于集中化人力资源管理信息系统“高层次人才库”模块运营推广的通知" class="content-div f-left" style="width: 460px; margin-right: 10px;">
                    关于集中化人力资源管理信息系统“高层次人才库”模块运营推广的通知
                    </div> 
                    <span>2020-04-07</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default{
    props:['cardtitle'],
    data(){
        return{
            current:'notice'
        }
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
.f-left{
    float:left;
}
.card-body{
    height:120px;
}
.title-warp{
    margin:0 6px;
}
.title-warp h3{
    color:#409EFF;
    font-weight:300;
    font-size:14px;
}
.current{
    position:relative;
}
.current::after{
    content:'';
    position:absolute;
    display:block;
    height:3px;
    width:62px;
    top:28px;
    left:-2px;
    background-color:#409EFF;
}
.bl-news li{
    list-style:none;
    font-size:12px;
    margin-top:6px;
}
</style>