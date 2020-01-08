<template>
  <div class="works">
    <div class="filters">
      <a class="tag" @click="onClickTag(tag)" :class="{'active': currentFilter === tag}" v-for="(tag, index) in getAllTags" v-bind:key="index">#{{ tag }}</a>
    </div>
    <div class="links">
      <router-link :to="'/' + work.route" v-for="(work) in getAllWorks" v-bind:key="work.route">
        <Box :title="work.title" :route="work.route" :cover="work.cover"/>
      </router-link>
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
      currentFilter: ''
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
      return works.filter((w) => {
        return this.currentFilter === '' || w.tags.includes(this.currentFilter)
      })
    }
  },
  methods: {
    onClickTag (tag) {
      if (this.currentFilter !== tag) {
        this.currentFilter = tag
      } else {
        this.currentFilter = ''
      }
    }
  },
  mounted () {
    console.log('works', works)
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
  user-select: none
  display: inline-flex
  &.active
    font-weight: bolder
  &:hover
    text-decoration: underline

.links
  margin-top: 2em
</style>