# Boas-vindas ao repositório do Meme Generator!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

# Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do [Código de Conduta e do Manual da Pessoa Estudante da Trybe](https://app.betrybe.com/manual-estudante/codigo-de-etica-e-conduta).

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar o seu projeto você deverá criar um *Pull Request* neste repositório.

  Este Pull Request deverá conter os arquivos `index.html`, `style.css` e `script.js`, que conterão seu código HTML, CSS e JavaScript, respectivamente.

  **⚠️ É importante que seus arquivos tenham exatamente estes nomes! ⚠️**

  Você pode adicionar outros arquivos se julgar necessário. Qualquer dúvida, procure a monitoria.

  Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Você irá desenvolver uma aplicação usando HTML, CSS e JAVASCRIPT onde seja possível fazer upload de imagens para criar memes.

  Veja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode e deve ir além para deixar o projeto com a sua cara e impressionar à todos!

  ![exemplo de um meme generator](./meme-generator.gif)
</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-025-b-project-meme-generator.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-025-b-project-meme-generator`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-meme-generator-project`

4. Crie na raiz do projeto os arquivos que você precisará desenvolver:
  * Verifique que você está na raiz do projeto
    * Exemplo: `pwd` -> o retorno vai ser algo tipo _/Users/joaozinho/code/**sd-025-b-project-meme-generator**_
  * Crie os arquivos index.html, style.css e script.js
    * Exemplo: `touch index.html style.css script.js`

5. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (devem aparecer listados os arquivos em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joaozinho-meme-generator-project`

7. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-025-b-project-meme-generator/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_, um título claro que o identifique, e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-meme-generator/pulls) e confira que o seu _Pull Request_ está criado.
</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

  - Faça `commits` das alterações que você fizer no código regularmente

  - Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

  - Os comandos que você utilizará com mais frequência são:
    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
    2. `git add` _(para adicionar arquivos ao stage do Git)_
    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
    4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

  Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

  - Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

    - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

    - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

    - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-025-b`.

  Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

  Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Para garantir a qualidade do código, vamos utilizar neste projeto os linters `ESLint` e `StyleLint`. Dessa forma, o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção!

  Para rodá-los localmente no projeto, execute os comandos abaixo:

  ```bash
  npm run lint
  npm run lint:styles
  ```

  Quando é executando o comando `npm run lint:styles`, ele irá avaliar se os arquivos com a extensão `.css` estão com o padrão correto.

  Quando é executando o comando `npm run lint`, ele irá avaliar se os arquivos com a extensão `.js` e `.jsx` estão com o padrão correto.

  > 💡 Dica: Você pode instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.

  ⚠ **NESTE PROJETO O STYLELINT e ESLINT NÃO SERÁ AVALIADO. VOCÊ PODE RODAR O TESTE LOCALMENTE E FAZER AS CORREÇÕES SE DESEJAR!** ⚠

</details>

<details>
  <summary><strong>🛠 Testes</strong></summary>

  #### Cypress

  Cypress é uma ferramenta de teste de front-end desenvolvida para a web.

  Você pode rodar o cypress localmente para verificar se seus requisitos estão passando, para isso execute um dos seguintes comandos:

  Para executar os testes apenas no terminal:

  ```bash
  npm test
  ```

  Para executar os testes e vê-los rodando em uma janela de navegador:

  ```bash
  npm run cypress:open
  ```

  ***ou***

  ```bash
  npx cypress open
  ```

  Após executar um dos dois comandos acima, será aberta uma janela de navegador e então basta clicar no nome do arquivo de teste que quiser executar (`project.spec.js`), ou para executar todos os testes clique em _"Run all specs"_.

  Você também pode assistir a [este](https://vimeo.com/539240375/a116a166b9) vídeo 😉🎙

  **Para rodar o cypress é preciso ter rodado o comando npm install anteriormente.**

  O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?
</details>

<details>
  <summary><strong>👀 Observações importantes</strong></summary><br />

  * Lembrem-se que como pessoas desenvolvedoras devemos fazer pesquisas e garimpar resultados para auxiliar no entendimento do assunto. Assim, para solucionar os requisitos do projeto é inevitável e estimulado que pesquisas sejam feitas nas mais variadas fontes (course, vídeos do course, google, youtube, etc) sempre tomando cuidado para utilizar fontes "confiáveis" nas pesquisas da Internet, como por exemplo:

    * [Javascript.com](http://javascript.com/)

    * [W3Schools](https://www.w3schools.com/js/default.asp)

    * [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

    * [StackOverflow](https://pt.stackoverflow.com/questions/tagged/javascript)

  * Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução de tela de `1366 x 768` (1366 pixels de largura por 768 pixels de altura).

    * ⚠️ Recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação [deste plugin](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) do `Chrome` para facilitar a configuração da resolução. ⚠️

  * Atente-se para o tamanho das imagens que você utilizará neste projeto. **Não utilize imagens com um tamanho maior que _500Kb_.**

    * ⚠️ Utilize uma ferramenta [como essa](https://picresize.com/pt) para redimensionar as imagens. ⚠️

    * Caso a avaliação falhe com alguma mensagem de erro parecida com `[409:0326/130838.878602:FATAL:memory.cc(22)] Out of memory. size=4194304`, provavelmente as imagens que você está utilizando estão muito grandes. Tente redimensioná-las para um tamanho menor.

  * Para verificar se a sua avaliação foi computada com sucesso, você pode verificar os **detalhes da execução do avaliador**.

    * Na página do seu _Pull Request_, acima do "botão de merge", procure por _**"Evaluator job"**_ e clique no link _**"Details"**_;

    * Na página que se abrirá, procure pela linha _**"Cypress evaluator step"**_ e clique nela;

    * Analise os resultados a partir da mensagem _**"(Run Starting)"**_;

    * Caso tenha dúvidas, consulte [este vídeo](https://vimeo.com/420861252) ou procure a monitoria.

  * Você tem liberdade para adicionar novos comportamentos ao seu projeto, seja na forma de aperfeiçoamentos em requisitos propostos ou novas funcionalidades, **desde que tais comportamentos adicionais não conflitem com os requisitos propostos**.

    * Em outras palavras, você pode fazer mais do que for pedido, mas nunca menos.

  * Contudo, tenha em mente que **nada além do que for pedido nos requisitos será avaliado**. _Esta é uma oportunidade de você exercitar sua criatividade e experimentar com os conhecimentos adquiridos._

</details>

<details>
 <summary><strong>⚛️ Dicas</strong></summary>

  - Para fazer este projeto você deverá atribuir ao texto que vai sobre a imagem o estilo `position: absolute;`. Leia mais sobre ele [aqui](https://www.w3schools.com/css/css_positioning.asp).

  - Para que um elemento filho fique posicionado na frente de um elemento `container` você pode deve utilizar `position: relative;` na estilização do elemento `container` e `position: absolute` no elemento filho. [Esse post pode ajudar a entender a solução.](https://dzone.com/articles/css-position-relative-vs-position-absolute)

  - Para receber os dados da **imagem** e do **texto** do meme, é preciso utilizar a tag ["input"](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input). Consulte a documentação sobre os tipo de input `text` e `file`.

  - Para mostrar a imagem selecionada a partir do _input_ no elemento dentro do container, você precisará alterar a propriedade `src` desse elemento, passando para ele o caminho da imagem que foi carregada no _input_. [Essa resposta pode te ajudar a encontrar uma solução para esse enigma](https://stackoverflow.com/a/27165977).

</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary><br />

  Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. **Leva menos de 3 minutos!**

  [Formulário de avaliação do projeto](https://be-trybe.typeform.com/to/ZTeR4IbH)

</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

  Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

# Requisitos Obrigatórios

⚠️ Leia-os os requisitos atentamente e siga à risca o que for pedido. Em particular, **atente-se para os nomes de _ids_ que alguns elementos de seu projeto devem possuir**. ⚠️

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

## 1. Crie um input de texto

<details>

  <summary>Crie um elemento input para que a pessoa usuária possa inserir o texto, de modo que o texto inserido apareça no _preview_ de visualização do meme a ser gerado.</summary><br/>

  - O input de texto deve possuir o `ID` `text-input`;
  - O preview de visualização deve ser um _"container"_ para a **imagem** e para o **texto** do meme. Este elemento deve ter o `ID` `meme-image-container`;
  - O preview de visualização deve possuir outro elemento que mostre o texto digitado. Esse elemento de texto deve estar inserido no container e ter o `ID` `meme-text`;
  - O texto dentro do preview deve estar visível mesmo se não houver imagem inserida.

  **O que será testado:**

  - O input deve possuir o `ID` `text-input`;
  - O input deve permitir inserção de texto;
  - O texto digitado no input deve estar visível na tela;
  - O preview de visualização deve possuir o `ID` `meme-image-container`;
  - O preview de visualização deve possuir um elemento dentro com `ID` `meme-text`;
  - O elemento de texto dentro do preview deve mostrar o mesmo texto digitado no input;

</details>

## 2. Crie uma função que execute upload de imagem

<details>

  <summary>Cria uma função que execute o upload de uma imagem de seu computador.</summary><br/>

  - O elemento que faz o upload da imagem deve possuir o `ID` `meme-insert`;
  - O preview de visualização deve possuir outro elemento para mostrar a imagem selecionada. Este elemento deve possuir o `ID` `meme-image`;
  - A imagem deve estar totalmente contida dentro do preview de visualização. ~~("totalmente contida" quer dizer que não deve sobrar espaço entre o container e a imagem, e a imagem não deve ultrapassar o tamanho do container)~~;
  - O texto inserido no elemento `text-input` deve estar visível por cima da imagem escolhida `meme-image`.

  **O que será testado:**

  - O elemento para upload de imagens deve possuir o `ID` `meme-insert`;
  - A imagem carregada é exibida dentro do preview de visualização;
  - O texto dentro do preview é inserido corretamente sobre a imagem.

</details>

## 3. Adicione uma moldura no preview de visualização

<details>

  <summary>Adicione uma moldura no preview de visualização. A moldura deve ter 1 pixel de largura, deve ser preta e do tipo 'solid'. A área onde a imagem aparecerá deve ter fundo branco.</summary><br/>

  - O preview de visualização deve ter a cor de fundo branca;
  - O preview de visualização deve ter uma borda preta, sólida, com 1 pixel de largura;
  - A imagem deve estar totalmente contida no elemento identificado como `meme-image-container` ("totalmente contida" quer dizer que não deve sobrar espaço entre o container e a imagem, e a imagem não deve ultrapassar o tamanho do container).

  **O que será testado:**

  - O preview de visualização deve possuir a cor de fundo branca;
  - O preview de visualização deve possuir borda preta, sólida, com 1 pixel de largura;
  - A imagem deve estar totalmente contida no preview de visualização `meme-image-container`.

</details>

## 4. Adicione o texto que será inserido sobre a imagem

<details>

  <summary>Adicione o texto no preview de visualização sobre a imagem. O texto deve ter cor, sombra e tamanho específicos.</summary><br/>

  - O texto do elemento `meme-text` deve ter uma sombra preta, de 5 pixels na horizontal, 5 pixels na vertical e um raio de desfoque de 5 pixels;
  - O texto deve possuir fonte com o tamanho de 30 pixels;
  - O texto deve possuir cor branca.

  **O que será testado:**

  - O texto do elemento `meme-text` deve ter uma sombra preta, de 5 pixels na horizontal, 5 pixels na vertical e um raio de desfoque de 5 pixels;
  - O texto do elemento `meme-text` deve ter a fonte com o tamanho de 30 pixels;
  - O texto do elemento `meme-text` deve estar na cor branca.

</details>

## 5. Limite o tamanho do texto do meme

<details>

  <summary>Limite o tamanho do texto que a pessoa usuária pode inserir</summary><br/>

  - O input de texto deve possuir a quantidade máxima de 60 caracteres.

  **O que será testado:**

  - O input de texto de `ID` `text-input` não deve ultrapassar 60 caracteres.

</details>

# Requisitos Bônus

## 6. Crie três botões que alterem as cores da borda dos memes

<details>

  <summary>Crie três botões diferentes, que ao serem clicados devem trocar a borda ao redor do container de acordo com suas respectivas cores</summary><br/>

  - Os três botões devem ser elementos do tipo `button`;
  - Os botões devem possuir cor de fundo da mesma cor da moldura a ser colocada no container;
  - As bordas devem ser acrescentadas ao preview de visualização;
  - Um dos botões deve possuir o `ID` `fire` e deve estilizar o container da imagem com uma borda de 3 pixels, _dashed_ e vermelha (`rgb(255, 0, 0)`);
  - Um dos botões deve possuir o `ID` `water` deve estilizar o container da imagem com uma borda azul (`rgb(0, 0, 255)`), com 5 pixels do tipo _double_;
  - Um dos botões deve possuir o `ID` `earth` deve estilizar o container da imagem com uma borda do tipo _groove_, verde (`rgb(0, 128, 0)`) e com 6 pixels;
  - A borda padrão especificada no requisito 3 não deve mais aparecer após clicar em qualquer um dos botões.

  **O que será testado:**
  - Cada um dos três botões possuem os `ID` `fire`, `water` e `earth` respectivamente;
  - O botão de `ID` `fire` altera a borda para 3 pixels de espessura, tipo _dashed_ e cor vermelha (`rgb(255, 0, 0)`);
  - O botão de `ID` `water` altera a borda para 5 pixels de espessura, tipo _double_ e cor azul (`rgb(0, 0, 255)`);
  - O botão de `ID` `earth` altera a borda para 6 pixels de espessura, tipo _groove_ e cor verde (`rgb(0, 128, 0)`);

</details>

## 7. Crie um conjunto de quatro imagens pré prontas que permita que a pessoa usuária possa escolher.

<details>

  <summary>Crie miniaturas de imagens que ao receberem o clique da pessoa usuária, devam aparecer no preview de visualização.</summary><br/>

  - As miniaturas dos memes (imagens) devem ser identificadas com `id` `meme-1` para o primeiro meme, `meme-2` para o segundo meme, `meme-3` para o terceiro meme e `meme-4` para o quarto meme;
  - As imagens que identificam os memes devem ficar dentro da aplicação, num diretório chamado `imgs` com os respectivos nomes `meme1.png`, `meme2.png`, `meme3.png` e `meme4.png`. ⚠️ Atenção também para o formato das imagens! 
  - As imagens devem aparecer dentro do container de forma análoga às imagens enviadas por _upload_ para a página.

  **O que será testado:**

  - Cada uma das miniaturas devem possuir os `ID` `meme-1`, `meme-2`, `meme-3`, `meme-4` respectivamente;
  - As imagens devem estar salvas no diretório `imgs` na raiz do projeto;
  - As imagens devem possuir nome `meme1.png`, `meme2.png`, `meme3.png` e `meme4.png`;
  - As imagens devem aparecer no preview de visualização conforme clicadas.

</details>
