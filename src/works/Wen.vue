<template>
  <div class="inner-cont">
    <div class="row" v-html="$t('wen.title')"/>
    <div class="row" v-html="$t('wen.text')"/>
    <p class="row">
      <video width="720" height="405" controls mute>
        <source :src="'assets/wen/VID_20170308_015540441.mp4'" type="video/mp4"/> 
      </video>
    </p>
    <p class="row embeded-video">
      <iframe width="720" height="405" src="https://www.youtube.com/embed/T5zpzSOWczs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </p>
    <p class="row embeded-video">
      <iframe width="720" height="405" src="https://www.youtube.com/embed/TAgt8XNB1F4" allowfullscreen></iframe>
    </p>
    <p class="row">
      <image-gallery :imgs="imgs" :cols="2"/>
    </p>
  </div>
</template>
<script>
export default {
  // work info
  // 'assets/wen/caracters.jpg'
  data () {
    return {
      imgs: [
        'assets/wen/IMG_20170401_214819771.jpg',
        'assets/wen/IMG_20170401_214824395.jpg',
      ]
    }
  },
  tags: [
    'vr',
    'mapping',
    'kinect',
    'openFrameworks',
    'performance'
  ],
  title: 'When Speaking of Tongues',
  route: 'wen',
  cover: 'assets/wen/wen-thumb.gif',
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
</style>