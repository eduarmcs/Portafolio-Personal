const ipad = window.matchMedia('screen and (max-width: 767px)')
const menu = document.querySelector('.menu');
/* console.log(menu); */
const burger_button = document.querySelector('#burger_menu');
/* console.log(burger_button); */

ipad.addListener(validation)


function validation(event){
  if(event.matches){
      burger_button.addEventListener('click', hide_show)
  }else{
      burger_button.removeEventListener('click', hide_show)
  }
}

validation(ipad);

function hide_show() {
  if (menu.classList.contains('is_active')) {
    menu.classList.remove('is_active');
  } else {
    menu.classList.add('is_active');
  }
}

