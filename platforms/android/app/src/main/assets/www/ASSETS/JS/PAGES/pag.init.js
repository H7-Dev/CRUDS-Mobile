
const testeInit = {
    doc           : $(document),
    cardCursos    : $('.pagInit > main > .container_cardCursos > main > .cardCursos'),
    btnFechar     : '#inibtnFechar',
    toBakcup      : '.menuInit > .pagInit header > .toBakcup ',
    init: () => {
        setTimeout(function () {
            // console.log('init teste -g')
            testeInit.Ouvintes()
        }, 400);
    },
    Ouvintes: () => {
        testeInit.doc.on('touchend', '.cardCursos', function (e) {
        })
        console.log(testeInit.toBakcup)
        testeInit.doc.on('click', testeInit.toBakcup,function(e){
            console.log('Ir para pag.backup')
            let $this = $(this)

            setTimeout(function() {
                // testeInit.mostrar_pagAddCurso($this)
                // testeInit.remove_ctAddRg($this)

                setTimeout(function () {
                    //* Abaixo a função que aplica o efeito de transição
                    app.altElEfects(
                        'fadeOutUp',    // * transição de saída
                        $('.menuInit'),      // * el de saída
                        'fadeIn',       // * transição de entrada
                        $('.pagBackup') // * el de entrada
                    )
                }, 700)
            }, 1000);
        })

    },
    exe_callbackComParametros: function (_el) {
        console.log(_el)
    },
}
testeInit.init()