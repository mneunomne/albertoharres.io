<template>
  <div class="inner-cont">
    <div class="row" v-html="$t('carruagens.title')"/>
    <div class="row" v-html="$t('carruagens.text')"/>
    <p class='row'>
      <image-gallery :imgs="[
      'assets/carruagens/museu-historico-nacional.jpg',
      'assets/carruagens/carruagens_thumb.jpg'
      ]" :cols="2"/>
    </p>
    <p class='row'>
      <AudioBox
        v-for="(audio, index) in audios"
        :key="index"
        :filename="audio.mp3"
        :title="audio.title"
        :id="''+ index"
      ></AudioBox>
    </p>
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
      audios: [
        {
          title: 'Tauá Bancário',
          mp3: 'assets/carruagens/BOM taua-bancario-tia-vai.mp3',
        },
        {
          title: 'Marechal',
          mp3: 'assets/carruagens/marecha650-duplo.mp3',
        },
        {
          title: 'Parque Real Tubiacanga',
          mp3: 'assets/carruagens/parque-real-tubiacanca-com-voz.mp3',
        },
        {
          title: 'Italiano Fazenda Quilombo',
          mp3: 'assets/carruagens/vem-italiano-vem-fazenda.mp3',
        },
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