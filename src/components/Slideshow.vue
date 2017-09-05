<template>
    <div>
        <div class="bs-example">
            <div id="carousel-example-captions" class="carousel slide" data-ride="carousel">

                <ol class="carousel-indicators">
                    <li data-target="#carousel-example-captions" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example-captions" data-slide-to="1" class=""></li>
                    <li data-target="#carousel-example-captions" data-slide-to="2" class=""></li>
                </ol>

                <div class="carousel-inner">

                    <div class="item active">
                        <img alt="900x500" src="http://lorempixel.com/960/720/">
                        <div class="carousel-caption">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>

                    <div class="item">
                        <img alt="900x500" src="http://lorempixel.com/960/720/">
                        <div class="carousel-caption">
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div class="item">
                        <img alt="900x500" src="http://lorempixel.com/960/720/">
                        <div class="carousel-caption">
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>

                </div>
                
                <a class="left carousel-control" href="#carousel-example-captions" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                </a>
                <a class="right carousel-control" href="#carousel-example-captions" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                </a>
            </div>
        </div>
        <div class="new-caption-area"></div>
    </div>
</template>

<script>
export default {
    mounted: function() {
        $('.carousel').carousel();
        var caption = $('div.item:nth-child(1) .carousel-caption');
        $('.new-caption-area').html(caption.html());
        caption.css('display', 'none');

        $(".carousel").on('slide.bs.carousel', function (evt) {
            var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption');
            $('.new-caption-area').html(caption.html());
            caption.css('display', 'none');
        });
    }
}
</script>

<style>
.bs-example, .new-caption-area {
    width: 100%;
    margin: auto;
    color: #000;
}  
.carousel-caption {
	color: #000;
}
.carousel-inner {
    height: 400px;
}
.carousel-inner img {
    width: 100%;
}
div.new-caption-area {
    font-size:14px;
    position: relative;
    margin-top: -90px;
    padding: 15px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    text-transform: uppercase;
    display: block;
}
div.new-caption-area h3 {
    color: #fff;
}
</style>
