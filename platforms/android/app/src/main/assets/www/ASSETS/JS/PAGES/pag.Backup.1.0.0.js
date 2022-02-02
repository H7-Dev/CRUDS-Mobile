const pag3 = {
    doc             : $(document),
    btnCriarBackup  : '.pagBackup > main > .fazerBackup > button:first-child',
    init: () => {
        setTimeout(function () {
            console.log('init teste -g')
            pag3.Ouvintes()
        }, 400);
    },
    Ouvintes: () => {
        // → exemplo de evento on, ou seja para els criados de forma dinâmica, neste caso, adicina o evento click a um els criado após o dom ser carregado
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