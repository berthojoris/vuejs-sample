<template>
    <div class="container">
		<div class="row">

            <div class="col-md-12" v-show="loading">
                <div class="lds-css ng-scope">
                    <div style="width:100%;height:100%" class="lds-rolling">
                        <div></div>
                    </div>
                </div>
            </div>

			<div class="ten columns">

				<div id="responsive"> 
					<img v-for="itemx in slideItem" :key="itemx._id" v-bind:src="itemx.picture" data-caption="#htmlCaption" />
				</div>

				<span class="orbit-caption" id="htmlCaption"><strong>I'm A Badass Caption:</strong> I can haz <a href="#">links</a>, <em>style</em> or anything that is valid markup :)</span>
				
			</div>
		</div>
	</div>
</template>

<script>
require('../assets/template/orbitslide/jquery.orbit-1.3.0.js');
require('../assets/template/orbitslide/orbit-1.3.0.css');
require('../assets/template/orbitslide/demo-style.css');

export default {
    data() {
        return {
            slideItem: [],
            loading: false
        }
    },
    beforeMount: function() {
        this.loading = true
        this.fetchSlide()
    },
    methods: {
        fetchSlide: function() {
            var urlSlide = 'http://private-anon-03776f44f8-frontendtest3.apiary-mock.com/headers';
            
            this.$http.get(urlSlide).then(responseSlide => {
                this.slideItem = responseSlide.data
                this.$nextTick(() => {
                    $('#featured').orbit({bullets: true})
                    $('#featured2').orbit({bullets: true})
                    $('#responsive').orbit({bullets: true, fluid: true})
                })
                this.loading = false
            }, response => {
                this.$Progress.fail()
                this.loading = false
            });
        }
    }
}
</script>

<style lang="scss">
.container {
    width: 100%;
    height: 500px;
}
.orbit-bullets ul li {
    margin-top: -200px;
}
</style>
