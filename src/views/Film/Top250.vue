<template>
    <div class="top-all">
        <ul class="top-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
            <li v-for="item in topList" :key="item.id" @click="handleClick(item.id)">
                <img v-lazy="getmovieImg(item.images.small)" class="movie-img">
                <div class="movie-des">
                    <p class="movie-name textoverhide">{{item.title}}</p>
                    <p v-if="item.original_title !== item.title" class="movie-name-original textoverhide">{{item.original_title}}</p>
                    <div class="movie-type">{{changeType(item.genres)}}</div>
                    <div v-if="item.rating.stars !=='00'">
                        <movieStar :score="changeStar(item.rating.stars)"></movieStar>
                    </div>
                </div>
                <div class="movie-score">
                    <p v-if="item.rating.average !== '0'">
                        <span>{{item.rating.average}}</span>分
                    </p>
                    <p v-else>
                        暂无评分
                    </p>
                </div>
            </li>
        </ul>
        <div v-show="isShow" class="jiazai">加载中<img src="@/assets/images/jiazia.gif"></div>
    </div>
</template>

<script>
import movieStar from '@/components/star'
export default {
    components:{
        movieStar
    },
    data(){
        return {
            topList:[],
            loading:false,
            current:0,
            isShow:true,
            total:0
        }
    },
    created() {
        this.$axios.get('/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a').then(res=>{
            console.log(res.data.total)
            this.topList=res.data.subjects
            this.total =res.data.total
        })
    },
    methods: {
        getmovieImg(url) {
           if(url!=undefined){
               let u =url.substring(7);
               return 'https://images.weserv.nl/?url=' + u
           }
       },
       changeStar(star){
           return parseInt(star)
       },
       changeType(type){
           var typeStr='';
           for(var i=0;i<type.length;i++){
               typeStr+=`${type[i]},`
           }
           return typeStr.substring(0, typeStr.lastIndexOf(','))
       },
       loadMore(){
           console.log(111)
           this.loading=true
           this.current+=20
           if(this.topList.length===this.total){
               this.isShow=false;
               return;
           }
           this.$axios.get(`/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${this.current}&count=20`).then(res=>{
               this.topList=[...this.topList,...res.data.subjects]
               this.loading=false
           })
       },
       handleClick(id){
           this.$router.push({name:'movieDetail',params:{id:id}})
       }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/film.scss';
</style>