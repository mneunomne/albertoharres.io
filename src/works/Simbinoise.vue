<template>
  <div class="inner-cont">
    <div class="row" v-html="$t('simbinoise.title')"/>
    <div class="row" v-html="$t('simbinoise.text')"/>
    <p class='row'>
      <expandable-image :close-on-background-click="true" :src="'../assets/simbinoise/mesa.jpg'"/>
    </p>
    <p class='row'>
      <iframe width="720" height="460" src="https://www.youtube.com/embed/XdfYngWGd_A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </p>
  </div>
</template>
<script>
export default {
  // work info
  tags: [
    'sound',
    'circuit-bending'
  ],
  title: 'Simbinoise',
  route: 'simbinoise',
  cover: '../assets/simbinoise/simbi-thumb.jpg',
  // vue component
  name: 'simbinoise'
}
</script>