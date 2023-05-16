# atvcanvas
<h1>Atividade de DJW sobre o canvas</h1>
 <p>Essa foi uma atividade passada em aula para treinar o uso do canvas no JavaScript, onde foi solitado para ser desenhado um retangulo, um circulo, uma linha, uma curva e por fim uma imagem.</p>
<h2>Estrutura do projeto</h2>
<p>O projeto é composto pelas seguintes pastas</p>
 <ul>
  <ol>atvcanvas.html-Página inicial do site</ol>
  <ol>js/index.js-Arquivo JavaScript</ol>
  <ol>img/-Pasta com imagem utilizada na página</ol>
 </ul>
<h2>desenvolvimeto</h2>
<p>Para fazer essa atividade, foram utilizados essas etapas:</p>
<ul>
  <ol>1.Criar a estrutura básica do html:</ol>
  <dd>Foi adicionado as tags html, head, title e body.</dd>
  <ol>2.adicionar a tag necessaria:</ol>
  <dd>Foi adicionado a tag "canvas"</dd>
  <ol>3.Adicionar o JavaScript:</ol>
  <dd>Foi adicionado o arquivo index.js para desenhar no canvas usando o JavaScript.</dd>
</ul>
<p>Para desenhar as formas foram usados os seguintes passos</p>
<ul>
  <ol>Foi selecionado o canvas a partir do se ID utilizando o getElementById e armazenado em uma const ctx com o contexto 2D.</ol>
 <ol>Retangulo:</ol> 
 <dd>Para criar o retangulo foi adicionado um fillRect com as cordenardas de (200, 200, 300, 200), e um fillStyle para o pintar de verde.</dd> 
 <ol>Circulo</ol>
 <dd>Para criar o circulo foi adicionado um ctx.arc com as cordenadas (700, 300, 110, 0, Math.PI * 2) o Math.PI foi adicionado para definir um circulo completo, e um fill stile para o pintar de vermelho.</dd>
 <ol>Linha:</ol>
 <dd>Para criar uma linha foi adicionado um beginPath para iniciar o caminho do desenho e dois lineTo com as cordenadas (825,400) e (1000,200), e por fim foi colocado um stroke para desenhar oque foi definido no path.</dd>
 <ol>Curva:</ol>
 <dd>Para a criar a curva foi adicionado um beginPath para iniciar o caminho do desenho, um moveTo com as cordenadas(20, 20), e um bezierCurveTo com as cordenadas (100, 200, 400, 200, 400, 100) para desenhar a curva e por fim foi colocado um stroke para desenhar oque foi definido no path.</dd>
 <ol>Imagem:</ol>
 <dd>Para criar a imagem foi criada uma variavel img, e adicionado um Eventlisterner, e depois colocado um drawImage com as cordenadas (img,900,300) e por fim foi selecionada a imagem com o nome de "myImage.png" na pasta img</dd>
 <h1>Imagem</h1>
 <h2>Autores</h2>
 Gabriele e Arthur
 
