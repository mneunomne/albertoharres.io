import { RSA_PKCS1_OAEP_PADDING } from "constants";

const pt = {
  hello: 'olá',
  works: 'trabalhos',
  gallery: 'galeria',
  // tags
  ai: 'inteligência artificial',
  NeuralNetworks: 'redes neurais',
  mapping: 'projeção mapeada',
  pottery: 'cerâmica',
  sound: 'som',
  vr: 'realidade virtual',
  python: 'python',
  processing: 'processing',
  performance: 'performance',
  vue: 'vue',
  openFramworks: 'openFramworks',
  kinect: 'kinect',
  generative: 'generative',
  'circuit-bending': 'circuit-bending',
  arduino: 'arduino',
  aframe: 'aframe',
  // end tags
  about_text: `
    <h1>Alberto Harres</h1>
    <p>Artista e Desenvolvedor. Explorando diversas linguagens, das lógicas às poeticas.</p>
    <p>Com formação em Artes Visuais na UFRJ, atua na interseção entre arte e tecnologia desde 2012, realizando projetos com projeção mapeada, circuit-bending, experimentos sociais online, instalações interativas e realidade virtual.</p>
  `,
  capteme: {
    title: `<h1>Capte-me</h1>`,
    text: `
      <p>
        Instalação interativa em <a target="_" href="https://openframeworks.cc/">OpenFrameworks</a> 
        que captura a imagem das pessoas as reproduz utilizando caracteres de diferentes línguas. 
        Fez parte da exposição <a  target="_" href="https://museudoamanha.org.br/pt-br/capte-me-nenhuma-presenca-sera-ignorada">Capte-me</a> no Laboratório de Atividades do Amanhã, no Museu do Amanhã, Rio de Janeiro.
      </p>
      <p>
        2016
      </p>`
  },
  carruagens: {
    title: `<h1>Itinerário Etimológico</h1>`,
    text: `
      <p>
        Caixas de som e sonsor de presença.
      </p>
      <p>
        Instalação sonora feita a partir de chamadas à diferentes localidades 
        da cidade do Rio de Janeiro, realizadas nas ruas por trocadores de Vans.
      </p>
      <p>
        2017
      </p>`
  },
  central: {
    title: `
      <h1>Central</h1>
      <p>"Uma peça paisagem em tantos movimentos" da <a href="https://www.instagram.com/companhiavolante/">Companhia Volante</a></p>
    `,
    text: `
    <p>
      Central é uma peça-paisagem que se desdobra pelo centro da cidade do Rio numa série de performances encadeadas por diferentes ativações tecnológicas, sendo o próprio espaço urbano e as camadas imagéticas uma criatura em cena.
    </p>
    <p>
      A tecnologia de imagem da peça foi desenvolvida com o uso de ferramentas como Processing, OpenFrameworks e Kinect em parceria com <a href="https://inckolas.com/">Nickolas Borba</a>.
    </p>
    <p>
      Fotos: Lucas Santos, Maíra Barillo e Maria Ramiro.
    </p>
    <p>
      2018
    </p>`
  },
  mapeamento: {
    title: `<h1>Mapeamento</h1>`,
    text: `
    <p>
      Experimento web utilizando a localização do usuário para desenhar linhas sobre mapas.
    </p>`
  },
  recombining: {
    title: `
      <h1>Recombining Memories</h1>
      <p>Janury 2016, Galeria LAMPA, São Petersburg, Russia</p>
      <p>
        <i>Feito em colaboração com Mria Prosphora.</i>
      </p>
      `,
    text: `
      <p>
        Generative instalation made with Processing using the recollections of pictures and words from my stay in Russia in 2015.
      </p>
      `
  },
  romero_dreams: {
    title: `<h1>Romero Dreams</h1>`,
    text: `<p>Experiments with style transfer using Romero Britto's style in famous paintings</p>`
  },
  simbinoise: {
    title: `<h1>Simbinoise</h1>`,
    text: `
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
      `
  },
  vozes_da_terra: {
    title: `<h1>Vozes da Terra</h1>`,
    text: `
      <p>   
        Projeto que busca através da união entre circuitos eletrônico-sonoros e potes de cerâmica indígena, uma forma diferente de armazenar, reproduzir e difundir a cultura oral indígena.
      </p>
      <p>   
        O projeto começou como uma residência artística do programa Arte Eletrônica Indígena, junto à aldeia Pankararu em Tacaratu-PE.
        Lá foi feito em colaboração com as artesãs indígenas um pote especialmente feito para embarcar um dispositivo eletrônico capaz de escutar, gravar e reproduzir o que era dito ou cantado dentro dele.
        Esse artefato circulou pela comunidade contando com a interação de jovens, anciãos e curandeiras da comunidade Pankararu.
      </p>
      <p>   
        Junto com os outros projetos do programa da AEI, o pote foi exposto no MAM de Salvado-BA, e além de reproduzir os áudios gravados durante a residência, também pode gravar cantos e falas de outros povos indígenas presentes na exposição, fazendo do pote um artefato de intercâmbio cultural da cultura oral indígena.
      </p>
      <p>   
        Esse projeto participou da exposição da British Accademy Summershow Case em junho de 2019.
      </p>
      <p>
        Honorary prize at Ars Eletronica 2018 (link)
      </p>`
  },
  wen: {
    title: `
      <h1>When Speaking of Tongues</h1>
      <p>
        Exposição multimídia feito em colaboração com <a href="http://www.lotuslien.info/">Lotus Lien</a>, com performance de Randy De La Cruz e Maria Koffman.
      </p>
      `,
    text: `
      <p>
        A exposição consistia de vários experimentos performáticos e tecnológicos que orbitavam a relação entre a linguagem e os corpos:
        <ul>
        <li>Performance de dança com projeção de palavras e caracters, mapeando os corpos em tempo real utilizando com kinect;</li></br>
        <li>Uma experiência de realidade virtual simulando o próprio espaço expositivo porém substituindo os corpos presentes por caracters;</li></br>
        <li>Desenhos no espaço real e vídeos dos desenhos no espaço virtual da exposição;</li></br>
        </ul>
      </p>
      <p>
        2017, Cooper Union, Cidade de Nova York.
      </p>
    `,
    vr: `Realidade Virtual simulando o próprio espaço de exposição.`
  },
  engie: {
    title: `
      <h1>Engie - Showroom</h1>
      <p>Instalação Interativa pela Venosa Design</p>
    `,
    text: `
      <p>Criamos uma mini-cidade 3d exemplificando as diferentes soluções oferecidas pela <a target="_" href="https://www.engie.com.br/en/">Engie</a>, com animações, imagens e vídeo informativos.</p>
      <p>Alberto Harres - Programação</p>
      <p>2019</p>
    `
  }
}
/*
<div class="row" v-html="$t('central.title')"/>
<div class="row" v-html="$t('central.text')"/>
{
  title: ``,
  text: ``
}
*/

export default pt
