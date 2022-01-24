
const testeInit = {
    doc           : $(document),
    cardCursos    : $('.pagInit > main > .container_cardCursos > main > .cardCursos'),
    btnFechar     : '#inibtnFechar',
    init: () => {
        setTimeout(function () {
            console.log('init teste -g')
            testeInit.Ouvintes()
        }, 400);
    },
    Ouvintes: () => {
        // → exemplo de evento on, ou seja para els criados de forma dinâmica, neste caso, adicina o evento click a um els criado após o dom ser carregado
        var starttime;
        var curKey;
        // equivalentes na web/desktop mousedown e mouseup
        // doc           : $(document),
        // cardCursos    : $('.pagInit > main > .container_cardCursos > main > .cardCursos')
        testeInit.doc.on('touchstart', '.cardCursos', function (e) {
            if (curKey != e.which) {
                var d = new Date();
                starttime = d.getTime();
                console.log('Console.log...:'+starttime);
                curKey = e.which;
            }
        })
        testeInit.doc.on('touchend', '.cardCursos', function (e) {
            var d = new Date();
            var endTime = d.getTime();
            console.log('Atualização..: '+endTime);
            var timeTaken = endTime - starttime;
            console.log('Tempo........: '+timeTaken / 1000);
            let tempoClick = timeTaken / 1000
            if (tempoClick >= 2.000) {
                $('.menuOptsDt').css('display', 'grid');
            } else {
                alert("Tempo do click menor do 3s")
            }
            curKey = null;

        })
    },
    exe_callbackComParametros: function (_el) {
        console.log(_el)
    },
}
testeInit.init()