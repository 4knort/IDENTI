(function() {

  // making header's height = tag video's height
  var header = document.querySelector('.main-header');  
  var video = document.querySelector('#video').getBoundingClientRect();

  header.setAttribute('style', 'height:' + video.height +('px'));

  var timer = null,
        interval = 300, 
        el = document.querySelector('#video');
        elHeight = el.offsetHeight;
   

  header.setAttribute('style', 'height:' + elHeight +('px'));



  window.addEventListener('resize', function() {
    if( el.offsetHeight != elHeight ) {
   
          //Запомним текущую ширину
          elHeight = el.offsetHeight ;
   
          header.setAttribute('style', 'height:' + elHeight +('px'));

        };
  })

  // destroying placeholders on focus
  var inputs = document.querySelectorAll('input');
  var textareas = document.querySelectorAll('textarea');
  var placeholder;

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', function(event) { 
      var el = event.target;
      placeholder = el.getAttribute('placeholder') 
      el.setAttribute('placeholder', '');
    });

    inputs[i].addEventListener('blur', function(event) {
      var el = event.target;
      el.setAttribute('placeholder', placeholder)
    })



  }
  for (var i = 0; i < textareas.length; i++) {
    textareas[i].addEventListener('focus', function(event) { 
      var el = event.target; 
      placeholder = el.getAttribute('placeholder') 
      el.setAttribute('placeholder', '');
    })
    textareas[i].addEventListener('blur', function(event) {
      var el = event.target;
      el.setAttribute('placeholder', placeholder)
    })
  }


  //animation form
  var contacts = document.querySelector('.header-social__link--contact');

  contacts.addEventListener('click', function(event) {
    window.scrollY = 500;

  })

})();


(function ($) {
  $(document).ready(function() {
    $('.header-social__link--contact').on('click',  function(event) {
      event.preventDefault();

      var link = $(this).attr('href', '#contact-form');

      var top = $('#contact-form').offset().top;

      $('body,html').animate({scrollTop: top}, 2000);
    })
  })
})(jQuery);














