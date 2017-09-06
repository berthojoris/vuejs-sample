<template>
    <section id="features" class="features">
            <div class="container">
                <div class="row">   
                    <div class="col-md-4" v-for="(item, index) in this.$parent.items" :key="item._id" :class="computedClass(index)" :content="['#data_' + index]">
                        <div class="features_item sm-m-top-30">
                            <div class="f_item_text">
                                <img v-bind:src="item.picture">
                                <span>{{ countTitle(item.title) }}</span>
                                <p>{{ countSting(item.body) }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <nav class="paginator" aria-label="Page navigation">
                    <ul class="pagination" id="pagination"></ul>
                </nav>

            </div>
        </section>
</template>

<script>
export default {
    data() {
        return {
            hidecontent: '',
            intcount: 0,
            output: '',
            nilai: 1,
            loaddata: '',
            datatotal: 0
        }
    },
    updated() {
        const datanya = this.$parent.items
        const totalData = _.size(datanya)
        const gotDamnRigthTotal = parseInt(totalData / 6)

        $('#pagination').twbsPagination({
            totalPages: gotDamnRigthTotal,
            visiblePages: 5,
            onPageClick: function (event, page) {
                $('div.row div.col-md-4').addClass('hidecontent')
                $('.data_'+page).removeClass("hidecontent");
            }
        })

        $('div.row div.col-md-4.data_1')
            .removeClass('col-md-4 data_1 hidecontent')
            .addClass('col-md-4 data_1')
    },
    mounted: function() {
        
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
        },
        computedClass: function(index) {
            return "data_" + Math.ceil((index + 1) / 6) + " hidecontent"
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
	text-align: justify;
	padding: 27px 10%;
    font-size: 13px;
    position: absolute;
    margin: 0 15%;
    width: 70%;
    bottom: 0;
}
.hidecontent {
    display: none;
}
.paginator {
    margin: 5px 0 10px 0;
    float: right;
}
</style>
