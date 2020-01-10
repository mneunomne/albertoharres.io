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
    <v-gallery :images="imgs" :index="index" @close="index = null"></v-gallery>
    <div class="row row-gallery">
      <img class="gallery-img-2"
        v-for="(image, imageIndex) in imgs"
        :src="image"
        :key="imageIndex"
        @click="index = imageIndex"
      />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgs: [
        'assets/central/Peça Central Prévia Multiverso 30-08-18-54.jpg',
        'assets/central/CENTRAL_MairaB063.jpg',
        'assets/central/_MG_6961.jpeg',
        'assets/central/_MG_6968.jpeg',
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