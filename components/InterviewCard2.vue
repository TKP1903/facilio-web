<template>
    <div class="interview-card2-con">
        <div class="podacast-thumbnail">
            <a @click="changeVideo(`${link}`)">
                <div class="events-podcast-card">
                    <div class="podcast-card-overlay">
                        <img class="fc-play" src="/images/icons/play.svg">
                    </div>

                    <img style="max-width:400px;width:100%; height:300px;" v-bind:src="`/images/events/${image}`"
                        class="fc-interview-card-img" />

                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            link: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            }
        },
        methods: {
            changeVideo(vId) {
                var iframe = document.getElementById("iframeYoutube");
                iframe.src =
                    "https://www.youtube.com/embed/" +
                    vId +
                    "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=1";

                $("#myModal").modal("show");
            }
        }
    };
</script>


<style>
    .interview-card2-con .fc-interview-card-img {
        max-width: 400px;
        width: 100%;
        height: 320px;
    }

    .interview-card2-con .events-podcast-card {
        max-width: 350px;
        height: 320px;
    }

    .interview-card2-con .podcast-card-overlay {
        position: absolute;
        height: 320px;
        max-width: 400px;
        width: 100%;
    }
</style>