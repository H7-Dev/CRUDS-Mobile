const pag3 = {
    doc             : $(document),
    btnCriarBackup  : '.pagBackup > main > .fazerBackup > button:first-child',
    btnVoltar  : '.pagBackup > header > .btnVoltar',
    init: () => {
        setTimeout(function () {
            console.log('init teste -g')
            pag3.Ouvintes()
        }, 400);
    },
    Ouvintes: () => {
        pag3.doc.on("click", pag3.btnVoltar, function () {
            console.log($(this))
            setTimeout(function () {
                //* Abaixo a função que aplica o efeito de transição
                app.altElEfects(
                    'fadeOutUp',    // * transição de saída
                    $('.pagBackup'),      // * el de saída
                    'fadeIn',       // * transição de entrada
                    $('.menuInit') // * el de entrada
                )
            }, 700)
        })
        pag3.doc.on('click', pag3.btnCriarBackup, function (e) {
            console.log('Evento Click Funcional!')
            console.log('Inicial teste de calback')
            let $this = $(this)
            console.log($this)
            setTimeout(function () {
                pag3.exe_callbackComParametros($this)
            }, 1000);
        })
    },
    exe_callbackComParametros: function (_el) {
        console.log(_el)
    },
}
pag3.init()