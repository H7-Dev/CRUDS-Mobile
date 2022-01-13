const selcFoto = {
    doc: $(document),
    imgSrc: '#selcFotoCurso > .imgSrcOptions',
    btn_fehcar: '.overOpcaoSrcImg > .ctOpcao > header > .btnFechar',
    btnTirarFoto: '.overOpcaoSrcImg > .ctOpcao > main > #btnTirarFoto',
    btnSelFoto: '.overOpcaoSrcImg > .ctOpcao > main > #btnSelFoto',
    init: () => {
        setTimeout(function () {
            // console.log('init selcFoto')
            selcFoto.Ouvintes()
        }, 400);
    },
    Ouvintes: () => {
        // * fechar/remover/ocultar .overOpcaoSrcImg
        selcFoto.doc.on('click', selcFoto.btn_fehcar, function (e) {
            console.log('Teste')
            let $this = $(this)
            setTimeout(function () {
                selcFoto.rm_overOpcaoSrcImg($this)
            }, 1000);
        })
        selcFoto.doc.on('click', selcFoto.btnTirarFoto, function (e) {
            let $this = $(this)
            console.log($this)
            setTimeout(function () {
                navigator.camera.getPicture(onSuccess, onFail, {
                    quality: 90,
                    destinationType: Camera.DestinationType.FILE_URL
                })

                function onSuccess(imageData) {
                    // var image = $('#img')
                    var image = $('#selcFotoCurso > img').attr('src')
                    image = imageData
                    $('#selcFotoCurso > .imgSrc').css('background-image', 'url(' + image + ')')
                }

                function onFail(message) {
                    alert('Falhou porque: ' + message);
                    console.log(message)
                }

            }, 1000);
        })
        selcFoto.doc.on('click', selcFoto.btnSelFoto, function (e) {
            console.log('evento onClick (T-00.01/btnTirarFoto)')
            let $this = $(this)
            console.log($this)
            setTimeout(function () {
                navigator.camera.getPicture(onSuccess, onFail, {
                    quality: 90,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: false,
                    destinationType: Camera.DestinationType.FILE_URI
                })

                function onSuccess(imageData) {
                    console.log(imageData);
                    // let image = $('#img').attr('src');
                    // image = imageData

                    // convert to base64
                    function getBase64Image(imgUrl, callback) {
                        var img = new Image();
                        // onload fires when the image is fully loadded, and has width and height

                        img.onload = function () {

                            var canvas = document.createElement("canvas");
                            canvas.width = img.width;
                            canvas.height = img.height;
                            var ctx = canvas.getContext("2d");
                            ctx.drawImage(img, 0, 0);
                            var dataURL = canvas.toDataURL(),
                                dataURL = dataURL

                            callback(dataURL); // the base64 string
                        };

                        // set attributes and src
                        img.setAttribute('crossOrigin', 'anonymous'); //
                        img.src = imgUrl;

                    }
                    // obter to base64
                    getBase64Image(imageData, function (base64image) {
                        console.log(base64image);
                        $('#selcFotoCurso > input').val(base64image);
                        $('#selcFotoCurso > div').css('background-image', 'url(' + imageData + ')');
                    })
                }

                function onFail(message) {
                    alert('Falhou porque: ' + message);
                    console.log(message)
                }

            }, 1000);
        })
    },
    rm_overOpcaoSrcImg: function (_el) {
        _el.closest('.overOpcaoSrcImg').remove()
    },
}
selcFoto.init()
// ViewImage()