   
   <template>
   <!-- Modal -->

            <div id="webinarPopup" class="fc-md-overlay">
  <a href="javascript:void(0)" class="closebtn" @click="closePopup()">&times;</a>
  <div class="fc-md-overlay-content">
    <webinarForm />
  </div>
</div>
  </template>
  <script>
  import webinarForm from '../components/webinarForm';
  export default {
      components:
      {
          webinarForm
      },
      methods:
      {
 closePopup() {
  document.getElementById("webinarPopup").style.display = "none";
}
      }
  }
  </script>