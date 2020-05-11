<template>
    <div class="star-vote" style="width: 70px;">
        <i :style="starStyle"></i>
    </div>
</template>

<script>
export default {
    props: {
        score: {
            type:Number
        }
    },
    computed: {
        starStyle(){
            var s = this.score/5*10
            var style = `width:${s}%`
            return style
        }
    },
}
</script>

<style lang="scss" scoped>
    .star-vote{
        position: relative;
        height: 14px;/*no*/
        overflow: hidden;
        background: url('../assets/images/starky.png') repeat-x 0;
        font-size: 0px;
        vertical-align: middle;
        margin:5px 0;
        i {
            height: 14px;
            background: url('../assets/images/starsy.png') repeat-x 0;
            display:inline-block;
        }
    }
</style>
