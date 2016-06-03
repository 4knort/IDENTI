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
        inputSubmit.textContent = 'Send another message';  
        submitSuccess.classList.add('show'); 
      }
    }); 
  xhr.send(data);
  form.reset();    
}) 