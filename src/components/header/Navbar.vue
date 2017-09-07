<template>
    <nav class="navbar navbar-default bootsnav navbar-fixed on no-full">


        <div class="container"> 

            <!-- Start Header Navigation -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-menu" aria-expanded="false">
                    <i class="fa fa-bars"></i>
                </button>
                

            </div>
            <!-- End Header Navigation -->

            <!-- navbar menu -->
            <div class="navbar-collapse collapse" id="navbar-menu" aria-expanded="false" style="height: 0px;">
                <ul class="nav navbar-nav navbar-right">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/terms">Terms</router-link></li>
                    <li><router-link to="/privacy">Privacy</router-link></li>
                </ul>
            </div>
        </div> 
    </nav>
</template>

<script>
export default {
    methods: {
        linkClicked: function() {
            
        }
    }
}
</script>