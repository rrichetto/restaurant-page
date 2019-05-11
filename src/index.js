import { pageLoad } from './pageLoad.js';
import { contactLoad } from './contact.js';
import { menuLoad } from './menu.js';

pageLoad();


document.addEventListener('click', function(e) {
  if (e.target.classList.contains('home')) {
    pageLoad();
  }

  if (e.target.classList.contains('contact')) {
    contactLoad();
  }

  if (e.target.classList.contains('menu')) {
    menuLoad();
  }
});