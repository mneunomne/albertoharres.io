<template>
  <div class="inner-cont">
    <div class="row" v-html="$t('engie.title')"/>
    <div class="row" v-html="$t('engie.text')"/>
    <p class='row'>
      <image-gallery :imgs="['assets/engie/home3D_3.jpg']" :cols="1"/>
    </p>
    <p class="row">
      <video width="720" height="405" autoplay loop muted>
        <source :src="'assets/engie/IMG_0789.MOV'" type="video/mp4"/> 
      </video>
    </p>
  </div>
</template>
<script>
export default {
  // work info
  tags: [
    'vue',
    'aframe',
  ],
  title: 'Showroom Engie',
  route: 'engie',
  cover: 'assets/engie/engie-thumb.gif',
  // vue component
  name: 'engie'
}
</script>