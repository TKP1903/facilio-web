   
   <template>
   <!-- Modal -->

            <div id="integrationPopup" class="fc-md-overlay">
  <a href="javascript:void(0)" class="closebtn" @click="closePopup()">&times;</a>
  <div class="fc-md-overlay-content">
    <integrationForm />
  </div>
</div>
  </template>
  <script>
  import integrationForm from '../components/integrationForm';
  export default {
      components:
      {
          integrationForm
      },
      methods:
      {
 closePopup() {
  document.getElementById("integrationPopup").style.display = "none";
}
      }
  }
  </script>

  <style scoped>
  .fc-md-overlay-content {
    top: 0 !important;
    margin-top: 0px !important;
}

.fc-md-overlay .closebtn {
    z-index: 1000 !important;
}
  </style>