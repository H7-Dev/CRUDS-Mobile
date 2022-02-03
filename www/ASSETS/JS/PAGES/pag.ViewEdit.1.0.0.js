const app_p1 = {
    doc           : $(document),
    dataId        : $('.menuOptsDt > #dataId'),
    dataId        : $('.menuOptsDt > #dataId'),
    btnAtualizar  : '.menuOptsDt > #btnAtualizar',
    menuOptsDt    : $('.menuOptsDt'),
    pagViewEdit   : $('.pagViewEdit'),
    in_gID        : $('.pagViewEdit > header > #in_gID'),
    btnVoltar     : '.pagViewEdit > header > button',
    // * ↓ Formulário ↓
    in_curso      : '.pagViewEdit > main > label > #in_curso',
    in_duracao    : '.pagViewEdit > main > label > #in_duracao',
    in_dt         : $('.pagViewEdit > main > label[for=in_dt] > input[name=in_dt]'),
    in_dtBr       : $('.pagViewEdit > main > label[for=in_dt] > input[name=in_dtBr]'),
    in_dtBrB      : '.pagViewEdit > main > label[for=in_dt] > input[name=in_dtBr]',
    imgSrc        : '.pagViewEdit > main > .selFoto > .imgSrc',
    in_imgSrc     : '.pagViewEdit > main > .selFoto > #in_imgSrc',
    // * ↑ Formulário ↑
    btnFechar     : '#inibtnFechar',
    init: () => {
        setTimeout(function () {
            // console.log(app_p1.menuOptsDt)
            // console.log('init teste -g')
            app_p1.Ouvintes()
        }, 400);
    },
    Ouvintes: () => {
        app_p1.doc.on('change', app_p1.in_dt,function(e){
            // console.log('THIS')
            setTimeout(function() {
                // console.log(app_p1.tratarDtString())
                app_p1.in_dtBr.val(app_p1.tratarDtString())
            }, 400);
        })
        app_p1.doc.on('click', app_p1.btnAtualizar, function (e) {
            let $this = $(this)
            // console.log($this)
            setTimeout(function () {
                app_p1.menuOptsDt.removeClass('activeGrade')
                let dataId = app_p1.dataId.val()
                // console.log(dataId);
                app_p1.in_gID.val(dataId)
                tbCs.select_tb_mercados(dataId)

                app.altElEfects('fadeOutUp', $('.menuInit'),'fadeIn',$('.pagViewEdit'))
            }, 700)
        })
        app_p1.doc.on('click', app_p1.btnVoltar, function (e) {
            let $this = $(this)
            // console.log($this)
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
        // console.log(_el)
    },
    tratarDtString: function () {
        let a = new String(app_p1.in_dt.val()).split("-").reverse()
        b = a[0]+'/'+a[1]+'/'+a[2]
        // console.log(pagAddCr.in_dtBr.val(b))
        return b
    }
}
app_p1.init()