<template>
  <div class="gallery">
    <v-gallery :images="imgs" :index="index" @close="index = null"></v-gallery>
    <!--
    <div class="image" v-for="(image, imageIndex) in imgs" :key="imageIndex" @click="index = imageIndex"
      :style="{ backgroundImage: `url('/${image}')`}"
    ></div>
    -->
    <img class="gallery-img"
      v-for="(image, imageIndex) in imgs"
      :src="image"
      :key="imageIndex"
      @click="index = imageIndex"
    />
    <!--
      <expandable-image :close-on-background-click="true" class="gallery-item" v-for="(img, index) in imgs" :key="index" :src="'assets/gallery/' + img"/>
    -->
  </div>
</template>
<script>

export default {
  name: 'Gallery',
  data () {
    return {
      imgs: [
        'assets/gallery/Screen Shot 2018-06-03 at 20.19.01.png',
        'assets/gallery/Screen Shot 2019-01-06 at 01.25.29.png',
        'assets/gallery/Screen Shot 2019-01-06 at 01.58.27.png',
        'assets/gallery/Screen Shot 2019-03-07 at 19.22.19.jpg',
        'assets/gallery/Screen Shot 2019-03-18 at 01.29.35.jpg',
        'assets/gallery/Screen Shot 2019-03-18 at 01.34.18.png',
        'assets/gallery/Screen Shot 2019-04-03 at 17.16.26.png',
        'assets/gallery/Screen Shot 2019-08-05 at 21.04.55.jpg',
        'assets/gallery/Screen Shot 2019-08-08 at 02.49.13.png',
        'assets/gallery/Screen Shot 2019-08-08 at 20.44.45.jpg',
        'assets/gallery/Screen Shot 2019-08-08 at 20.46.05.png'
      ],
      index: null
    }
  }
}
</script>
<style lang="sass">
.gallery
  padding: 10px
  width: 97%
  &-item
    position: relative
    display: inline-flex
    height: 320px
    width: 320px
    margin-right: 5px
    img
      object-fit: cover
  &-img
    width: 300px
    height: 300px
    object-fit: fill
    margin: 5px
</style>