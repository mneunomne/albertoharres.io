<template>
  <div class="inner-cont">
    <div class="row" v-html="$t('central.title')"/>
    <div class="row" v-html="$t('central.text')"/>
    <p class="row">
      <video width="720" height="405" controls>
        <source :src="'assets/central/MVI_6938-SITE.mp4'" type="video/mp4"/> 
      </video>
    </p>
    <!-- gallery -->
    <p class="row">
      <image-gallery :imgs="imgs" :cols="2"/>
    </p>
  </div>
</template>
<script>

export default {
  data () {
    return {
      imgs: [
        'assets/central/Peça Central Prévia Multiverso 30-08-18-54.jpg',
        'assets/central/CENTRAL_MairaB063.jpg',
        'assets/central/MG_6961__2.jpg',
        'assets/central/mar.jpg',
        'assets/central/Peça Central Prévia Multiverso 30-08-18-3.jpg',
        'assets/central/CENTRAL_MairaB023.jpg',
      ],
      index: null
    }
  },
  // work info
  tags: [
    'mapping',
    'processing',
    'kinect',
    'performance',
    'openFrameworks'
  ],
  title: 'Central',
  route: 'central',
  cover: 'assets/central/central-2_1.gif',
  // vue component
  name: 'central'
}
</script>