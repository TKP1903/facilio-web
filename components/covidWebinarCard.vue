<template>
    <div class="col-md-6">
        <div class="webseries-thumbnail">
            <div class="webinar-series-card">
                <script v-bind:src="link1" async></script>
                <script v-bind:src="link2" async></script>
               <div class="wistia_responsive_padding" style="padding:63.13% 0 0 0;position:relative;">
                        <div class="wistia_responsive_wrapper"
                            style="height:100%;left:0;position:absolute;top:0;max-width:700px;width:100%;"><span
                               :class="vclass" class="wistia_embed popover=true popoverAnimateThumbnail=true videoFoam=true"
                                style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span>
                        </div>
                    </div>
                     <p class="fc-epi-name">{{title}}</p>
                <p class="fc-epi-desc">{{desc}}</p>
                </div>
            
            </div>
            
        </div>
</template>

<script>
    export default {
        props: {
            link1: {
                type: String,
                required: true
            },
            link2: {
                type: String,
                required: true
            },
            vclass: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
             desc: {
                type: String,
                required: true
            }
        }
    };
</script>