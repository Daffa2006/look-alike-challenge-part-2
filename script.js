const toggleEyePass = document.querySelectorAll('.input__group .eye__icon');

toggleEyePass.forEach(function(eye){
    eye.addEventListener('click', function(e){
        console.log(e.target.previousElementSibling.getAttribute('type'));
        e.target.classList.toggle("hide__pass");
        e.target.classList.toggle("show__pass");
        
        if (e.target.previousElementSibling.getAttribute('type') == "password") {
            e.target.previousElementSibling.setAttribute('type','text')
            
          } else {
            e.target.previousElementSibling.setAttribute('type','password')
          }
    })
})

const usernameInput = document.querySelector('#username');
console.log(usernameInput)
const dialogBox = document.querySelector('.dialog__box');

usernameInput.addEventListener('keyup',function(){
  function delayPresence (){
    dialogBox.classList.add('dialog__box__presence');
    dialogBox.classList.add('fade__in');
  }
  setTimeout(delayPresence,1400);

  function moveAnimation() {
    dialogBox.classList.add("float");
  }
  setTimeout(moveAnimation,3400);
  
});

