<template>
    <div>
        <loadingpanel></loadingpanel>
        <slides></slides>
        <newslist></newslist>
    </div>
</template>

<script>
import Loadingpanel from './shared/Loadingpanel.vue'
import Slides from './shared/Slides.vue'
import Newslist from './shared/Newslist.vue'

require('../assets/template/orbitslide/jquery.orbit-1.3.0.js');
require('../assets/template/orbitslide/orbit-1.3.0.css');


export default {
    components: {
        'loadingpanel': Loadingpanel,
        'newslist': Newslist,
        'slides': Slides
    },
    data() {
        return {
            items: [],
            slideItem: [],
            loading: false,
            showloading: 1
        }
    },
    mounted: function () {
        
    },
    beforeMount: function() {
        this.loading = true
        this.$Progress.start()
        this.fetchData()
    },
    methods: {
        updateResource(data){
            this.animals = data
        },
        fetchData: function () {
            const urlArticle = "http://private-anon-03776f44f8-frontendtest3.apiary-mock.com/posts";
            
            this.$http.get(urlArticle).then(response => {
                this.items = response.data
                this.fetchSlide()
            }, response => {
                this.$Progress.fail()
                this.loading = false
            });
        },
        fetchSlide: function() {
            const urlSlide = 'http://private-anon-03776f44f8-frontendtest3.apiary-mock.com/headers';
            
            this.$http.get(urlSlide).then(responseSlide => {
                this.slideItem = responseSlide.data
                console.log(this.slideItem);
                this.$nextTick(() => {
                    $('#featured').orbit({bullets: true})
                    $('#featured2').orbit({bullets: true})
                    $('#responsive').orbit({bullets: true, fluid: true})

                    this.$Progress.finish()
                    this.loading = false
                    this.showloading = 0
                })
            }, response => {
                this.$Progress.fail()
                this.loading = false
            });
        },
        countSting: function(param) {
            let filterData = param

            if (filterData.length >= 100) {
                filterData = filterData.substring(0, 90) + " ..."
            }
            return filterData
        },
        countTitle: function(param) {
            let filterData = param

            if (filterData.length >= 28) {
                filterData = filterData.substring(0, 25) + " ..."
            }
            return filterData
        }
    }
}
</script>

<style>
@media (min-width:481px) {
    .col-md-4 {
        width: 45%;
        float: left;
    }
}
@media (min-width:641px) {
    .col-md-4 {
        width: 46%;
        float: center;
    }
}
@media (min-width:961px) {
    .col-md-4 {
        width: 30%;
        float: center;
    }
}
@media (min-width: 1200px) {
    .col-md-4 {
        width: 30%;
        float: center;
    }
}
@media (min-width: 1281px) {
    .col-md-4 {
        width: 30%;
        float: center;
    }
}
@media (min-width: 992px) {
    nav.navbar.bootsnav ul.nav > li > a {
        font-weight: bold;
    }
}
</style>
