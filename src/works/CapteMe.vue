<template>
  <div class="inner-cont">
    <div class='row'>
      <h1>Capte-me</h1>
    </div>
    <p class="row">
      Instalação interativa em <a target="_" href="https://openframeworks.cc/">OpenFrameworks</a> 
      que captura a imagem das pessoas as reproduz utilizando caracteres de diferentes línguas. 
      Fez parte da exposição <a  target="_" href="https://museudoamanha.org.br/pt-br/capte-me-nenhuma-presenca-sera-ignorada">Capte-me</a> no Laboratório de Atividades do Amanhã, no Museu do Amanhã, Rio de Janeiro.
    </p>
    <p class="row">
      2016
    </p>
    <p class='row'>
      <expandable-image :close-on-background-click="true" class="img2" :src="require('../assets/capte-me/Screen Shot 2016-05-15 at 14.16.25.png')"/>
    </p>
    <p class='row'>
      <expandable-image :close-on-background-click="true" class="img2" :src="require('../assets/capte-me/1018112-img_7590.jpg')"/>
    </p>
  </div>
</template>
<script>
export default {
  // work info
  tags: [
    'openFrameworks',
    'instalation'
  ],
  title: 'Capte-me',
  route: 'capte-me',
  cover: require('../assets/capte-me/capte-thumb.jpg'),
  // vue component
  name: 'capte-me'
}
</script>