<template>
    <div class="testview">

        <div id="responsive"> 
            <img v-for="(itemx, index) in this.$parent.slideItem" :key="itemx._id"  :src="itemx.picture" :data-caption="['#caption_' + index]" />
        </div>
        
        <span class="orbit-caption" :id="['caption_' + index]" v-for="(itemcaption, index) in this.$parent.slideItem" :key="itemcaption._id">
            <div class="col-md-6">
                <div class="titlekonten">{{ itemcaption.title }}</div>
            </div>
            <div class="col-md-6">
                <div class="deskripsikonten">{{ trimString(itemcaption.body) }}</div>
            </div>
        </span>

    </div>
</template>

<script>
export default {
    methods: {
        trimString: function(param) {
            let filterData = param

            if (filterData.length >= 120) {
                filterData = filterData.substring(0, 118) + " ..."
            }
            return filterData
        }
    }
}
</script>

<style>
#responsive img {
    max-height: 400px;
}
</style>
