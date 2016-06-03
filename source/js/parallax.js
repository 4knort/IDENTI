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