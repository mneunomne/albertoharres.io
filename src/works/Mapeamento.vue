<template>
  <div class="inner-cont">
    <div class="row" v-html="$t('mapeamento.title')"/>
    <div class="row" v-html="$t('mapeamento.text')"/>
    <!-- gallery -->
    <div class="row">
      <image-gallery :imgs="imgs" :cols="3"/>
    </div>
  </div>
</template>
<script>
export default {
  // work info
  data () {
    return {
      imgs : [
        'assets/mapeamento/mapeamento-18.54.05.png',
        'assets/mapeamento/mapeamento-18.54.19.png',
        'assets/mapeamento/mapeamento-18.54.39.png',
        'assets/mapeamento/mapeamento-18.54.56.png',
        'assets/mapeamento/mapeamento-18.55.15.png',
        'assets/mapeamento/mapeamento-18.55.27.png',
        'assets/mapeamento/mapeamento-18.55.42.png'
      ]
    }
  },
  tags: [
    'web'
  ],
  title: 'Mapeamento',
  route: 'mapeamento',
  cover: '../assets/mapeamento/thumb.jpg',
  // vue component
  name: 'mapeamento'
}
</script>