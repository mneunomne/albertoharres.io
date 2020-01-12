<template>
  <div class="inner-cont">
    <div class="row" v-html="$t('carruagens.title')"/>
    <div class="row" v-html="$t('carruagens.text')"/>
    <p class='row'>
      <image-gallery :imgs="['assets/carruagens/museu-historico-nacional.jpg']" :cols="1"/>
    </p>
  </div>
</template>
<script>
export default {
  // work info
  tags: [
    'arduino',
    'sound',
  ],
  title: 'Itinerário Etimológico',
  route: 'itinerario-etimologico',
  cover: 'assets/carruagens/museu-historico-nacional.jpg',
  // vue component
  name: 'itinerario-etimologico'
}
</script>