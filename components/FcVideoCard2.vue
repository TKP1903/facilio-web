<template>
<div class="col-md-4 col-lg-4">
    <div v-bind:class="filterType" class="fc-video-card2-con">
        <div>
        
            <div class="fc-case-hub-card">
                <div class="fc-video-element-item" v-bind:data-toggle="toggleData" v-bind:data-target="target">
                    <!-- <img src="../../assets/images/speaker/facilio-uros-speaker.jpg" class="speaker-radius" alt="" title="" /> -->
                    <script v-bind:src="videoLink" async></script>
                    <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
                    <div class="fc-case-hub-top">
                        <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
                            <div class="wistia_responsive_wrapper"
                                style="height:100%;left:0;position:absolute;top:0;width:100%;">
                                <span v-bind:class="modalStyle"
                                    style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span>
                            </div>
                        </div>
                    </div>
                    <div class="fc-case-hub-btm">
                        <div class="">
                            <div class="video-block-content">{{ description }}</div>
                            <div class="fc-place pT10 text-uppercase">
                                {{place}}
                            </div>
                            <div class="fc-readmore-arrow"> 
                                <a href="futureproof/fp-videos/" class="text-uppercase">
                                {{readMore}} <img src="/images/svg/right-blue2.svg" width="16" height="10" class="mR10"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <!-- video dialog  -->
    </div>
    </div>
</template>

<script>
    export default {
        props: {
            toggleData: {
                type: String
            },
            target: {
                type: String
            },
            filterType: {
                type: String,
                required: true
            },
            videoLink: {
                type: String,
                required: true
            },
            modalStyle: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            place: {
                type: String,
                required: true
            },
            readMore: {
                type: String,
                required: true
            }
        }
    };
</script>

<style>
    .fc-video-card2-con .wistia_responsive_padding img {
        border: 0px;
        display: block;
        float: none;
        height: 200px !important;
        margin: 0px;
        max-height: none;
        max-width: none;
        padding: 0px;
        position: absolute;
        width: 100% !important;
        left: 0 !important;
        right: 0 !important;
        top: 0px;
        object-fit: cover;
        border-bottom: 1px solid #e1e2e5;
    }

   .fc-video-card2-con .wistia_responsive_padding #wistia_1820.big_play_button_graphic {
        cursor: pointer;
        display: block;
        height: 81px;
        outline: none;
        position: absolute;
        width: 127px;
        z-index: 1;
        left: 124px !important;
        top: 60px !important;
    }

  .fc-video-card2-con  .wistia_responsive_padding #wistia_1820.big_play_button_background {
        transition: all 80ms ease-out 0s;
        left: 124px;
        top: 60px;
        mix-blend-mode: normal;
    }
  .fc-video-card2-con .wistia_responsive_padding .wistia_mouseover{
       height: 200px !important;
    }

   .fc-video-card2-con .wistia_click_to_play{
        height: 200px;
    }
    .fc-video-card2-con .fc-place{
         font-size: 14px;
        font-weight: 500;
        line-height: normal;
        letter-spacing: normal;
        color: #a6a1b3;
    }

    .fc-video-card2-con .video-block-content{
        font-size: 24px;
        font-weight: bold;
        font-family: "ProximaNovaBold";
        line-height: 30px;
        letter-spacing: normal;
        padding-left: 0;
        color: #171128;
    }

    .fc-readmore-arrow{
        text-align: right;
        position: absolute;
        right: 40px;
        bottom: 40px;
    }
    .fc-readmore-arrow a{
        font-size: 14px;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.5px;
        text-align: right;
        color: #2865d6;
    } 

    @media screen and (max-width: 768px) {
        .fc-video-card2-con .wistia_responsive_padding img{
            height: 100% !important;
    }
    }
</style>