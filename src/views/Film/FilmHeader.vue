<template>
    <div>
        <ul>
            <router-link to='/film/nowplaying' tag='li' active-class= "active"><a>正在热映</a></router-link>
            <router-link to='/film/comingsoon' tag='li' active-class= "active"><a>即将上映</a></router-link>
            <router-link to='/film/top250' tag='li' active-class= "active"><a>Top250</a></router-link>
        </ul>
    </div>
</template>

<script>
export default{

}
</script>

<style lang='scss' scoped>
ul{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    height:40px;
    border-bottom: 1px solid #f2f2f2;
    background: #fff;
    li{
        width:50%;
        text-align: center;
        font-size: 14px;
        list-style: none;
        a{
          font-size: 14px;
          text-decoration: none;
          color:#000;
          height:40px;
          line-height: 40px;
          box-sizing: border-box;
          display: inline-block;
          padding:0 10px;  
        }
        &.active a{border-bottom:2px solid #db0000;color:#db0000;}
    }
}
</style>
