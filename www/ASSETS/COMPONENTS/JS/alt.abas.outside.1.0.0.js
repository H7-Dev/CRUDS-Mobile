// // ! futura biblioteca (alternar Abas e paineis correlatos)
// $('body').on('click', '.tab-curvado', function () {
//     let $this = $(this),                         // → 01.00 seletor jquery para o ovinte click (seleciona o el cliclado)
//         a = $this.attr('class'),                 // → 02.00 apartir do $this obtém a(s) classe(s) de si mesmo
//         b = $this.data('tab'),                   // → 03.00 apartir do $this obtém a valor do atributo data-tab
//         c = a.split(' ')[0],                     // ! 04.00 apartir do 'let a' obtém a primeira class caso haja mais do que um
//         d = $('.'+c+'[data-tab="'+b+'"]'),       // → 05.00 seleciona o elemento que contém a class obtida em 04.00 e cujo o data-tab seja igual ao 'let b' em 03.00
//         e = d.addClass('activeGrade'),             // → 06.00 alterna a class 'SELC-3' do elemento selecionado em 05.00
//         f = $('.'+c).not('[data-tab="'+b+'"]')   // → 07.00 obtém todos os elemenstos que não correlatos correlato
//         g = f.removeClass('activeGrade')              // → 08.00 remover class 'SELC-3' dos elementos que não são correlato em 07.00
//          // econtrar painel correlato
//         h = $('.paginas[data-painel="'+b+'"]')
//         i = h.addClass('activeGrade')
//         j = $('.paginas').not('[data-painel="'+b+'"]')
//         k = j.removeClass('activeGrade')
//  })