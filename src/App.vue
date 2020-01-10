<template>
  <div id="app">
    <div class="navbar">
      <div class="mainnav">
        <router-link class="link" to='/'>alberto harres</router-link>
        <router-link class="link" to='/works'>{{ $t('works') }}</router-link>
        <router-link class="link" to='/gallery'>{{ $t('gallery') }}</router-link>
      </div>
      <div class="locales">
        <span :class="{'active': $root.$i18n.locale === 'en'}" @click="changeLocale('en')">en</span>/
        <span :class="{'active': $root.$i18n.locale === 'pt'}" @click="changeLocale('pt')">pt</span>
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
  methods: {
    changeLocale (lang) {
      this.$root.$i18n.locale = lang
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
  padding-left: 32px
  border-bottom: 1.0px solid #dedeef
  display: inline-block
  width: 95%
  max-width: 87vw
  div
    display: inline-block
  .mainnav
    margin-bottom: 10px
  .locales
    display: inline-flex
    position: absolute
    right: 0
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
  margin-left: 8px
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

body>.expandable-image.expanded>img
  object-fit: none !important

p
  font-size: 18px

.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0

.router-viewer
  transition: opacity .5s
</style>