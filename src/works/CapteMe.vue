<template>
  <div class="inner-cont">
    <div class='row' v-html="$t('capteme.title')"/>
    <div class="row" v-html="$t('capteme.text')"/>
    <p class='row'>
      <image-gallery :imgs="imgs" :cols="1"/>
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgs : ["assets/capte-me/Screen Shot 2016-05-15 at 14.16.25.png", "assets/capte-me/1018112-img_7590.jpg"]
    }
  },
  // work info
  tags: [
    'openFrameworks'
  ],
  title: 'Capte-me',
  route: 'capte-me',
  cover: 'assets/capte-me/capte-thumb.jpg',
  // vue component
  name: 'capte-me'
}
</script>