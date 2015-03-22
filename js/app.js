// Complete Florida Common Application

// Variables ----------

var btnMenu = document.getElementById('header-menu-btn');
var menu = document.getElementById('header-menu');
var menuState = false;


// Functions ----------

function menuToggle() {
	if (menuState == false) {
		menu.removeAttribute('class');
		menuState = true;
		}
	else {
		menu.setAttribute('class', 'disp-none');
		menuState = false;
		}
	}


// EventListeners ----------

btnMenu.addEventListener('click', menuToggle);


// Execute ----------

console.log('Complete Florida Common Application');
