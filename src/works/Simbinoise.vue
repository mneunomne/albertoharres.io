<template>
  <div class="inner-cont">
    <div class="row" v-html="$t('simbinoise.title')"/>
    <div class="row" v-html="$t('simbinoise.text')"/>
    <p class='row'>
      <image-gallery :imgs="[
        'assets/simbinoise/mesa.jpg',
        'assets/simbinoise/contato.jpg',
        'assets/simbinoise/contato2.jpg',
        'assets/simbinoise/melao-falante.jpg'
      ]"/>
    </p>
    <p class='row'>
      <iframe width="720" height="460" src="https://www.youtube.com/embed/XdfYngWGd_A?showinfo=0" frameborder="0" allowfullscreen></iframe>
    </p>
  </div>
</template>
<script>
export default {
  // work info
  tags: [
    'sound',
    'circuit-bending'
  ],
  title: 'Simbinoise',
  route: 'simbinoise',
  cover: '../assets/simbinoise/simbi-thumb.jpg',
  // vue component
  name: 'simbinoise'
}
</script>