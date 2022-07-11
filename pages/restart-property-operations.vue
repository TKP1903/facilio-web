<template>
  <div class="productPage btn-shade">
    <div class="myPage" id="myPage">
      <div id="fc-header">
        <Navbar />
      </div>
      <section class="fc-ebook-banner">
        <div class="container fc-ebook-position">
          <div class="row fc-ebookwhole-wrap">
            <div class="col-md-6 col-xs-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="92"
                height="229"
                class="fc-vertical-dots"
              >
                <path
                  fill="#fec9ce"
                  fill-rule="evenodd"
                  d="M88.811 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177A3.182 3.182 0 0192 92.344a3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 70.11a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177A3.182 3.182 0 0192 47.877a3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 25.643a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0188.811.233 3.182 3.182 0 0192 3.41a3.182 3.182 0 01-3.189 3.176zM67.858 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233A3.182 3.182 0 0164.67 3.41 3.182 3.182 0 0167.858.233a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM45.994 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0145.994.233a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM25.041 95.52a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0125.04 44.7a3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176A3.182 3.182 0 0125.04.233a3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zM4.088 95.52a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234A3.182 3.182 0 01.899 70.11a3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176A3.182 3.182 0 014.088 44.7a3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233A3.182 3.182 0 01.899 3.41 3.182 3.182 0 014.088.233 3.182 3.182 0 017.276 3.41a3.182 3.182 0 01-3.188 3.176zM88.81 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.19 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176A3.182 3.182 0 0192 135.96a3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.19 3.178 3.182 3.182 0 01-3.189 3.176zM67.858 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM45.994 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM25.041 228.07a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zm0-22.234a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.176 3.182 3.182 0 013.189 3.176 3.182 3.182 0 01-3.189 3.176zm0-22.233a3.182 3.182 0 01-3.188-3.176 3.182 3.182 0 013.188-3.177 3.182 3.182 0 013.189 3.177 3.182 3.182 0 01-3.189 3.176zM4.088 228.07a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176zm0-22.234a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.176 3.182 3.182 0 013.188 3.176 3.182 3.182 0 01-3.188 3.176zm0-22.233a3.182 3.182 0 01-3.189-3.176 3.182 3.182 0 013.189-3.177 3.182 3.182 0 013.188 3.177 3.182 3.182 0 01-3.188 3.176z"
                />
              </svg>
              <div class="fc-ebook-wrap">
                <div class="fc-ebook-card">
                  <div class="fc-ebook-thumbnail">
                    <img src="/images/restart-operations.jpg" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xs-12 fc-right-wrap">
              <div class="fc-ebook-desc">
                <h3>Restart your properties confidently with REbuild</h3>
                <p>
                  In these challenging times, operate properties with agility and put yourself in a position to get immediate visibility and control over your portfolio.
                </p>
                <a class="fc-ebook-button" id="drift-open-chat">
                  Get the REbuild Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
        <svg
          class="ebook-horizontal"
          xmlns="http://www.w3.org/2000/svg"
          width="243"
          height="69"
        >
          <path
            fill="#D2CBE5"
            fill-rule="evenodd"
            d="M129 105.898a3.091 3.091 0 013.081-3.101 3.091 3.091 0 013.081 3.101 3.091 3.091 0 01-3.08 3.102 3.091 3.091 0 01-3.082-3.102zm21.568 0a3.091 3.091 0 013.08-3.101 3.091 3.091 0 013.082 3.101 3.091 3.091 0 01-3.081 3.102 3.091 3.091 0 01-3.081-3.102zm21.567 0a3.091 3.091 0 013.081-3.101 3.091 3.091 0 013.081 3.101 3.091 3.091 0 01-3.08 3.102 3.091 3.091 0 01-3.082-3.102zm21.568 0a3.091 3.091 0 013.08-3.101 3.091 3.091 0 013.082 3.101 3.091 3.091 0 01-3.081 3.102 3.091 3.091 0 01-3.081-3.102zm21.567 0a3.091 3.091 0 013.081-3.101 3.091 3.091 0 013.081 3.101 3.091 3.091 0 01-3.08 3.102 3.091 3.091 0 01-3.082-3.102zm21.568 0a3.091 3.091 0 013.08-3.101 3.091 3.091 0 013.082 3.101 3.091 3.091 0 01-3.081 3.102 3.091 3.091 0 01-3.081-3.102zM129 85.516a3.091 3.091 0 013.081-3.101 3.091 3.091 0 013.081 3.101 3.091 3.091 0 01-3.08 3.102A3.091 3.091 0 01129 85.516zm21.568 0a3.091 3.091 0 013.08-3.101 3.091 3.091 0 013.082 3.101 3.091 3.091 0 01-3.081 3.102 3.091 3.091 0 01-3.081-3.102zm21.567 0a3.091 3.091 0 013.081-3.101 3.091 3.091 0 013.081 3.101 3.091 3.091 0 01-3.08 3.102 3.091 3.091 0 01-3.082-3.102zm21.568 0a3.091 3.091 0 013.08-3.101 3.091 3.091 0 013.082 3.101 3.091 3.091 0 01-3.081 3.102 3.091 3.091 0 01-3.081-3.102zm21.567 0a3.091 3.091 0 013.081-3.101 3.091 3.091 0 013.081 3.101 3.091 3.091 0 01-3.08 3.102 3.091 3.091 0 01-3.082-3.102zm21.568 0a3.091 3.091 0 013.08-3.101A3.091 3.091 0 01243 85.516a3.091 3.091 0 01-3.081 3.102 3.091 3.091 0 01-3.081-3.102zM129 65.134a3.091 3.091 0 013.081-3.101 3.091 3.091 0 013.081 3.101 3.091 3.091 0 01-3.08 3.102A3.091 3.091 0 01129 65.134zm21.568 0a3.091 3.091 0 013.08-3.101 3.091 3.091 0 013.082 3.101 3.091 3.091 0 01-3.081 3.102 3.091 3.091 0 01-3.081-3.102zm21.567 0a3.091 3.091 0 013.081-3.101 3.091 3.091 0 013.081 3.101 3.091 3.091 0 01-3.08 3.102 3.091 3.091 0 01-3.082-3.102zm21.568 0a3.091 3.091 0 013.08-3.101 3.091 3.091 0 013.082 3.101 3.091 3.091 0 01-3.081 3.102 3.091 3.091 0 01-3.081-3.102zm21.567 0a3.091 3.091 0 013.081-3.101 3.091 3.091 0 013.081 3.101 3.091 3.091 0 01-3.08 3.102 3.091 3.091 0 01-3.082-3.102zm21.568 0a3.091 3.091 0 013.08-3.101A3.091 3.091 0 01243 65.134a3.091 3.091 0 01-3.081 3.102 3.091 3.091 0 01-3.081-3.102zM129 43.866a3.091 3.091 0 013.081-3.102 3.091 3.091 0 013.081 3.102 3.091 3.091 0 01-3.08 3.101A3.091 3.091 0 01129 43.866zm21.568 0a3.091 3.091 0 013.08-3.102 3.091 3.091 0 013.082 3.102 3.091 3.091 0 01-3.081 3.101 3.091 3.091 0 01-3.081-3.101zm21.567 0a3.091 3.091 0 013.081-3.102 3.091 3.091 0 013.081 3.102 3.091 3.091 0 01-3.08 3.101 3.091 3.091 0 01-3.082-3.101zm21.568 0a3.091 3.091 0 013.08-3.102 3.091 3.091 0 013.082 3.102 3.091 3.091 0 01-3.081 3.101 3.091 3.091 0 01-3.081-3.101zm21.567 0a3.091 3.091 0 013.081-3.102 3.091 3.091 0 013.081 3.102 3.091 3.091 0 01-3.08 3.101 3.091 3.091 0 01-3.082-3.101zm21.568 0a3.091 3.091 0 013.08-3.102A3.091 3.091 0 01243 43.866a3.091 3.091 0 01-3.081 3.101 3.091 3.091 0 01-3.081-3.101zM129 23.484a3.091 3.091 0 013.081-3.102 3.091 3.091 0 013.081 3.102 3.091 3.091 0 01-3.08 3.101A3.091 3.091 0 01129 23.484zm21.568 0a3.091 3.091 0 013.08-3.102 3.091 3.091 0 013.082 3.102 3.091 3.091 0 01-3.081 3.101 3.091 3.091 0 01-3.081-3.101zm21.567 0a3.091 3.091 0 013.081-3.102 3.091 3.091 0 013.081 3.102 3.091 3.091 0 01-3.08 3.101 3.091 3.091 0 01-3.082-3.101zm21.568 0a3.091 3.091 0 013.08-3.102 3.091 3.091 0 013.082 3.102 3.091 3.091 0 01-3.081 3.101 3.091 3.091 0 01-3.081-3.101zm21.567 0a3.091 3.091 0 013.081-3.102 3.091 3.091 0 013.081 3.102 3.091 3.091 0 01-3.08 3.101 3.091 3.091 0 01-3.082-3.101zm21.568 0a3.091 3.091 0 013.08-3.102A3.091 3.091 0 01243 23.484a3.091 3.091 0 01-3.081 3.101 3.091 3.091 0 01-3.081-3.101zM129 3.102A3.091 3.091 0 01132.081 0a3.091 3.091 0 013.081 3.102 3.091 3.091 0 01-3.08 3.101A3.091 3.091 0 01129 3.102zm21.568 0A3.091 3.091 0 01153.648 0a3.091 3.091 0 013.082 3.102 3.091 3.091 0 01-3.081 3.101 3.091 3.091 0 01-3.081-3.101zm21.567 0A3.091 3.091 0 01175.216 0a3.091 3.091 0 013.081 3.102 3.091 3.091 0 01-3.08 3.101 3.091 3.091 0 01-3.082-3.101zm21.568 0A3.091 3.091 0 01196.783 0a3.091 3.091 0 013.082 3.102 3.091 3.091 0 01-3.081 3.101 3.091 3.091 0 01-3.081-3.101zm21.567 0A3.091 3.091 0 01218.351 0a3.091 3.091 0 013.081 3.102 3.091 3.091 0 01-3.08 3.101 3.091 3.091 0 01-3.082-3.101zm21.568 0A3.091 3.091 0 01239.918 0 3.091 3.091 0 01243 3.102a3.091 3.091 0 01-3.081 3.101 3.091 3.091 0 01-3.081-3.101zM0 105.898a3.091 3.091 0 013.081-3.101 3.091 3.091 0 013.081 3.101A3.091 3.091 0 013.082 109 3.091 3.091 0 010 105.898zm21.568 0a3.091 3.091 0 013.08-3.101 3.091 3.091 0 013.082 3.101A3.091 3.091 0 0124.649 109a3.091 3.091 0 01-3.081-3.102zm21.567 0a3.091 3.091 0 013.081-3.101 3.091 3.091 0 013.081 3.101 3.091 3.091 0 01-3.08 3.102 3.091 3.091 0 01-3.082-3.102zm21.568 0a3.091 3.091 0 013.08-3.101 3.091 3.091 0 013.082 3.101A3.091 3.091 0 0167.784 109a3.091 3.091 0 01-3.081-3.102zm21.567 0a3.091 3.091 0 013.081-3.101 3.091 3.091 0 013.081 3.101 3.091 3.091 0 01-3.08 3.102 3.091 3.091 0 01-3.082-3.102zm21.568 0a3.091 3.091 0 013.08-3.101 3.091 3.091 0 013.082 3.101 3.091 3.091 0 01-3.081 3.102 3.091 3.091 0 01-3.081-3.102zM0 85.516a3.091 3.091 0 013.081-3.101 3.091 3.091 0 013.081 3.101 3.091 3.091 0 01-3.08 3.102A3.091 3.091 0 010 85.516zm21.568 0a3.091 3.091 0 013.08-3.101 3.091 3.091 0 013.082 3.101 3.091 3.091 0 01-3.081 3.102 3.091 3.091 0 01-3.081-3.102zm21.567 0a3.091 3.091 0 013.081-3.101 3.091 3.091 0 013.081 3.101 3.091 3.091 0 01-3.08 3.102 3.091 3.091 0 01-3.082-3.102zm21.568 0a3.091 3.091 0 013.08-3.101 3.091 3.091 0 013.082 3.101 3.091 3.091 0 01-3.081 3.102 3.091 3.091 0 01-3.081-3.102zm21.567 0a3.091 3.091 0 013.081-3.101 3.091 3.091 0 013.081 3.101 3.091 3.091 0 01-3.08 3.102 3.091 3.091 0 01-3.082-3.102zm21.568 0a3.091 3.091 0 013.08-3.101A3.091 3.091 0 01114 85.516a3.091 3.091 0 01-3.081 3.102 3.091 3.091 0 01-3.081-3.102zM0 65.134a3.091 3.091 0 013.081-3.101 3.091 3.091 0 013.081 3.101 3.091 3.091 0 01-3.08 3.102A3.091 3.091 0 010 65.134zm21.568 0a3.091 3.091 0 013.08-3.101 3.091 3.091 0 013.082 3.101 3.091 3.091 0 01-3.081 3.102 3.091 3.091 0 01-3.081-3.102zm21.567 0a3.091 3.091 0 013.081-3.101 3.091 3.091 0 013.081 3.101 3.091 3.091 0 01-3.08 3.102 3.091 3.091 0 01-3.082-3.102zm21.568 0a3.091 3.091 0 013.08-3.101 3.091 3.091 0 013.082 3.101 3.091 3.091 0 01-3.081 3.102 3.091 3.091 0 01-3.081-3.102zm21.567 0a3.091 3.091 0 013.081-3.101 3.091 3.091 0 013.081 3.101 3.091 3.091 0 01-3.08 3.102 3.091 3.091 0 01-3.082-3.102zm21.568 0a3.091 3.091 0 013.08-3.101A3.091 3.091 0 01114 65.134a3.091 3.091 0 01-3.081 3.102 3.091 3.091 0 01-3.081-3.102zM0 43.866a3.091 3.091 0 013.081-3.102 3.091 3.091 0 013.081 3.102 3.091 3.091 0 01-3.08 3.101A3.091 3.091 0 010 43.866zm21.568 0a3.091 3.091 0 013.08-3.102 3.091 3.091 0 013.082 3.102 3.091 3.091 0 01-3.081 3.101 3.091 3.091 0 01-3.081-3.101zm21.567 0a3.091 3.091 0 013.081-3.102 3.091 3.091 0 013.081 3.102 3.091 3.091 0 01-3.08 3.101 3.091 3.091 0 01-3.082-3.101zm21.568 0a3.091 3.091 0 013.08-3.102 3.091 3.091 0 013.082 3.102 3.091 3.091 0 01-3.081 3.101 3.091 3.091 0 01-3.081-3.101zm21.567 0a3.091 3.091 0 013.081-3.102 3.091 3.091 0 013.081 3.102 3.091 3.091 0 01-3.08 3.101 3.091 3.091 0 01-3.082-3.101zm21.568 0a3.091 3.091 0 013.08-3.102A3.091 3.091 0 01114 43.866a3.091 3.091 0 01-3.081 3.101 3.091 3.091 0 01-3.081-3.101zM0 23.484a3.091 3.091 0 013.081-3.102 3.091 3.091 0 013.081 3.102 3.091 3.091 0 01-3.08 3.101A3.091 3.091 0 010 23.484zm21.568 0a3.091 3.091 0 013.08-3.102 3.091 3.091 0 013.082 3.102 3.091 3.091 0 01-3.081 3.101 3.091 3.091 0 01-3.081-3.101zm21.567 0a3.091 3.091 0 013.081-3.102 3.091 3.091 0 013.081 3.102 3.091 3.091 0 01-3.08 3.101 3.091 3.091 0 01-3.082-3.101zm21.568 0a3.091 3.091 0 013.08-3.102 3.091 3.091 0 013.082 3.102 3.091 3.091 0 01-3.081 3.101 3.091 3.091 0 01-3.081-3.101zm21.567 0a3.091 3.091 0 013.081-3.102 3.091 3.091 0 013.081 3.102 3.091 3.091 0 01-3.08 3.101 3.091 3.091 0 01-3.082-3.101zm21.568 0a3.091 3.091 0 013.08-3.102A3.091 3.091 0 01114 23.484a3.091 3.091 0 01-3.081 3.101 3.091 3.091 0 01-3.081-3.101zM0 3.102A3.091 3.091 0 013.081 0a3.091 3.091 0 013.081 3.102 3.091 3.091 0 01-3.08 3.101A3.091 3.091 0 010 3.102zm21.568 0A3.091 3.091 0 0124.648 0a3.091 3.091 0 013.082 3.102 3.091 3.091 0 01-3.081 3.101 3.091 3.091 0 01-3.081-3.101zm21.567 0A3.091 3.091 0 0146.216 0a3.091 3.091 0 013.081 3.102 3.091 3.091 0 01-3.08 3.101 3.091 3.091 0 01-3.082-3.101zm21.568 0A3.091 3.091 0 0167.783 0a3.091 3.091 0 013.082 3.102 3.091 3.091 0 01-3.081 3.101 3.091 3.091 0 01-3.081-3.101zm21.567 0A3.091 3.091 0 0189.351 0a3.091 3.091 0 013.081 3.102 3.091 3.091 0 01-3.08 3.101 3.091 3.091 0 01-3.082-3.101zm21.568 0A3.091 3.091 0 01110.918 0 3.091 3.091 0 01114 3.102a3.091 3.091 0 01-3.081 3.101 3.091 3.091 0 01-3.081-3.101z"
            opacity=".3"
          />
        </svg>
      </section>
       <div class="clear-both fc-smartae-cycle-con">
               <div class="fc-case-challenge">
                  <div class="fc-container">
                     <div></div>
                     <div class="max-width707 width-center">
                         <div class="black-txt2 f30 fc-workplace-subhead" style="margin-top: 30px;">Smoothly transition your operations with data-driven solutions
                     </div>
                        <div class="pT10 black-txt2 f18 mobile-18 fc-case-text-rebuild">
                            With REbuild, you have a powerful set of tools to help your teams optimize building operations, turn insights to avenues for cost reduction & operational efficiency - in all circumstances.
                        </div>
                        <div class="toolkit-container">
                            <div class="row">
                              <nuxt-link to="/rebuild#hygiene-mgt" id="hygiene"><div class="col-lg-4 col-md-3 toolkit-box">
                                 <div class="toolkit-content">
                                    <img src="/images/rebuild/icons/hygiene.svg" alt="" id="image1" class="toolkit-img">
                                    <p class="toolkit-txt">Hygiene Management</p> 
                                 </div>
                              </div></nuxt-link>
                              <nuxt-link to="/rebuild#visitor-mgt" id="visitor"><div class="col-lg-4 col-md-3 text-center toolkit-box">
                                 <div class="toolkit-content">
                                    <img src="/images/rebuild/icons/visitor.svg" alt="" id="image2" class="toolkit-img">
                                    <p class="toolkit-txt">Visitor Management </p>
                                 </div>
                              </div></nuxt-link>
                              <nuxt-link to="/rebuild#centralised-opt" id="centralised"><div class="col-lg-4 col-md-3 text-center toolkit-box">
                                 <div class="toolkit-content">
                                    <img src="/images/rebuild/icons/centralised.svg" alt="" id="image3" class="toolkit-img">
                                    <p class="toolkit-txt">Portfolio Analytics & Compliance</p>
                                 </div>
                              </div></nuxt-link>
                           </div>
                           <div class="row mobile-only-top-margin">
                              <nuxt-link to="/rebuild#dynamic-hvac" id="dynamic"><div class="col-md-6 text-center toolkit-box">
                                  <div class="toolkit-content">
                                    <img src="/images/rebuild/icons/dynamic_hvac.svg" alt="" id="image4" class="toolkit-img">
                                    <p class="toolkit-txt">Portfolio Automation</p>
                                 </div>
                              </div></nuxt-link>
                              <nuxt-link to="/rebuild#touchless-con" id="touchless"><div class="col-md-6 text-center toolkit-box">
                                  <div class="toolkit-content">
                                    <img src="/images/rebuild/icons/touchless.svg" alt="" id="image5" class="toolkit-img">
                                    <p class="toolkit-txt">Touchless Occupant Controls</p>
                                 </div>
                              </div></nuxt-link>
                              <nuxt-link to="/rebuild#command-center" id="command"><div class="col-md-4 text-center toolkit-box">
                                 <div class="toolkit-content">
                                    <img src="/images/rebuild/icons/command_center.svg" alt="" id="image6" class="toolkit-img">
                                    <p class="toolkit-txt">Operational Command Center</p>
                                 </div>
                              </div></nuxt-link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="home-input-sec txt-center mg-60"><a href="/rebuild" class="try-demo-btn mobile-try-demo-btn try-demo-btn-2">EXPLORE REBUILD
               </a></div>
            </div>
             
          <div class="clear-both fc-smartae-cycle-con bg-grey-testimonial">
            <div class="fc-case-challenge-rebuild">
               <div class="fc-container-testimonial">
                  <div class="row">
                     <div class="col-md-6">
                        <div class="rebuild-testimonial-wrapper">
                        <div class="rebuild-testimonial-txt">“Facilio has been immensely supportive in scaling our operations during tough times. Their REbuild toolkit provided granular visibility into our portfolio performance, allowing us to control expenses and operate efficiently during this hour. The transition was unbelievably smooth to the new operating guidelines.”</div>
                        <div class="testimonial-name">Sumith Sukumaran</div>
                        <div class="testimonial-company">Operations Head, Quality Group</div>
                     </div></div>
                     <div class="col-md-6">
                        <img src="/images/rebuild/sumith.png" alt="">
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="workplace-feature-2">
            <div class="container w-feature-wrapper">
               <div class="w-feature-head-center faq-txt">
                 Frequently asked questions
               </div>
               <div id="accordion" class="panel-group fc-accordion">
                  <div class="panel fc-panel">
                     <div data-toggle="collapse" data-parent="#accordion" href="#collapse1" class="panel-heading fc-panel-heading">
                        <img src="/images/rebuild/arrow.svg" alt="" class="rebuild-acc-arrow">
                        <h4 class="panel-title fc-acc-head">What is REbuild?</h4>
                     </div>
                     <div id="collapse1" class="panel-collapse collapse in">
                        <div class="panel-body fc-acc-desc">REbuild from Facilio is a remote operations toolkit that equips property teams for an impactful post-pandemic response. It enables properties to transition building maintenance to the new guidelines, remotely operate legacy building systems, and provide real-time support for tenants using touchless controls.</div>
                     </div>
                  </div>
                  <div class="panel fc-panel">
                     <div data-toggle="collapse" data-parent="#accordion" href="#collapse2" class="panel-heading fc-panel-heading">
                        <img src="/images/rebuild/arrow.svg" alt="" class="rebuild-acc-arrow">
                        <h4 class="panel-title fc-acc-head">Why do you need REbuild now? Who can benefit from it?</h4>
                     </div>
                     <div id="collapse2" class="panel-collapse collapse">
                        <div class="panel-body fc-acc-desc"><p>
                          With the largely unfamiliar remote environment being the new normal, property management is struggling to cope against an economic standstill with a lean workforce. The need to trim costs while improving efficiency and aligning to the new operating guidelines has put property teams across the globe in pressure. 
                          </p>
                          <p>With REbuild, owners and operators now have a robust ready-to-use platform to drive efficiency while expanding profit margins. Built for augmenting remote operations, REbuild serves multiple real estate stakeholders -</p>
                          <ul>
                            <li>Impact reporting and remote visibility for executives / owners </li>
                            <li>Virtual command centre and supervisory controls for property managers</li>
                            <li>Remote operations & mobile maintenance for agile workforce</li>
                            <li>Shareable real-time reports and touchless engagement for tenants</li>
                          </ul>
                          </div>
                     </div>
                  </div>
                  <div class="panel fc-panel">
                     <div data-toggle="collapse" data-parent="#accordion" href="#collapse3" class="panel-heading fc-panel-heading">
                        <img src="/images/rebuild/arrow.svg" alt="" class="rebuild-acc-arrow">
                        <h4 class="panel-title fc-acc-head">I already have a BAS software, why do I need REbuild?</h4>
                     </div>
                     <div id="collapse3" class="panel-collapse collapse">
                        <div class="panel-body fc-acc-desc"><p>Unlike traditional BAS software, REbuild dissolves operational silos, connects multi-vendor automation systems and optimizes ops performance at the portfolio-level. Furthermore, it</p>
                        <ul>
                          <li>Consolidates portfolio-wide buildings data on Facilio’s centralized platform</li>
                          <li>Seamlessly moves BAS operations from on-site to cloud with virtual command control center</li>
                          <li>Augments multi-vendor legacy systems using a proprietary IoT edge</li>
                          <li>Turns data to insights with real-time performance analytics</li>
                          <li>Has extensive integration and customization capabilities</li>
                          <li>Designed for quick and smooth onboarding</li>
                        </ul>
