<script setup>
import DefaultTheme from 'vitepress/theme'
import HomeShowcase from './HomeShowcase.vue'
import HomeReview from './HomeReview.vue'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #page-bottom-ads>
      <div style="padding-top:2rem;text-align:center;">
        <a href="https://www.digitalocean.com/?refcode=acb41ca21dc2&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img
            src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg"
            alt="DigitalOcean Referral Badge"
          /></a>
      </div>
    </template>

    <template #home-footer>
      <div style="padding-top:2rem;text-align:center;">
        <a href="https://www.digitalocean.com/?refcode=acb41ca21dc2&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img
            src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg"
            alt="DigitalOcean Referral Badge"
          /></a>
      </div>
    </template>

    <template #home-features>
      <HomeShowcase />
      <HomeReview />
    </template>

    <template #home-hero>
      <div style="padding-top:2rem;text-align:center;">
        <div class="youtube-container">
          <iframe
            loading="lazy"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/q51xhGxTk5k?start=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style>
.youtube-container {
  position: relative;
  margin: auto;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

@media screen and (min-width: 768px) {
  .youtube-container {
    padding-bottom: 34%;
    padding-left: 30%;
    padding-right: 30%;
    width: 0;
  }
}

.youtube-container iframe,
.youtube-container object,
.youtube-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>