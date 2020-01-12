<template>
  <div class="inner-cont">
    <div class='row' v-html="$t('recombining.title')"/>
    <div class='row' v-html="$t('recombining.text')"/>
    <p class='row'>
      <image-gallery :imgs="imgs" :cols="2"/>
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgs: [
        'assets/recombining-memories/IMG_7708_1000.jpg',
        'assets/recombining-memories/IMG_7711_1000.jpg',
        'assets/recombining-memories/gif_00.gif',
        'assets/recombining-memories/gif_03.gif',
        'assets/recombining-memories/gif_10.gif',
        'assets/recombining-memories/gif_13.gif',
      ]
    }
  },
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