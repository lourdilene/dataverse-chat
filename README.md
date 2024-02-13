# Dataverse Chat

## Índice

* [1. Preâmbulo](#1-preâmbulo)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Considerações gerais](#3-considerações-gerais)
* [4. Funcionalidades](#4-funcionalidades)
* [5. Considerações técnicas](#5-considerações-técnicas)
* [6. Marcos](#6-Marcos)
* [7. Critérios de aceitação mínimos do projeto](#7-critérios-de-aceitação-mínimos-do-projeto)
* [8. Objetivos de aprendizagem](#8-objetivos-de-aprendizagem)
* [9. Dicas, guias e leituras complementares](#9-dicas-guias-e-leituras-complementares)
* [10. Considerações para solicitar seu Feedback do Projeto](#10-considerações-para-solicitar-seu-feedback-do-projeto)

***

## 1. Preâmbulo

No nosso dia a dia, as aplicações web são como amigas inseparáveis.
Desde as redes sociais até as ferramentas de trabalho, nós as utilizamos
o tempo todo. Mas o que torna este momento realmente especial é que
essas aplicações podem nos abrir uma porta para algo incrível:
a interação com a inteligência artificial.

E se pudéssemos conversar com alguém que viveu há mais de cem anos ou
até mesmo com os personagens de nossas séries e filmes favoritos, ou com entidades
que normalmente não podem falar, como por exemplo planetas ou animais?
A inteligência artificial pode nos ajudar a entender o passado e nos conectar
com figuras históricas, assim como nos imergir em mundos fictícios.

![Visualização do aplicativo](https://github-production-user-asset-6210df.s3.amazonaws.com/123121338/271433237-2bd1477b-15ef-49d4-9fcb-226b3263c46a.png)

## 2. Resumo do projeto

Neste projeto, você irá transformar a aplicação desenvolvida no Dataverse
em uma [Single Page Application (SPA)](https://pt.wikipedia.org/wiki/Aplicativo_de_p%C3%A1gina_%C3%BAnica),
mantendo as funcionalidades de visualização, filtragem, ordenação e
cálculo de alguma estatística. Vamos adicionar uma nova visualização (tela)
para consultar informações detalhadas de cada personagem/entidade e acrescentar
a possibilidade de interagir com um personagem/entidade ou todos eles através
de um sistema de chat impulsionado pela [API da OpenAI](https://openai.com/product).

### Os objetivos gerais deste projeto são os seguintes

* Desenvolver uma [Single Page Application (SPA)](https://pt.wikipedia.org/wiki/Aplicativo_de_p%C3%A1gina_%C3%BAnica)
* Aplicar os conceitos de responsividade no desenvolvimento das telas
* Implementar um router para a navegação entre as diferentes visualizações/telas
  da aplicação
* Integrar uma API externa
* Compreender a assincronia em JavaScript
* Criar um conjunto de testes unitários que permitam testar código assíncrono

## 3. Considerações gerais

* Este projeto deve ser resolvido em duplas.

* O intervalo de tempo estimado para completar o projeto é de 4 a 5 Sprints.

* A lógica do projeto deve ser implementada completamente em JavaScript (ES6+),
  HTML e CSS. Para este projeto, **não é permitido** utilizar _frameworks_
  ou bibliotecas de CSS e JS.

* Reutilizar parte do código do projeto Dataverse, especialmente o conjunto
  de dados. Além disso, você deve refatorar o código para torná-lo mais
  modular e reutilizável, implementando novas funções para alcançar as
  funcionalidades necessárias neste projeto.

* O projeto será entregue fazendo o _commit/push_ do seu código para o
  GitHub e a interface será implantada usando qualquer uma
  destas opções: [Vercel](https://vercel.com/) ou [Netlify](https://www.netlify.com/).

* A divisão e organização do trabalho deve permitir, sem exceções,
  que **cada membro** da equipe pratique todo o aprendizado envolvido
  em **cada história**. _Não dividam o trabalho como em uma fábrica._
  - Você progrediu em seus projetos com certa fluidez e sem grandes problemas
  até agora? Seja generosa com suas colegas, permita que elas aprendam e
  pratiquem sem restrições, mesmo que leve um pouco mais de tempo.
  Aproveite para orientá-las, fazer _pair programming_, uma das melhores
  maneiras de aprender é explicar verbalmente.
  - Está achando difícil e está tendo um pouco mais de dificuldade? Não fique
  apenas com as partes "fáceis" do projeto, converse, negocie, exija sua oportunidade
  para praticar e aprender o que achar mais difícil. Para começar,
  você terá que fazer um _fork_ e _clonar_ este repositório.

## 4. Funcionalidades

Como entrega final, você terá uma Single Page Application (SPA) que
permitirá **visualizar os dados, filtrá-los, ordená-los e calcular alguma estatística**
como foi feito no Dataverse, mas também acessar uma página de detalhes
de cada personagem e poder _interagir_ com os personagens ou entidades do
conjunto de dados que você utilizou anteriormente.

Aqui estão definidas de forma mais detalhada as funcionalidades
mínimas que a aplicação deve ter:

* A aplicação deve ser _responsiva_
* A aplicação deve ser uma SPA com várias visualizações:
  - Implementar um sistema de roteamento que permita a navegação dentro
    da aplicação.
  - Cada visualização da aplicação deve ser carregada dinamicamente por meio
    do JavaScript.
  - Garantir que a URL seja atualizada de acordo com a visualização carregada,
    assim como o `title` do documento (a aba do navegador).
  - A aplicação deve ser capaz de carregar a visualização correspondente
    à URL atual ao iniciar a aplicação.
* A aplicação deve manter as funcionalidades do Dataverse: visualizar,
  iltrar, ordenar e calcular estatísticas dos dados.
* Ao clicar em um card de personagem/entidade, a aplicação deve redirecionar
  para uma visualização **com sua própria URL** que mostre informações
  detalhadas sobre aquele personagem/entidade em particular.
* A aplicação deve permitir ao usuário configurar a API Key para
  interagir com a API da Open AI.
* Utilizando a API da Open AI, a aplicação deve permitir que o usuário interaja
  com um personagem/entidade através de um chat.
  Por exemplo, se utilizarmos os dados de exemplo do Dataverse,
  correspondentes às mulheres com as maiores contribuições para a programação
  na história, um usuário pode estabelecer uma conversa interativa
  com [Ada Lovelace](https://pt.wikipedia.org/wiki/Ada_Lovelace) através do
  sistema de chat, obtendo informações sobre suas realizações,
  desafios e contribuições para a informática. A inteligência artificial da OpenAI
  permite que as respostas sejam informativas e personalizadas de acordo com as
  perguntas dos usuários.

```text
Usuária: "Olá, Ada. Conta-me mais sobre as suas contribuições para a
informática."

Ada Lovelace (AI da OpenAI): "Olá! Claro, ficarei encantada em falar sobre isso.
As minhas contribuições mais destacadas estão relacionadas ao trabalho com
Charles Babbage no design da Máquina Analítica. Além disso, desenvolvi o
primeiro algoritmo destinado a ser processado por uma máquina, o que me
torna a primeira programadora da história. Há algo mais em particular
que gostarias de saber?"

Usuária: "Isso é fascinante! Que desafios você enfrentou naquela época?"

Ada Lovelace (AI da OpenAI): "Naquela época, enfrentei vários desafios,
um dos principais foi a limitação de recursos e a falta de reconhecimento
do potencial da Máquina Analítica. Também tive que superar as restrições
sociais da época, já que as mulheres tinham acesso limitado à educação em
matemática e ciências. No entanto, minha paixão pela matemática e a visão
do que essas máquinas poderiam realizar me impulsionaram a seguir em frente."

```

* A aplicação deve permitir que o usuário interaja de forma simultânea
  com **todos** os personagens/entidades através de um chat:
  - Esta funcionalidade deve ser carregada na URL `/panel`
  - A usuária pode digitar sua pergunta ou mensagem para todos os
    personagens/entidades em uma caixa de texto e enviá-la com um botão
  - A mensagem da usuária deve ser adaptada para cada personagem/entidade,
  com o objetivo de gerar uma resposta com base em sua personalidade e conhecimento
  - As respostas de todos os personagens são exibidas de acordo com a ordem de
  resposta.
  - Indicar visualmente quando um ou vários personagens/entidades estiverem
  gerando uma resposta à mensagem enviada
* A aplicação deve informar à usuária sobre os erros que possam surgir ao
  interagir com a API, como atingir a cota de tokens por minuto ou qualquer outro
  erro relacionado à API. Deve ser fornecida uma descrição clara da causa do
  problema e possíveis soluções.

Para que as conversas anteriores funcionem, é essencial que a aplicação seja
integrada à IA por meio da API da OpenAI. Para isso, a equipe da Laboratoria
fornecerá uma Chave de API que a usuária deverá ser capaz de inserir
na aplicação que você construirá.

_Nota_: você pode revisar esta [implementação](https://laboratoria-dataverse-talks.netlify.app/)
de exemplo, cujo objetivo principal é mostrar como a funcionalidade
de chat apareceria na sua aplicação, mas não tome o design como referência
para o seu projeto. Sinta-se à vontade para deixar sua imaginação voar ao
projetar sua própria interface.

## 5. Considerações técnicas

A lógica do projeto deve ser implementada completamente em JavaScript (ES6),
HTML e CSS. Neste projeto, NÃO é permitido usar bibliotecas ou frameworks,
apenas [JavaScript puro](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery).

O _boilerplate_ que vem com o projeto é uma estrutura inicial.
Vocês devem adicionar mais arquivos à medida que avançam no projeto.
A seguir está uma estrutura de arquivos recomendada:

```text
.
├── src
|  ├── components 
|  ├── data
|  |  └── dataset.js
|  ├── lib
|  |  └── dataFunctions.js
|  ├── views
|  ├── index.html
|  ├── index.js
|  ├── router.js
|  └── style.css
├── test
|  └── dataFunctions.spec.js
|  └── example.spec.js
├── README.md
└── package.json

```

### `src/components`

Esta pasta conterá arquivos JavaScript que representam
[componentes](https://lenguajejs.com/vuejs/componentes/que-es-un-componente/)
reutilizáveis da sua aplicação. Esses componentes podem ser elementos
da interface do usuário usados em várias partes da sua aplicação.
Organizar seus componentes dessa maneira ajuda a manter um código
mais modular e reutilizável.

### `src/data`

Nesta pasta estão os dados com os quais você vai trabalhar
(dados de exemplo ou dados que serão gerados com a ajuda
da inteligência artificial).

### `src/lib`

Nesta pasta, você criará módulos que contêm funcionalidades não
relacionadas ao DOM. Aqui, você poderá incluir o arquivo
`dataFunctions.js`, que contém as funções que permitem filtrar,
ordenar e fazer cálculos agregados. Você também poderá criar
arquivos com as funções que interajam com a API de inteligência
artificial ou utilidades destinadas a armazenar dados no local storage.

### `src/views`

Esta pasta geralmente contém arquivos dos componentes que representam
as diferentes páginas ou visualizações da sua aplicação.
Cada visualização (view) pode ter seu próprio arquivo JavaScript,
que exporta uma função responsável por gerar os elementos do DOM.

### `src/index.html`

Assim como no projeto anterior, existe um arquivo `index.html`.
Neste arquivo HTML, você encontrará um elemento DOM `<div id='root'></div>`,
onde você vai renderizar as diferentes visualizações da sua aplicação.

### `src/index.js`

O ponto de partida para a sua SPA será o arquivo `src/index.js`.
Aqui, você encontrará algumas instruções e comentários para
orientá-lo no início do desenvolvimento da sua aplicação.

### `src/router.js`

Neste arquivo, você irá gerenciar o roteamento da sua aplicação.
É um arquivo que você terá que criar por conta própria.

### `src/style.css`

É um arquivo que você terá que criar por conta própria para adicionar
os estilos necessários para a sua aplicação.

### `src/test`

Esta pasta contém os testes das suas funções e componentes. Por exemplo, os
testes das `dataFunctions` devem estar aqui.

## 6. Marcos

Para resolver um problema,
é importante compreendê-lo em profundidade.
Uma forma de fazer isso é desmembrá-lo em problemas menores.
Isso nos ajudará a identificar as causas do problema e
a desenvolver soluções mais eficazes.

Neste projeto, sugerimos que trabalhe por marcos.
Isso permitirá que você se concentre em um problema de cada vez e
acompanhe seu progresso.
A seguir, apresentamos um cronograma de marcos que
pode ajudá-lo a organizar seu trabalho.

* [Marco 1](./docs/01-milestone.md)
* [Marco 2](./docs/02-milestone.md)
* [Marco 3](./docs/03-milestone.md)
* [Marco 4](./docs/04-milestone.md)
* [Marco 5](./docs/05-milestone.md)

## 7. Critérios de aceitação mínimos do projeto

Além das funcionalidades que definimos na seção de [Funcionalidades](#4-funcionalidades),
o seu projeto deve atender aos seguintes requisitos:

### Definição do produto

Documente brevemente o seu trabalho no arquivo `README.md` do seu repositório,
contando como foi o seu processo de design e como você acredita que o produto
resolve o problema (ou problemas) da sua usuária.

### Histórias de usuária

Depois de entender as necessidades das suas usuárias, escreva
as [Histórias de Usuária](https://pt.wikipedia.org/wiki/História_de_usuário)
que representam tudo o que a usuária precisa fazer/ver.
As **Histórias de Usuária** devem ser o resultado do seu processo de
pesquisa ou _research_ das suas usuárias.

Certifique-se de incluir a definição de pronto (_definition of done_)
e os Critérios de Aceitação para cada uma.

Use as suas histórias de usuária para planejar as suas sprints dividindo
cada história em tarefas.

Na medida do possível, termine uma História de Usuária antes de passar para
a próxima (cumprindo a Definição de Pronto e os Critérios de Aceitação).

### Design da Interface de Usuária

#### Protótipo de baixa fidelidade

Durante o seu trabalho, você deverá ter feito e iterado esboços (_sketches_)
da sua solução usando papel e lápis. Recomendamos que tire fotos de todas as
iterações que fizer, as suba para o seu repositório e as mencione
no seu `README.md`.

Lembre-se de pedir feedback do seu protótipo para as suas colegas e/ou coaches.

#### Protótipo de alta fidelidade

O próximo passo é projetar a sua Interface de Usuária (UI - _User Interface_).
Para isso, você deve aprender a utilizar alguma ferramenta de design visual.
Nós recomendamos o [Figma](https://www.figma.com/), que é uma ferramenta que
funciona no navegador e, além disso, você pode criar uma conta gratuita.
No entanto, você é livre para usar outros editores gráficos como
Illustrator, Photoshop, etc.

O design deve representar o _ideal_ da sua solução. Digamos que é o que você
gostaria de implementar se tivesse tempo ilimitado para trabalhar.
Além disso, o seu design deve seguir os fundamentos de _visual design_.

Lembre-se de pedir feedback do seu protótipo para as suas colegas e/ou coaches.

### Testes de usabilidade

Durante o desafio, você deverá fazer _testes_ de usabilidade com
diferentes usuárias e, com base nos resultados, deverá iterar os
seus desenhos. Conte-nos quais problemas de usabilidade você
identificou por meio dos _testes_ e como os melhorou na sua
proposta final.

### Implementação da Interface de Usuária (HTML/CSS/JS)

Depois de projetar a sua interface de usuária, você deverá trabalhar
na sua implementação. **Não** é necessário que você construa a interface
exatamente como a desenhou. Seu tempo é limitado, então você terá que
priorizar.

Revise [as funcionalidades](#4-funcionalidades) que o projeto pede
da interface.

### Testes unitários

O _boilerplate_ deste projeto não inclui Testes Unitários (_tests_), então
você terá que escrevê-los para as funções responsáveis por _processar_,
_filtrar_ e _ordenar_ os dados, bem como _calcular_ estatísticas.
Recomendamos o uso do framework [Jest](https://jestjs.io/) para executar
os testes unitários. Consulte a documentação.

Os seus _testes unitários_ devem cobrir 70% das _statements_ (_declarações_),
_functions_ (_funções_), _lines_ (_linhas_) e _branches_ (_ramos_) do arquivo
`src/dataFunctions.js`, que contém as suas funções e é detalhado na seção de
[Considerações técnicas](#5-considerações-técnicas).

## 8. Objetivos de aprendizagem

Reflita e depois enumere os objetivos que quer alcançar e aplique no seu projeto. Pense nisso para decidir sua estratégia de trabalho.

### HTML

- [ ] **Uso de HTML semântico**

  <details><summary>Links</summary><p>

  * [HTML semântico](https://curriculum.laboratoria.la/pt/topics/html/html5/semantic-html)
  * [Semantics in HTML - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de seletores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/pt/topics/css/css/intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/pt_BR/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caixa (box model): borda, margem, preenchimento**

  <details><summary>Links</summary><p>

  * [Modelo de Caixa e Display](https://curriculum.laboratoria.la/pt/topics/css/css/boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [ ] **Uso de flexbox em CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#pt-br)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

- [ ] **Uso de CSS Grid Layout**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Grid - CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
  * [Grids - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
</p></details>

### Web APIs

- [ ] **Routing (History API, evento hashchange, window.location)**

  <details><summary>Links</summary><p>

  * [Manipulando o histórico do navegador - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/History_API)
</p></details>

- [ ] **Browser storage (localStorage, sessionStorage)**

  <details><summary>Links</summary><p>

  * [Window.localStorage - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/Window.localStorage)
</p></details>

- [ ] **Fetch API**

  <details><summary>Links</summary><p>

  * [Fetch API - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)
</p></details>

#### DOM (Document Object Model)

- [ ] **Uso de seletores de DOM**

  <details><summary>Links</summary><p>

  * [Modificando o DOM](https://curriculum.laboratoria.la/pt/topics/browser/dom/1-dom-methods-selection)
  * [Introdução ao DOM - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
  * [Locating DOM elements using selectors - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manipulação de eventos de DOM (listeners, propagação, delegação)**

  <details><summary>Links</summary><p>

  * [Introdução a eventos - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/removeEventListener)
  * [Objeto Event](https://developer.mozilla.org/pt-BR/docs/Web/API/Event)
</p></details>

- [ ] **Manipulação dinâmica de DOM**

  <details><summary>Links</summary><p>

  * [Introdução ao DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [ ] **Uso de identificadores descritivos (Nomenclatura e Semântica)**

- [ ] **Variáveis (declaração, atribuição, escopo)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de dados e operadores](https://curriculum.laboratoria.la/pt/topics/javascript/basics/values-variables-and-types)
  * [Variáveis](https://curriculum.laboratoria.la/pt/topics/javascript/basics/variables)
</p></details>

- [ ] **Funções (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funções (controle de fluxo)](https://curriculum.laboratoria.la/pt/topics/javascript/flow-control/functions)
  * [Funções clássicas](https://curriculum.laboratoria.la/pt/topics/javascript/functions/classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/pt/topics/javascript/functions/arrow)
  * [Funções — blocos reutilizáveis de código - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Uso de condicionais (if-else, switch, operador ternário, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estruturas condicionais e repetitivas](https://curriculum.laboratoria.la/pt/topics/javascript/flow-control/conditionals-and-loops)
  * [Tomando decisões no seu código — condicionais - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Diferença entre expressões (expressions) e declarações (statements)**

- [ ] **Uso de laços (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Laços (Loops)](https://curriculum.laboratoria.la/pt/topics/javascript/flow-control/loops)
  * [Laços e iterações - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

#### Assincronicidade

- [ ] **Callbacks**

  <details><summary>Links</summary><p>

  * [Função Callback - MDN](https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function)
</p></details>

- [ ] **Promessas**

  <details><summary>Links</summary><p>

  * [Promise - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  * [How to Write a JavaScript Promise - freecodecamp (em inglês)](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)
</p></details>

#### Tipos de dados

- [ ] **Diferenciar entre tipos de dados primitivos e não primitivos**

- [ ] **Arrays (arranjos)**

  <details><summary>Links</summary><p>

  * [Arranjos](https://curriculum.laboratoria.la/pt/topics/javascript/arrays)
  * [Array - MDN](https://developer.mozilla.org//pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

- [ ] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos em JavaScript](https://curriculum.laboratoria.la/pt/topics/javascript/objects/objects)
</p></details>

#### Módulos

- [ ] **Módulos de ECMAScript (ES modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

#### Testing em Javascript

- [ ] **Testes unitários (unit tests)**

  <details><summary>Links</summary><p>

  * [Introdução ao Jest - Documentação oficial](https://jestjs.io/docs/pt-BR/getting-started)
</p></details>

- [ ] **Testes assíncronos**

  <details><summary>Links</summary><p>

  * [Testando Código Assíncrono - Documentação oficial](https://jestjs.io/docs/pt-BR/asynchronous)
</p></details>

- [ ] **Uso de mocks e espiões**

  <details><summary>Links</summary><p>

  * [Simulações Manuais - Documentação oficial](https://jestjs.io/docs/pt-BR/manual-mocks)
</p></details>

### HTTP

- [ ] **Cabeçalhos (headers)**

  <details><summary>Links</summary><p>

  * [Cabeçalhos HTTP - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers)
</p></details>

- [ ] **Consulta ou solicitação (request) e resposta (response).**

  <details><summary>Links</summary><p>

  * [Visão geral do protocolo HTTP - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview)
  * [Mensagens HTTP - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Messages)
</p></details>

- [ ] **Códigos de status de HTTP**

  <details><summary>Links</summary><p>

  * [Códigos de status de respostas HTTP - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)
  * [The Complete Guide to Status Codes for Meaningful ReST APIs - dev.to](https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5)
</p></details>

### AI Prompting

- [ ] **Priming Chatbots**

  <details><summary>Links</summary><p>

  * [Priming Chatbots | Learn Prompting: Your Guide to Communicating with AI](https://learnprompting.org/pt/docs/basics/priming_prompt)
</p></details>

- [ ] **OpenAI API**

  <details><summary>Links</summary><p>

  * [Introduction - OpenAI API](https://platform.openai.com/docs/introduction)
  * [Authentication - API Reference - OpenAI API](https://platform.openai.com/docs/api-reference/authentication)
  * [Making requests - API Reference - OpenAI API](https://platform.openai.com/docs/api-reference/making-requests)
  * [The chat completion object - API Reference - OpenAI API](https://platform.openai.com/docs/api-reference/chat/object)
</p></details>

### Controle de Versões (Git e GitHub)

#### Git

- [ ] **Git: Instalação e configuração**

- [ ] **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integração de mudanças entre ramos (branch, checkout, fetch, merge, reset, rebase, tag)**

#### GitHub

- [ ] **GitHub: Criação de contas e repositórios, configuração de chave SSH**

- [ ] **GitHub: Implantação com GitHub Pages**

  <details><summary>Links</summary><p>

  * [Site oficial do GitHub Pages](https://pages.github.com/)
</p></details>

- [ ] **GitHub: Colaboração pelo Github (branches | forks | pull requests | code review | tags)**

### Centrado no usuário

- [ ] **Desenhar e desenvolver um produto ou serviço colocando as usuárias no centro**

### Design de produto

- [ ] **Criar protótipos para obter feedback e iterar**

- [ ] **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**

### Pesquisa

- [ ] **Planejar e executar testes de usabilidade**

## 9. Dicas, guias e leituras complementares

### Primeiros passos

Junte-se ao canal Slack [#project-dataverse-chat-pt](https://claseslaboratoria.slack.com/archives/C06GE35H7B7)
para conversar e pedir ajuda sobre o projeto.

Sugerimos algumas tarefas para iniciar o projeto. Não é
necessário abordá-las de maneira sequencial e você pode
realizá-las em paralelo enquanto avança no planejamento
das Histórias do Usuário:

#### Design de Wireframes ou Protótipo de Baixa Fidelidade

Comece projetando wireframes ou protótipos de baixa fidelidade para
capturar os requisitos funcionais do seu projeto. É recomendável
começar com uma abordagem ["mobile first"](https://mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
para garantir usabilidade em dispositivos móveis e, em seguida,
estender a atenção para telas maiores, como as de desktop.

#### Compreensão dos Conceitos de SPA (Single Page Application) e Roteamento

Antes de começar a codificar, certifique-se de entender os conceitos
de uma Aplicação de Página Única (SPA) e o roteamento de páginas.
Isso permitirá criar uma experiência de usuário fluída e dinâmica.
Pesquise as melhores práticas e ferramentas disponíveis para
implementar uma SPA no seu projeto.

#### Preparação da Estrutura do Projeto

Organize seu projeto criando a estrutura de diretórios necessária
e configurando um sistema de roteamento básico para mudar dinamicamente
entre duas visualizações. Certifique-se de que seu projeto tenha uma
arquitetura limpa e escalável.

#### Integração do Dataverse

Se você pretende usar código do Dataverse em seu projeto, certifique-se de
importar os arquivos relevantes, como `dataset.js`, `dataFunctions.js`,
`main.js` e `view.js`, juntamente com seus respectivos testes.
Observe que `main.js` e `view.js` exigirão uma refatoração para se
adaptarem às visualizações e componentes específicos do seu projeto.

#### Identificar as funcionalidades da Open AI

Consulte a documentação da [API da Open AI](https://platform.openai.com/docs/guides/gpt?lang=node.js).
Identifique e teste as funções que você usará para construir o chat da
sua aplicação.

#### Quando estiver pronta para codificar, sugerimos começar assim

1. Um dos membros da equipe deve fazer um :fork_and_knife:
  [fork](https://help.github.com/articles/fork-a-repo/) do repositório
  da sua turma; os _coaches_ vão compartilhar um _link_ para um
  repositório e conceder acesso de leitura a esse repositório.
  O outro membro da equipe deve fazer um fork **do repositório da colega**
  e [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1)
  um `remote` para o mesmo.
2. :arrow_down: [Clone](https://help.github.com/articles/cloning-a-repository/)
  o seu _fork_ para o seu computador (cópia local).
3. 📦 Instale as dependências do projeto com o comando `npm install`. Isso
  pressupõe que você tenha instalado o [Node.js](https://nodejs.org/)
  (que inclui [npm](https://docs.npmjs.com/)).
4. Se tudo correr bem, você deverá ser capaz de executar os :traffic_light:
  testes unitários (unit tests) com o comando `npm test`.
5. Para visualizar a interface do seu programa no navegador, use o comando
  `npm start` para iniciar o servidor web e acesse `http://localhost:5000`
  no seu navegador.
6. Hora de codificar! :rocket:

### Conteúdo de referência

#### Desenvolvimento Front-end

* [Tópicos no currículo do site da Laboratoria](https://curriculum.laboratoria.la/pt/web-dev/topics)
  testes, arrays, objetos, funções, DOM no Browser Javascript.
* [Promises](https://javascript.info/promise-basics)
* [Fazendo requisições com Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)
* [Armazenamento com LocalStorage](https://javascript.info/localstorage)
* [Criando um roteador SPA com Javascript puro](https://github.com/Laboratoria/curriculum/blob/main/guides/router-spa/README.pt.md)
* [Delegação de eventos](https://javascript.info/event-delegation)

#### Inteligência Artificial e Prompting

* [Aprenda sobre Prompting](https://learnprompting.org/pt/docs/category/-basic-applications)
* [Roadmap de Engenharia de Prompting](https://roadmap.sh/prompt-engineering)
* [OpenAI Playground](https://beta.openai.com/playground)
* [Fazendo requisições](https://platform.openai.com/docs/api-reference/making-requests)
* [Conversando com IA](https://platform.openai.com/docs/api-reference/chat)
* [Priming para Chatbots](https://learnprompting.org/es/docs/basics/priming_prompt)
* [Construa sua aplicação com IA](https://platform.openai.com/docs/quickstart/build-your-application)

#### Ferramentas

* [Jest](https://jestjs.io/)
* [Vercel](https://vercel.com/)
* [Netlify](https://www.netlify.com/)

## 10. Considerações para solicitar seu Feedback do Projeto

Antes de agendar seu Feedback do Projeto com um coach, certifique-se de que
seu projeto:

* [ ] Cumpre todas as testes unitários ao executar `npm run test` e possui
  uma cobertura de 70% de _statements_ (_declarações_),
  _functions_ (_funções_), _lines_ (_linhas_) e _branches_ (_ramificações_).
* [ ] Está livre de _erros_ do `eslint` ao executar `npm run pretest`.
* [ ] Está enviado para o GitHub e implantado no Netlify ou Vercel.
* Tem um `README.md` com o seguinte:
  - [ ] _Definição do produto_ clara e informativa
  - [ ] Histórias de usuário
  - [ ] Um _sketch_ da solução (protótipo de baixa fidelidade) e
    _Design de Interface do Usuário_ (protótipo de alta fidelidade)
  - [ ] Lista de problemas detectados por testes de usabilidade no `README.md`
* Tem uma UI que atende às funcionalidades:
  - [ ] Permite visualizar todos os dados na tela principal com opções para
    filtrar e ordenar.
  - [ ] Permite inserir uma chave de API por meio de um formulário.
  - [ ] Permite visualizar uma página com mais detalhes de cada entidade. Nesta página,
    é possível iniciar o chat.
  - [ ] Permite conversar com o personagem ou entidade dos dados por meio
    de um chat.
  - [ ] Permite conversar de forma grupal com todas as entidades dos dados.
  - [ ] É responsivo e foi realizado usando a metodologia mobile first.

Lembre-se de fazer uma autoavaliação de _objetivos de aprendizado_ e
_habilidades pessoais_ a partir do seu painel de estudante.

Se você não concluiu tudo o que foi mencionado acima, não consideramos
que você está pronta para sua sessão de Project Feedback.
#   d a t a v e r s e - c h a t - a p p  
 