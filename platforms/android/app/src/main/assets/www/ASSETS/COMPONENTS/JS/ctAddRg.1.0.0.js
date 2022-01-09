const ctAddRg = {
    doc: $(document),
    btn_fehcar: '.overAddRg > .ctAddRg > header > .btnFechar',
    btn_a: '.overAddRg > .ctAddRg > main > button:first-child',
    btn_b: '.overAddRg > .ctAddRg > main > button:nth-child(2)',
    // $( "div span:first-child" )
    init: () => {
        setTimeout(function () {
            // console.log('init ctAddRg')
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
        ctAddRg.doc.on('click', ctAddRg.btn_a,function(e){
            console.log('Teste Btn A')
            let $this = $(this)
            setTimeout(function() {
                ctAddRg.mostrar_pagAddCurso($this)
                ctAddRg.remove_ctAddRg($this)

                setTimeout(function () {
                    //* Abaixo a função que aplica o efeito de transição
                    app.altElEfects(
                        'fadeOutUp',    // * transição de saída
                        $('.menuInit'),      // * el de saída
                        'fadeIn',       // * transição de entrada
                        $('.pagAddCurso') // * el de entrada
                    )
                }, 700)
            }, 1000);
        })
        ctAddRg.doc.on('click', ctAddRg.btn_b,function(e){
            console.log('Teste Btn B')
            let $this = $(this)
            setTimeout(function() {
                ctAddRg.mostrar_pagAddCurso($this)
            }, 1000);
        })
    },
    remove_ctAddRg: function(_el){
        _el.closest('.overAddRg').remove()
    },
    mostrar_pagAddCurso: function(_el){
        console.log(_el)
    }
}
ctAddRg.init()
