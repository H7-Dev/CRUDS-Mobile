
const testeInit = {
    doc           : $(document),
    cardCursos    : $('.pagInit > main > .container_cardCursos > main > .cardCursos'),
    btnFechar     : '#inibtnFechar',
    init: () => {
        setTimeout(function () {
            console.log('init teste -g')
            testeInit.Ouvintes()
        }, 400);
    },
    Ouvintes: () => {
        testeInit.doc.on('touchend', '.cardCursos', function (e) {
        })

    },
    exe_callbackComParametros: function (_el) {
        console.log(_el)
    },
}
testeInit.init()