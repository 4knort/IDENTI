(function() {
  var content = document.querySelector('.loaded-content');
  var logo = document.querySelector('.logo--top');
  var headerSocial = document.querySelector('.header-social');
  var headerTitle = document.querySelector('.main-header__title');
  var lane = document.querySelector('.main-header__title-blue');
  var laneWidth = 0;
  var timer = null;

  timer = setInterval(function(event) {
    if(content.style.opacity >= 1) {
      logo.style.opacity = 1;
      logo.style.transform = "translateX(0)";
    }
    
    if (logo.style.opacity >= 1) {
        setTimeout(function() {
          headerSocial.style.opacity = 1;
          headerSocial.style.transform = "translateX(0)";
      }, 400) 
    }
    if (headerSocial.style.opacity >= 1) {
        setTimeout(function() {
          headerTitle.style.opacity = 1;
          headerTitle.style.transform = "translateY(0)";
      }, 400) 
    }
    if (headerTitle.style.opacity >= 1) {
      lane.style.opacity = 1;     
      lane.style.transform = 'translateX(0)';
    }


    if(lane.style.transform >= 'translateX(0)') {
      clearInterval(timer);
    }
  }, 100)
  


})();