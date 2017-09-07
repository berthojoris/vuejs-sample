<template>
    <div class="holder">
        <div id="app">
            <navbar></navbar>
            <router-view></router-view>
            <vue-progress-bar></vue-progress-bar>
        </div>
    </div>
</template>

<script>

import Navbar from './components/header/Navbar.vue'

export default {
    components: {
        'navbar': Navbar,
    },
    methods: {
        openMobileMenu: function() {
           document.getElementById("mySidenav").style.width = "250px";
        },
        closeMobileMenu: function() {
           document.getElementById("mySidenav").style.width = "0";
        }
    }
}
</script>

<style>
@keyframes lds-rolling {
    0% {
        -webkit-transform: translate(-50%, -50%) rotate(0deg);
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        -webkit-transform: translate(-50%, -50%) rotate(360deg);
        transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  @-webkit-keyframes lds-rolling {
    0% {
        -webkit-transform: translate(-50%, -50%) rotate(0deg);
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        -webkit-transform: translate(-50%, -50%) rotate(360deg);
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
.lds-rolling {
    text-align: relative;
}
.lds-rolling div,
.lds-rolling div:after {
    width: 60px;
    height: 60px;
    border: 5px solid #19A985;
    border-top-color: transparent;
    border-radius: 50%;
}
.lds-rolling div {
    -webkit-animation: lds-rolling 1s linear infinite;
    animation: lds-rolling 1s linear infinite;
    top: 100px;
    left: 100px;
}
.lds-rolling div:after {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
}
.lds-rolling {
    position:fixed;
    top: 50%;
    left: 50%;
    width: 200px !important;
    height: 200px !important;
    -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
    transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
}
[v-cloak] {
    display:none;
}

.features_item .f_item_text {
    height: 110px;
}
.f_item_text h3 {
    padding: 15px 15px 0 15px;
}
.center {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -150px;
    border: 3px solid green;
    padding: 10px;
}
.holder {
    min-height: 100%;
    position:relative;
}

</style>
