<template>
  <div class="inner-cont">
    <div class="row" v-html="$t('carruagens.title')"/>
    <div class="row" v-html="$t('carruagens.text')"/>
    <p class='row'>
      <expandable-image :close-on-background-click="true" src="../assets/carruagens/museu-historico-nacional.jpg"/>
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
  cover: require('../assets/carruagens/museu-historico-nacional.jpg'),
  // vue component
  name: 'itinerario-etimologico'
}
</script>