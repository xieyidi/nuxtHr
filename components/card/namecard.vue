<template>
    <div class="card-warp">
        <div class="card-top">
            <div class="card-left f-left">
                <a class="img-warp">
                    <img :src="avatarUrl" />
                </a>
            </div>
            <div class="card-right f-left">
                <span>
                    谢仪頔
                </span>
                <p>小甜甜创新业务 助理咨询设计师</p>
            </div>
        </div>
        <div class="join-timer">
            <p>
                <span>
                您已和公司共同走过542天，感谢您的付出！
                </span>
            </p>
        </div>
    </div>
</template>
<script>

export default{
    name:'namecard',
    created:function(){
        console.log('namecard')
    },
    data(){
        return{
            avatarUrl:"/avatar.png"
        }
    }
}
</script>
<style scoped>
.f-left{
    float:left;
}
.card-top{
    overflow:hidden;
}
.card-left{
    width:52px;
    padding: 0 auto;
    margin-top:15px;
}
.card-right{
    width:178px;
    padding: 0 auto;
    margin-top:15px;
}
.card-right span{
    font-weight:600px;
    font-size:14px;
    line-height:30px;
}
.card-right p{
    font-weight:300px;
    font-size:12px;
    
}
.img-warp{
    width:40px;
    height:40px;
}
.img-warp img{
    width:32px;
    height:auto;
    border-radius:50%;
}
.join-timer{
    width:98%;
    background-color:#E6F2FF;
    border-radius:15px;
    margin-top:15px;
    text-align:center;
}
.join-timer p span{
    color:#0b82ff;
    font-size:12px;
    line-height:24px;
}
</style>