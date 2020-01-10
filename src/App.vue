<template>
  <div id="app">
    <div class="navbar">
      <div class="mainnav">
        <router-link class="link" to='/'>alberto harres</router-link>
        <router-link class="link" to='/works'>{{ $t('works') }}</router-link>
        <router-link class="link" to='/gallery'>{{ $t('gallery') }}</router-link>
      </div>
      <div class="locales" @click="changeLocale()">
        <span :class="{'active': $root.$i18n.locale === 'en'}">en</span>/
        <span :class="{'active': $root.$i18n.locale === 'pt'}">pt</span>
      </div>
    </div>
    <div class="container">
      <!-- <transition name="fade" duration="500"> -->
        <router-view class="router-viewer"/>
      <!-- </transition> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  created () {
    let lang = window.localStorage.getItem('albertoharres_lang')
    if (lang !== null && lang !== undefined) {
       this.$root.$i18n.locale = lang
    } else {
      switch (navigator.language) {
        case 'pt-BR':
          this.$root.$i18n.locale = 'pt'
          break;
        case 'en-US':
          this.$root.$i18n.locale = 'en'
          break;
        default:
          this.$root.$i18n.locale = 'en'
          break;
      }
    }
  },
  methods: {
    changeLocale () {
      if (this.$root.$i18n.locale === 'en') {
        this.$root.$i18n.locale = 'pt'
        window.localStorage.setItem('albertoharres_lang', 'pt')
      } else {
        this.$root.$i18n.locale = 'en'
        window.localStorage.setItem('albertoharres_lang', 'en')
      }
    }
  }
}
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

h1, h2
  font-weight: normal

img
  max-width: 100%

.navbar
  position: relative
  font-size: 1.1em
  padding-left: 15px
  border-bottom: 1.0px solid #dedeef
  display: inline-block
  width: calc(100% - 15px)
  div
    display: inline-block
  .mainnav
    margin-bottom: 10px
  .locales
    cursor: pointer
    display: inline-flex
    position: absolute
    right: 10px
    user-select: none
    span.active
      font-weight: bold

.link
  color: black
  text-decoration: underline
  margin-right: 1em
  &.active
    font-weight: bold

.container
  margin-bottom: 100px
  margin-left: 5px
  margin-right: 5px
  margin-top: 5px

.row
  width: 720px
  line-height: 150%
  margin-left: auto
  margin-right: auto
  max-width: 100%
  &-gallery
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    img
      object-fit: cover

.inner-cont
  padding: 10px
  width: 97%

body>.expandable-image.expanded>img
  object-fit: none !important

p
  font-size: 18px
  line-height: 1.35em

a
  text-decoration: none
  &:hover
    text-decoration: underline

.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0

.router-viewer
  transition: opacity .5s

.next, .prev
  background: transparent !important
  border: none !important
  font-family: monospace !important

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

video
  max-width: 100%
</style>