<template>
  <div id="app">
    <div class="navbar">
      <div class="mainnav">
        <router-link class="link" to='/'>alberto harres</router-link>
        <router-link class="link" to='/works'>{{ $t('works') }}</router-link>
        <router-link class="link" to='/gallery'>{{ $t('gallery') }}</router-link>
        <router-link class="link" to='/notes'>{{ $t('notes') }}</router-link>
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

.inner-cont
  padding: 10px
  width: 97%

p, li
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

iframe
  max-width: 100%

video
  max-width: 100%
  height: auto

.embeded-video
  position: relative
  padding-bottom: 56.25%
  height: 0
  iframe
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%

.loading-box
  background: linear-gradient(100deg, #e8e8e8 33%, #fbfbfb 50%, #e8e8e8 66%)
  background-size: 400% 400%
  animation: gradientAnimate 1.5s ease infinite

@keyframes gradientAnimate
  0%
    background-position: 5% 0%
  100%
    background-position: 96% 100%
</style>