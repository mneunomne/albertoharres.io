<template>
  <div class="works">
    <div class="filters">
      <a class="tag" @click="onClickTag(tag)" :class="{'active': currentFilter === tag}" v-for="(tag, index) in getAllTags" v-bind:key="index">
        {{ $t(tag) }}
      </a>
    </div>
    <div class="boxes">
      <transition name="fade" duration="500">
        <div v-if="loaded">
          <router-link :to="'/' + work.route" v-for="(work, index) in getAllWorks" v-bind:key="index">
            <Box 
              class="box"
              :style="work.index !== -1 ? getBoxPositions()[work.index] : {transform: `translate(0px, 0px)`}"
              :title="work.title"
              :route="work.route"
              :cover="work.cover"
              :class="{'hide': work.index === -1}"
              :index="work.index"
            />
          </router-link>
        </div>
      </transition>
      <div id="fake-boxes">
        <Box
          v-for="(work, index) in allWorks" v-bind:key="work.route"
          class="box-fake"
          :fake="true"
          :ref="'box_' + index"
        />
      </div>
    </div>
  </div>
</template>
<script>

import works from '../works/'
import Box from './Box.vue'

const breakpoints3 = 800
const breakpoints2 = 420

export default {
  name: 'Works',
  components: {
    Box
  },
  data () {
    return {
      currentFilter: '',
      transition: false,
      allWorks: [],
      loaded: false,
      windowWidth: null,
      timeout: false,
      lastTime: 0,
      cols: 3,
    }
  },
  computed: {
    getAllTags () {
      var tags = []
      works.map((w) => {
        w.tags.map((t) => {
          if (!tags.includes(t)) {
            tags.push(t)
          }
        })
      })
      tags.sort()
      return tags
    },
    getAllWorks () {
      let index = 0
      return works.map((w) => {
        w.appear = false
        w.index = -1
        if (this.currentFilter === '' || w.tags.includes(this.currentFilter)) {
          w.appear = true
          w.index = index
          index++
        }
        return w
      })
      // .sort((a, b) => a.index - b.index)
    },
    getCurCols () {
      var cols
      cols = 3
      if (this.windowWidth < breakpoints3) {
        cols = Math.min(2, this.cols)
      }
      if (this.windowWidth < breakpoints2) {
        cols = Math.min(1, this.cols)
      }
      return cols
    }
  },
  methods: {
    onClickTag (tag) {
      if (this.currentFilter !== tag) {
        this.currentFilter = tag
      } else {
        this.currentFilter = ''
      }
      this.transition = true
      setTimeout(() => this.transition = false, 500)
    },
    updateWorks () {
      let index = 0
      this.allWorks = works.map((w) => {
        w.appear = false
        w.index = -1
        if (this.currentFilter === '' || w.tags.includes(this.currentFilter)) {
          w.appear = true
          w.index = index
          index++
        }
        return w
      }).sort((a, b) => a.index - b.index)
    },
    getBoxPositions () {
      return works.map((w, index) => {
        if (this.$refs['box_' + index]) {
          let el = this.$refs['box_' + index][0].$el
          return {
            transform: `translate(${el.offsetLeft - 1}px, ${el.offsetTop - 2}px)`,
            width: `${el.offsetWidth}px`,
            height: `${el.offsetHeight}px`,
          }
        } else {
          return {
            transform: `translate(0px, 0px)`
          }
        }
      })
    },
    onResize (evt) {
      this.lastTime = new Date().getTime()
      setTimeout(() => {
        let now = new Date().getTime()
        if (now - this.lastTime >= 300) {
          this.windowWidth = window.innerWidth
          this.$forceUpdate()
        }
      }, 300)
    }
  },
  mounted () {
    this.allWorks = works
    setTimeout(() => this.loaded = true, 1)
    this.windowWidth = window.innerWidth
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
     window.removeEventListener('resize', this.onResize)
  },
  watch: {
    windowWidth (val) {

    }
  }
}
</script>
<style lang="sass" scoped>
.works
  padding: 10px
  width: 97%

.tag
  color: black
  cursor: pointer
  margin-right: 7px
  margin-left: 5px
  user-select: none
  display: inline-flex
  &.active
    font-weight: bolder
  &:hover
    text-decoration: underline
    // text-decoration: underline

.boxes
  position: relative
  margin-top: 2em

.box
  position: absolute !important
  transition: all 0.5s
  opacity: 1
  z-index: 10
  &.hide
    z-index: 1
    opacity: 0
    // display: none
  &.transition
    position: absolute

#fake-boxes
  position: absolute
  top: 0px
  pointer-events: none
  display: flex
  flex-wrap: wrap
  .box-fake
    transition: none
    position: relative !important
    opacity: 0.0
    margin-bottom: 3px
    width: calc(100vw - 50px)
    height: calc(100vw - 50px)

@media (min-width: 501px)
  .box-fake
    width: calc(50vw - 32px) !important
    height: calc(50vw - 32px) !important

@media (min-width: 900px)
  .box-fake
    width: calc(33.3vw - 32px) !important
    height: calc(33.3vw - 32px) !important


@media (min-width: 1200px)
  .box-fake
    width: calc(25vw - 32px) !important
    height: calc(25vw - 32px) !important

</style>