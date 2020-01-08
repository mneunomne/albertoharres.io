<template>
  <div class="inner-cont">
    <div class='row'>
      <h1>Recombining Memories</h1>
      <p>Janury 2016, Saint Petersburg, Russia</p>
    </div>
    <p class='row'>
      Generative instalation made with Processing using the recolections of pictures and words from my stay in Russia in 2015.
    </p>
    <p class='row'>
      <expandable-image :close-on-background-click="true" :src="require('../assets/recombining-memories/IMG_7708_1000.jpg')"/>
    </p>
  </div>
</template>
<script>
export default {
  // work info
  tags: [
    'processing',
    'instalation'
  ],
  title: 'Recombining Memories',
  route: 'recombining-memories',
  cover: require('../assets/recombining-memories/IMG_7716_1000.jpg'),
  // vue component
  name: 'recombining-memories'
}
</script>