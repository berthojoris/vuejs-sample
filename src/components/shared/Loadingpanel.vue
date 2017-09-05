<template>
    <div class="col-md-12" v-show="this.$parent.showloading === 1">
        <div class="lds-css ng-scope">
            <div style="width:100%;height:100%" class="lds-rolling">
                <div></div>
            </div>
        </div>
    </div>
</template>