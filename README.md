# Documentação genérica

[Ícones Usados](https://github.com/H7-Dev/FC_v1.0.0/blob/master/www/ASSETS/GITHUB/PAGES/links%20%C3%8Dcones.md) |
[Links de apoio](https://github.com/H7-Dev/FC_v1.0.0/blob/master/www/ASSETS/GITHUB/PAGES/links.apoio.md) |
[Ver mais tarde](https://github.com/H7-Dev/FC_v1.0.0/blob/master/www/ASSETS/GITHUB/PAGES/vermaistarde.md) |
[emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet) |
[📝 Legendas](https://github.com/H7-Dev/FC_v1.0.0/blob/master/www/ASSETS/GITHUB/PAGES/legendas.md) |


### ⚜️ ramo => master


## ⚜️ ramo => 04.00-setting-pages-ehomePage
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
