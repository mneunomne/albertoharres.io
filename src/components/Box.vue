<template>
  <div class="box">
    <img :src="cover">
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
      required: true
    },
    title: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    },
  }
}
</script>
<style lang="sass" scoped>
.box
  position: relative
  display: inline-flex
  width: 340px
  height: 340px
  margin: 2px
  overflow: hidden
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
</style>