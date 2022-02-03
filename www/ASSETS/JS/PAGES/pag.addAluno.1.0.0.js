const pag2 = {
    doc: $(document),
    in_imgSrc  : $('.pagAddAluno > main > .selFoto > #in_imgSrc'),
    in_nome    : $('.pagAddAluno > main > label[for=in_nome] > input[name=in_nome]'),
    in_curso   : $('.pagAddAluno > main > label[for=in_curso] > .dropdown > input[name=in_curso]'),
    in_dtBr    : $('.pagAddAluno > main > label[for=in_dt] > input[name=in_dtBr]'),
    in_dt      : $('.pagAddAluno > main > label[for=in_dt] > input[name=in_dt]'),
    btnVoltar  : '.pagAddAluno > header > .btnVoltar',
    btnAction  : '.pagAddAluno > footer > .btnAction',
    init: () => {
        setTimeout(function () {
            // console.log('init => pag add aluno')
            pag2.Ouvintes()
        }, 400);
    },
    Ouvintes: () => {

        pag2.doc.on('change', pag2.in_dt,function(e){
            // console.log('btnAction')
            // let $this = $(this)
            setTimeout(function() {
                // console.log(pag2.tratarDtString())
                pag2.in_dtBr.val(pag2.tratarDtString())
            }, 1000);
        })
        pag2.doc.on("click", pag2.btnVoltar, function () {
            setTimeout(function () {
                //* Abaixo a função que aplica o efeito de transição
                app.altElEfects(
                    'fadeOutUp',    // * transição de saída
                    $('.pagAddAluno'),      // * el de saída
                    'fadeIn',       // * transição de entrada
                    $('.menuInit') // * el de entrada
                )
            }, 700)
        })
    },
    tratarDtString: function () {
        let a = new String(pag2.in_dt.val()).split("-").reverse()
        b = a[0]+'/'+a[1]+'/'+a[2]
        // console.log(pag2.in_dtBr.val(b))
        return b
    }
}
pag2.init()