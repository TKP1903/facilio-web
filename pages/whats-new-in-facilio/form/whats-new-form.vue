<template>
    <div id="registerPopup" class="fc-md-overlay whats-new-form-con">
        <a href="javascript:void(0)" class="closebtn" @click="closePopup()">&times;</a>
        <div class="fc-md-overlay-content">
            <div class="whats-new-form">
                <!-- Begin Mailchimp Signup Form -->
                <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
                <div id="mc_embed_signup">
                    <form
                        action="https://facilio.us18.list-manage.com/subscribe/post?u=27c202586edf8e852296a9faf&amp;id=777e514a0e"
                        method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
                        target="_blank" novalidate>
                        <div id="mc_embed_signup_scroll">
                            <h2>Subscribe to Facilio's Product Updates</h2>
                            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                            <div class="mc-field-group">
                                <label for="mce-FNAME">First Name <span class="asterisk">*</span>
                                </label>
                                <input type="text" value="" name="FNAME" class="required" id="mce-FNAME">
                            </div>
                            <div class="mc-field-group">
                                <label for="mce-EMAIL">Business Email <span class="asterisk">*</span>
                                </label>
                                <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                            </div>
                            <div class="mc-field-group">
                                <label for="mce-MMERGE5">Company name </label>
                                <input type="text" value="" name="MMERGE5" class="" id="mce-MMERGE5">
                            </div>
                            <div id="mce-responses" class="clear">
                                <div class="response" id="mce-error-response" style="display:none"></div>
                                <div class="response" id="mce-success-response" style="display:none"></div>
                            </div>
                            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
                                    name="b_27c202586edf8e852296a9faf_777e514a0e" tabindex="-1" value=""></div>
                            <div class="clear"><input type="submit" value="Subscribe" name="subscribe"
                                    id="mc-embedded-subscribe" class="button"></div>
                        </div>
                    </form>
                </div>
            </div>

            <!--End mc_embed_signup-->
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            closePopup() {
                document.getElementById("registerPopup").style.display = "none";
            }
        }
    }
</script>
<style type="text/css">
    .whats-new-form-con #mc_embed_signup {
        background: #fff;
        clear: left;
        font: 14px Helvetica, Arial, sans-serif;
    }

    .whats-new-form #mc_embed_signup .button {
        width: 96% !important;
        background: #ff3184 !important;
        height: 50px !important;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        border: 1px solid #ff3184 !important;
        font-family: ProximaNovaSemibold;
        margin-top: 15px;
    }

    .indicates-required {
        display: none;
    }

  .whats-new-form-con  #mc_embed_signup h2 {
        text-align: center;
        line-height: 1.2;
        color: #181b3b;
        font-family: ProximaNovaBold;
        font-size: 1.6em !important;
    }

   .whats-new-form-con #mc_embed_signup .mc-field-group label {
        margin-top: 10px;
        margin-bottom: 10px !important;
        letter-spacing: 0.5px;
    }

   .whats-new-form-con #mc_embed_signup .mc-field-group input {
        padding: 10px 0 !important;
        border: 1px solid #e5e5e5 !important;
    }

   .whats-new-form-con #mc_embed_signup .validate {
        background-color: #ffffff !important;
        width: 100% !important;
        padding: 0 50px 30px;
        margin-left: auto;
        border-radius: 10px;
    }

   .whats-new-form-con #mc-embedded-subscribe {
        margin-top: 10px;
    }

   .whats-new-form-con #mc_embed_signup_scroll {
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
    }


</style>