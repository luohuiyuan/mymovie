<template>
    <div class="city-main">
        <header>
            <div class="back"><i class="iconfont icon-ic_close" @click="$router.go(-1)"></i></div>
            <span>城市列表</span>
            <div class="search" @click="$router.push('/search')"><i class="iconfont icon-search"></i></div>
        </header>
        <mt-index-list>
            <mt-index-section :index="data.index" v-for="data in cityList" :key="data.index">
                <div v-for="city in data.list" :key="city.cityId" @click="handleClick(city.cityId,city.name)">
                    <mt-cell :title="city.name"></mt-cell>
                </div>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>

<script>
export default {
    data(){
        return {
            cityList:[]
        }
    },
    beforeCreate() {
        this.$store.commit('HideTabbar',false)
    },
    created() {
        this.$axios({
            url:'https://m.maizuo.com/gateway?k=9890069',
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1585989901390842024656","bc":"440100"}',
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then(res=>{
            console.log(res.data.data)
            this.cityList=this.handleCity(res.data.data.cities)
        })
    },
    methods: {
        handleCity(datalist){
            console.log(datalist)
            var letterArr = []
            for(var i =65;i<91;i++){
                letterArr.push(String.fromCharCode(i))
            }
            var newList = []
            for(var j=0;j<letterArr.length;j++){
                var arr=datalist.filter(item=>item.pinyin.substring(0,1)===letterArr[j].toLowerCase())
                console.log(arr)
                if(arr.length>0){
                    newList.push({
                        index:letterArr[j],
                        list:arr
                    })
                }
            }
            return newList
        },
        handleClick(id,name){
            console.log(id)
            localStorage.setItem('city',JSON.stringify({id:id,name:name}))
            this.$router.push(`/cinema`)
        }
    },
     beforeDestroy() {
        this.$store.commit('ShowTabbar',true)
    },
}
</script>

<style lang="scss" scoped>
    .city-main{
        background:#fff;
        header{
            background:linear-gradient(to right, #ed3e69, #ee3834);
            height:48px;
            line-height:48px;
            color:#fff;
            text-align:center;
            font-size:18px;
            display:flex;
            align-items: center;
            justify-content: space-between;
            padding:0 5px;
            border-bottom:1px solid #f2f2f2;
            .back,.search{width:10%}
            .back i,.search i{font-size:20px;color: #FFF;}
            .back i{font-size:30px;position:relative;top:3px;}
            span{font-size:18px;letter-spacing:1px;color: #fff;}
        }
        /deep/.mint-indexlist-content{
            .mint-indexsection-index{color: #797d82;font-size:14px;padding: 0 0 0 15px;height: 30px;line-height: 30px;}
            .mint-cell-text{font-size:14px;padding-left:10px;}
            .mint-cell-wrapper{border-bottom:1px solid #f6f6f6;}
        }
        /deep/.mint-indexlist-nav{border-left:none;}
    }
</style>