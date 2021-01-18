<template>
    <div class="home-warp">
        <div class="home-warp-inner">
            <div class="top-warp">
                <el-row :gutter="12" class="row clearfix">
                    <el-col :span="7" class="span-7">
                        <el-card shadow="always">
                            <namecard></namecard>
                        </el-card>
                    </el-col>
                    <el-col :span="17" class="span-17">
                        <el-card shadow="always" class="full-card">
                        <splitcard></splitcard>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
            <div class="middle-warp">
                <el-row :gutter="12" class="row clearfix">
                    <el-col :span="7" class="span-7">
                        <el-card shadow="always" class="full-card window-visible">
                            <servercentercard></servercentercard>
                        </el-card>
                    </el-col>
                    <el-col :span="17" class="span-17">
                        <el-row>
                            <el-card shadow="always" class="full-card">
                                <generalcard :cardtabs="generalsearchtabs" cardtitle="常用查询"></generalcard>
                            </el-card>
                        </el-row>
                        <el-row>
                            <el-card shadow="always" class="full-card margin-top-card">
                                <generalcard :cardtabs="generalapplytabs" cardtitle="常用申请"></generalcard>
                            </el-card>
                        </el-row>
                    </el-col>
                </el-row>
            </div>
            <div class="bottom-warp">
                <el-row :gutter="12" class="row clearfix">
                    <el-col :span="12" class="span-12">
                        <el-card shadow="always" class="full-card margin-top-card">
                            <traininfo cardtitle="培训信息"></traininfo>
                        </el-card>
                    </el-col>
                    <el-col :span="12" class="span-12">
                        <el-card shadow="always" class="full-card margin-top-card">
                            <noticeinfo></noticeinfo>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import namecard from '~/components/card/namecard.vue'
import splitcard from '~/components/card/splitcard.vue'
import servercentercard from '~/components/card/servercentercard.vue'
import generalcard from '~/components/card/generalcard.vue'
import traininfo from '~/components/card/traininfo.vue'
export default{
    data(){
        return{}
    },
    components:{
        namecard,
        splitcard,
        generalcard,
        servercentercard,
        traininfo
    },
    computed:{
        ...mapState(['generalsearchtabs','generalapplytabs'])
    }
}
</script>
<style scoped>
.float-left{
    float:left;
}
.home-warp{
    width:100%;
}
.home-warp-inner{
    margin:20px auto;
    padding:0;
    width:1340px;
}
.top-warp{
    margin-top:15px;
    margin-bottom:20px;
}
.margin-top-card{
    margin-top:14px;
}
::v-deep .el-card.full-card .el-card__body{
    padding:0;
}
::v-deep .el-card.full-card.window-visible{
    padding:0;
    overflow:visible;
}
.row{
    min-width:1348px;
}
.clearfix:before,.clear:after{
    display:table;
    content:"";
}
.clearfix:after{
    clear:both;
}
.span-7{
    width:379px;
}
.span-17{
    width:940px;
}
.span-12{
    width:660px;
}
.span-7, .span-17, .span-12{
    float:left;
}
</style>