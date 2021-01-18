<template>
    <div class="card-warp">
        <div slot="header" class="clearfix header-style">
            <span>
                <i 
                    class="el-icon-minus" 
                    style="transform:rotate(90deg) scaleY(2.0);color:#409EFF"
                ></i>
                员工服务中心
            </span>
        </div>
        <carditem v-for="(info,i) in carditeminfo" :key="i" :cardinfo="info"></carditem>
        <serverwindow></serverwindow>
    </div>
</template>
<script>
import carditem from '~/components/part/carditem.vue'
export default{
    data(){
        return{
            carditeminfo:[
                {
                    iconUrl:"/carditem/part1.png",
                    title:"五险二金",
                    spans:['养老保险','医疗保险','补充保险','生育保险','失业保险','工伤保险','公积金','企业年金'],
                    windowtabs:{
                        policy:[],
                        guide:[],
                        questions:[]
                    }
                },
                {
                    iconUrl:"/carditem/part2.png",
                    title:"薪酬福利",
                    spans:[],
                    windowtabs:{
                        policy:[],
                        guide:[
                            {
                                iconUrl:"/carditem/part2/icon1.png",
                                title:"开具收入证明",
                                path:"/"
                            },
                            {iconUrl:"/carditem/part2/icon2.png",title:"工资卡信息维护",path:"/"},
                            {iconUrl:"/carditem/part2/icon3.png",title:"薪酬查询",path:"/"}
                        ],
                        questions:[]
                    }
                },
                {
                    iconUrl:"/carditem/part3.png",
                    title:"人才发展",
                    spans:[],
                    windowtabs:{
                        policy:[],
                        guide:[],
                        questions:[]
                    }
                },
                {
                    iconUrl:"/carditem/part4.png",
                    title:"绩效服务",
                    spans:[],
                    windowtabs:{
                        policy:[],
                        guide:[],
                        questions:[]
                    }
                },
                {
                    iconUrl:"/carditem/part5.png",
                    title:"员工关系",
                    spans:[],
                    windowtabs:{
                        policy:[],
                        guide:[],
                        questions:[]
                    }
                }
            ]
        }
    },
    components:{
        carditem
    }
}
</script>
<style scoped>
.card-warp{
    position:relative;

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
</style>