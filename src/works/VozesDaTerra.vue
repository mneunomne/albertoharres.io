<template>
  <div>
    <div class="inner-cont">
      <div class='row'>
        <h1>Vozes da Terra</h1>
      </div>
      <p class='row'>   
        Projeto que busca através da união entre circuitos eletrônico-sonoros e potes de cerâmica indígena, uma forma diferente de armazenar, reproduzir e difundir a cultura oral indígena.
      </p>
      <p class='row'>   
        O projeto começou como uma residência artística do programa Arte Eletrônica Indígena, junto à aldeia Pankararu em Tacaratu-PE.
        Lá foi feito em colaboração com as artesães indígenas um pote especialmente feito para embarcar um dispositivo eletrônico capaz de escutar, gravar e reproduzir o que era dito ou cantado dentro dele.
        Esse artefato circulou pela comunidade contando com a interação de jovens, anciãos e curandeiras da comunidade Pankararu.
      </p>
      <p class='row'>   
        Junto com os outros projetos do programa da AEI, o pote foi exposto no MAM de Salvado-BA, e além de reproduzir os áudios gravados durante a residência, também pode gravar cantos e falas de outros povos indígenas presentes na exposição, fazendo do pote um artefato de intercâmbio cultural da cultura oral indígena.
      </p>
      <p class='row'>   
        Esse projeto participou da exposição da British Accademy Summershow Case em junho de 2019.
      </p>
      <p class='row'>
        Honorary prize at Ars Eletronica 2018 (link)
      </p>
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