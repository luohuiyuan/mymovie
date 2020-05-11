<template>
    <div class="movie-all">
        <ul class="movie-list">
            <li v-for="movie in movieList" :key="movie.id" @click="handleClick(movie.id)">
                <img :src="getmovieImg(movie.images.small)" class="movie-img">
                <div class="movie-des">
                    <p class="movie-name">{{movie.title}}</p>
                    <div v-if="movie.rating.stars !=='00'">
                        <movieStar :score="changeStar(movie.rating.stars)"></movieStar>
                    </div>
                    <div class='no-score' v-else>暂无评分</div>
                    <!-- <div class="movie-average">观众评分<span>{{movie.rating.average}}</span></div> -->
                    <div class="movie-actors">主演: {{movieautors(movie.casts)}}</div>
                    <div class="movie-time">时长: {{movie.durations[0]}}</div>
                </div>
                
            </li>
        </ul>
    </div>
</template>

<script>
import movieStar from '@/components/star'
import {Indicator} from 'mint-ui'
export default {
   created() {
       Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        });
       this.$axios.get('/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a').then(res => {
           console.log(res)
           this.movieList = res.data.subjects;
           console.log(this.movieList)
           Indicator.close();
       });
   },
   data() {
       return {
           movieList:[]
       }
   },
   components: {
       movieStar
   },
   computed: {
    //    changeStar(){
    //        return function (star) {//传参
    //            return parseInt(star)
    //        }
    //    }
   },
   methods: {
       changeStar(star){
           return parseInt(star)
       },
       movieautors(str){
           console.log(str)
           var actors='';
           for(var i=0;i<str.length;i++){
               actors+=`${str[i].name},`
           }
           return actors.substring(0, actors.lastIndexOf(','))
       },
       getmovieImg(url) {
           if(url!=undefined){
               let u =url.substring(7);
               return 'https://images.weserv.nl/?url=' + u
           }
       },
       handleClick(id){
           console.log(id)
        //    this.$router.push(`/detail/${id}`)
           this.$router.push({name:'movieDetail',params:{id:id}})
       }
   },
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/film.scss';
</style>
