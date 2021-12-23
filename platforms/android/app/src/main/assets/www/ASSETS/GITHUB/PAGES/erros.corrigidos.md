# Erros corrígidos
_todos os erros que aconteceram durante a criação e/ou execução do projeto. Erros esses já corrígidos e aqui registrados, afim de serem evidados posteriormente_

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
