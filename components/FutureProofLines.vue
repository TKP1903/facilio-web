<template>
  <div>
    <div class="futureproof-campaign-line1">
      <svg width="383" height="89" xmlns="http://www.w3.org/2000/svg">
        <path
          class="futureproof-campaign-line1-ani"
          d="M-37.473 84.156c46.035 0 63.38-15.234 96.203-10.156 32.825 5.078 43.64-46.05 71.786-36.684C158.662 46.684 145.153 2.5 188.242 2.5c43.09 0 34.395 47.617 26.238 47.617-8.156 0 35.489-4.242 35.489 18.883s29.656-13.125 38.07 5c5.61 12.083 36.461 15.469 92.555 10.156"
          stroke="#7C5EE8"
          stroke-width="3.5"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="futureproof-campaign-line2">
      <svg width="452" height="62" xmlns="http://www.w3.org/2000/svg">
        <path
          class="futureproof-campaign-line2-ani"
          d="M2.6 49.406c6.577-.637 13.369-1.655 20.329-2.97m22.847-5.118C113.012 24.252 190.405-10.075 241 7.461c43.62 15.118 102.982 50.688 211.379 51.974"
          stroke="#7C5EE8"
          stroke-width="3.5"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="futureproof-campaign-line3">
      <svg width="1005" height="54" xmlns="http://www.w3.org/2000/svg">
        <path
          class="futureproof-campaign-line3-ani"
          d="M-29.023 41.688C71.97 34.483 119.697-6.197 203.679 15.26c83.982 21.457 393.653 52.856 539.593 26.428 59.08-10.699 98.386-22.154 130.135-29.94C920.085.3 950.43-3.217 1003.267 15.26"
          stroke="#7C5EE8"
          stroke-width="3.5"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="futureproof-campaign-line4">
      <svg width="413" height="225" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
          <g stroke="#8262F6" stroke-width="2.8">
            <path
              class="futureproof-campaign-line4-ani"
              d="M1.8 199.483c18.557 13.287 33.26 13.287 44.11 0 16.275-19.929-4.259-47.61 0-54.015 4.26-6.406 22.218-20.602 35.917 0 13.698 20.602-.664 51.272 0 54.015.663 2.744 7.802 7.929 13.06 0 6.174-50.018-.304-103.02 0-105.81.305-2.79 7.295 6.09 11.554 0 4.258-6.09-7.024-12.586 0-16.522 7.023-3.935 21.765-4.325 29.484 0 7.718 4.326-2.87 13.701 0 16.522 2.87 2.821 16.804-13.203 16.804 0 0 13.204-3.514 96.929 0 105.81 3.515 8.882 27.473 20.686 41.866 0 18.03-57.097-9.697-141.447-3.395-153.609 6.302-12.162 38.125 14.786 54.483 59.215 16.359 44.43-10.714 81.814-2.272 94.394 5.628 8.388 26.7 8.388 63.218 0"
            />
            <path
              class="futureproof-campaign-line4-ani"
              d="M121.257 8.055c30.564-11.916 75.545-5.831 88.16 3.794 12.616 9.626 7.27 40.153 7.27 43.526 0 3.374-33.657-38.359-24.942 11.243 8.715 49.602 10.032 115.482 2.85 132.865-7.182 17.384-37.907 13.899-41.866 0-3.959-13.898 2.017-93.081 0-105.81-2.017-12.728 1.671-30.519-.908-38.298-1.72-5.186-18.05-7.083-48.99-5.69-8.091-19.81-1.95-33.687 18.426-41.63z"
            />
            <path
              class="futureproof-campaign-line4-ani"
              d="M151.82 145.236c0-18.27-30.565-14.684-30.565-2.862s6.85 45.342 0 57.11c-6.849 11.766-31.301 11.366-39.598 0-8.297-11.367-15.194-42.33-19.088-54.248-.64-1.959-1.514-5.538-2.455-10.182-4.781-23.608-11.286-74.722 2.455-80.24 16.443-6.604 22.807-4.975 42.069-4.975M276.16 68.879c8.01 6.372 7.144 118.646 0 130.604-7.144 11.959-33.376 6.11-39.598 0-4.149-4.073-4.092-16.979.17-38.717-9.503 4.315-15.922 4.246-19.259-.21-5.004-6.681-15.07-72.483 0-91.677 15.07-19.194 50.677-6.373 58.687 0z"
            />
          </g>
          <path
            class="futureproof-campaign-line4-ani"
            d="M335.6 198.55c16.845 0 42.644 8 77.4 24"
            stroke="#7C5EE8"
            stroke-width="3.5"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function() {
    let path = document.querySelector(".futureproof-campaign-line1-ani");
    let length = path.getTotalLength();
    path.style.strokeDasharray = length + " " + length;
    path.style.strokeDashoffset = length;

    let pathLineLeft = document.querySelector(
      ".futureproof-campaign-line2-ani"
    );
    let lengthline = pathLineLeft.getTotalLength();
    pathLineLeft.style.strokeDasharray = lengthline + " " + lengthline;
    pathLineLeft.style.strokeDashoffset = lengthline;

    let pathLineRight = document.querySelector(
      ".futureproof-campaign-line3-ani"
    );
    let lengthLineRight = pathLineRight.getTotalLength();
    pathLineRight.style.strokeDasharray =
      lengthLineRight + " " + lengthLineRight;
    pathLineRight.style.strokeDashoffset = lengthLineRight;
  }
};
</script>