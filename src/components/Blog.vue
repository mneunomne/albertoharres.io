<template>
  <div>
    <iframe id="iframe-blog" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" src="https://mneunomne.github.io/blog-eleventy/"/>
  </div>
</template>
<style lang="sass" scoped>
#iframe-blog
  width: 100%
  position: absolute
  top: 35px
  left: 0
  border: none
  height: calc(100vh - 35px)
</style>