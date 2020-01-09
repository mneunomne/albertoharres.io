<template>
  <div class="inner-cont">
    <div class="row" v-html="$t('wen.title')"/>
    <div class="row" v-html="$t('wen.text')"/>
    <p class="row">
      {{ $t('wen.vr') }}
    </p>
    <p class="row">
      <video width="720" height="405" autoplay mute>
        <source :src="require('../assets/wen/VID_20170308_015540441.mp4')" type="video/mp4"/> 
      </video>
    </p>
    <p class="row">
      <iframe width="720" height="405" src="https://www.youtube.com/embed/T5zpzSOWczs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </p>
    <p class='row'>
      <img :src="require('../assets/wen/caracters.jpg')"/>
    </p>
    <p class="row">
      <iframe width="720" height="405" src="https://www.youtube.com/embed/TAgt8XNB1F4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </p>
  </div>
</template>
<script>
export default {
  // work info
  tags: [
    'vr',
    'mapping',
    'kinect',
    'openFrameworks',
    'performance'
  ],
  title: 'When Speaking of Tongues',
  route: 'wen',
  cover: require('../assets/wen/wen-thumb.gif'),
  // vue component
  name: 'wen'
}
</script>
<style lang="sass" scoped>
.img
  &1
    max-height: 300px
  &2
    max-height: 400px
img
  max-width: 100%

.header
  width: 100%
  height: 200px
  background-size: contain
  background-image: url('../assets/wen/IMG_20170322_171413517-ANIMATION.gif')
</style>