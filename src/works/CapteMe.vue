<template>
  <div class="inner-cont">
    <div class='row' v-html="$t('capteme.title')"/>
    <div class="row" v-html="$t('capteme.text')"/>
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
    'openFrameworks'
  ],
  title: 'Capte-me',
  route: 'capte-me',
  cover: require('../assets/capte-me/capte-thumb.jpg'),
  // vue component
  name: 'capte-me'
}
</script>