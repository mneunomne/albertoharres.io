<template>
  <div>
    <div class="about about-left">
      <img class="profile" :src="require('../assets/profile.png')"/>
      <p>alberto.harres@gmail.com</p>
      <a target="_" href="https://www.instagram.com/mneunomne/" class="fa fa-instagram"></a>
      <a target="_" href="https://github.com/mneu_nomne" class="fa fa-github"></a>
    </div>
    <div class="about about-right">
      <h1>Alberto Harres</h1>
      <p>Artista e Desenvolvedor. Explorando diversas linguagens, das lógicas às poeticas. Tenho conhecimento na área de programação de interfaces interativas e na sua conexão com ideias e conceitos.</p>
      <p>Formado em Artes Visuais na UFRJ, atua na interceção entre arte e tecnologia desde 2012, </p>
      <p>Algumas das tecnologias com que trabalho: OpenFrameworks (C++), Processing (Java), VueJS, ReactJS, A-Frame, Unity3d, Arduíno, Python, SuperCollider e etc.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style lang="sass" scoped>
.about
  display: inline-block
  &-left
    vertical-align: top
    width: 320px
    margin: 0px
    padding: 0px
    padding-left: 20px
    padding-right: 20px
    padding-top: 45px
    text-align: center
  &-right
    display: inline-block
    vertical-align: top
    margin: 15px
    width: calc(97% - 370px)
    min-width: 380px
    max-width: 720px

.profile
  object-fit: contain

.fa
  padding: 10px
  font-size: 30px
  width: 50px
  text-align: center
  text-decoration: none
  margin: 5px 2px
  border-radius: 50%
  color: black

.fa:hover
  opacity: 0.7
</style>