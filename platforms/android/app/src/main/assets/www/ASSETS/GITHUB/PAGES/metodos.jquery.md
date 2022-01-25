# JQUERY MÉTODOS



- ## ✅ [How to detect a key pressed for x seconds in javascript?](https://stackoverflow.com/questions/25134224/how-to-detect-a-key-pressed-for-x-seconds-in-javascript)

    - Descrição...: Use keydown() w keyup() para verificar a tecla pressionada.Obtenha o horário atual do sistema com keydown () e compare isso com a hora atual do sistema quando você obtém o keyup ().
    - Obs.........: (Edit: esqueci o último bit :-) ) Chame sua função no final do keyup(), depois de `curKey = null.`
    - Tag.........: **Spuggiehawk**
    - 👉⚡ Amostra
    ``` JS
        var starttime;
        var curKey;
        // equivalentes na web/desktop mousedown e mouseup
        // doc           : $(document),
        // cardCursos    : $('.pagInit > main > .container_cardCursos > main > .cardCursos')
        testeInit.doc.on('touchstart', '.cardCursos', function (e) {
            if (curKey != e.which) {
                var d = new Date();
                starttime = d.getTime();
                console.log('Console.log...:'+starttime);
                curKey = e.which;
            }
        })
        testeInit.doc.on('touchend', '.cardCursos', function (e) {
            var d = new Date();
            var endTime = d.getTime();
            console.log('Atualização..: '+endTime);
            var timeTaken = endTime - starttime;
            console.log('Tempo........: '+timeTaken / 1000);
            curKey = null;
        })
    ```


- ## ✅ [How to add a html element after last child of list item](https://stackoverflow.com/questions/52091055/how-to-add-a-html-element-after-last-child-of-list-item/52091337)

    - 👉⚡ Amostra

    `$('.pagInit > main > .container_cardCursos > main').append('<button>Some Button</button>') `

    `$("li:last-child").append(" <button id='listButtonAdd'>Some Button</button>");`

    ``` JS
        var item = document.createElement("li");
        item.innerHTML = "d";
        document.getElementsByClassName("list")[0].append(item)
    ```

    ```html
    <ul class= " list">
      <li>a</li>
      <li>b</li>
      <li>c</li>
    </ul>
    ```

 - ## ✅ [Setar atributo src de uma tag img]()

    - 👉⚡ Amostra

    `$('seletor').attr("src", ""+base64image+"")`


 - ## ✅ [Selector label from 'for' attribute](https://stackoverflow.com/questions/2599627/how-to-select-label-for-xyz-in-css)

    - 👉⚡ Amostra

    `$('.pagAddCurso > main > label[for=in_dt]')`

 - ## ✅ [Setting background-image using jQuery CSS property](https://stackoverflow.com/questions/512054/setting-background-image-using-jquery-css-property)

    - 👉⚡ Amostra

    `$('.imgSrc').css('background-image', 'url('+imageData+')');`
