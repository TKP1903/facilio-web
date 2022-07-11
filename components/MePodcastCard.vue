<template>
    <div class="col-md-6 hover">
        <div class="webseries-thumbnail">
          <a @click="changeVideo(`${link}`)">
            <div class="webinar-series-card">
              <div class="card-overlay">
          <img class="fc-play" src="/images/icons/play.svg">
        </div>
               <img
            class="meVideoImg"
            v-bind:src="`/images/events/${image}`"
          />
          <div class="text-container">
               <p class="fc-epi-name">{{title}}</p>
                <p class="fc-epi-desc">{{description}}</p>
          </div>
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
    },image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  },
  methods: {
    changeVideo(vId) {
      var iframe = document.getElementById("iframeYoutube");
      iframe.src =
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" +
        vId +
        "&color=%23ff5500&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true";

      $("#myModal").modal("show");
    }
  }
};
</script>
<style scoped>
.text-container{
    padding: 20px 0px;
}
.hover{
  cursor: pointer;
}
.card-overlay
{
  position: absolute;
  height:300px;
  width:100%;
}
.card-overlay:hover
{

  height: 300px; 
  position: absolute; 
  width: 100%; 
  z-index: 0;
   background-color: rgba(74, 48, 140, 0.5);
    transition: all 80ms ease-out 0s; 
    left: 0px; top: 30px;
}
.card-overlay img
{
    max-width: 50px;
    width: 100%;
    margin: 0 auto;
    padding:10px;
    z-index:1;
    background-color:#4B2E87;
    position: absolute;
    top: 120px;
    left: 263px;
}
@media screen and (min-width: 600px) {
.meVideoImg{
  width: 100%;
  height: 300px;
}
}
@media screen and (max-width: 600px) {
     .webinar-series-card{
    height: auto !important;
  }
  .card-overlay img{
    left: 150px;
    top: 70px;
  }
}
@media only screen and (max-width: 600px){
.webseries-thumbnail .fc-epi-name {
    padding-top: 35px !important;
}
}
@media screen and (max-width: 375px){
.webseries-thumbnail .fc-epi-name {
    padding-top: 0px !important;
}
}
</style>
