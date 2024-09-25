const password_icon = document.querySelector('.password_icon');

password_icon.addEventListener('click', function(){
  if(password_icon.classList.contains('on')){
    password_icon.classList.remove('on');
  }else{
    password_icon.classList.add('on');
  };
});