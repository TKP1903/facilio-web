<template>
</template>

<script>
    export default {
        middleware({ redirect }) {
    return redirect('/resources/connected-buildings');
  },
        head() {
            return {
                title: "Facilio Resources | Connected Buildings",
                meta: [{
                        hid: "description",
                        name: "description",
                        content: "All the insights you need to transform your real estate operations, delivered by leading expert"
                    },
                    {
                        hid: "fb-share-title",
                        property: "og:title",
                        content: "Facilio Resources | Connected Buildings"
                    },
                    {
                        hid: "fb-share-description",
                        property: "og:description",
                        content: "All the insights you need to transform your real estate operations, delivered by leading expert"
                    },
                    {
                        hid: "fb-share-image",
                        property: "og:image",
                        content: "/images/og-images/connected-building.png?reset=1"
                    },
                    {
                        hid: "fb-share-url",
                        property: "og:url",
                        content: "https://facilio.com/futureproof/resources-for-a-connected-built-environment"
                    },
                    {
                        hid: "twitter-meta",
                        name: "twitter:card",
                        content: "summary_large_image"
                    },
                    {
                        hid: "twitter-title",
                        name: "twitter:title",
                        content: "Facilio Resources | Connected Buildings"
                    },
                    {
                        hid: "twitter-description",
                        name: "twitter:description",
                        content: "All the insights you need to transform your real estate operations, delivered by leading expert"
                    },
                    {
                        hid: "twitter-image",
                        name: "twitter:image",
                        content: "/images/og-images/connected-building.png?reset=1"
                    },
                    {
                        hid: "twitter-url",
                        name: "twitter:url",
                        content: "https://facilio.com/futureproof/resources-for-a-connected-built-environment"
                    }

                ],
                link: [{
                    rel: "canonical",
                    href: "https://facilio.com/futureproof/resources-for-a-connected-built-environment"
                }],
                script: [{
                    src: "../js/includes.js"
                }]
            };
        }
    };
</script>
