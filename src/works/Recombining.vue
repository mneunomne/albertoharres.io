<template>
  <div class="inner-cont">
    <div class='row' v-html="$t('recombining.title')"/>
    <div class='row' v-html="$t('recombining.text')"/>
    <p class='row'>
      <expandable-image :close-on-background-click="true" :src="'assets/recombining-memories/IMG_7708_1000.jpg'"/>
      <expandable-image :close-on-background-click="true" :src="'assets/recombining-memories/IMG_7711_1000.jpg'"/>
    </p>
    <p class='row gifs'>
      <img :src="'assets/recombining-memories/gif_00.gif'"/>
      <img :src="'assets/recombining-memories/gif_03.gif'"/>
      <img :src="'assets/recombining-memories/gif_10.gif'"/>
      <img :src="'assets/recombining-memories/gif_13.gif'"/>
    </p>
  </div>
</template>
<script>
export default {
  // work info
  tags: [
    'processing',
    'generative'
  ],
  title: 'Recombining Memories',
  route: 'recombining-memories',
  cover: 'assets/recombining-memories/IMG_7716_1000.jpg',
  // vue component
  name: 'recombining-memories'
}
</script>
<style lang="sass" scoped>
.gifs
  img
    display: inline-block
    width: 357px
</style>