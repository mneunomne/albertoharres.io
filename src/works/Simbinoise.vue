<template>
  <div class="inner-cont">
    <div class='row'>
      <h1>Simbinoise</h1>
      <p>
        Simbinoise propõe uma interação poética entre seres humanos, tecnologia e natureza. 
        A instalação cria uma ponte entre corpos orgânicos através de circuitos eletrônicos, os dispositivos artificiais traduzem a resistência elétrica dos corpos em sons, e expande em texturas sonoras a experiência sensível.
      </p>
      <p>
        A instalação consiste em uma tradicional barraca de feira repleta de frutas ligadas a circuitos eletrônicos. 
        Os circuitos proporcionam uma experiência singular de interação, na medida que as frutas são tocadas, sonoridades moduladas são emitidas por uma série de alto-falantes espalhados na barraca. 
        Durante a interação os espectadores podem comer as frutas e fazer parte deste curto circuito antropofágico.
      </p>
      <p>
        <a target="_" href="https://simbinoise.tumblr.com/">https://simbinoise.tumblr.com/</a>
      </p>
    </div>
    <p class='row'>
      <expandable-image :close-on-background-click="true" :src="require('../assets/simbinoise/mesa.jpg')"/>
    </p>
    <p class='row'>
      <iframe width="720" height="460" src="https://www.youtube.com/embed/XdfYngWGd_A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </p>
  </div>
</template>
<script>
export default {
  // work info
  tags: [
    'sound',
    'circuit bending'
  ],
  title: 'Simbinoise',
  route: 'simbinoise',
  cover: require('../assets/simbinoise/contato.jpg'),
  // vue component
  name: 'simbinoise'
}
</script>