</div>
                     </div>
                  </div>
                  <div class="panel fc-panel">
                     <div data-toggle="collapse" data-parent="#accordion" href="#collapse4" class="panel-heading fc-panel-heading">
                        <img src="/images/rebuild/arrow.svg" alt="" class="rebuild-acc-arrow">
                        <h4 class="panel-title fc-acc-head">Can I integrate REbuild with existing building systems?</h4>
                     </div>
                     <div id="collapse4" class="panel-collapse collapse">
                        <div class="panel-body fc-acc-desc">Yes, you can. REbuild is designed to seamlessly integrate with multi-vendor building systems and 3rd party apps. There is absolutely no need to uproot your existing infrastructure.</div>
                     </div>
                  </div>
                   <div class="panel fc-panel">
                     <div data-toggle="collapse" data-parent="#accordion" href="#collapse5" class="panel-heading fc-panel-heading">
                        <img src="/images/rebuild/arrow.svg" alt="" class="rebuild-acc-arrow">
                        <h4 class="panel-title fc-acc-head">Do I need any additional hardware to deploy REbuild?</h4>
                     </div>
                     <div id="collapse5" class="panel-collapse collapse">
                        <div class="panel-body fc-acc-desc">No. You do not need any additional hardware to deploy REbuild. REbuild is fully hardware agnostic and takes a pure software-approach to setup remote connectivity and enable cloud-native remote access to building ops.</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="home-input-sec txt-center"><a href="/rebuild" class="try-demo-btn mobile-try-demo-btn try-demo-btn-2">EXPLORE REBUILD
               </a></div>
    </div>
  <Footer />

  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default {
  components: {
    Navbar, Footer
  },
  mounted: function() {
        $(document).ready(function(){
           let chatHandle = document.getElementById('drift-open-chat');
           chatHandle.onclick = function(){
              drift.on("ready", function(api) {
  drift.api.startInteraction({ interactionId: 196775, goToConversation: true }) /* <-- your playbook's interaction ID here */
});
           }
         $("#hygiene").mouseover(function(){
            $("#image1").attr("src","/images/rebuild/icons/hover/hygiene.svg");
         });
         $("#hygiene").mouseleave(function(){
            $("#image1").attr("src","/images/rebuild/icons/hygiene.svg");
         });
          $("#visitor").mouseover(function(){
            $("#image2").attr("src","/images/rebuild/icons/hover/visitor.svg");
         });
         $("#visitor").mouseleave(function(){
            $("#image2").attr("src","/images/rebuild/icons/visitor.svg");
         });
           $("#centralised").mouseover(function(){
            $("#image3").attr("src","/images/rebuild/icons/hover/centralised.svg");
         });
         $("#centralised").mouseleave(function(){
            $("#image3").attr("src","/images/rebuild/icons/centralised.svg");
         });
           $("#dynamic").mouseover(function(){
            $("#image4").attr("src","/images/rebuild/icons/hover/dynamic_hvac.svg");
         });
         $("#dynamic").mouseleave(function(){
            $("#image4").attr("src","/images/rebuild/icons/dynamic_hvac.svg");
         });
         $("#touchless").mouseover(function(){
            $("#image5").attr("src","/images/rebuild/icons/hover/touchless.svg");
         });
         $("#touchless").mouseleave(function(){
            $("#image5").attr("src","/images/rebuild/icons/touchless.svg");
         });
         $("#command").mouseover(function(){
            $("#image6").attr("src","/images/rebuild/icons/hover/command_center.svg");
         });
         $("#command").mouseleave(function(){
            $("#image6").attr("src","/images/rebuild/icons/command_center.svg");
         });
         });
      },
  head() {
    return {
      title: "REbuild from Facilio | Solutions for reopening properties",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Restart property operations with confidence and smoothly transition to the new normal. Register for a free demo."
        },
        {
          hid: "fb-share-title",
          property: "og:title",
          content: "REbuild from Facilio | Solutions for reopening properties"
        },
        {
          hid: "fb-share-description",
          property: "og:description",
          content:
            "Restart property operations with confidence and smoothly transition to the new normal. Register for a free demo."
        },
        {
          hid: "fb-share-image",
          property: "og:image",
          content: "https://facilio.com/images/og-images/restart-operations.png"
        },
        {
          hid: "fb-share-url",
          property: "og:url",
          content:
            "https://facilio.com/ebooks/state-of-cre-operations-2020-report"
        },
        {
          hid: "twitter-meta",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "REbuild from Facilio | Solutions for reopening properties"
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content:
            "Restart property operations with confidence and smoothly transition to the new normal. Register for a free demo."
        },
        {
          hid: "twitter-image",
          name: "twitter:image",
          content: "https://facilio.com/images/og-images/restart-operations.png"
        },
        {
          hid: "twitter-url",
          name: "twitter:url",
          content:
            "https://facilio.com/ebooks/state-of-cre-operations-2020-report"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://facilio.com/ebooks/state-of-cre-operations-2020-report"
        }
      ],
      script: [
        { src: "../js/page.js" },
        { src: "../js/waypoints.min.js" },
        { src: "../js/includes.js" }
      ]
    };
  }
};
</script>

