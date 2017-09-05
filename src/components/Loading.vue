<template>
    <div class="col-md-12" v-if="loading" v-cloak>
        <div class="lds-css ng-scope">
            <div style="width:100%;height:100%" class="lds-rolling">
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: false
            }
        }
    }
</script>