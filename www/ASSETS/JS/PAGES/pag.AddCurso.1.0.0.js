const pagAddCr = {
    doc: $(document),
    btnVoltar            : '.pagAddCurso > header > .btnVoltar',
    in_dt                : $('.pagAddCurso > main > label[for=in_dt] > input[name=in_dt]'),
    in_dtBr                : $('.pagAddCurso > main > label[for=in_dt] > input[name=in_dtBr]'),
    btnAction            : $('.pagAddCurso > footer > .btnAction'),
    init: () => {
        setTimeout(function () {
            console.log('init => pagAddCurso')
            pagAddCr.Ouvintes()
        }, 400);
    },
    Ouvintes: () => {

        ctAddRg.doc.on('change', ctAddRg.in_dt,function(e){
            // console.log('btnAction')
            // let $this = $(this)
            setTimeout(function() {
                console.log(pagAddCr.tratarDtString())
            }, 1000);
        })
    },
    tratarDtString: function () {
        let a = new String(pagAddCr.in_dt.val()).split("-").reverse()
        b = a[0]+'/'+a[1]+'/'+a[2]


        console.log(pagAddCr.in_dtBr.val(b))
        return b
    }
}
pagAddCr.init()