<template>
  <div>
    <v-gallery :images="imgs" :index="index" @close="index = null"></v-gallery>
    <div class="row-gallery">
      <div class="wrap" v-for="(image, imageIndex) in imgs" :key="imageIndex" :class="`gallery-img-${cols}`">
        <img
          :src="image"
          @click="index = imageIndex"
          :class="{'loaded': getLoaded[imageIndex]}"
          @load="onLoad(imageIndex)"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImageGallery',
  props: {
    imgs: {
      type: Array,
      required: true
    },
    cols: {
      type: Number,
      default: () => 2
    }
  },
  data () {
    return {
      index: null,
      loaded:[]
    }
  },
  computed: {
    getLoaded () {
      console.log('getLoaded', this.loaded)
      return this.loaded
    }
  },
  methods: {
    onLoad (index) {
      this.loaded[index] = true
      this.$forceUpdate()
      console.log('loaded!!')
    }
  },
  mounted () {
    this.loaded = this.imgs.map(m => false)
  }
}
</script>
<style lang="sass" scoped>
.gallery-img
  &-1
    width: 100%
    margin-bottom: 5px
  &-2
    width: calc(50% - 10px)
    margin-bottom: 10px
  &-3
    width: calc(33.3% - 15px)
    margin-bottom: 5px

.row-gallery
  display: flex
  flex-wrap: wrap
  justify-content: space-around
  .wrap
    display: flex
    background: #80808038
    img
      opacity: 0
      transition: 0.5s
      object-fit: cover
      &.loaded
        opacity: 1
</style>