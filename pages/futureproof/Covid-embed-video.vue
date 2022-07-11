<template>
    <div>
        <div id="trailerPopup" class="fc-md-overlay" style="background-color: rgb(0 0 0 / 0.8);">
            <div class="fc-covid-video-con">
                <div class="fc-covid-video-con2">
            <a href="javascript:void(0)" class="closebtn" @click="closePopup()" style="color: #fff;">&times;</a>
            <div class="fc-md-overlay-content">
                <script src="https://fast.wistia.com/embed/medias/cobc07i4yr.jsonp" async></script>
                <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
                <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
                    <div class="wistia_responsive_wrapper"
                        style="height:100%;left:0;position:absolute;top:0;width:100%;">
                        <div class="wistia_embed wistia_async_cobc07i4yr videoFoam=true"
                            style="height:100%;position:relative;width:100%">
                            <div class="wistia_swatch"
                                style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;">
                                <img src="https://fast.wistia.com/embed/medias/cobc07i4yr/swatch"
                                    style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt=""
                                    aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            closePopup() {
                document.getElementById("trailerPopup").style.display = "none";
            }
        },
    }
</script>
<style>
    .fc-covid-video-con2{
        width: 700px;
        height: 600px;
    }
    .fc-covid-video-con{
        width: 100%;
        height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>