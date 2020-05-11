<template>
    <div>
        <ul>
            <router-link to="/film" tag="li" activeClass="myactive">
                <i class="iconfont icon-dianying"></i>
                <span>电影</span>
            </router-link>
            <router-link to="/cinema" tag="li" activeClass="myactive">
                <i class="iconfont icon-yingyuan"></i>
                <span>影院</span>
            </router-link>
            <router-link to="/zixun" tag="li" activeClass="myactive">
                <i class="iconfont icon-xiaoxizhongxinsvg"></i>
                <span>资讯</span>
            </router-link>
            <router-link to="/center" tag="li" activeClass="myactive">
                <i class="iconfont icon-shouye"></i>
                <span>我的</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
ul{
    position: fixed;
    bottom:0px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    height:40px;
    background: #fff;
    justify-content: space-around;
    width:100%;
    padding:8px 0px;
    z-index:99;
    li{
        list-style: none;
        font-size: 14px;
        display:flex;
        display:-webkit-flex;
        flex-direction:column;
        align-items:center;
        i{
            font-size:20px;
            color:#797d82;
        }
        span{
            color:#797d82;
        }
        &.myactive i,&.myactive span{color:#db0000;}
    }
}
</style>
