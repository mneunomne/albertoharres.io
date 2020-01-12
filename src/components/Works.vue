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
      timeout: false
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
          return {
            transform: `translate(${this.$refs['box_' + index][0].$el.offsetLeft - 1}px, ${this.$refs['box_' + index][0].$el.offsetTop - 2}px)`
          }
        } else {
          return {transform: `translate(0px, 0px)`}
        }
      })
    },
    resizeend (w) {
      if (new Date() - this.rtime < 200) {
          setTimeout(this.resizeend(w), 200);
      } else {
        console.log('hello')
          this.timeout = false
          this.windowWidth = w
          this.$forceUpdate()
      }
    }
  },
  mounted () {
    this.allWorks = works
    setTimeout(() => this.loaded = true, 1)
    this.windowWidth = window.innerWidth
    window.addEventListener('resize', (evt) => {
      this.rtime = new Date();
      if (this.timeout === false) {
          this.timeout = true
          setTimeout(() => {
            this.resizeend(evt.target.innerWidth)
          }, 200);
      }
    })
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
  .box-fake
    position: relative !important
    opacity: 0

</style>