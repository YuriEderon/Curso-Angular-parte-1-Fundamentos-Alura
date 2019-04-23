# Curso-Angular-parte-1-Fundamentos-Alura

**Inicializando o projeto**

* _módulo alurapic_: **ng serve --open**
* _módulo api_: **npm start**

_*Obs: npm install nos 2 projetos_

**Criando o projeto**

* npm install -g @angular/cli@6.0.7
* ng new <nome do projeto>
  
**Nomenclatura dos arquivos**

_Exemplo:_
- _**Menubar Component**_   
   `menubar.component.ts`   
   `menubar.component.html`   
   `menubar.component.css`   
   
**Bindings**   

    [ ]: controller para template (component para view)   
    ( ): template para controller (view para component)   

**Anotações**

* **Evergreen Browsers**: Navegadores atualizados nas duas últimas versões(ok). Casi não, o Angular remove testes de integração.
* **SPA**: Single Page Application
* **Angular CLI**: Angular Command Line Interface (criação de projetos Angular)
* **NodeJS**: Anbiente de execução Java Script
* **NPM**: Node Package Manager (gerenciador de pacotes do NodeJS)
* **feature module**: conjunto de módulos
* **declaration**: inclui tudo o que o módulo possui
* **exports**: dá acesso ao componente declarado.
  - importar módulo HTTP no módulo principal.
  - todo observer é preguiçoso e precisa ser inscrito nele:   
    `const observable = http.get('http://......');`   
    `observable.subscribe();`   
* **Resolver**: executado após o ativamento da rota e antes da renderização do componente.
* **Debounce (Pattern)**: do tipo "subject". Quem se inscreve nele recebe o valor do next.

**Observações**

_Se uma chave tem o mesmo nome de uma variável em Javascript, retira-se os dois pontos:   
`[params: params] -> {params}`_