<style scoped>
    .txt-center{
        text-align: center;
    }
    .mg-60{
        margin-top: 60px;
    }
    
   .rebuild-list-container{
      margin-top: 30px;
   }
   .rebuild-acc-arrow{
      padding: 0px 15px;
   }
   .product-img{
      margin-top: 10%;
   }
   .w-feature-head-rebuild{
   font-size: 40px;
   }
   .w-feature-head-rebuild,.w-feature-second-head-rebuid {
   font-family: Merriweather;
   max-width: 800px;
   margin: 0 auto;
   font-weight: 300;
   line-height: 51px;
   text-align: center;
   color: #181b3b;
   }
   .w-feature-second-head-rebuid{
   font-size: 32px;
   }
   .toolkit-box{
      width: 204px;
      height: 140px;
      background-color: #ffffff;
      margin: 20px;
      text-align: center;
      color: #000000;
   }
 
   .toolkit-txt{
      margin-top: 10px;
   }
   .toolkit-content{
      padding: 15px;
      font-family: ProximaNovaSemiBold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: 16px;
      font-weight: normal;
      line-height: normal;
      margin-top: 10px;
   }
     .toolkit-box:hover{
       box-shadow: 0 9px 38px 8px rgba(0, 0, 0, 0.1);
       background-color: #3269d6; 
       color: #ffffff !important;
    -webkit-transform: translatey(-4px);
    transform: translatey(-4px);
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    text-decoration: none;
   }
   .sec-rebuild-wrapper{
      padding: 40px;
      max-width: 100%;
   }
   .tick-circle{
      padding-right: 18px;
   }
   .try-link{
      margin-bottom: 60px;
   }
   .pT10{
      padding-top: 10px;
   }
   .tick-circle-img{
      width: 17px;
   }
   .w-col-wrapper {
      padding: 40px 0px !important;
   }
   .rebuild-datasheet-btn{
      margin-top: 41px;
      cursor: pointer;
      text-align: center;
   }
   .ebook-img{
      text-align: center;
      margin-top: 15px;
   }
   .ebook-img-inner{
      margin-top: -20px;
   }
   .list-blog-items{
    margin-top: 45px;
    font-family: ProximaNova, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #9aceff;
    cursor: pointer;
    text-align: center;
    font-size: 18px;
    color: #181b3b;
    font-weight: 400;
    line-height: 1.4;
   }
   .list-blog-items:hover{
      color: #ff3184;
   }
   .right-pdf-sec{
      padding: 40px 20px 20px 20px;
   }
   .left-pdf-sec{
    padding: 40px 20px 0px 20px;
   }
   .toolkit-img{
      width: 30px;
      height: 33px;
   }
   .tag{
      margin-left: 15px;
      color: #000000;
      background-color: #c1f8ff;
      border: 1px solid #c1f8ff;
      border-radius: 5px;
      padding: 2px 10px;
      font-family: ProximaNova, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
   }
   .wrap-feature-div{
      width: 47%;
   }
   .max-width707{
          max-width: 707px;
         width: 100%;
   }
   .seize-sec{
      padding: 66px 0px;
   }
   .blog-item-container{
      margin-bottom: 20px;
   }
   .fc-container-testimonial{
    max-width: 1129px;
    width: 100%;
    margin: 0 auto;
   }
   .fc-container-rebuild{
    max-width: 1150px;
    width: 100%;
    margin: 0 auto;
   }
   .fc-speaker-card{
      position: relative;
    max-width: 600px;
    margin: 48px auto 0;
   }
   .fc-speaker-card:hover{
      opacity: .9;
   }
   .fc-case-challenge-rebuild {
   padding: 85px 15px 0px 15px;
}
   .fc-smartae-cycle-con {
      background-color: #f2f7fe;
   }
   .bg-grey-testimonial{
      background-color: #fbfafe;
   }
  
   .bg-grey{
      padding: 25px 25px 0px 25px;
      background-color: #fbfafe;
   }
   .w-feature-wrapper{
      padding: 0;
   }
   .fc-wrapper-pad {
      padding: 40px 0px;
   }
   .fc-video-txt-rebuild{
      font-family: ProximaNova, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: 18px;
      line-height: 1.56;
      color: #181b3b;
      padding-bottom: 25px;
      margin-top: 14px;
   }
   .fc-workplace-table-text{
       font-family: ProximaNovaBold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: 38px;
      font-weight: bold;
      color: #181b3b;
   }
   .fc-workplace-table-des{
      font-family: ProximaNova, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: 18px;
      line-height: 1.44;
      color: #181b3b;
   }
   .fc-workplace-rebuild-head{
   font-family: ProximaNovaBold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
   font-size: 32px;
   font-weight: bold;
   color: #181b3b;
   margin-bottom: 20px;
   }
   .blue-underline{
      border-bottom: 3px solid #89e6ee;
      padding-bottom: 3px;
   }
   .rebuild-cta{
      text-transform: uppercase;
      margin-top: 85px;
   text-align: center;
   }
   .w-feature-head-center{
      line-height: 1.28;
   }
   .cta-feature-rebuild{
   font-family: ProximaNovaSemiBold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
   font-size: 20px;
   font-weight: bold;
   color: #181b3b;
   text-align: center;
   padding-bottom: 14px;
   }
   .rebuild-operations-banner{
   width: 100%;
   text-align: center;
   background-color: #fafafa;
   }
   .rebuild-list-sec{
      font-family: ProximaNova, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: 17px;
      font-weight: 450;
      line-height: 2.1;
      color: #181b3b;
   }
   .rebuild-feature-txt{
   text-align: center;
   margin:0 auto;
   max-width: 900px;
   font-family: ProximaNova, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
   font-size: 18px;
   font-weight: normal;
   line-height: 1.56;
   letter-spacing: normal;
   color: #181b3b;
   padding: 10px 0px 20px 0px;
   }
   .fc-workplace-rebuild-subhead{
   font-family: Merriweather;
   font-size: 32px;
   font-weight: normal;
   color: #181b3b;
   margin-bottom: 10px;
   margin-top: 25px;
   }
   .rebuild-feature-head{
   text-align: center;
   margin:0 auto;
   max-width: 900px;
   font-size: 38px;
   font-family: ProximaNovaBold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
   font-weight: 700;
   line-height: 1.21;
   color: #181b3b;
   padding-top: 40px;
   padding-bottom: 10px;
   }
   .fc-case-text-rebuild{
   font-family: ProximaNovaRgRegular, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
   font-size: 18px;
   font-weight: 400;
   line-height: 1.56;
   letter-spacing: normal;
   color: #14132e;
   margin-bottom: 30px;
   }
   .rebuild-testimonial-txt{
   font-family: Merriweather;
   font-size: 20px;
   line-height: 1.8;
   color: #181b3b;
   text-align: left;
       font-weight: 500;
   }
   .testimonial-name{
   font-family: ProximaNova, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
   font-size: 20px;
   font-weight: 600;
   color: #000000;
   text-align: left;
   padding: 20px 0px 10px 0px;
   }
   .testimonial-company{
   font-family: ProximaNova, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
   font-size: 18px;
   font-weight: 600;
   color: #87879e;
   text-align: left;
   }
   .rebuildPink{
   font-family: ProximaNova, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
   font-size: 18px;
   font-weight: 600;
   text-align: center;
   color: #ff3184;
   padding-top: 20px;
   }
  .underline{
     color: #ff3184;
     border-bottom: 1px solid #ff3184;
     padding-bottom: 3px;
  }
   .fc-smartae-cycle-con {
   padding: 0px;
   }
   .intro-txt-rebuild{
   opacity: 0.5;
   font-family: ProximaNovaBold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
   font-size: 14px;
   font-weight: 600;
   letter-spacing: 3px;
   text-align: center;
   color: #ffffff;
   text-transform: uppercase;
   margin-top: 6rem;
   margin-bottom: 5px;
   }
   .rebuild-head-colored{
      text-align: center;
   }
   .rebuild-head-colored::after{
   content: '';
   height: 2px;
   width: 3%;
   background: #6e52d2;
   position: absolute;
   left: calc(50% - 2%);
   bottom: 63%;
   }
  
  .fc-circular-voilet-btn {
    border: none;
    text-decoration: none;
    border-radius: 30px;
    background-color: #483a9e;
    padding: 20px;
    text-align: center;
    max-width: 328px;
    margin-top: 15px;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
    font-family: ProximaNova, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    letter-spacing: 1px!important;
}
   .remodel-txt-main,.remodel-text-sub{
   text-align: center;
   color: #ffffff;
   }
   .remodel-txt-main{
   font-family: ProximaNovaBold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
   font-size: 46px;
   font-weight: bold;
   line-height: 1.09;
   letter-spacing: 0.2px;
    width: 100%;
    margin: 0 auto;
    margin-top: 63px;
   }
   .remodel-text-sub{
   font-family: ProximaNova, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
   font-size: 18px;
   line-height: 1.44;
    width: 38%;
    margin: 0 auto;
   margin-top: 32px;
   }
   .fc-button-collapsive {
      margin-top: 10px;
   }
   .fc-smartae-home-banner{
   margin: 0px;
   }
   .pad-right-10{
   padding-right: 10%;
   }
   .bg-blue{
   background-color: #c1f8ff;
   padding: 2px;
   }
   .rebuildBluearrow-center{
   text-align: center;
   }
   .rebuildBluearrow-left{
   padding-top: 40px;
   margin-bottom: 30px;
   }
   .rebuildBluearrow-center,.rebuildBluearrow-left{
   font-family: ProximaNovaSemiBold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
   font-size: 18px;
   font-weight: 600;
   color:#3478f6;
   }
   .rebuildBluearrow-center:hover::after,.rebuildBluearrow-left:hover::after{
          -webkit-transform: translateX(4px);
         transform: translateX(4px);
   }
   .rebuildBluearrow-center::after,.rebuildBluearrow-left::after{
   content: "";
   display: inline-block;
   width: 15px;
   height: 15px;
   position: absolute;
   margin-top: 3px;
   margin-left: 10px;
   opacity: 1;
   -webkit-transition: 0.3s ease;
   transition: 0.3s ease;
   background: url(/images/icons/light-blue-arrow.svg) center/contain no-repeat;
   }
   .blue-pdf-head{
   font-family: ProximaNovaBold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
   font-size: 24px;
   color: #3a2c90;
   }
   
   @media only screen and (max-width: 600px) {
    .rebuild-head-colored::after {
      width: 9%;
      bottom: 66%;
      left: calc(50% - 4%);
   }
   .remodel-text-sub{
          width: 61%;
   }
   }
    @media only screen and (max-width: 470px) {
.remodel-txt-main{
   width: 100%;
}
.remodel-text-sub{
   width: 84%;
}
.rebuild-head-colored::after {
    width: 9%;
    bottom: 63%;
    left: calc(50% - 6%);
}
    }
   @media only screen and (max-width: 1024px) {
      .max-width707{
    max-width: 727px;
    width: 100%;
}
      .toolkit-box{
        width: 28%;
         height: auto;
         padding: 40px;
      }
      .fc-smartae-cycle-con img {
         width: auto;
      }
   }
   @media only screen and (min-width: 768px){
       .grey-right-pad{
      padding-bottom: 27%;
   }
.learn-more-txt{
   text-align: center;
   margin-top: 80px;margin-bottom: 50px;
}
      .command-center-image{
         margin-top: 20%;
      }
       .blue-patch{
      /* background-color:#3c2a98; */
      display: block;
      }
      .section-rebuild-wrapper{
             margin: 60px;
      }
      .fc-workplace-table-text{
         text-align: right;
      }    
   }

   @media only screen and (max-width: 768px) {
       .faq-txt{
      margin-left:10px;
   }
      .max-width707 {
         text-align: left;
      }
            .seize-sec {
    padding: 0px;
}
.w-col-wrapper{
   padding: 0px;
}
.learn-more-txt{
    padding: 40px;
}
.w-feature-head-center {
    text-align: left;
}
.w-feature-wrapper{
   padding: 10px;
}
.rebuild-list-sec{
   font-size: 15px;
   font-weight: 410;
}
      .fc-video-txt-rebuild{
         text-align: left;
      }
      .wrap-feature-div{
      width: 100%;
   }
       .fc-workplace-table-text{
         font-size: 28px;
      } 
      .toolkit-container {
    margin: 20px;
}
.toolkit-box{
 width: 60%;
 margin: 40px auto;
}
   .remodel-txt-main,.fc-workplace-rebuild-head,.blue-pdf-head{
   font-size: 24px;
   }
   .fc-workplace-rebuild-subhead{
     font-size: 26px;
   }
   .cta-feature-rebuild,.rebuild-testimonial-txt{
   padding: 20px;
   font-size: 16px;
   }
   .rebuild-feature-head,.rebuild-feature-txt{
   padding-left: 30px;
   padding-right: 30px;
   }
   .pad-right-10{
   padding: 20px;
   margin-left: 0;
   }
   .testimonial-company,.testimonial-name{
   padding-left: 20px;
   }
   }
   @media only screen and (max-width: 769){
       .mobile-only-top-margin{
         margin-top: -16%;
      }
   }
      @media only screen and (max-width: 760px) and (min-width: 320px){
      .toolkit-box{
         width: 80%;
      }
   }
   @media screen and (max-width: 500px) {
   .w-feature-head-rebuild{
   font-size: 18px;
   }
   .w-feature-second-head-rebuid{
   font-size: 14px;
   }
   }
   @media only screen and (max-width: 989px) and (min-width: 767px){
.fc-workplace-table-text {
    text-align: left;
}
   }
</style>
<style>
   .showBanner {
   background-color: #fff !important;
   }
</style>
