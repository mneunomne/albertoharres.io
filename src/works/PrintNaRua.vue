<template>
  <div class="inner-cont">
    <div class='row'>
      <h1>Print na Rua</h1>
    </div>
    <p class='row'>
      <expandable-image :close-on-background-click="true" :src="'assets/capte-me/1018112-img_7590.jpg'"/>
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