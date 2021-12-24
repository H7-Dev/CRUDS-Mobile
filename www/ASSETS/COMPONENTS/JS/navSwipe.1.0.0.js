$(document).ready(function () {

    $('[data-toggle]').on('touchstart', function (e) {
        var toggle_el = $(this).data("toggle");
        $(toggle_el).toggleClass("openNavSwipe");
    })
    // console.log($('.overNavSwipeAre').outerWidth())
    $('.overNavSwipeAre').swipe({
        swipeStatus: function (event, phase, direction, distance, duration, fingers, fingerCount) {
            let temClass = $(this).hasClass('openNavSwipe')
            // console.log(direction)
            // console.log(distance)
            if (!temClass) {
                // ! #EXPANDIR
                if (phase == "move" && direction == "left" && distance <= 48) {
                    // console.log(distance)
                    $(this).css('transform', 'translate('+'-'+distance+'px,0)');
                }
                if (phase == "cancel" && direction == "left" && distance <= 35) {
                    $(this).css('transform', 'translate(' + 0 + 'px,0)');
                }
                if (phase == "end" && direction == "left" && distance <= 35) {
                    $(this).css('transform', 'translate(' + 0 + 'px,0)');
                }
                if (phase == "end" && direction == "left" && distance >= 36) {
                    console.log(distance)

                    $(this).addClass("openNavSwipe");
                    $('.clickSwipeArea').addClass("clickSwipeAreaTrans");
                    $('.clickSwipeArea').css('display', 'grid')
                    $(this).removeAttr("style");
                }
                if (phase == "cancel" && direction == "left" && distance >= 36) {
                    $('.clickSwipeArea').addClass("clickSwipeAreaTrans");
                    $(this).addClass("openNavSwipe");
                    $('.clickSwipeArea').css('display', 'grid')
                    $(this).removeAttr("style");
                }
            } else {
                let nav = $(this),
                navWidth = nav.outerWidth(),
                transInitial = navWidth

                // ! #RECOLHER
                if (phase == "move" && direction == "right" && distance <= 48) {
                    let teste = transInitial - distance
                    $(this).css('transform', 'translate('+teste+'px,0)')
                    $('.clickSwipeArea').removeClass("clickSwipeAreaTrans");
                    $(this).removeClass("openNavSwipe");
                    $('.clickSwipeArea').css('display', 'none')
                    $(this).removeAttr("style");
                }
            }
        }
    })
    $('.clickSwipeArea').click(function (e) {
        e.preventDefault();
        let temClass = $('.overNavSwipeAre').hasClass('openNavSwipe')
        if (temClass) {
            $(this).css('display', 'none')
            $(this).removeClass("clickSwipeAreaTrans")
            $('.overNavSwipeAre').removeClass("openNavSwipe");
            $('.overNavSwipeAre').removeAttr("style");
        }
    });
})