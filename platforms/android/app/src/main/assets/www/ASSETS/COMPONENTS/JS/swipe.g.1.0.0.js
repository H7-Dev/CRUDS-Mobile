$(document).ready(function (e) {


    $(document).swipe({
        swipeStatus: function (event, phase, direction, distance, duration, fingers, fingerCount) {

            let check_p_vers = $('.p_vers').hasClass('activeFlex'),
                check_p_cmt = $('.p_cmt').hasClass('activeFlex'),
                check_menuInit = $('.menuInit').hasClass('ocultar'),
                check_conteudoDoc = $('.conteudoDoc').hasClass('ocultar')
            if (!check_p_cmt && !check_p_vers) {
                // console.log('A...:'+check_p_cmt +' '+ check_p_vers)
                //  → swipe pageHomeSwipe
                if (!check_menuInit && !check_conteudoDoc) {
                    // console.log('check_menuInit........: ' + check_menuInit)
                    // console.log('check_conteudoDoc.....: ' + check_conteudoDoc)
                    let temClass = $('.pageHomeSwipe').hasClass('expPageHomeSwipe'),
                        getScrollTop = parseInt($('.pageHome > main').scrollTop())

                    if (!temClass && getScrollTop === 0) {
                        // * Status: move
                        if (phase == "move" && direction == "up" && distance <= 215) {
                            tratarElAcima = $('.pageHome > header').outerHeight()
                            alturaInit = tratarElAcima - distance
                            opacityInit = 100 - distance / 2
                            $('.pageHomeSwipeArea').css('display', 'flex')
                            $('.pageHomeSwipe').css('transform', 'translate(0px, -' + distance + 'px)')
                            $('.pageHome > header').css({
                                'transform': 'translate(0px, -' + distance + 'px)'
                            })
                            $('.pageHome > header > * ').css({
                                'color': 'rgba(0, 0, 0, 0.8)',
                                'fill': 'rgba(0, 0, 0, 0.8)',
                                'stroke': 'rgba(0, 0, 0, 0.8)'
                            })
                            $('.pageHome > .underlayerImg').css({
                                'opacity': '0.' + opacityInit
                            })
                        }
                        if (phase == "cancel" && direction == "up" && distance <= 205 || phase == "end" && direction == "up" && distance <= 205) {
                            $('.pageHomeSwipeArea').css('display', 'flex')
                            $('.pageHomeSwipe').removeAttr("style")
                            $('.pageHome > header').removeAttr("style")
                            $('.pageHome > header').css({
                                'min-height': '300px'
                            })
                            $('.pageHome > header > * ').css({
                                'color': 'white',
                                'fill': 'white',
                                'stroke': 'white'
                            })
                            $('.pageHome > .underlayerImg').css({
                                'opacity': '1'
                            })

                        }
                        if (phase == "end" && direction == "up" && distance >= 207 || phase == "cancel" && direction == "up" && distance >= 207) {
                            $('.pageHomeSwipeArea').css('display', 'flex')
                            $('.pageHomeSwipe').removeAttr("style")
                            $('.pageHomeSwipe').addClass('expPageHomeSwipe')
                            $('.pageHome > header').addClass('tratarElAnterior')
                            $('.pageHome > header').removeAttr("style")
                            $('.pageHome > header > *').removeAttr("style")
                            $('.pageHome > .underlayerImg').removeAttr('style')
                            $('.pageHome > .underlayerImg').css({
                                'opacity': '0'
                            })

                        }
                        // * #Status:
                        if (phase == "cancel" && direction == "up" || phase == "cancel" && direction == "down" ||
                            phase == "cancel" && direction == "left" || phase == "cancel" && direction == "right" ||
                            phase == "end" && direction == "left" || phase == "end" && direction == "right" ||
                            phase == "end" && direction == "up" || phase == "end" && direction == "down") {
                            // console.log('#Status recolher')
                            $('.pageHomeSwipeArea').css('display', 'none')
                        }

                    } else if (temClass && getScrollTop === 0) {
                        // console.log(getScrollTop)
                        // console.log(phase + ' Dir: ' + direction + ' dist: ' + distance)
                        if (phase == "move" && direction == "down" && distance <= 180) {
                            $('.pageHomeSwipeArea').css('display', 'flex')
                            opacityInit = distance / 20
                            transparenciInit = 100 - distance
                            $('.pageHome > .underlayerImg').css({
                                'opacity': '0.' + opacityInit
                            })
                            $('.pageHome > header').css({
                                'transform': 'translate(0px, ' + distance + 'px)'
                            })
                            $('.pageHomeSwipe').css('transform', 'translate(0px, ' + distance + 'px)')

                        }
                        if (phase == "cancel" && direction == "down" && distance <= 180) {
                            // console.log(phase + ' Dir: ' + direction + ' dist: ' + distance)
                            $('.pageHomeSwipeArea').css('display', 'flex')
                            $('.pageHomeSwipe').removeAttr("style")
                            $('.pageHome > header').removeAttr("style")
                            $('.pageHome > .underlayerImg').css({
                                'opacity': '0'
                            })

                        }
                        if (phase == "end" && direction == "down" && distance <= 180) {
                            $('.pageHomeSwipeArea').css('display', 'flex')
                            $('.pageHomeSwipe').removeAttr("style")
                            $('.pageHome > header').removeAttr("style")
                            $('.pageHome > .underlayerImg').css({
                                'opacity': '0'
                            })

                        }
                        if (phase == "end" && direction == "down" && distance >= 183) {
                            $('.pageHomeSwipeArea').css('display', 'flex')
                            $('.pageHomeSwipe').removeAttr("style")
                            $('.pageHomeSwipe').removeClass('expPageHomeSwipe')
                            $('.pageHome > header').removeClass('tratarElAnterior')
                            $('.pageHome > header').removeAttr("style")
                            $('.pageHome > header').removeAttr("style")
                            $('.pageHome > .underlayerImg').removeAttr("style")

                        }
                        if (phase == "cancel" && direction == "down" && distance >= 183) {
                            $('.pageHomeSwipeArea').css('display', 'flex')
                            $('.pageHomeSwipe').removeAttr("style")
                            $('.pageHomeSwipe').removeClass('expPageHomeSwipe')
                            $('.pageHome > header').removeClass('tratarElAnterior')
                            $('.pageHome > header').removeAttr("style")
                            $('.pageHome > .underlayerImg').removeAttr("style")

                        }

                        // * #Status:
                        if (phase == "cancel" && direction == "up" || phase == "cancel" && direction == "down" ||
                            phase == "cancel" && direction == "left" || phase == "cancel" && direction == "right" ||
                            phase == "end" && direction == "left" || phase == "end" && direction == "right" ||
                            phase == "end" && direction == "up" || phase == "end" && direction == "down") {
                            $('.pageHomeSwipeArea').css('display', 'none')
                        }
                    }
                } else //  → swipe conteudoDoc
                    if (!check_conteudoDoc && check_menuInit) {
                        // console.log('check_menuInit........: ' + check_menuInit)
                        // console.log('check_conteudoDoc.....: ' + check_conteudoDoc)

                        let temClass = $('.conteudoDoc > main').hasClass('expConteudoDoc'),
                            getScrollTop = parseInt($('.conteudoDoc > main').scrollTop())

                        if (!temClass && getScrollTop === 0) {
                            // console.log('Caso não tenha: '+temClass)
                            // * Status: move
                            if (phase == "move" && direction == "up" && distance <= 215) {
                                tratarElAcima = $('.conteudoDoc > header').outerHeight()
                                alturaInit = tratarElAcima - distance
                                opacityInit = 100 - distance / 5
                                $('.contedoDocSwipeArea').css('display', 'flex')
                                $('.conteudoDoc > main').css('transform', 'translate(0px, -' + distance + 'px)')
                                $('.conteudoDoc > header').css({
                                    'transform': 'translate(0px, -' + distance + 'px)'
                                })
                                $('.conteudoDoc > .underlayerImg').css({
                                    'opacity': '0.' + opacityInit
                                })
                            }

                            if (phase == "cancel" && direction == "up" && distance <= 180 || phase == "end" && direction == "up" && distance <= 180) {
                                $('.contedoDocSwipeArea').css('display', 'none')
                                $('.conteudoDoc > main').removeAttr('style')
                                $('.conteudoDoc > header').removeAttr('style')
                                $('.conteudoDoc > .underlayerImg').css({
                                    'opacity': '1'
                                })
                            }
                            if (phase == "end" && direction == "up" && distance >= 182 || phase == "cancel" && direction == "up" && distance >= 182) {
                                $('.contedoDocSwipeArea').css('display', 'flex')
                                $('.conteudoDoc').removeAttr("style")
                                $('.conteudoDoc  > main').removeAttr("style")

                                $('.conteudoDoc > main').addClass('expConteudoDoc')
                                $('.conteudoDoc > header').addClass('elAntConteudoDoc')
                                $('.conteudoDoc > header > h1').addClass("col2 row1")
                                $('.conteudoDoc > header > button').addClass("col1 row1")

                                $('.conteudoDoc > header').removeAttr("style")
                                $('.conteudoDoc > header > *').removeAttr("style")
                                $('.conteudoDoc > header > h1').removeClass("textFillTrans row1")
                                $('.conteudoDoc > header > button').removeClass("row2")
                                $('.conteudoDoc > .underlayerImg').css({
                                    'opacity': '0'
                                })

                            }
                            // * #Status:
                            if (phase == "cancel" && direction == "up" || phase == "cancel" && direction == "down" ||
                                phase == "cancel" && direction == "left" || phase == "cancel" && direction == "right" ||
                                phase == "end" && direction == "left" || phase == "end" && direction == "right" ||
                                phase == "end" && direction == "up" || phase == "end" && direction == "down") {
                                // console.log('#Status recolher')
                                $('.contedoDocSwipeArea').css('display', 'none')
                            }

                        } else if (temClass && getScrollTop === 0) {
                            // console.log('Caso não tenha: '+temClass)
                            // console.log(getScrollTop)
                            console.log(phase + ' Dir: ' + direction + ' dist: ' + distance)

                            if (phase == "move" && direction == "down" && distance <= 180) {
                                opacityInit = distance / 20
                                tratarElAcima = $('.conteudoDoc > header').outerHeight()
                                alturaInit = tratarElAcima - distance
                                console.log('1° caso')
                                $('.conteudoDoc > .underlayerImg').css({
                                    'opacity': '0.' + opacityInit
                                })
                                $('.contedoDocSwipeArea').css('display', 'flex')
                                $('.conteudoDoc > main').css('transform', 'translate(0px, ' + distance + 'px)')
                                $('.conteudoDoc > header').css({
                                    'transform': 'translate(0px, ' + distance + 'px)'
                                })
                            }
                            if (phase == "cancel" && direction == "down" && distance <= 180 || phase == "end" && direction == "down" && distance <= 180) {
                                $('.contedoDocSwipeArea').css('display', 'none')
                                $('.conteudoDoc > main').removeAttr('style')
                                $('.conteudoDoc > header').removeAttr('style')
                                $('.conteudoDoc > .underlayerImg').css({
                                    'opacity': '0'
                                })
                            }
                            if (phase == "end" && direction == "down" && distance >= 182 || phase == "cancel" && direction == "down" && distance >= 182) {
                                $('.contedoDocSwipeArea').css('display', 'flex')

                                $('.conteudoDoc > header').removeAttr("style")
                                $('.conteudoDoc > main').removeAttr('style')
                                $('.conteudoDoc > header > *').removeAttr("style")

                                $('.conteudoDoc > main').removeClass('expConteudoDoc')
                                $('.conteudoDoc > header').removeClass('elAntConteudoDoc')
                                $('.conteudoDoc > header > h1').removeClass("col2 row1")
                                $('.conteudoDoc > header > button').removeClass("col1 row1")
                                $('.conteudoDoc > header > button').removeClass("row2")

                                $('.conteudoDoc > header > h1').addClass("textFillTrans row1")

                                $('.conteudoDoc > .underlayerImg').css({
                                    'opacity': '1'
                                })

                            }



                            // * #Status:
                            if (phase == "cancel" && direction == "up" || phase == "cancel" && direction == "down" ||
                                phase == "cancel" && direction == "left" || phase == "cancel" && direction == "right" ||
                                phase == "end" && direction == "left" || phase == "end" && direction == "right" ||
                                phase == "end" && direction == "up" || phase == "end" && direction == "down") {
                                $('.contedoDocSwipeArea').css('display', 'none')
                            }
                        }
                    }
            } else { /*console.log('B...:'+check_p_cmt +' '+ check_p_vers) */ }
        }
    })
})