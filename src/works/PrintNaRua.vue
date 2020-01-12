<template>
  <div class="inner-cont">
    <div class='row'>
      <h1>Print na Rua</h1>
    </div>
    <p class='row'>
      <image-gallery :imgs="['assets/capte-me/1018112-img_7590.jpg']" :cols="1"/>
    </p>
  </div>
</template>
<script>
export default {
  // work info
  tags: [
    'street-art',
    'glitch'
  ],
  title: 'Mapeamento',
  route: 'mapeamento',
  cover: 'assets/mapeamento/thumb.jpg',
  // vue component
  name: 'mapeamento'
}
</script>