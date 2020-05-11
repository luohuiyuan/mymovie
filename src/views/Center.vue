<template>
    <div class="center-main">
        <div class="center-bg">
            <div class="center-login">
                <img src="@/assets/images/selfuser.png">
                <span>立即登录</span>
            </div>
        </div>
        <div class="center-section">
            <div>
                <img src="@/assets/images/movie.png">
                <span>电影票</span>
            </div>
            <div>
                <img src="@/assets/images/yhq.png">
                <span>优惠券</span>
            </div>
            <div>
                <img src="@/assets/images/card.png">
                <span>影院卡</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .center-main{
        .center-bg{
            height:185px;
            width:100%;
            background: linear-gradient(to right, #ed3e69, #ee3834);
            padding:40px 25px;
            box-sizing:border-box;
            .center-login{
                display:flex;
                display:-webkit-flex;
                align-items: center;
                img{width:60px;}
                span{font-size:18px;color:#fff;margin-left:10px;}
            }
        }
        .center-section{
            display:flex;
            display:-webkit-flex;
            align-items: center;
            justify-content: space-around;
            background:#fff;
            width:90%;
            padding:25px 0px;
            margin:-50px auto 0px;
            border-radius:15px;
            div{
                display:flex;
                display:-webkit-flex;
                align-items:center;
                flex-direction: column;
                img{width:25px;}
                span{font-size:15px;margin-top:5px;}
            }
        }
    }
</style>