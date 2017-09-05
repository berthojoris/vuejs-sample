<template>
    <div class="testview">

        <div id="responsive"> 
            <img v-for="(itemx, index) in this.$parent.slideItem" :key="itemx._id"  :src="itemx.picture" :data-caption="['#caption_' + index]" />
        </div>
        
        <span class="orbit-caption" :id="['caption_' + index]" v-for="(itemcaption, index) in this.$parent.slideItem" :key="itemcaption._id">
            {{ itemcaption.body }}
        </span>

    </div>
</template>

<style>
#responsive img {
    max-height: 400px;
}

</style>
