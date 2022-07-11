<template>
  <!-- modal for image zoom start-->
  <div
    class="modal modal-bg"
    :style="{'display':  $route.query.id? 'block' : 'none'}"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myModalLabel"
    aria-hidden="true"
  >  <button type="button" class="close" @click="closemodal">
            <span aria-hidden="true" style="color:#ffffff !important;">&times;</span>
            <span class="sr-only">Close</span>
          </button>
    <div class="modal-dialog" style="max-width:800px;width:100%;margin:0 auto;">
      <div class="modal-content fc-zoom-modal">
        <div class="modal-body">
          <img v-bind:src="`/images/newsroom/${$route.query.id}`" style="width: 100%;" />
        </div>
      </div>
    </div>
  </div>
  <!-- modal for image zoom end -->
</template>

<script>
export default {
  // props:['printImageid'],
  methods:{
    closemodal(){
      if(this.$route.query.id){
        this.$router.push({})
      }
    }
  },
};
</script>