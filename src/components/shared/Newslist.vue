<template>
    <section id="features" class="features">
            <div class="container">
                <div class="row">
                    <div class="col-md-4" v-for="item in this.$parent.items" :key="item._id">
                        <div class="features_item sm-m-top-30">
                            <div class="f_item_text">
                                <img v-bind:src="item.picture">
                                <span>{{ countTitle(item.title) }}</span>
                                <p>{{ countSting(item.body) }}</p>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
</template>

<script>
export default {
    mounted: function() {
        const datanya = this.$parent.items
        const totalData = _.size(datanya)
         _.each(datanya, function (value, key) {
            const id = value._id
            const picture = value.picture
            const title = value.title
            const body = value.body
        });
    },
    methods: {
        countSting: function(param) {
            let filterData = param

            if (filterData.length >= 90) {
                filterData = filterData.substring(0, 86) + " ..."
            }
            return filterData
        },
        countTitle: function(param) {
            let filterData = param

            if (filterData.length >= 25) {
                filterData = filterData.substring(0, 22) + " ..."
            }
            return filterData
        }
    }
}
</script>

<style>
.col-md-4 {
    background-color: #ffffff;
    padding: 10px;
    margin: 10px;
}
.orbit-wrapper .orbit-caption {
    background: #000;
    background: rgba(0,0,0,.6);
    z-index: 1000;
    color: #fff;
	text-align: center;
	padding: 27px 0;
    font-size: 13px;
    position: absolute;
    /* margin-left: 14%; */
    width: 100%;
    bottom: 0;
}
.orbit-wrapper.fluid .orbit-bullets {
    margin-bottom: 130px;
}
</style>
