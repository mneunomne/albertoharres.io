<template>
  <div class="box">
    <transition name="fade" duration="500">
      <img v-show="loaded" :src="cover" @load="onLoad">
    </transition>
    <!-- <span class="index">{{ index }}</span> -->
    <div class="title">
      <p>{{ title }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Box',
  props: {
    cover: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    route: {
      type: String,
      required: false
    },
    fake: {
      type: Boolean
    },
    index: {
      type: Number
    }
  },
  data () {
    return {
      loaded: false
    }
  },
  methods: {
    onLoad (evt) {
      this.loaded = true
      console.log(this.title, 'image loaded!')
    }
  }
}
</script>
<style lang="sass" scoped>
.box
  position: relative
  display: inline-flex
  width: 340px
  height: 340px
  margin: 1px 2px
  overflow: hidden
  background: #80808038
  img
    object-fit: cover
    max-width: 100%
    min-width: 100%
    transition: all .5s
  .title
    transition: opacity .25s
    font-weight: bold
    opacity: 0
    position: absolute
    bottom: 0
    color: white
    height: 100%
    width: 100%
    background: rgba(0, 0, 0, 0.5)
    p
      position: absolute
      bottom: 0
      margin-left: 10px
.box
  &:hover
    img
      transform: scale(1.15)
      // filter: blur(5px)
    .title
      opacity: 1
.index
  position: absolute
  color: black
  z-index: 99999
  background: white
</style>