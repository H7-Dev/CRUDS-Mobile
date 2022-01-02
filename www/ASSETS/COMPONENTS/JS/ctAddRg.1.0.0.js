const ctAddRg = {
    doc: $(document),
    btn_fehcar: '.overAddRg > .ctAddRg > header > .btnFechar',
    init: () => {
        setTimeout(function () {
            console.log('init ctAddRg')
            ctAddRg.Ouvintes()
        }, 400);
    },
    Ouvintes: () => {
        ctAddRg.doc.on('click', ctAddRg.btn_fehcar,function(e){
            console.log('Teste')
            let $this = $(this)
            setTimeout(function() {
                ctAddRg.remove_ctAddRg($this)
            }, 1000);
        })
    },
    remove_ctAddRg: function(_el){
        _el.closest('.overAddRg').remove()
    }
}
ctAddRg.init()
