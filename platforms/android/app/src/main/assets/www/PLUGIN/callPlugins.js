// → triggerOutSideEls.js
setTimeout(function () {
    triggerOutSideEls()
}, 500)

// → long_tap-plugin.js
setTimeout(function () {
    (() => {
        $('.cardCursos').Longtap({
          onStart: (event, self) => {
            // console.log('onStart')
            // self.css({backgroundColor: 'red'})
          },
          onSuccess: (event, self) => {
            // console.log('onSuccess')
            $('#dataId').val(self.attr('data-id'))
            $('.cardCursos ').removeClass('selc-3')
            self.addClass('selc-3')

            $('.menuOptsDt').addClass('activeGrade')
          },
          onReject: (event, self) => {
            console.log('onReject')
            self.removeClass('selc-3')
            $('.menuOptsDt').removeClass('activeGrade')
          },
          onEnd: (event, self) => {
            console.log('onEnd')
            self.removeClass('selc-3')
          },
          onStartDelay: 300,
          timeout: 1000,
          mouseEvents: true,
        });
      })();

}, 1000)
