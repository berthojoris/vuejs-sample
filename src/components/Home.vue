<template>
    <div>
        <loadingpanel></loadingpanel>
        <slides></slides>
        <newslist></newslist>
        <blackfooter></blackfooter>
    </div>
</template>

<script>
import Loadingpanel from './shared/Loadingpanel.vue'
import Slides from './shared/Slides.vue'
import Newslist from './shared/Newslist.vue'
import Footer from './footer/Footer.vue'

require('../assets/template/orbitslide/jquery.orbit-1.3.0.js');
require('../assets/template/orbitslide/orbit-1.3.0.css');
require('../assets/template/js/paginator/jquery.twbsPagination.min.js');

export default {
    components: {
        'loadingpanel': Loadingpanel,
        'newslist': Newslist,
        'slides': Slides,
        'blackfooter': Footer,
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
                filterData = filterData.substring(0, 80) + " ..."
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
@media (min-width:281px) {
    .col-md-4 {
        width: 100%;
        float: center;
    }
    .col-md-6 .titlekonten {
        float: none; 
        font-size: 35px; 
        border: 10px;
        color: #ffffff;
        text-align: center;
    }
    .col-md-6 .deskripsikonten {
        float: left; 
        border-top: 2px solid #ffffff;
        padding-top: 10px;
    }
    .orbit-wrapper.fluid .orbit-bullets {
        margin-bottom: 60px;
    }
}
@media (min-width:481px) {
    .col-md-4 {
        width: 45%;
        float: left;
    }
    .col-md-6 .titlekonten {
        float: none; 
        font-size: 35px; 
        border: 10px;
        color: #ffffff;
        text-align: center;
    }
    .col-md-6 .deskripsikonten {
        float: left; 
        border-top: 2px solid #ffffff;
        padding-top: 10px;
    }
    .orbit-wrapper.fluid .orbit-bullets {
        margin-bottom: 60px;
    }
}
@media (min-width:641px) {
    .col-md-4 {
        width: 46%;
        float: center;
    }
    .col-md-6 .titlekonten {
        float: none; 
        font-size: 35px; 
        border: 10px;
        color: #ffffff;
        text-align: center;
    }
    .col-md-6 .deskripsikonten {
        float: left; 
        border-top: 2px solid #ffffff;
        padding-top: 10px;
    }
}
@media (min-width:961px) {
    .col-md-4 {
        width: 30%;
        float: center;
    }
     .col-md-6 .titlekonten {
        float: none; 
        font-size: 35px; 
        border: 10px;
        color: #ffffff;
        text-align: center;
    }
    .col-md-6 .deskripsikonten {
        float: left; 
        border-top: 2px solid #ffffff;
        padding-top: 10px;
    }
}
@media (min-width: 992px) {
    nav.navbar.bootsnav ul.nav > li > a {
        font-weight: bold;
    }
    .col-md-6 .titlekonten {
        float: right; 
        font-size: 35px; 
        border: 10px;
        color: #ffffff;
    }
    .col-md-6 .deskripsikonten {
        float: left; 
        border-left: 2px solid #ffffff;
        padding-left: 20px;
        border-top: none;
    }
    .orbit-wrapper.fluid .orbit-bullets {
        margin-bottom: 190px;
    }
}
@media (min-width: 1200px) {
    .col-md-4 {
        width: 30%;
        float: center;
    }
    .col-md-6 .titlekonten {
        float: right; 
        font-size: 35px; 
        color: #ffffff;
        margin-top: 10px;
    }
    .col-md-6 .deskripsikonten {
        float: left; 
        border-left: 2px solid #ffffff;
        padding-left: 20px;
        border-top: none;
    }
    .orbit-wrapper.fluid .orbit-bullets {
        margin-bottom: 170px;
    }
}
@media (min-width: 1281px) {
    .col-md-4 {
        width: 30%;
        float: center;
    }
    .col-md-6 .titlekonten {
        float: right; 
        font-size: 35px; 
        border: 10px;
        color: #ffffff;
    }
    .col-md-6 .deskripsikonten {
        float: left; 
        border-left: 2px solid #ffffff;
        padding-left: 20px;
        border-top: none;
    }
    .orbit-wrapper.fluid .orbit-bullets {
        margin-bottom: 230px;
    }
}
</style>
