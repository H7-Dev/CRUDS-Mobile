# Erros corrígidos
_todos os erros que aconteceram durante a criação e/ou execução do projeto. Erros esses já corrígidos e aqui registrados, afim de serem evidados posteriormente_

> #### 00.03 ['img-src' was not explicitly set, so 'default-src' is used as a fallback](https://stackoverflow.com/questions/32166870/img-src-was-not-explicitly-set-so-default-src-is-used-as-a-fallback)
>   - O que aconteceu....? Não estava sendo possível carregar imagem no app quando executado no android, porém sem problemas na web, o imagem que não carregava estava no estado de base64.
>   - erroMesage.........: Refused to load the because it violates the following Content Security Policy directive: "default-src *". Note that 'img-src' was not explicitly set, so 'default-src' is used as a fallback.
>   - causa..............:  política de segurança de conteúdo no meta estava sem a permissão necessária.
>   - resolução..........: add `"img-src 'self' data:;`
> ```html
>  <!-- errado: -->
>  <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'" />
>  <!-- certo: -->
>  <meta http-equiv="Content-Security-Policy" content="img-src 'self' data:; default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'" />
> ```
>

> #### 00.02 [Margin-Top not working for span element?](https://stackoverflow.com/questions/11700985/margin-top-not-working-for-span-element)
>   - causa: Ao contrário div, p 1 que são elementos de nível de bloco que podem ocupar margintodos os lados, span2 não pode, pois é um elemento embutido que ocupa as margens apenas horizontalmente.
>   - resolução: definir um display: como display ou flex entre outros
>
> #### 00.01 [unable to create ... index.lock :file exists](https://cursos.alura.com.br/forum/topico-unable-to-create-index-lock-file-exists-30610)
>   - causa: esse problema pode ter acontecido pois algum processo do git finalizou antes de terminar de executar.
>   - resolução: para resolver esse problema você pode deletar o arquivo index.lock de dentro da pasta .git de seu projeto.
>

>
> #### 00.00 [err_file_not_found file | file///android/asset/www/index html:1]
>   - causa: endereço relativo referenciado de forma erronia
>   - detalhes:
> ```html
>  <!-- errado: -->
>  <link rel="shortcut icon" href="./../res/icon.png" type="image/x-icon">-->
>  <!-- certo: -->
>  <link rel="shortcut icon" href="ASSETS/MIDIA/IMG/logo.png" type="image/x-icon">
> ```
>
---
