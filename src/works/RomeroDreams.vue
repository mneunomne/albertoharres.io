<template>
  <div class="inner-cont">
    <div class='row' v-html="$t('romero_dreams.title')"/>
    <div class='row' v-html="$t('romero_dreams.text')"/>
    <p class='row'>
      <expandable-image :close-on-background-click="true" :src="require('../assets/romero-dreams/retirantes_dreams2.png')"/>
    </p>
  </div>
</template>
<script>
export default {
  // work info
  tags: [
    'ai',
    'NeuralNetworks',
    'python'
  ],
  title: 'Romero Dreams',
  route: 'romero-dreams',
  cover: require('../assets/romero-dreams/romero-thumb.jpg'),
  // vue component
  name: 'romero-dreams'
}
</script>