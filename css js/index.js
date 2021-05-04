let navIcon = document.querySelector('div.nav-icon')
let navLinks = document.querySelector('.nav-links')
let cancelIcon = document.querySelector('.cancel-menu')

navIcon.addEventListener('click', handleNavIcon)
cancelIcon.addEventListener('click', handleCancelIcon)

function handleNavIcon() {
      if(navLinks.classList.contains('nav-links')) {
          navLinks.classList.add('nav-links-mobile')
          navLinks.classList.remove('nav-links')
          navIcon.classList.add('nav-icon-hide')
      } else {
          navLinks.classList.add('nav-links')
    }
}

function handleCancelIcon() {
    navIcon.classList.add('nav-icon')
    navIcon.classList.remove('nav-icon-hide')
    navLinks.classList.remove('nav-links-mobile')
    navLinks.classList.add('nav-links')
}