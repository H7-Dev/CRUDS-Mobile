const selcFoto = {
    doc: $(document),
    imgSrc: '.selFoto > .imgSrcOptions',
    btn_fehcar: '.overOpcaoSrcImg > .ctOpcao > header > .btnFechar',
    init: () => {
        setTimeout(function () {
            console.log('init selcFoto')
            selcFoto.Ouvintes()
        }, 400);
    },
    Ouvintes: () => {
        // * fechar/remover/ocultar .overOpcaoSrcImg
        selcFoto.doc.on('click', selcFoto.btn_fehcar,function(e){
            console.log('Teste')
            let $this = $(this)
            setTimeout(function() {
                selcFoto.rm_overOpcaoSrcImg($this)
            }, 1000);
        })
        // selcFoto.doc.on('click', selcFoto.imgSrc,function(e){
        //     console.log('evento onClick (T-00.00)')
        //     let $this = $(this)
        //     console.log($this)
        //     setTimeout(function() {
        //         alert("Teste ok")
        //     }, 1000);
        // })
    },
    rm_overOpcaoSrcImg: function(_el){
        _el.closest('.overOpcaoSrcImg').remove()
    },
}
selcFoto.init()
