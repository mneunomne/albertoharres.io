<template>
  <div>
    <div class="about about-left">
      <img class="profile" src="assets/profile.jpg"/>
      <p>alberto.harres@gmail.com</p>
      <a target="_" href="https://www.instagram.com/mneu_nomne/" class="fa fa-instagram"></a>
      <a target="_" href="https://github.com/mneu_nomne" class="fa fa-github"></a>
    </div>
    <div class="about about-right" v-html="$t('about_text')">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style lang="sass" scoped>
.about
  display: inline-block
  &-left
    vertical-align: top
    margin: 0px
    padding: 0px
    margin-top: 40px
    text-align: center
    max-width: 100%
    width: 360px
  &-right
    display: inline-block
    vertical-align: top
    margin: 15px
    width: calc(97% - 370px)
    min-width: 380px
    max-width: 720px

.profile
  object-fit: contain

.fa
  padding: 10px
  font-size: 30px
  width: 50px
  text-align: center
  text-decoration: none
  margin: 5px 2px
  border-radius: 50%
  color: black

.fa:hover
  opacity: 0.7

@media (max-width: 840px)
  .about-right
    max-width: 100%
    min-width: calc(100% - 15px)
</style>