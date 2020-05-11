<template>
    <div>
        <header>
            <div class="back"><i class="iconfont icon-fanhui-da" @click="$router.go(-1)" v-show="this.$store.state.backShow"></i></div>
            <span>{{hTitle}}</span>
            <div class="search" @click="$router.push('/search')"><i class="iconfont icon-search"></i></div>
        </header>
    </div>
</template>

<script>
export default {
    props:['hTitle'],
    methods: {
        goback(){
            this.$router.go(-1)
        }
    },
}
</script>

<style lang='scss' scoped>
@import '@/assets/scss/public.scss';
header{
    background:$color_theme;
    height:48px;
    line-height:48px;
    color:#fff;
    text-align:center;
    font-size:18px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0 10px;
    .back,.search{width:10%}
    .back i{font-size:23px;}
    .search i{font-size:20px;}
    span{font-size:18px;letter-spacing:1px;}
}
</style>