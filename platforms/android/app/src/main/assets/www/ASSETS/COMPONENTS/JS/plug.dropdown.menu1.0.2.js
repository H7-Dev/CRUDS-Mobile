//!!! compátivel com pais overflwor hidden
jQuery(function ($) {
    $.fn.dropdownMenu = function(_a,_b,_c,_d,_e,_f,_g) {
        let a = $(this)
        $(document).on("click", _a, function (e) {
            e.stopPropagation()
            e.preventDefault()
            let a = $(this)
            $(_g).width(a.closest(_c).outerWidth())
            a.closest(_c).find('button > div').toggleClass(_e)
            a.closest(_c).find(_d).toggleClass(_f)
        })
        $(document).on("click", _b, function (e) {
            e.stopPropagation()
            e.preventDefault()

            let a = $(this)
            a.closest(_c).find('input').val(a.html())
            a.closest(_c).find(_d).removeClass(_f)
            a.closest(_c).find('button > div').toggleClass(_e)

        })
    };
$.fn
});
