const gID = {
    doc: $(document),
    btn_fehcar: '.overAddRg > .ctAddRg > header > .btnFechar',
    btn_a: '.overAddRg > .ctAddRg > main > button:first-child',
    btn_b: '.overAddRg > .ctAddRg > main > button:nth-child(2)',
    // $( "div span:first-child" )
    init: () => {
        // setTimeout(function () {
            // console.log('init => gID')
            gID.Ouvintes()
        // }, 400);
    },
    Ouvintes: () => {
        // console.log('Gerador de ID '+gID.gerarID())
    },
    gerarID: function () {
        var dt = new Date()
        dia = dt.getDate()
        mes = dt.getMonth() + 1
        ano = dt.getFullYear()
        h = dt.getHours()
        m = dt.getMinutes()
        s = dt.getSeconds()
        ml = dt.getMilliseconds()

        // console.log(mes)
        return dia + '' + mes + '' + ano + '' + h + '' + m + '' + s + '-' + ml
    }
}
gID.init()
