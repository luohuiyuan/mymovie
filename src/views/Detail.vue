<template>
    <div>
       <headernav :hTitle="hTitle"></headernav>
       <div class="movie-info-top">
           <img v-if="movieInfo.images" :src="getmovieImg(movieInfo.images.small)" class="movie-img">
           <div class="movie-desc">
               <div class="movie-desc-name">{{movieInfo.title}}</div>
           </div>
       </div>
    </div>
</template>

<script>
import headernav from '@/components/header'
export default {
    beforeCreate() {
        this.$store.commit('HideTabbar',false)
        this.$store.commit('backStatus',true)
    },
    components: {
        headernav
    },
    data(){
        return {
            movieId:this.$route.params.id,
            movieInfo:''
        }
    },
    created() {
        console.log('先执行')
        this.$store.commit('changeTitle','电影详情')
        this.$axios.get(`/movie/subject/${this.movieId}?apikey=0df993c66c0c636e29ecbb5344252a4a`).then(res=>{
            console.log(res.data)
            this.movieInfo=res.data
        })
    },
    methods: {
        getmovieImg(url) {
           console.log(url)
           if(url!=undefined){
               let u =url.substring(7);
               return 'https://images.weserv.nl/?url=' + u;
           }
       },
    },
    computed: {
        hTitle(){
            return this.$store.state.headerTitle
        }
    },
    beforeDestroy() {
        this.$store.commit('ShowTabbar',true)
        this.$store.commit('backStatus',false)
    },
}
</script>

<style lang="scss" scoped>
    .movie-info-top{
        display:flex;
        display:-webkit-flex;
        justify-content: space-between;
        background:#f6f6f6;
        padding:15px;
        .movie-img{
            width:29%;
            height:130px;
        }
        .movie-desc{
            width:68%;
            .movie-desc-name{font-size:16px;}
        }
    }
</style>