$(document).ready(function () {
    $('[data-toggle]').on('touchstart', function (e) {
        var toggle_el = $(this).data("toggle");
        $(toggle_el).toggleClass("open-sidebar");
    })
    $(".barraSwipe").swipe({
        swipeStatus: function (event, phase, direction, distance, duration, fingers, fingerCount) {
            let temClass = $(this).hasClass('open-sidebar')
            if (!temClass) {
                // ! #EXPANDIR
                if (phase == "move" && direction == "right" && distance <= 250) {
                    $(this).css('transform', 'translate('+distance+'px,0)');
                }
                if (phase == "cancel" && direction == "right" && distance <= 100) {
                    $(this).css('transform', 'translate(' + 0 + 'px,0)');
                }
                if (phase == "end" && direction == "right" && distance <= 100) {
                    $(this).css('transform', 'translate(' + 0 + 'px,0)');
                }
                if (phase == "end" && direction == "right" && distance >= 102) {
                    $(this).addClass("open-sidebar");
                    $('.clickSwipeArea').css('display', 'grid')
                    $(this).removeAttr("style");
                }
            } else {
                let nav = $(this),
                navWidth = nav.outerWidth(),
                transInitial = navWidth

                // ! #RECOLHER
                if (phase == "move" && direction == "left" && distance <= 249) {
                    let teste = transInitial - distance
                    $(this).css('transform', 'translate('+teste+'px,0)');
                }
                if (phase == "cancel" && direction == "left" && distance <= 100) {
                    $(this).css('transform', 'translate(' +250+ 'px,0)');
                }
                if (phase == "end" && direction == "left" && distance <= 100) {
                    $(this).css('transform', 'translate(' +250+ 'px,0)');
                }
                if (phase == "end" && direction == "left" && distance >= 102) {
                    $(this).removeClass("open-sidebar");
                    $('.clickSwipeArea').css('display', 'none')
                    $(this).removeAttr("style");
                }
            }
        }
    })
})