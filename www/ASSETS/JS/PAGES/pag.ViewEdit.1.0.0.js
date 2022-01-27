const app_p1 = {
    doc           : $(document),
    dataId        : $('.menuOptsDt > #dataId'),
    dataId        : $('.menuOptsDt > #dataId'),
    btnAtualizar  : '.menuOptsDt > #btnAtualizar',
    menuOptsDt    : $('.menuOptsDt'),
    pagViewEdit   : $('.pagViewEdit'),
    in_gID        : $('.pagViewEdit > header > #in_gID'),
    btnVoltar     : '.pagViewEdit > header > button',
    in_curso      : '.pagViewEdit > main > label > #in_curso',
    btnFechar     : '#inibtnFechar',
    init: () => {
        setTimeout(function () {
            console.log(app_p1.menuOptsDt)
            // console.log('init teste -g')
            app_p1.Ouvintes()
        }, 400);
    },
    Ouvintes: () => {
        app_p1.doc.on('click', app_p1.btnAtualizar, function (e) {
            let $this = $(this)
            console.log($this)
            setTimeout(function () {
                app_p1.menuOptsDt.removeClass('activeGrade')
                let dataId = app_p1.dataId.val()
                console.log(dataId);
                app_p1.in_gID.val(dataId)
                tbCs.select_tb_mercados(dataId)

                app.altElEfects('fadeOutUp', $('.menuInit'),'fadeIn',$('.pagViewEdit'))
            }, 700)
        })
        app_p1.doc.on('click', app_p1.btnVoltar, function (e) {
            let $this = $(this)
            console.log($this)
            setTimeout(function () {
                //* Abaixo a função que aplica o efeito de transição
                app.altElEfects(
                    'fadeOutUp',
                    $('.pagViewEdit'),
                    'fadeIn',
                    $('.menuInit')
                )
            }, 700)
        })
    },
    exe_callbackComParametros: function (_el) {
        console.log(_el)
    },
}
app_p1.init()