<template>
  <section class="company-logo-sec">
      <div class="rows block-logos__logo-row">

        <div class="block-logos__logo-col logo-1 " style="    max-width: 25%;margin-top: 17px;">
            <img src="/images/customer-logo/updated/sutherland.png" class="wd-100" />
          </div>

          <div class="block-logos__logo-col ">
              <img src="/images/customer-logo/updated/brookfield.png" class="wd-100" style="margin-top: 15px;"/>
          </div>

          <div class="block-logos__logo-col ">
              <img src="/images/customer-logo/updated/mercatus.png" class="wd-100 aster-dm-logo" style="    max-height: 30px;  margin-top: 10px;"  />
          </div>

          <div class="block-logos__logo-col ">
              <img src="/images/customer-logo/updated/aster-dm.png" class="wd-100 aster-dm-logo" style="max-height: 75px;"  />
          </div>

          <div class="block-logos__logo-col logo-2" style="max-width: 13%;">
            <img src="/images/customer-logo/updated/cit.png" class="wd-100" style="max-height: 60px;" />
          </div>

          <div class="block-logos__logo-col aster-dm-logo" style="margin-top: 32px;">
            <img src="/images/customer-logo/updated/brigade.png" class="wd-100 aster-dm-logo" style="max-height: 60px;" />
          </div>

          <div class="block-logos__logo-col logo-3" style="position: relative;left: -20px;">
            <img src="/images/customer-logo/updated/pd7.png" class="wd-100" />
          </div>


          <div class="block-logos__logo-col logo-4" style="position: relative;left: -36px;">
            <img src="/images/customer-logo/updated/quality group.png" class="wd-100" />
          </div>

          <div class="block-logos__logo-col logo-5" style="position: relative;left: -25px;">
            <img src="/images/customer-logo/updated/bright.png" class="wd-100" style="max-height: 75px;" />
          </div>
      </div>
  </section>
</template>

<script>
  export default {

  };
</script>

<style>
  .carousel-inner>.item>img,
  .carousel-inner>.item>a>img {
    width: 70%;
    margin: auto;
  }

  .carousel-caption {
    position: initial !important;
    text-shadow: none !important;
    padding-bottom: 0;
    padding-top: 0;
  }

  .carousel-control.left,
  .carousel-control.right {
    background-image: none !important;
  }

  .carousel-control {
    font-size: 6em !important;
    text-shadow: none !important;
    color: #eef2f5;
    opacity: 1;
    margin-top: 8%;
  }

@media screen and (max-width:500px) {

.aster-dm-logo {
  max-height: 60px  !important;
  margin-top: 0 !important;
}
}
  .carousel-control:hover {
    color: #eef2f5;
  }

  .carousel-indicators li {
    color: rgb(255, 49, 133);
    border: 1px solid rgb(255, 49, 133);
  }

  .carousel-indicators .active {
    background-color: rgb(255, 49, 133);
  }

  .carousel-inner {
    width: 100% !important;
  }


  .block-logos__logo-col {
    display: flex;
        align-items: center;
    justify-content: center;
    margin-top: 0;
    max-width: 23%;
    padding:10px 40px;
}
@media (min-width: 1170px){
.block-logos__logo-col:nth-child(5n+5)~.block-logos__logo-col {
    margin-top: 2.5625rem;
}
}
@media (min-width: 768px) {
   .block-logos__logo-row {
    margin: 0;
  }

  }

.block-logos__logo-row {
display: flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: center;
    }
    @media screen and (max-width:500px) {
      .block-logos__logo-col {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    max-width: 40%;
    padding: 20px 20px;
      }
      .logo-1 {
      max-width: 40% !important;
      }
      .logo-2 {
        max-width: 25% !important;
      }
      .logo-3 {
            left: 0 !important;
      }
      .logo-4 {
            left: -15px  !important;
            max-width: 50% !important;
      }
      .company-logo-sec {
        padding-bottom: 50px;
      }

    }
    @media screen and (min-width:500px)and   (max-width:850px){
      .block-logos__logo-col {
        max-width: 30%  !important;
      }
    }
</style>
<style scoped>
  #customerlist {
    width: 2500px !important;
  }

  .company-logo-sec ul {
    max-width: 2500px;
  }

</style>