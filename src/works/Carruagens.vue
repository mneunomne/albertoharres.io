<template>
  <div class="inner-cont">
    <div class='row'>
      <h1>Itinerário Etimológico</h1>
    </div>
    <p class='row'>
      <b>Alberto Harres</b><br/>
      Caixas de som e sonsor de presença.
    </p>
    <p class='row'>
      Instalação sonora feita a partir de chamadas à diferentes localidades 
      da cidade do Rio de Janeiro, realizadas nas ruas por trocadores de Vans.
    </p>
    <p class='row'>
      2017
    </p>
    <p class='row'>
      <expandable-image :close-on-background-click="true" :src="require('../assets/carruagens/museu-historico-nacional.jpg')"/>
    </p>
  </div>
</template>
<script>
export default {
  // work info
  tags: [
    'arduino',
    'instalation',
    'sound',
  ],
  title: 'Itinerário Etimológico',
  route: 'itinerario-etimologico',
  cover: require('../assets/carruagens/carruagens_thumb.jpg'),
  // vue component
  name: 'itinerario-etimologico'
}
</script>