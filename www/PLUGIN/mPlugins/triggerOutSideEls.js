function triggerOutSideEls() {
    $(document).click(function(e) {
        let checkElMain = $(e.target).closest('.menuOptsDt').hasClass('activeGrade'),
            checkEl     = $(e.target).closest('.cardCursos').hasClass('selc-3')
        // let barMenu = $(e.target).closest(secClass).hasClass(secHasClass)
        // let barFerramentas = $(e.target).closest(terClass).hasClass(terHasClass)

        // console.log(checkElMain)
        // console.log(checkEl)
        if (checkElMain == true) {
        } else {
            $('.menuOptsDt').removeClass('activeGrade');
            $('.cardCursos').removeClass('selc-3');
        }
    });
}