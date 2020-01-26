<template>
  <div class="gallery">
    <v-gallery :images="imgs" :index="index" @close="index = null"></v-gallery>
    <!-- <image-gallery :imgs="imgs" :cols="3"/> -->
    <div class="gallery-col" v-for="(cols, i) in getGalleryCols" :key="i">
      <img class="gallery-img" :src="img" v-for="(img, j) in cols" :key="j" @click="index = imgs.indexOf(img)">
    </div>
  </div>
</template>
<script>

function shuffle(a) {
  console.log('shuffle!', a)
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  console.log('shuffle!', a)
  return a;
}

function splitUp(arr, n) {
  var rest = arr.length % n, // how much to divide
      restUsed = rest, // to keep track of the division over the elements
      partLength = Math.floor(arr.length / n),
      result = [];
  for(var i = 0; i < arr.length; i += partLength) {
    var end = partLength + i,
        add = false;
    if(rest !== 0 && restUsed) { // should add one element for the division
        end++;
        restUsed--; // we've used one division element now
        add = true;
    }
    result.push(arr.slice(i, end)); // part of the array
    if(add) {
        i++; // also increment i in the case we added an extra element for division
    }
  }
  return result;
}

export default {
  name: 'Gallery',
  data () {
    return {
      imgs: [
        'assets/gallery/13081970_971607722887691_1950386095_n.jpg',
        'assets/gallery/1465378_10151842265321359_1317063598_n 5.jpg',
        'assets/gallery/1900199_1435632563404982_1803517315309074970_o.jpg',
        'assets/gallery/2016-08-24.jpg',
        'assets/gallery/89 54 87  58 68 345bn8    ikuy cvhni09 talvégvbocio.jpg',
        'assets/gallery/Photo on 2-9-15 at 7.29 PM.jpg',
        'assets/gallery/Screen Shot 2015-02-04 at 10.39.40 AM.png',
        'assets/gallery/Screen Shot 2015-02-12 at 10.36.35 AM.png',
        'assets/gallery/Screen Shot 2015-02-12 at 11.01.09 AM.png',
        'assets/gallery/Screen Shot 2015-04-28 at 1.42.25 PM.png',
        'assets/gallery/Screen Shot 2018-04-26 at 00.07.18.png',
        'assets/gallery/Screen Shot 2018-05-01 at 18.35.36.png',
        'assets/gallery/Screen Shot 2018-05-06 at 21.38.03.png',
        'assets/gallery/Screen Shot 2018-06-03 at 20.19.01.png',
        'assets/gallery/Screen Shot 2019-01-05 at 03.47.13.png',
        'assets/gallery/Screen Shot 2019-01-06 at 01.25.29.png',
        'assets/gallery/Screen Shot 2019-01-06 at 01.58.27.png',
        'assets/gallery/Screen Shot 2019-03-07 at 19.22.19.jpg',
        'assets/gallery/Screen Shot 2019-03-17 at 19.10.12.jpg',
        'assets/gallery/Screen Shot 2019-03-18 at 01.29.35.jpg',
        'assets/gallery/Screen Shot 2019-03-18 at 01.34.18.png',
        'assets/gallery/Screen Shot 2019-04-03 at 17.16.26.png',
        'assets/gallery/Screen Shot 2019-08-05 at 21.04.55.jpg',
        'assets/gallery/Screen Shot 2019-08-08 at 02.49.13.png',
        'assets/gallery/Screen Shot 2019-08-08 at 20.44.45.jpg',
        'assets/gallery/Screen Shot 2019-08-08 at 20.46.05.png',
        'assets/gallery/asarvores.jpg',
        'assets/gallery/autoretratocoroinha.jpg',
        'assets/gallery/coração no céu MENOR.jpg',
        'assets/gallery/d2eb7070-ccc0-4b82-a276-1c39b6569204.jpg',
        'assets/gallery/img015.jpg',
        'assets/gallery/img018.jpg',
        'assets/gallery/img020.jpg',
        'assets/gallery/mato.jpg',
        'assets/gallery/poesia glitch cicatriz.jpg',
        'assets/gallery/print-na-rua.jpg',
        'assets/gallery/protótipo de Z.jpg',
        'assets/gallery/scan11.jpg',
        'assets/gallery/scan17 (1).jpg',
        'assets/gallery/scan18.jpg',
        'assets/gallery/sonho com pombo.jpg',
        'assets/gallery/xfg hki.jpg',
      ],
      curWidth: window.innerWidth,
      index: null
    }
  },
  computed: {
    getGalleryCols () {
      let cols = []
      if (this.curWidth > 1200) {
        cols = splitUp(this.imgs, 4)
      } else if (this.curWidth > 900) {
        cols = splitUp(this.imgs, 3)
      } else if (this.curWidth > 500) {
        cols = splitUp(this.imgs, 2)
      } else {
        cols = splitUp(this.imgs, 1)
      }
      return cols
    }
  },
  methods: {
    onResize (evt) {
      this.curWidth = evt.target.innerWidth
    }
  },
  beforeMount() {
    this.imgs = shuffle(this.imgs)
  },
  mounted () {
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
     window.removeEventListener('resize', this.onResize)
  },
}
</script>
<style lang="sass">
.gallery
  padding: 10px
  width: 97%
  display: flex
  justify-content: space-around
  // max-height: 90vh
  &-col
    display: inline-block
    // max-height: 100%
    // overflow: scroll

@media (min-width: 501px)
  .gallery-col
    width: calc(50% - 5px) !important

@media (min-width: 900px)
  .gallery-col
    width: calc(33.3% - 5px) !important

@media (min-width: 1200px)
  .gallery-col
    width: calc(25% - 5px) !important

@media (min-width: 1600px)
  .gallery-col
    width: calc(20% - 5px) !important
</style>