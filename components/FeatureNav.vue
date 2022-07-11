<template>
  <div class="row mT40">
    <div class="col-md-6 content-pad">
      <ul class="fc-navtabs">
        <li class="active" data-toggle="tab" href="#tab1">
          <div class="fc-navtabs-head">{{heading1}}</div>
          <div class="fc-navtabs-desc">{{description1}}</div>
        </li>
        <li data-toggle="tab" href="#tab2">
          <div class="fc-navtabs-head">{{heading2}}</div>
          <div class="fc-navtabs-desc">{{description2}}</div>
        </li>
        <li data-toggle="tab" href="#tab3">
          <div class="fc-navtabs-head">{{heading3}}</div>
          <div class="fc-navtabs-desc">{{description3}}</div>
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div class="tab-content mT40">
        <div id="tab1" class="tab-pane fade in active">
          <img
            v-bind:src="`/images/${image1}`"
            v-bind:alt="altText1"
            v-bind:title="altText1"
            v-bind:style="imgStyle1"
          />
        </div>
        <div id="tab2" class="tab-pane fade">
          <img
            v-bind:src="`/images/${image2}`"
            v-bind:alt="altText2"
            v-bind:title="altText2"
            v-bind:style="imgStyle2"
          />
        </div>
        <div id="tab3" class="tab-pane fade">
          <img
            v-bind:src="`/images/${image3}`"
            v-bind:alt="altText3"
            v-bind:title="altText3"
            v-bind:style="imgStyle3"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading1: {
      type: String,
      required: true
    },
    heading2: {
      type: String,
      required: true
    },
    heading3: {
      type: String,
      required: true
    },
    description1: {
      type: String,
      required: true
    },
    description2: {
      type: String,
      required: true
    },
    description3: {
      type: String,
      required: true
    },
    image1: {
      type: String,
      required: true
    },
    image2: {
      type: String,
      required: true
    },
    image3: {
      type: String,
      required: true
    },
    altText1: {
      type: String,
      required: true
    },
    altText2: {
      type: String,
      required: true
    },
    altText3: {
      type: String,
      required: true
    },
    imgStyle1: {
      type: String,
      required: true
    },
    imgStyle2: {
      type: String,
      required: true
    },
    imgStyle3: {
      type: String,
      required: true
    }
  }
};
</script>