$(document).ready(function () {
            console.log('script')
            $(document).dropdownMenu(
                els.btn_dropDown,
                els.btn_dropDownOptions,
                els.dropdown,
                els.optsDropdown,
                'active_dropdown',
                'activeBloco',
                els.widthDropdown
            )
        })
const app = {
    init: () => {
        setTimeout(function () {
            app.Ouvintes()
        }, 400);
    },
    Ouvintes: () => {
        // #region main
        // → add on click a todos os els classificados com ripple
        els.doc.on('click', '.ripple',function(e){
            // console.log($(this))
            app.aplicarRippple(
                e,
                $(this)
            )
        })
        /*  Exemplo de Evento click com efeito onda e feitos de transição
            * É necessário que o el seja classifica com ripple (setimeout está em 800)
            * dentro do evento do el antes de qualquer código add um setTimeout(1000)
            * dentro do setTimeout vem o código desejado
        */
        els.btn_entrarApp.on("click", els.btn_entrarApp, function () {
            setTimeout(function () {
                //* Abaixo a função que aplica o efeito de transição
                app.altElEfects(
                    'fadeOutUp',    // * transição de saída
                    $('.app'),      // * el de saída
                    'fadeIn',       // * transição de entrada
                    $('.menuInit') // * el de entrada
                )
            }, 700)
        })
        els.devlopPage.on("click", els.devlopPage, function () { // →-ct ir para =>els
            setTimeout(function () {
                app.altElEfects('fadeOutUp', $('.pageInter'), 'fadeIn', $('.app'))
            }, 1200)
        })

        let ocultarEls = [els.conectando],
            mostrarEls = [els.btn_entrarApp, els.conectado]

        app.altEl(ocultarEls, mostrarEls)
        els.doc.on("click", els.btn_testeDynElEvents, function () {app.testeDynElEvents()})

        elDynTest = `<button id="btn_testeDynElEvents" class="col1-3 testeBtn ripple">Testar Evento de El Dyn create</button>`
        els.btn_entrarApp.after(elDynTest);
        //#endregion main


        // * outros
        els.doc.on('click', els.btn_Add,function(e){
            console.log($(this))
            setTimeout(function () {

                var el_overAddRg = ''
                el_overAddRg += `
                <div class="overAddRg">
                    <div class="ctAddRg">
                        <header><span>Add Pessoa / Curso</span><button class="btnFechar ripple">✘</button></header>
                        <main>
                            <button class="ripple" >Add Curso</button>
                            <button class="ripple" >Add Pessoa</button>
                        </main>
                    </div>
                </div>
                `
                $('body').append(el_overAddRg);
            }, 700)
        }),
        // * outros
        els.doc.on('click', els.btn_selImg,function(e){
            let a = $(this).closest('.selFoto').attr('id')
                console.log(a)
            setTimeout(function () {

                var el_overAddRg = ''
                el_overAddRg += `
                <div class="overOpcaoSrcImg">
                    <div class="ctOpcao">
                        <header><span>Tira Foto/ Selecionar Foto</span><button class="btnFechar ripple">✘</button></header>
                        <main>
                            <input type="hidden" value="${a}">
                            <button id='btnTirarFoto'>Tirar Foto</button>
                            <button id='btnSelFoto'>Selecinar Foto</button>
                        </main>
                    </div>
                </div>
                `
                $('body').append(el_overAddRg);
            }, 900)
        })
        els.doc.on("click", els.btnVoltar, function () {
            setTimeout(function () {
                //* Abaixo a função que aplica o efeito de transição
                app.altElEfects(
                    'fadeOutUp',    // * transição de saída
                    $('.pagAddCurso'),      // * el de saída
                    'fadeIn',       // * transição de entrada
                    $('.menuInit') // * el de entrada
                )
            }, 700)
        })
    },
    aplicarRippple: function(e, el){
        // !aplicarRippple com jqueyr
        el.each(function(index) {
            // console.log(el)
            // console.log(index + ": " + el.text())
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            let rippleElement = `<span class="rippleElement" style="left: ${x}px; top: ${y}px;"></span>`
            el.append(rippleElement)
            setTimeout(function () {
                $('.rippleElement').remove();
            }, 500);
        })
    },
    altElEfects: function (_efeitoIn, _ocultar, _efeitoOut, _mostrar) {
        _ocultar.addClass(_efeitoIn)
        setTimeout(function () {
            _ocultar.css('display', 'none')
            _mostrar.css('display', 'grid')
            _mostrar.addClass(_efeitoOut)
            setTimeout(function () {
                _ocultar.removeClass(_efeitoIn)
                _mostrar.removeClass(_efeitoOut)
            }, 1200)
        }, 900)
    },
    altEl: function (_ocultar, _mostrar) {
        // ocultar
        for (i = 0; i < _ocultar.length; i++) {
            // console.log(_ocultar[i])
            _ocultar[i].css('display', 'none');
        }
        // mostrar
        for (i = 0; i < _mostrar.length; i++) {
            // console.log(_mostrar[i])
            _mostrar[i].css('display', 'block');
        }
    },
    testeDynElEvents: function () {
        // console.log(els.btn_testAppVar)
    }
}
const ready = "cordova" in window ? "deviceready" : "DOMContentLoaded";
document.addEventListener(ready, app.init)