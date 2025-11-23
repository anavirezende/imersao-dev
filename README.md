<h1 align="center">QA Insights - Base de Conhecimento Interativa</h1>

<p align="center">
  <strong>Explore o QA Insights, uma base de conhecimento sobre Qualidade de Software criada na Imersão Dev (Alura + Google). Navegue por cards interativos para aprender sobre técnicas e ferramentas de QA. Cada card te leva a um artigo completo na Alura, aprofundando seus estudos e impulsionando sua carreira.</strong>
</p>

<p align="center">
  <em>Pré-visualização do projeto em ação.</em>
</p>
<p align="center">
  <img src="./assets/preview.gif" alt="Demonstração do QA Insights">
</p>

## ✨ Funcionalidades Principais

O projeto foi desenvolvido com foco em uma experiência de usuário rica e moderna, contando com:

*   **Busca em Tempo Real:** Filtre os cards instantaneamente conforme você digita.
*   **Navegação por Tags:** Descubra conteúdo clicando nas tags de categoria.
*   **Modo de Foco Imersivo:** Clique em um card para expandi-lo e ler o conteúdo detalhado sem distrações.
*   **Tema Adaptável (Dark/Light):** Alterne entre os modos claro e escuro. Sua preferência é salva no navegador (`localStorage`).
*   **Efeito 3D Tilt:** Cards que reagem ao movimento do mouse com uma sutil inclinação 3D.
*   **Animações "Aurora":** Efeitos de borda com gradiente animado para um feedback visual sofisticado.
*   **Design Totalmente Responsivo:** Experiência otimizada para desktops, tablets e celulares.

## 🤔 Caso de Uso

A plataforma foi projetada para ser intuitiva. Um usuário típico seguiria esta jornada:

1.  **Exploração Inicial:** Ao acessar o site, o usuário visualiza a grade de cards com os principais tópicos de QA, podendo navegar livremente.
2.  **Busca Direcionada:** Para encontrar um assunto específico, como "BDD", ele utiliza a barra de busca e vê os cards serem filtrados em tempo real.
3.  **Descoberta por Categoria:** Clicando em uma tag como `Ferramenta`, a interface exibe apenas os cards relacionados a ferramentas de teste.
4.  **Aprofundamento:** Ao encontrar um card de interesse, um clique o expande para um modo de foco, permitindo a leitura do conteúdo detalhado sem distrações.
5.  **Estudo Complementar:** Após ler o resumo, o usuário clica no link "Ler artigo completo" para ser redirecionado à plataforma da Alura e aprofundar seus conhecimentos.
6.  **Personalização da Interface:** A qualquer momento, o usuário pode clicar no ícone de sol/lua para alternar entre os temas claro e escuro, adaptando a visualização para sua preferência.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído do zero com uma abordagem "vanilla", utilizando apenas as tecnologias fundamentais da web para garantir leveza e performance.

<p align="left">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
</p>

*   **HTML5:** Para a estrutura semântica do conteúdo.
*   **CSS3:** Para toda a estilização, animações e responsividade, utilizando recursos modernos como **Variáveis CSS**, **Flexbox**, **Grid Layout** e **`@keyframes`**.
*   **JavaScript (ES6+):** Para orquestrar toda a interatividade, incluindo:
    *   Carregamento de dados assíncrono com a **`Fetch API`**.
    *   Manipulação dinâmica do DOM.
    *   Lógica de busca, filtragem e gerenciamento de temas.

## 🚀 Como Executar o Projeto

Como este projeto utiliza a `Fetch API` para carregar um arquivo local (`data.json`), ele precisa ser executado a partir de um servidor web local para funcionar corretamente.

### Usando a extensão Live Server no VS Code (Recomendado)

1.  **Instale a Extensão:**
    *   Abra o Visual Studio Code.
    *   Vá para a aba de Extensões (`Ctrl+Shift+X`).
    *   Procure por `Live Server` e instale a extensão de Ritwick Dey.

2.  **Inicie o Servidor:**
    *   Abra a pasta do projeto no VS Code.
    *   Clique com o botão direito no arquivo `index.html`.
    *   Selecione a opção **"Open with Live Server"**.

Seu navegador padrão abrirá automaticamente com o projeto em execução.

---

<p align="center">
  Desenvolvido com ❤️ por <strong>Ana Rezende</strong> durante a Imersão Dev Alura + Google.
</p>
