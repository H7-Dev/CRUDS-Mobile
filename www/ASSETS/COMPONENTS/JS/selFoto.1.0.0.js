const selcFoto = {
    doc: $(document),
    imgSrc: '.selFoto > .imgSrcOptions',
    init: () => {
        setTimeout(function () {
            console.log('init selcFoto')
            selcFoto.Ouvintes()
        }, 400);
    },
    Ouvintes: () => {
        selcFoto.doc.on('click', selcFoto.imgSrc,function(e){
            console.log('evento onClick (T-00.00)')
            let $this = $(this)
            console.log($this)
            setTimeout(function() {
                alert("Teste ok")
            }, 1000);
        })
    }
}
selcFoto.init()
