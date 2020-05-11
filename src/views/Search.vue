<template>
    <div>
        search
    </div>
</template>

<script>
export default {
    created() {
        this.$axios.get('https://douban.uieee.com/v2/movie/search?q=后天').then(res=>{
            console.log(res)
        })
    },
}
</script>

<style lang="scss" scoped>
    
</style>