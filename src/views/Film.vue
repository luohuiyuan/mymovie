<template>
    <div>
        <headernav :hTitle="hTitle"></headernav>
        <filmheader></filmheader>
        <router-view></router-view>
    </div>
</template>

<script>
import headernav from '@/components/header'
import filmheader from '@/views/Film/FilmHeader'
export default {
  created() {
    this.$store.commit('changeTitle','我的电影')
  },
  components: {
    filmheader,
    headernav
  },
  computed: {
    hTitle(){
      return this.$store.state.headerTitle
    }
  },
}
</script>

<style scoped>
    html,body{background:#f4f4f4;}
</style>
