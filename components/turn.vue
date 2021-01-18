<template>
<div class="turn-warp">
    <div class="turn-inner">
        <img class="turn-img" v-for="(v,i) in turnImgs" :key="i" :src="v" v-show="i==n" />
        <div class="turn-circle">
            <ul class="turn-circle-ul">
                <li v-for="(v,i) in turnImgs" :key="'c'+i" :class="i==n?'selected':''"></li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
export default{
    name:'Turn',
    data(){
        return{
            turnImgs:[
                '/turn/turn1.png',
                '/turn/turn2.png'
            ],
            n:1
        }
    },
    methods:{
        tim:function(){
            setInterval(this.play,10000)
        },
        play:function(){
            this.n++;
            if(this.n==this.turnImgs.length){
                this.n = 0;
            }
        }
    },
    mounted:function(){
        this.tim()
    }
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
ul{
    list-style-type:none;
}
.turn-warp{
    width:100%;
    margin:0;
    padding:0;
}
.turn-img{
    width:100%;
    height:120px;
}
.turn-inner{
    width:100%;
    margin:0;
    padding:0;
    position:relative;
}
.turn-circle{
    display:block;
    width:100%;
    position:absolute;
    bottom:5px;
    left:0;
}
.turn-circle ul{
    width:100%;
    list-style:none;
    display:flex;
    justify-content:center;
    align-items:center;
}
.turn-circle li{
    width:8px;
    height:8px;
    background:rgba(255,255,255,.3);
    border-radius:50%;
    padding:5px;
    margin:2px;
}
.turn-circle ul li.selected{
    background-color:rgba(255,255,255,.8);
}
</style>