<template>
  <div>
    <div class="inner-cont">
      <div class="row" v-html="$t('vozes_da_terra.title')"/>
      <div class="row" v-html="$t('vozes_da_terra.text')"/>
      <p class='row'>
        <AudioBox
          :filename="'assets/vozesdaterra/menino_canto.mp3'"
          :title="'Crianças canto'"
          :id="'0'"
        ></AudioBox>
      </p>
      <p class='row'>
        <image-gallery :imgs="imgs" :cols="2"/>
      </p>
      <p class='row'>
        <AudioBox
          :filename="'assets/vozesdaterra/xoco-unknown.mp3'"
          :title="'Xocó'"
          :id="'1'"
        ></AudioBox>
      </p>
    </div>
  </div>
</template>
<script>
import AudioBox from '../components/AudioBox.vue'

export default {
  components: {
    AudioBox
  },
  data () {
    return {
      imgs: [
        'assets/vozesdaterra/8e2177c5-2887-44db-9dca-cfbc9c3d72e2.jpg',
        'assets/vozesdaterra/fernando_pote-1.jpg',
        'assets/vozesdaterra/criancas.jpg',
        'assets/vozesdaterra/IMG_2416 (1).JPG',
        'assets/vozesdaterra/IMG_20180802_205823.jpg',
        'assets/vozesdaterra/IMG_2586.JPG',
      ]
    }
  },
  // work info
  tags: [
    'python',
    'pottery',
    'sound',
  ],
  title: 'Vozes da Terra',
  route: 'vozes-da-terra',
  cover: 'assets/vozesdaterra/thumbsquared.jpg',
  // vue component
  name: 'vozes-da-terra'
}
</script>
<style lang="sass" scoped>
.grid
  display: flex
  .half
    width: 45% !important
    display: inline-block
    margin: auto
</style>