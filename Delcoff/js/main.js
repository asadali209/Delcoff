// RESPONSIVE NAVBAR
const menuOpen = document.getElementById('menu-open'),
      menuClose = document.getElementById('menu-close'),
      nav = document.getElementById('navbar');

menuOpen.addEventListener('click', () =>{
  nav.classList.add('toggle');
});

menuClose.addEventListener('click', () =>{
  nav.classList.remove('toggle');
});

// NAVBAR LINKS ON CLICK EVENT
const navHome = document.getElementById('nav-home'),
      navAbout = document.getElementById('nav-about'),
      navProducts = document.getElementById('nav-products'),
      navContact = document.getElementById('nav-contact');

navHome.addEventListener('click', () =>{
  nav.classList.remove('toggle');
});
navAbout.addEventListener('click', () =>{
  nav.classList.remove('toggle');
});
navProducts.addEventListener('click', () =>{
  nav.classList.remove('toggle');
});
navContact.addEventListener('click', () =>{
  nav.classList.remove('toggle');
});

// STICKY NAVBAR
const navSticky = document.getElementById('main-nav');

window.addEventListener('scroll', () =>{
  if(window.pageYOffset > 70){
    navSticky.classList.add('nav-scroll');
  }
  else{
    navSticky.classList.remove('nav-scroll');
  }
});

// SCROLL TO TOP BUTTON
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () =>{
  if(window.pageYOffset > 300){
    scrollTopBtn.style.display = 'block';
  }
  else{
    scrollTopBtn.style.display = 'none'
  }
});

scrollTopBtn.addEventListener('click', () =>{
  window.scrollTo(0,0);
});