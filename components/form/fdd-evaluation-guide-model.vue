<template>
    <div>
        <div id="registerPopup" class="fc-md-overlay">
            <a href="javascript:void(0)" class="closebtn" @click="closePopup()">&times;</a>
            <div class="fc-md-overlay-content">
               <fddForm />
            </div>
        </div>
    </div>
</template>

<script>
import fddForm from "../../components/form/fdd-evaluation-guide-form"
    export default {
        components: {
            fddForm
        },
        methods: {
            closePopup() {
                document.getElementById("registerPopup").style.display = "none";
            }
        },
    }
</script>