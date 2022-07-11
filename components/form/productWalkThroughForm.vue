<template>
    <div>
        <div id="registerPopup" class="fc-md-overlay">
            <a href="javascript:void(0)" class="closebtn" @click="closePopup()">&times;</a>
            <div class="fc-md-overlay-content">
               <productForm />
            </div>
        </div>
    </div>
</template>

<script>
import productForm from "../../components/form/product-walkthrough-form-inner.vue"
    export default {
        components: {
            productForm
        },
        methods: {
            closePopup() {
                document.getElementById("registerPopup").style.display = "none";
            }
        },
    }
</script>