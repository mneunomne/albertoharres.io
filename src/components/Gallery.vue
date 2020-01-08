<template>
  <div class="gallery">
    <expandable-image :close-on-background-click="true" class="gallery-item" v-for="(img, index) in imgs" :key="index" :src="require('../assets/gallery/' + img)"/>
  </div>
</template>
<script>

export default {
  name: 'Gallery',
  data () {
    return {
      imgs: [
        'Screen Shot 2018-06-03 at 20.19.01.png',
        'Screen Shot 2019-01-06 at 01.25.29.png',
        'Screen Shot 2019-01-06 at 01.58.27.png',
        'Screen Shot 2019-03-07 at 19.22.19.jpg',
        'Screen Shot 2019-03-18 at 01.29.35.jpg',
        'Screen Shot 2019-03-18 at 01.34.18.png',
        'Screen Shot 2019-04-03 at 17.16.26.png',
        'Screen Shot 2019-08-05 at 21.04.55.jpg',
        'Screen Shot 2019-08-08 at 02.49.13.png',
        'Screen Shot 2019-08-08 at 20.44.45.jpg',
        'Screen Shot 2019-08-08 at 20.46.05.png'
      ]
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
</style>