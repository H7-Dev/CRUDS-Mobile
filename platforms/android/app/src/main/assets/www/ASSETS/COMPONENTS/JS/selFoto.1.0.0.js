const selcFoto = {
    doc: $(document),
    imgSrc: '.selFoto > .imgSrcOptions',
    btn_fehcar: '.overOpcaoSrcImg > .ctOpcao > header > .btnFechar',
    btn_tiarFoto: '.overOpcaoSrcImg > .ctOpcao > main > #btnTirarFoto',
    btnSelFoto: '.overOpcaoSrcImg > .ctOpcao > main > #btnSelFoto',
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
        selcFoto.doc.on('click', selcFoto.btn_tiarFoto,function(e){
            console.log('evento onClick (T-00.01/btn_tiarFoto)')
            let $this = $(this)
            console.log($this)
            setTimeout(function() {
                console.log('Teste btnTirarFoto #2c')
                navigator.camera.getPicture(onSuccess, onFail, { quality: 90,
                    destinationType: Camera.DestinationType.FILE_URL
                })
                function onSuccess(imageData) {
                    console.log(imageData)
                    // $('.imgSrc').css('background-image', 'url('+imageData+')');
                    var image = document.getElementById('img');
                    // image.src = imageData  + '?' + Math.random();
                    image.src = imageData
                    $('.imgSrc').css('background-image', 'url('+image.src+')');

                }
                function onFail(message) {
                    alert('Falhou porque: ' + message);
                    console.log(message)
                }

            }, 1000);
        })
        selcFoto.doc.on('click', selcFoto.btnSelFoto,function(e){
            console.log('evento onClick (T-00.01/btn_tiarFoto)')
            let $this = $(this)
            console.log($this)
            setTimeout(function() {
                navigator.camera.getPicture(onSuccess, onFail, { quality: 90,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: false,
                    destinationType: Camera.DestinationType.FILE_URI
                })
                function onSuccess(imageData) {
                    console.log(imageData)
                    // $('.imgSrc').css('background-image', 'url('+imageData+')');
                    var image = document.getElementById('img');
                    // image.src = imageData  + '?' + Math.random();
                    image.src = imageData
                    $('.imgSrc').css('background-image', 'url('+image.src+')');

                }
                function onFail(message) {
                    alert('Falhou porque: ' + message);
                    console.log(message)
                }

            }, 1000);
        })
    },
    rm_overOpcaoSrcImg: function(_el){
        _el.closest('.overOpcaoSrcImg').remove()
    },
}
selcFoto.init()
