console.log('Dispositivo | Web | build: 14/15');
const app = {
    permissions: null,
        doc: $(document),
        ripple: $('.ripple'),
        btn_entrarApp: $('#btn_entrarApp'),
        devlopPage: $('#devlopPage'),
        conectando: $('#conectando'),
        conectado: $('#conectado'),
        btn_testeDynElEvents: $('#btn_testeDynElEvents'),
        btn_testAppVar: $('#btn_testAppVar'),
        btn_getPermCam: $('#btn_getPermCam'),
        btn_getPermWriteArmEx: $('#btn_getPermWriteArmEx'),
        btn_getPermReadArmEx: $('#btn_getPermReadArmEx'),
        btn_getPermNotifications: $('#btn_getPermNotifications'),
        btn_getPermNotifications: $('#btn_getPermNotifications'),
        btn_getPermVibrate: $('#btn_getPermVibrate'),
        btn_getPermGravarAudio: $('#btn_getPermGravarAudio'),
        btn_getPermAcessMediaLocal: $('#btn_getPermAcessMediaLocal'),
        btn_getPermGerenciadorDocs: $('#btn_getPermGerenciadorDocs'),
        btn_getPermEnviarSMS: $('#btn_getPermEnviarSMS'),
    init: () => {
        setTimeout(function () {
            console.log('flash cards | App | inicializado')
            app.Ouvintes()
            app.checkPerms()
        }, 400);
    },
    Ouvintes: () => {
        // app.permissions = cordova.plugins.permissions;
        // console.log(app.permissions);
        // #region app.com
        // #region eventos
        app.btn_getPermCam.on('click', app.camPerm)
        app.btn_getPermWriteArmEx.on('click', app.ArmzExtPerm)
        app.btn_getPermReadArmEx.on('click', app.LerArmzExtPerm)
        app.btn_getPermNotifications.on('click', app.notficationsPerm)
        app.btn_getPermVibrate.on('click', app.vibrbarPerm)
        app.btn_getPermGravarAudio.on('click', app.gravarAudioPerm)
        app.btn_getPermAcessMediaLocal.on('click', app.acessMediaLocalPerm)
        app.btn_getPermGerenciadorDocs.on('click', app.gerenciaDocsPerm)
        app.btn_getPermEnviarSMS.on('click', app.enviarSMSPerm)


        app.btn_entrarApp.on("click", app.btn_entrarApp, function () { // →-ct ir para => develoPage
            setTimeout(function () {
                app.altElEfects('fadeOutUp', $('.app'), 'fadeIn', $('.pageInter'))
            }, 1000)
        })
        app.devlopPage.on("click", app.devlopPage, function () { // →-ct ir para =>app
            setTimeout(function () {
                app.altElEfects('fadeOutUp', $('.pageInter'), 'fadeIn', $('.app'))
            }, 1200)
        })
        app.doc.on('click', '.ripple',function(e){
            console.log('Aqui Teste')
            console.log($(this))
            app.aplicarRippple(
                e,
                $(this)
            )
        })

        // #endregion

        // #region funções
        // →-ct set variáveis do tipo arry
        let ocultarEls = [app.conectando],
            mostrarEls = [app.btn_entrarApp, app.conectado]

        app.altEl(ocultarEls, mostrarEls) // →-c ocultar/mostrar multiplos els
        app.doc.on("click", app.btn_testeDynElEvents, function () {app.testeDynElEvents()})

        // #endregion

        // #region métodos jquery
            elDynTest = `<button id="btn_testeDynElEvents" class="col1-3 testeBtn ripple">Testar Evento de El Dyn create</button>`
            app.btn_entrarApp.after(elDynTest);
        //#endregion

        //#endregion ap.com

        //
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
            }, 800);
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
    checkPerms: function () {
        // * checar permisão câmera
        app.permissions.checkPermission("android.permission.CAMERA", function (status) {
            console.log('checar perm camera...........................: ' +status.hasPermission)
            $('#camStatusRes').html(status.hasPermission)
            if (!status.hasPermission) {
                $('#permCamStatus').html('Camera | Não Permitido')

            } else {
                $('#permCamStatus').html('Camera | Permitido')
            }
        }, function (err) {
            $('#permCamStatus').html('Erro!')
            console.log(err)
        })
        // * checar permisão Escrever Armazenamento Externo
        app.permissions.checkPermission("android.permission.WRITE_EXTERNAL_STORAGE", function (status) {
            console.log('checar perm Escrever Armaz. Externo...........: ' +status.hasPermission)
            $('#escreArmExStatusRes').html(status.hasPermission)
            if (!status.hasPermission) {
                $('#permWriteArmExStatus').html('Escrever Armaz. Externo | Não Permitido')
            } else {
                $('#permWriteArmExStatus').html('Escrever Armaz. Externo | Permitido')
            }
        }, function (err) {
            $('#permWriteArmExStatus').html('Erro!')
            console.log(err)
        })
        // * checar permissã oLer armazenamento Externo
        app.permissions.checkPermission("android.permission.READ_EXTERNAL_STORAGE", function (status) {
            console.log('checar perm Ler Armaz. Externo...............: ' +status.hasPermission)
            $('#lerArmExStatusRes').html(status.hasPermission)
            if (!status.hasPermission) {
                $('#permLerArmExStatus').html('Ler Armaz. Externo | Não Permitido')
            } else {
                $('#permLerArmExStatus').html('Ler Armaz. Externo | Permitido')
            }
        }, function (err) {
            $('#permLerArmExStatus').html('Erro!')
            console.log(err)
        })
        //   *  checar permissão notificaç
        app.permissions.checkPermission("android.permission.BIND_NOTIFICATION_LISTENER_SERVICE", function (status) {
            console.log('checar perm notificações....................: ' +status.hasPermission)
            $('#notficationsStatusRes').html(status.hasPermission)
            if (!status.hasPermission) {
                $('#permNotifications').html('Enviar Notificações | Não Permitido')
            } else {
                $('#permNotifications').html('Enviar Notificações | Permitido')
            }
        }, function (err) {
            $('#permNotifications').html('Erro!')
            console.log(err)
        })
        //   *  checar vibrar
        app.permissions.checkPermission("android.permission.VIBRATE", function (status) {
            console.log('checar perm vibrate....................: ' +status.hasPermission)
            $('#vibrateStatusRes').html(status.hasPermission)
            if (!status.hasPermission) {
                $('#permVibrate').html('Enviar Vibrar | Não Permitido')
            } else {
                $('#permVibrate').html('Enviar Vibrar | Permitido')
            }
        }, function (err) {
            $('#permVibrate').html('Erro!')
            console.log(err)
        })
        //   *  checar gravar audio
        app.permissions.checkPermission("android.permission.RECORD_AUDIO", function (status) {
            console.log('checar perm gravar audio....................: ' +status.hasPermission)
            $('#gravarAudioStatusRes').html(status.hasPermission)
            if (!status.hasPermission) {
                $('#permGravarAudio').html('gravar audio | Não Permitido')
            } else {
                $('#permGravarAudio').html('gravar audio | Permitido')
            }
        }, function (err) {
            $('#permGravarAudio').html('Erro!')
            console.log(err)
        })
        //   *  checar acessMediaLocation
        app.permissions.checkPermission("android.permission.ACCESS_MEDIA_LOCATION", function (status) {
            console.log('checar perm acess Media Location....................: ' +status.hasPermission)
            $('#acessMediaLocalStatusRes').html(status.hasPermission)
            if (!status.hasPermission) {
                $('#permAcessMediaLocal').html('Acessar Media Local | Não Permitido')
            } else {
                $('#permAcessMediaLocal').html('Acessar Media Local | Permitido')
            }
        }, function (err) {
            $('#permAcessMediaLocal').html('Erro!')
            console.log(err)
        })
        //   *  checar MANAGE_DOCUMENTS
        app.permissions.checkPermission("android.permission.MANAGE_DOCUMENTS", function (status) {
            console.log('checar Gerenciar Docs audio....................: ' +status.hasPermission)
            $('#gerenciadorDocsStatusRes').html(status.hasPermission)
            if (!status.hasPermission) {
                $('#permGerenciadorDocs').html('Gerenciar Docs | Não Permitido')
            } else {
                $('#permGerenciadorDocs').html('Gerenciar Docs | Permitido')
            }
        }, function (err) {
            $('#permGerenciadorDocs').html('Erro!')
            console.log(err)
        })
        //   *  checar SEND_SMS
        app.permissions.checkPermission("android.permission.SEND_SMS", function (status) {
            console.log('checar perm enviar sms....................: ' +status.hasPermission)
            $('#enviarSmsStatusRes').html(status.hasPermission)
            if (!status.hasPermission) {
                $('#permEnviarSMS').html('Enviar SMS | Não Permitido')
            } else {
                $('#permEnviarSMS').html('Enviar SMS | Permitido')
            }
        }, function (err) {
            $('#permEnviarSMS').html('Erro!')
            console.log(err)
        })
    },
    camPerm: function () {
        app.permissions.checkPermission("android.permission.CAMERA", function (status) {
            console.log('câmera status perm....: ', status.hasPermission)
            if (!status.hasPermission) {
                app.permissions.requestPermission("android.permission.CAMERA", function (status) {
                    console.log('solicitando perm câmera');
                    app.checkPerms()
                }, function (err) {
                    console.log('Perm câmera negado');
                });
            }
        }, function (err) {
            console.log(err);
        })
    },
    ArmzExtPerm: function () {
        app.permissions.checkPermission("android.permission.WRITE_EXTERNAL_STORAGE", function (status) {
            console.log('Escr Armaz status perm....: ', status.hasPermission)
            if (!status.hasPermission) {
                app.permissions.requestPermission("android.permission.WRITE_EXTERNAL_STORAGE", function (status) {
                    console.log('solicitando perm Escr Armaz Ext');
                    app.checkPerms()
                }, function (err) {
                    console.log('Perm Escr Armaz Ext negado');
                });
            }
        }, function (err) {
            console.log(err);
        })
    },
    LerArmzExtPerm: function () {
        app.permissions.checkPermission("android.permission.READ_EXTERNAL_STORAGE", function (status) {
            console.log('Ler Armaz status perm....: ', status.hasPermission)
            if (!status.hasPermission) {
                app.permissions.requestPermission("android.permission.READ_EXTERNAL_STORAGE", function (status) {
                    console.log('solicitando perm Ler Armaz Ext')
                    app.checkPerms()
                }, function (err) {
                    console.log('Perm Ler Armaz negado')
                });
            }
        }, function (err) {
            console.log(err);
        })
    },
    notficationsPerm: function () {
        app.permissions.checkPermission("android.permission.BIND_NOTIFICATION_LISTENER_SERVICE", function (status) {
            console.log('Notificações status perm....: ', status.hasPermission)
            if (!status.hasPermission) {
                app.permissions.requestPermission("android.permission.BIND_NOTIFICATION_LISTENER_SERVICE", function (status) {
                    console.log('solicitando perm Ler Notificações')
                    app.checkPerms()
                }, function (err) {
                    console.log('Perm Notificações negado')
                });
            }
        }, function (err) {
            console.log(err);
        })
    },
    vibrbarPerm: function () {
        app.permissions.checkPermission("android.permission.VIBRATE", function (status) {
            console.log('VIBRATE status perm....: ', status.hasPermission)
            if (!status.hasPermission) {
                app.permissions.requestPermission("android.permission.VIBRATE", function (status) {
                    console.log('solicitando perm VIBRATE')
                    app.checkPerms()
                }, function (err) {
                    console.log('Perm VIBRATE negado')
                });
            }
        }, function (err) {
            console.log(err);
        })
    },
    gravarAudioPerm: function () {
        app.permissions.checkPermission("android.permission.RECORD_AUDIO", function (status) {
            console.log('gravar audio status perm....: ', status.hasPermission)
            if (!status.hasPermission) {
                app.permissions.requestPermission("android.permission.RECORD_AUDIO", function (status) {
                    console.log('solicitando perm gravar audio')
                    app.checkPerms()
                }, function (err) {
                    console.log('Perm gravar audio negado')
                });
            }
        }, function (err) {
            console.log(err);
        })
    },
    acessMediaLocalPerm: function () {
        app.permissions.checkPermission("android.permission.ACCESS_MEDIA_LOCATION", function (status) {
            console.log('ACCESS_MEDIA_LOCATION status perm....: ', status.hasPermission)
            alert("acessMediaLocalPerm")
            if (!status.hasPermission) {
                app.permissions.requestPermission("android.permission.ACCESS_MEDIA_LOCATION", function (status) {
                    console.log('solicitando perm ACCESS_MEDIA_LOCATION')
                    app.checkPerms()
                }, function (err) {
                    console.log('Perm ACCESS_MEDIA_LOCATION negado')
                });
            }
        }, function (err) {
            console.log(err);
        })
    },
    gerenciaDocsPerm: function () {
        alert("gerenciaDocs")
        app.permissions.checkPermission("android.permission.MANAGE_DOCUMENTS", function (status) {
            console.log('MANAGE_DOCUMENTS status perm....: ', status.hasPermission)
            if (!status.hasPermission) {
                app.permissions.requestPermission("android.permission.MANAGE_DOCUMENTS", function (status) {
                    console.log('solicitando perm MANAGE_DOCUMENTS')
                    app.checkPerms()
                }, function (err) {
                    console.log('Perm MANAGE_DOCUMENTS negado')
                });
            }
        }, function (err) {
            console.log(err);
        })
    },
    enviarSMSPerm: function () {
        alert("enviarSMSPerm")
        app.permissions.checkPermission("android.permission.SEND_SMS", function (status) {
            console.log('SEND_SMS status perm....: ', status.hasPermission)
            if (!status.hasPermission) {
                app.permissions.requestPermission("android.permission.SEND_SMS", function (status) {
                    console.log('solicitando perm SEND_SMS')
                    app.checkPerms()
                }, function (err) {
                    console.log('Perm SEND_SMS negado')
                });
            }
        }, function (err) {
            console.log(err);
        })
    },
    testeDynElEvents: function () {
        console.log(app.btn_testAppVar)
    }
}
const ready = "cordova" in window ? "deviceready" : "DOMContentLoaded";
document.addEventListener(ready, app.init)