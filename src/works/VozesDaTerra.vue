<template>
  <div>
    <div class="inner-cont">
      <div class="row" v-html="$t('vozes_da_terra.title')"/>
      <div class="row" v-html="$t('vozes_da_terra.text')"/>
      <p class='row grid'>
        <expandable-image class="half" :src="require('../assets/vozesdaterra/criancas.jpg')"/>
        <expandable-image class="half" :src="require('../assets/vozesdaterra/IMG_2416 (1).JPG')"/>
      </p>
      <p class='row'>
        <AudioBox
          :filename="require('../assets/vozesdaterra/menino_canto.mp3')"
          :title="'Crianças canto'"
          :id="0"
        ></AudioBox>
      </p>
      <p class='row'>
        <expandable-image :src="require('../assets/vozesdaterra/IMG_20180802_205823.jpg')"/>
      </p>
      <p class='row'>
        <AudioBox
          :filename="require('../assets/vozesdaterra/xoco-unknown.mp3')"
          :title="'Xocó'"
          :id="1"
        ></AudioBox>
      </p>
    </div>
  </div>
</template>
<script>
import AudioBox from '../components/AudioBox.vue'

'8e2177c5-2887-44db-9dca-cfbc9c3d72e2.jpg',
'IMG_20180802_205823.jpg',
'IMG_2416 (1).JPG',
'IMG_2586.JPG',
'criancas.jpg',
'fernando_pote-1.jpg',
'vozes_thumb.jpeg'

export default {
  components: {
    AudioBox
  },
  // work info
  tags: [
    'python',
    'pottery',
    'sound',
  ],
  title: 'Vozes da Terra',
  route: 'vozes-da-terra',
  cover: require('../assets/vozesdaterra/fernando_pote-1.jpg'),
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