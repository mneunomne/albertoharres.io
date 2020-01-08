<template>
  <div class="inner-cont">
    <div class='row'>
      <h1>Superviz</h1>
      <p><a href="https://superviz.com/">Superviz</a> é uma ferramenta colaborativa online para conteúdo 360º, com suporte para realidade virtual.</p>
      <p>Como desenvolvedor front-end participei no desenvolvimento da interface em Vue.js, e nas features em <a target="_" href="https://aframe.io/">AFRAME</a>.</p>
      <p></p>
      <p>2018 - 2019</p>
    </div>
    <p class="row">
      <video width="720" height="405" controls>
        <source :src="require('../assets/superviz/svapp15.mp4')" type="video/mp4"/> 
      </video>
    </p>
  </div>
</template>
<script>
export default {
  // work info
  tags: [
    'aframe',
    'vue'
  ],
  title: 'Superviz',
  route: 'superviz',
  cover: require('../assets/superviz/SuperViz_01_thumb.jpg'),
  // vue component
  name: 'superviz'
}
</script>