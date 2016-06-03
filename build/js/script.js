(function() {

  // making header's height = tag video's height
  var header = document.querySelector('.main-header');  
  var video = document.querySelector('#video').getBoundingClientRect();

  header.setAttribute('style', 'height:' + video.height +('px'));

  var timer = null,
        interval = 300, 
        el = document.querySelector('#video');
        elHeight = el.offsetHeight;
   
  // timer = setInterval(
  //    function(event){
  //     console.log('hi')
  //       if( el.offsetHeight != elHeight ) {
   
  //         //Запомним текущую ширину
  //         elHeight = el.offsetHeight ;
   
  //         header.setAttribute('style', 'height:' + elHeight +('px'));

  //       };
  //    },interval 
  // );
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
})();
(function() {
  var content = document.querySelector('.loaded-content');
  var logo = document.querySelector('.logo--top');
  var headerSocial = document.querySelector('.header-social');
  var headerTitle = document.querySelector('.main-header__title');
  var lane = document.querySelector('.main-header__title-blue');
  var laneWidth = 0;
  var timer = null;

  timer = setInterval(function(event) {
    // if( window.innerWidth >= 1001) {
      if(content.style.opacity >= 1) {
        logo.style.opacity = 1;
        logo.style.transform = "translate(0,0)";
      }
      
      if (logo.style.opacity >= 1) {
          setTimeout(function() {
            headerSocial.style.opacity = 1;
            headerSocial.style.transform = "translate(0,0)";
        }, 300) 
      }
      if (headerSocial.style.opacity >= 1) {
          setTimeout(function() {
            headerTitle.style.opacity = 1;
            headerTitle.style.transform = "translate(0,0)";
        }, 300) 
      }
      if (headerTitle.style.opacity >= 1) {
        lane.style.opacity = 1;     
        lane.style.transform = 'translate(0,0)';
      }


      if(lane.style.transform >= 'translate(0,0)') {
        clearInterval(timer);
      }
    // }
  }, 100)
    
  


})();
(function() {
  if(!("FormData" in window)){
    return;
  }

  var form = document.querySelector('.form');
  var inputSubmit = document.querySelector('.input-submit');
  var submitSuccess = document.querySelector('.input-submit__success');


  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var data = new FormData(form);
    var xhr = new XMLHttpRequest;

    xhr.open('GET', 'HTTP://localhost:8080/build/php/send.php');  
    xhr.addEventListener("readystatechange", function(){
        if(xhr.readyState == 4){
          inputSubmit.style.backgroundColor = '#1BC2A6';  
          inputSubmit.setAttribute('value', 'Send another message');
          submitSuccess.classList.add('show'); 
        }
      }); 
    xhr.send(data);
    form.reset();    
  }) 
})();
