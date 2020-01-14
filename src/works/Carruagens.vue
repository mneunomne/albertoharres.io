<template>
  <div class="inner-cont">
    <div class="row" v-html="$t('carruagens.title')"/>
    <div class="row" v-html="$t('carruagens.text')"/>
    <p class='row'>
      <expandable-image :close-on-background-click="true" src="assets/carruagens/museu-historico-nacional.jpg"/>
    </p>
    <p class='row'>
      <AudioBox
        v-for="(audio, index) in audios"
        :key="index"
        :filename="'assets/vozesdaterra/xoco-unknown.mp3'"
        :title="'Xocó'"
        :id="'1'"
      ></AudioBox>
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      audios: [
        'assets/carruagens/BOM taua-bancario-tia-vai.mp3',
        'assets/carruagens/marecha650-duplo.mp3',
        'assets/carruagens/parque-real-tubiacanca-com-voz.mp3',
        'assets/carruagens/vem-italiano-vem-fazenda.mp3',
      ]
    }
  },
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