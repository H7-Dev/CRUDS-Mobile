# Documentação genérica

[Ícones Usados](https://github.com/H7-Dev/FC_v1.0.0/blob/master/www/ASSETS/GITHUB/PAGES/links%20%C3%8Dcones.md) |
[Links de apoio](https://github.com/H7-Dev/FC_v1.0.0/blob/master/www/ASSETS/GITHUB/PAGES/links.apoio.md) |
[Ver mais tarde](https://github.com/H7-Dev/FC_v1.0.0/blob/master/www/ASSETS/GITHUB/PAGES/vermaistarde.md) |
[emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet) |
[📝 Legendas](https://github.com/H7-Dev/FC_v1.0.0/blob/master/www/ASSETS/GITHUB/PAGES/legendas.md) |
<!-- 🚩 -->

### ⚜️ ramo => 03.00-banco-de-dados-e-tabelas
#####  🏁 03.15 Long Click/Tap Plugin
>  ### 👍 recursos
>   - ⬇️ recursos novos ↙️
>   - ✅ **long_tap_plugin.js** Long Click/Tap Plugin (Detectar quando e por quanto um determinado el está sendo clicado)
>   - ✅ **callPlugins.js**     arquivo js onde serão chamados todos os plugins
>   - ✅ **triggerOutSideEls.js** detectar quando o ocorre um click fora de um determanado el.
>   - ✅ **obter data-id** do el clicado e set no input `$('#dataId').val(self.attr('data-id'))`
>   - ⬆️ recursos novos ↖️
>
>   👉 resultados 👇
>   ![🏁 03 15 Long Click Tap Plugin](https://user-images.githubusercontent.com/93455937/150974982-635bed5a-5e91-45ae-a199-4063bfbdfb13.gif)
>
> 🚩 Obs.: necessário aperfeiçoamentos



### ⚜️ ramo => 03.00-banco-de-dados-e-tabelas
#####  🏁 03.14 event => starttime endtime
>  ### 👍 recursos
>   - ⬇️ recursos novos ↙️
>   - ✅ Comprar touchstart starttime com touchend endtime
>   - ⬆️ recursos novos ↖️
>
>   👉 resultados 👇
>   ![🏁 03 14 event  starttime endtime ](https://user-images.githubusercontent.com/93455937/150751534-06668e98-c5e8-4c29-a2e3-16b564abd81f.gif)
>
> 🚩 Obs.: necessário aperfeiçoamentos



### ⚜️ ramo => 03.00-banco-de-dados-e-tabelas
##### ⚠️✅ 03.13 Refused to load the because it violates the following
> #### ⚠️ 00.03 ['img-src' was not explicitly set, so 'default-src' is used as a fallback](https://stackoverflow.com/questions/32166870/img-src-was-not-explicitly-set-so-default-src-is-used-as-a-fallback)
>   - O que aconteceu....? Não estava sendo possível carregar imagem no app quando executado no android, porém sem problemas na web, o imagem que não carregava estava no estado de base64.
>   - erroMesage.........: Refused to load the because it violates the following Content Security Policy directive: "default-src *". Note that 'img-src' was not explicitly set, so 'default-src' is used as a fallback.
>   - causa..............: política de segurança de conteúdo no meta estava sem a permissão necessária.
>   - resolução..........: add `"img-src 'self' data:;`, ou seja, concede a permissão necessária para sicronizar img data do tipo data ou base64
> ```html
>  <!-- errado: -->
>  <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'" />
>  <!-- certo: -->
>  <meta http-equiv="Content-Security-Policy" content="img-src 'self' data:; default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'" />
> ```
>


##### 🚧⛔ 03.09 salvar dados no BD
>  ### 👍 recursos
>   - ⬇️ recursos novos ↙️
>   - ✅ function salvar()
>   - ✅ Validação de campos
>   - ✅ Confirmação de dados
>   - ✅ converter data no formato en-US para o formato pt-BR
- 👉⚡ Amostra
```JS
tratarDtString: function () {
    let a = new String(pagAddCr.in_dt.val()).split("-").reverse()
    b = a[0]+'/'+a[1]+'/'+a[2]
    // console.log(pagAddCr.in_dtBr.val(b))
    return b
}
```
>   - ✅ campos com data completa de criação `17/1/2022 15:57:42`. Em futuras versões também será usado para campos que necessitam de data de modificação
>   - ✅ ID baseado em dia mês ano hora minutos segundos e milisegundos exemplo=> `Gerador de ID 1712022155710-546`
>   - ⬆️ recursos novos ↖️
>
>   - ✅ Tira foto e convert resultado `imgUrl` em base64 pronto para ser salvor em um banco de dados
>   - ✅ Seleciona uma imagem a partir do android e convert resultado `imgUrl` em base64 pronto para ser salvor em um banco de dados
>   - ✅ Obtém base64 de uma imagem a partir da tag img `getBase64Image(imgUrl, callback)`
>   - ✅ Set img\base64 em style background-image `getBase64Image(imageData, function(base64image)`
>
>   👉 resultados 👇
>   ![🚧⛔ 03 09 salvar dados no BD](https://user-images.githubusercontent.com/93455937/149831343-dfd9166b-e9d1-45fa-9f41-b82588837fde.gif)


### ⚜️ ramo => 03.00-banco-de-dados-e-tabelas
#####  🏁 03.08 gerarID e tratarDtString()
>  ### 👍 recursos
>   - ⬇️ recursos novos ↙️
>   - ✅ Gerar id baseado em dia, mês, ano, hora, minutos, segundos e milisegundos
>   - ✅ Tratar data from input:date formato en-US para formato pt-BR
>   - ⬆️ recursos novos ↖️
>
>   - ✅ Tira foto e convert resultado `imgUrl` em base64 pronto para ser salvor em um banco de dados
>   - ✅ Seleciona uma imagem a partir do android e convert resultado `imgUrl` em base64 pronto para ser salvor em um banco de dados
>   - ✅ Obtém base64 de uma imagem a partir da tag img `getBase64Image(imgUrl, callback)`
>   - ✅ Set img\base64 em style background-image `getBase64Image(imageData, function(base64image)`
>
>   👉 resultados 👇
>   ![🏁 03 08 gerarID e tratarDtString()](https://user-images.githubusercontent.com/93455937/149429132-4bff44f7-5d0a-4801-a2da-62cca889ca7f.gif)


### ⚜️ ramo => 03.00-banco-de-dados-e-tabelas
#####  🚧⛔ 03.07 +best selFoto.1.0.0.js)
>  ### 👍 recursos
>   - ⬇️ recursos novos ↙️
>   - ✅ Tira foto e convert resultado `imgUrl` em base64 pronto para ser salvor em um banco de dados
>   - ✅ Seleciona uma imagem a partir do android e convert resultado `imgUrl` em base64 pronto para ser salvor em um banco de dados
>   - ⬆️ recursos novos ↖️

>   - ✅ Obtém base64 de uma imagem a partir da tag img `getBase64Image(imgUrl, callback)`
>   - ✅ Set img\base64 em style background-image `getBase64Image(imageData, function(base64image)`

> 🚩 Obs: também é possível obter através do input file, porém se faz necessário novos testes



### ⚜️ ramo => 03.00-banco-de-dados-e-tabelas
#####  03.02 save-g(sob observação)
>  ### 👍 recursos
>   - ⬇️ recursos novos ↙️
>   - ✅ Obtém base64 de uma imagem a partir da tag img `getBase64Image(imgUrl, callback)`
>   - ✅ Set img\base64 em style background-image `getBase64Image(imageData, function(base64image)`
>   - ⬆️ recursos novos ↖️

> 🚩 Obs: também é possível obter através do input file, porém se faz necessário novos testes



### ⚜️ ramo => 03.00-banco-de-dados-e-tabelas
#####  03.01 -s bd e tb_curso
>  ### 👍 recursos
>   - ⬇️ recursos novos ↙️
>   - ✅ Banco de dados criado e funcional
>   - ✅ tb_curso criada e funcional
>   - ⬆️ recursos novos ↖️
>  ### 👉 resultados 👇
> ![#0001 - 03 01 -s bd e tb_curso](https://user-images.githubusercontent.com/93455937/149012955-343fb90f-ccee-4a50-b9f3-179b9d9daacb.gif)

### ⚜️ ramo => 02.00-Selecionar-Foto-from-Galeria
#####  02.05 save(Melhorias leiaute plug.dropdwon.menu.1.0.2)
>  ### 👍 recursos
>   - ⬇️ recursos novos ↙️
>   - ✅ Overflow.
>   - ✅ Limite máx e min de altura
>   - ⬆️ recursos novos ↖️

>   - ✅ 🚩 Melhorias para próximas versões
>      - Ao clicar no imput ocultar optsDropdown


### ⚜️ ramo => 02.00-Selecionar-Foto-from-Galeria
#####  🚧⛔ 02.04 -s Tirar Foto Obter Img From Android
>  ### 👍 recursos
>   - ⬇️ recursos novos ↙️
>   - ✅ Tira Foto (Funcional).
>   - ✅ Seleciona Fotos a partir do telefone. (Funcional)
>   - ⬆️ recursos novos ↖️

>   - ✅ 🚩 Melhorias para próximas versões
>      - Ao tirar foto: Permitir rotacionar
>      - Ao Selecinar foto: Permitir recortar


### ⚜️ ramo => 02.00-Selecionar-Foto-from-Galeria
#####  02.03 save(Imagem from galeria)
>  ### 👍 recursos
>   - ⬇️ recursos novos ↙️
>   - ✅ 🚩 Tira Foto. Falta melhorias
>   - ✅ 🚩 Seleciona Fotos a partir do telefone. Falta melhorias
>   - ⬆️ recursos novos ↖️

>   - ✅ 🚩 Obter Imagens do telefone como galerias arquivos etc. Falta melhorias

### ⚜️ ramo => master
#####  00.02 save(Imagem from galeria)
>  ### 👍 recursos
>   - ⬇️ recursos novos ↙️
>   - ✅ 🚩 Obter Imagens do telefone como galerias arquivos etc. Falta melhorias
>   - ⬆️ recursos novos ↖️


#####  01.01 save(Leiaute responsivo ao teclado android)
>  ### 👍 recursos
>   - ⬇️ recursos novos ↙️
>   - ✅ 🚩 . Falta melhorias
>   - ⬆️ recursos novos ↖️


#####  01.01 save(Leiaute responsivo ao teclado android)
>  ### 👍 recursos
>   - ⬇️ recursos novos ↙️
>   - ✅ 🚩 Rodapé Fixado + Impedir redimensionamento do laiute quando usar o teclado (a partir do método `<preference name="Fullscreen" value="true" />` em config.xml ). Falta melhorias
>   - ⬆️ recursos novos ↖️


>  ### 👉 resultados 👇
> ![00 04 save(ctAddRg 1 0 0 js + scss + debug)](https://user-images.githubusercontent.com/93455937/147891532-afa3a908-307f-4474-8257-05a1ce88319a.gif)


### ⚜️ ramo => master

#####  00.04 save(ctAddRg.1.0.0.js + scss + debug)
>  ### 👍 recursos
>   - ⬇️ recursos novos ↙️
>   - ✅ delay 700 para abrir
>   - ✅ delay 1000 para fechar
>   - ✅ Fehcar (que é na verdade remover) o el overAddRg
>   - ✅ Abrir (que é na verdade criar) o el overAddRg atravé do método append (que insere o elmento em último)

```
els.doc.on('click', els.btn_Add,function(e){
    console.log($(this))
    setTimeout(function () {

        var el_overAddRg = ''
        el_overAddRg += `
        <div class="overAddRg">
            <div class="ctAddRg">
                <header><span>Add Pessoa / Curso</span><button class="btnFechar ripple">✘</button></header>
                <main>
                    <button class="ripple" >Add Curso</button>
                    <button class="ripple" >Add Pessoa</button>
                </main>
            </div>
        </div>
        `
        $('body').append(el_overAddRg);
    }, 700)
})
```
>   - ⬆️ recursos novos ↖️


>  ### 👉 resultados 👇
> ![00 04 save(ctAddRg 1 0 0 js + scss + debug)](https://user-images.githubusercontent.com/93455937/147891532-afa3a908-307f-4474-8257-05a1ce88319a.gif)




#### 🏁 Primeiro Commit
>  #### 👍 recursos
>  - [ ] Check
>
>
>
>  #### 👉 resultado
>
>    - amostra #01 ()
>
>       <img src="https://user-images.githubusercontent.com/93455937/142617861-6b71c231-f2be-4814-84f1-ead00060148c.png" width="max-with" >
>
>    - amostra #02 ()
>
>       <img src="https://user-images.githubusercontent.com/93455937/142617932-ac7bb74a-d2f5-4a8d-b350-fc2303fd5ce8.png" width="max-with" >
>


<!-- [Temas para estudar mais tarde](https://github.com/H7-Dev/FC_v1.0.0/blob/master/www/ASSETS/GITHUB/PAGES/estudar.maistarde.md) | -->
