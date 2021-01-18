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
            
        </div>
    </div>
</template>
<script>
export default{
    props:['cardtitle'],
    data(){
        return{}
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
    height:126px;
}
</style>