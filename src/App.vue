<template>
  <div>
    <!-- <headernav :hTitle="hTitle"></headernav> -->
    <tabbar v-if="hideTabbar"></tabbar>
    <router-view/>
  </div>
</template>

<script>
import 'amfe-flexible'
// import headernav from '@/components/header'
import tabbar from '@/components/tabBar'
export default {
  data(){
    return{

    }
  },
  computed: {
    // hTitle(){
    //   return this.$store.state.headerTitle
    // },
    hideTabbar(){
      return this.$store.state.hideTabbar
    }
  },
  components: {
    tabbar,
    // headernav
  }
}
</script>

<style lang="scss">
*{padding:0;margin:0;}
body{background:#f6f6f6;}
</style>
