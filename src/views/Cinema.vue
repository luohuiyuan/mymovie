<template>
    <div style="background:#fff">
        <header>
            <div class="citycurrent" @click="$router.push('/city')">{{cityName}}<i class="iconfont icon-xiala1"></i></div>
            <span>影院</span>
            <div class="search" @click="$router.push('/search')"><i class="iconfont icon-search"></i></div>
        </header>  
        <ul v-if="cinemaList.length !==0">
            <li v-for="item in cinemaList" :key="item.cinemaId">
                <div class="cinema-top">
                    <div class="cinema-name">{{item.name}}</div>
                    <div class="cinema-price">￥<span>{{changePrice(item.lowPrice)}}</span>起</div>
                </div>
                <div class="cinema-top">
                    <div class="cinema-address">{{item.address}}</div>
                    <!-- <div class="cinema-phone">{{item.phone}}</div> -->
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {Indicator} from 'mint-ui'
export default {
    data(){
        return {
            cityName:'',
            cityId:'',
            cinemaList:[]
        }
    },
    created() {
        console.log(JSON.parse(localStorage.getItem('city')))
        if(localStorage.getItem('city')==null){
            this.$router.push('/city')
        }
        else{
            this.cityName=JSON.parse(localStorage.getItem('city')).name
            this.cityId=JSON.parse(localStorage.getItem('city')).id
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.$axios({
                url:`https://m.maizuo.com/gateway?cityId=${this.cityId}&ticketFlag=1&k=1964416`,
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15889861173521873183720","bc":"442000"}',
                    'X-Host': 'mall.film-ticket.cinema.list'
                }
            }).then(res=>{
                console.log(res.data)
                this.cinemaList=res.data.data.cinemas
                console.log(this.cinemaList)
                Indicator.close()
            })
        }
    },
    methods: {
        changePrice(price){
            return price.toString().substring(0,2)
        }
    },
}
</script>

<style lang="scss" scoped>
    header{
        display:flex;
        display:-webkit-flex;
        align-items:center;
        justify-content: space-between;
        padding: 0 15px;
        height:48px;
        font-size:17px;
        border-bottom:1px solid #f6f6f6;
        .citycurrent{
            font-size:16px;
            color: #606c80;
            i{font-size:20px;}
        }
        .search i{
            font-size:19px;
            color: #606c80;
        }
    }
    ul{
        padding-bottom:55px;
        li{
            padding:15px;
            border-bottom:1px solid #f6f6f6;
            font-size:0px;
            .cinema-top{
                display:flex;
                display:-webkit-flex;
                align-items:center;
                justify-content: space-between;
                .cinema-name{color: #191a1b;font-size: 15px;}
                .cinema-price{
                    color: #ff5f16;
                    font-size: 11px;
                    span{font-size:14px;margin:0 2px;}
                }
                .cinema-address{
                    color: #797d82;
                    font-size: 12px;
                    margin-top: 5px;
                    width:75%;
                    overflow:hidden;
                    white-space:nowrap;
                    text-overflow:ellipsis;
                }
                .cinema-phone{
                    color: #797d82;
                    font-size: 12px;
                }
            }
        }
    }
</style>