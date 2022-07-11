<template>
  <div>
    <div class="media pB40">
      <div class="news-zoom-logo"  @click="emitPrint(id)">
        <a class="pop">
          <img v-bind:src="`/images/newsroom/${image}`" style="width: 359px; height: 300px;"/>
        </a>
    </div>
      <div class="news-print-content pL20">
        <div class="pink-text-16 fwbold">{{heading}}</div>
        <div class="black-txt-22 mobiletext-22">{{description}}</div>
        <p class="media-info">{{timestamp}}</p>
      </div>
    </div>
    <div class="border-bottom2"></div>
  </div>
</template>
<script>
export default {
  props: ['image','heading','description','timestamp','id'],
  methods:
  {
    emitPrint(id){
      let query = { 'id' : id}
      this.$router.push({query})
    }
  }
};
</script>