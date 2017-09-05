<template>
    <div>
        <section id="features" class="features">
            <div class="container">
                <div class="row">
                    <div class="main_features fix roomy-70">
                        <div class="col-md-12">
                            <div class="features_item sm-m-top-30">
                                <div class="center">
                                    <h3>Privacy Page</h3>
                                    <p>This page is accessed using vue-router</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataDummy: [
                {
                    "_id": "584a3fc59f8a40056883460d",
                    "index": 0,
                    "picture": "http://lorempixel.com/320/350/",
                    "title": "enim commodo cillum aliquip",
                    "body": "Id fugiat velit et anim fugiat aute laborum consectetur. Amet mollit reprehenderit nulla adipisicing non duis quis occaecat mollit nulla veniam deserunt quis minim. Anim sint reprehenderit eiusmod ad eiusmod veniam aute eu eu irure mollit elit aliqua commodo. Nostrud nostrud dolor eu eu non nostrud minim reprehenderit eu qui.\r\n"
                },
                {
                    "_id": "584a3fc5a44487ad4ff06972",
                    "index": 1,
                    "picture": "http://lorempixel.com/320/350/",
                    "title": "ex minim eu do",
                    "body": "Veniam excepteur sunt exercitation adipisicing do incididunt reprehenderit eu labore consectetur. Nostrud nulla quis nisi et cupidatat in consectetur esse Lorem eu. Dolor dolore non dolor incididunt tempor cupidatat irure irure nulla adipisicing. Cupidatat qui eu Lorem cillum deserunt esse pariatur velit. Consequat incididunt velit nisi consequat quis non dolore magna minim magna est nostrud ipsum.\r\n"
                },
                {
                    "_id": "584a3fc568d40496ee9b6add",
                    "index": 2,
                    "picture": "http://lorempixel.com/320/350/",
                    "title": "proident incididunt dolor enim",
                    "body": "Dolore culpa aliquip fugiat laborum pariatur commodo adipisicing adipisicing laboris. Mollit mollit non ea occaecat duis. Dolor laboris eiusmod magna ut ex aliquip commodo. Voluptate nisi irure consequat ex velit laborum veniam mollit excepteur. Et incididunt esse qui cupidatat consectetur ullamco duis laboris in proident quis excepteur ut minim.\r\n"
                }
            ]
        }
    },
    mounted: function() {
        // _.each(this.dataDummy, function (value, key) {
        //     alert(value._id)
        // });
    }
}
</script>