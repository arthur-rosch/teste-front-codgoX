

## Funcionalidades

O projeto consiste em três telas principais:

1. **Tela de Home:**
   * Exibe uma lista de produtos.
   * Utiliza um skeleton de loading por 3 segundos antes de exibir os produtos.
   * Feedback de alerta Material UI ao adicionar produtos do carrinho.
2. **Tela de Detalhes do Produto:**
   * Mostra detalhes específicos de um produto selecionado.
   * Utiliza um skeleton de loading durante o carregamento dos detalhes.
3. **Tela do Carrinho:**
   * Lista todos os produtos adicionados ao carrinho.
   * Permite remover produtos do carrinho.
   * Após finalizar a compra, exibe um modal indicando o sucesso da transação.
   * Utiliza feedback de alerta Material UI para operações no carrinho.

## Estrutura do Projeto

* **`src/`** : Diretório principal do código-fonte.
* **`components/`** : Componentes React reutilizáveis.
* **`pages/`** : Componentes que representam cada tela.
* **`context/`** : Configuração da Context API.
* **`router/`** : Configuração da Rotas.
* **`utils/`** : Funções utilitárias.

## Instalação e Uso

```

#Clonar projeto
git clone https://github.com/arthur-rosch/teste-front-codgoX.git
cd teste-front-codgoX

#Instalar dependencias
npm install

#Rodar o projeto
npm run dev
```
