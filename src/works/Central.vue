<template>
  <div class="inner-cont">
    <div class="row" v-html="$t('central.title')"/>
    <div class="row" v-html="$t('central.text')"/>
    <p class="row">
      <video width="720" height="405" controls>
        <source :src="require('../assets/central/MVI_6938-SITE.mp4')" type="video/mp4"/> 
      </video>
    </p>
    <p class='row'>
      <expandable-image :close-on-background-click="true" :src="require('../assets/central/Peça Central Prévia Multiverso 30-08-18-54.jpg')"/>
    </p>
    <p class='row'>
      <expandable-image :close-on-background-click="true" :src="require('../assets/central/_MG_6961.jpeg')"/>
    </p>
    <p class='row'>
      <expandable-image :close-on-background-click="true" :src="require('../assets/central/_MG_6968.jpeg')"/>
    </p>
    <p class='row'>
      <expandable-image :close-on-background-click="true" :src="require('../assets/central/Peça Central Prévia Multiverso 30-08-18-3.jpg')"/>
    </p>
    <p class='row'>
      <expandable-image :close-on-background-click="true" :src="require('../assets/central/triangulo.jpeg')"/>
    </p>
  </div>
</template>
<script>
export default {
  // work info
  tags: [
    'mapping',
    'processing',
    'kinect',
    'performance',
    'openFrameworks'
  ],
  title: 'Central',
  route: 'central',
  cover: require('../assets/central/central-2_1.gif'),
  // vue component
  name: 'central'
}
</script>