<template>
  <div class="inner-cont">
    <div class='row' v-html="$t('recombining.title')"/>
    <div class='row' v-html="$t('recombining.text')"/>
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
    'generative'
  ],
  title: 'Recombining Memories',
  route: 'recombining-memories',
  cover: require('../assets/recombining-memories/IMG_7716_1000.jpg'),
  // vue component
  name: 'recombining-memories'
}
</script>