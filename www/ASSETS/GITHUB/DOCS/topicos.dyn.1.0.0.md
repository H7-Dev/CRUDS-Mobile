# 📋 Doc de tópicos dinâmicos -v1.0.0

_Documentação sobre o código para criar tópicos dinâmicos_


## ⚜️ Primeira Fase
para cada 'tag h' add class xT (xT1 => h1, xTH2 => h2 etc)
>
> #### ⚡ Aplicar o **método each jquery**
>
> [jQuery Misc each() Method](https://www.w3schools.com/jquery/misc_each.asp) |
> [.each()](https://api.jquery.com/each/)
>
> - ☑️ para cada ___'tag h'___ add class xT
>    - x   => significa que não sei qual __'tag h'__ foi clicado,
>    - T   => significa __'tag do tipo Título'__ , após o T vem a marcação do titulo
>    - xT1 => h1
>    - xT2 => h2
>    - xT3 => h3
>    - xT4 => h4
>    - xT5 => h5
>    - xT6 => h6
> - ☑️ a class __xT__ deve ser add somente ao o el clicado, por isso usar o seletor `$(this)`
>
>

> #### 🚩 código abaixo:

> ```js
>
> // → 1° Fase
> $('.leitor > h1').each(function () {
>     $(this).addClass('xT1') // * para cada H1 add class xT1
> })
> $('.leitor > h2').each(function () {
>     $(this).addClass('xT2') // * para cada H2 add class xT2
> })
>
> ```
###### Fim da 1° Fase
----
## ⚜️  Segunda Fase:
timingClick  e add class para destacar o título

- #### ⚡ Aplicar o **método touchstart jquery**
- #### ⚡ Aplicar o **método touchend jquery**

> [touchstart](https://www.w3schools.com/jsref/event_touchstart.asp) |
> [touchend](https://www.w3schools.com/jsref/event_touchend.asp) |
>
>    - 1° Parte [ `setTimeout` ]
>      - ☑️ se o tempo em que o el clicado for `>=` do que x tempo (x tempo, definido em `setTimeout`) faça algum coisa e
>      - ☑️   para a contagem `clearTimeout(timer)`
>      - ☑️ se o tempo em que o el clicado for menor do que x tempo então é um clique normal
>
>    - 2° Parte [ `switch ($this.prop('tagName'))` ] verificar qual é a tag clicada a partir do próprio el clicado
>       - ***por exemplo:***
>           - caso a tag seja **h1**, então destacar ou fazer qualquer outra coisa na **tag H1**
>           - caso a tag seja **h2**, então destacar ou fazer qualquer outra caoisa na **tag H2**
>       - no caso deste código básicamente duas coisas diferentes serão feitas
>           - chamar um função para tratar a tag, ou seja, chamar as funções `topicosDyn.tratarH?(_el, _xT1?)`
>           - aplicar o método `toggleClass()` para dar destaque a tag H que esteja sendo tratada. (Opcional)
>    - Parâmetros da função:
>       - `timignClick(_el, _eventIn, _eventOut)`
>
>    | Parâmetro | definição | exemplo |
>    |   :---:   |   :---:   | :---: |
>    | el | elemento a ser | `$('.leitor > h1')`.
>    | _eventIn | evento de entrada | `touchstart`
>    | _eventOut | evento de saída | `touchend`
>

> #### 🚩 chamar timignClick (exemplo):

> ```js
>     topicosDyn.timignClick(
>         $('.leitor > h2'),
>         'touchstart',
>         'touchend'
>     )
> ```

> #### 🚩 código abaixo (timignClick):

> ```js
>     timignClick: function setTimeClick(
>         _el,
>         _eventIn,
>         _eventOut
>     ) {
>         var timer;
>         _el.on(_eventIn, $(this), function (e) {
>             let $this = $(this) // * set variável $this a partir do el selecionado
>             // * 1° Parte [ setTimeout ]
>             timer = setTimeout(function () { // * setTimeout de 1s e 100ms
>                 // * 2° Parte [ `switch ($this.prop('tagName'))` ] verificar qual é a tag clicada a partir do próprio el clicado
>                 switch ($this.prop('tagName')) {
>                     case 'H1':
>                         console.log($this.prop('tagName')+' => H1')
>                         topicosDyn.tratarH1($this, '.xT1')
>                         $this.toggleClass('dest_xTH1') // * set uma class para destacar a tag H1    break;
>                     case 'H2':
>                         console.log($this.prop('tagName')+' => H2')
>                         topicosDyn.tratarH2($this, '.xT2') // * chamar a função tratarH2
>                         $this.toggleClass('dest_xTH2') // * set uma class para destacar a tag H1    break;
>                     default:
>                         break;
>                 }
>             }, 1100)
>             return false;
>         }).on(_eventOut, $(this), function () {
>             clearTimeout(timer) // * para a contagem do timingClick
>             return false
>         })
> ```
>

###### Fim da 1° Fase
----

## ⚜️  Terceira Fase:
_tratar tag h1_

- #### **1° Passo:** verificar se o el clicado tem a classe 'H1-recolhido'. Se não tiver a class ''H1-recolhido' então...
- #### **2° Passo:** add class 'H1-recolhido' ao elemento clicado
- #### **3° Passo:** obter todos os els desde o xTH1 clicado até o próximo xTH1 na árvore Dom
- #### **4° Passo:** ocultar todos os els entre o xTH1 clicado  até o próximo xTH1 na árvore Dom
- #### **5° Passo:** remover a class 'H1-recolhido (agora não está mais recolhido)
- #### **6° Passo:** 
