(function() {
  var header = document.querySelector(".main-header");  
  var video = document.querySelector('#video').getBoundingClientRect();

  header.setAttribute("style", "height:" + video.height +('px'));

  var timer = null,
        interval = 300, 
        el = document.querySelector('#video');
        elHeight = el.offsetHeight;
   
  timer = setInterval(
     function(){
        if( el.offsetHeight != elHeight ) {
   
          //Запомним текущую ширину
          elHeight = el.offsetHeight ;
   
          header.setAttribute("style", "height:" + elHeight +('px'));
        };
     },interval 
  );
})();