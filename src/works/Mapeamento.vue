<template>
  <div class="inner-cont">
    <div class="row" v-html="$t('mapeamento.title')"/>
    <div class="row" v-html="$t('mapeamento.text')"/>
    <p class='row' v-for="(img, index) in imgs" :key="index">
      <expandable-image :close-on-background-click="true" :src="require('../assets/mapeamento/' + img)"/>
    </p>
  </div>
</template>
<script>
export default {
  // work info
  data () {
    return {
      imgs : [
        'mapeamento-18.54.05.png',
        'mapeamento-18.54.19.png',
        'mapeamento-18.54.39.png',
        'mapeamento-18.54.56.png',
        'mapeamento-18.55.15.png',
        'mapeamento-18.55.27.png',
        'mapeamento-18.55.42.png'
      ]
    }
  },
  tags: [
    'web'
  ],
  title: 'Mapeamento',
  route: 'mapeamento',
  cover: require('../assets/mapeamento/thumb.jpg'),
  // vue component
  name: 'mapeamento'
}
</script>