<template>
  <div class="inner-cont">
    <div class='row'>
      <h1>Romero Dreams</h1>
      <p>Experiments with style transfer using Romero Britto's style in famous paintings</p>
    </div>
    <p class='row'>
      <expandable-image :close-on-background-click="true" :src="require('../assets/romero-dreams/retirantes_dreams2.png')"/>
    </p>
  </div>
</template>
<script>
export default {
  // work info
  tags: [
    'AI',
    'Neural Networks'
  ],
  title: 'Romero Dreams',
  route: 'romero-dreams',
  cover: require('../assets/romero-dreams/romero-thumb.jpg'),
  // vue component
  name: 'romero-dreams'
}
</script>