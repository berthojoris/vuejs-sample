<template>
    <div class="blackfooter">
        <div class="col-md-12">
            <div class="container">
                <div class="row"> 
                    <label><router-link to="/">Home</router-link></label>
                    <label><router-link to="/about">About</router-link></label>
                    <label><router-link to="/terms">Terms</router-link></label>
                    <label><router-link to="/privacy">Privacy</router-link></label>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.blackfooter {
    background-color:#000000;
    width:100%;
    height:100px;
    position:relative;
    bottom:0;
    left:0;
}
label{
    padding-top: 50px;
    padding-left: 50px;
}
label a{
    color: #fff;
}
label a:active{
    color: #fff;
}
label a:hover{
    color: #fff;
}
</style>
