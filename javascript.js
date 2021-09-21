// I know, this looks like sh*t, but when i did this, i was very new in js. Now i would use a loop

// sticky - desktop és mobile
window.onscroll = function() {
  let poz = window.scrollY;
  let desktopNav = document.querySelector('.desktop-navbar');
  let mobileNav = document.querySelector('#mobileNav');
  let desktopNavLink1 = document.querySelector('.desktop-nav-link-1');
  let desktopNavLink2 = document.querySelector('.desktop-nav-link-2');
  let desktopNavLink3 = document.querySelector('.desktop-nav-link-3');
  let desktopNavLink4 = document.querySelector('.desktop-nav-link-4');
  let desktopNavLink5 = document.querySelector('.desktop-nav-link-5');
  let desktopNavLink6 = document.querySelector('.desktop-nav-link-6');
  let desktopNavLink7 = document.querySelector('.desktop-nav-link-7');

  let mobileNavLink1 = document.querySelector('.mobile-nav-link-1');
  let mobileNavLink2 = document.querySelector('.mobile-nav-link-2');
  let mobileNavLink3 = document.querySelector('.mobile-nav-link-3');
  let mobileNavLink4 = document.querySelector('.mobile-nav-link-4');
  let mobileNavLink5 = document.querySelector('.mobile-nav-link-5');
  let mobileNavLink6 = document.querySelector('.mobile-nav-link-6');
  let mobileNavLink7 = document.querySelector('.mobile-nav-link-7');


  console.log(poz);
  if (poz > 65) {
    desktopNav.classList.add('sticky');
    mobileNav.classList.add('sticky-mobile-nav');
    desktopNavLink1.style.color = "black";
    desktopNavLink2.style.color = "black";
    desktopNavLink3.style.color = "black";
    desktopNavLink4.style.color = "black";
    desktopNavLink5.style.color = "black";
    desktopNavLink6.style.color = "black";
    desktopNavLink7.style.color = "black";

    mobileNavLink1.style.color = "black";
    mobileNavLink2.style.color = "black";
    mobileNavLink3.style.color = "black";
    mobileNavLink4.style.color = "black";
    mobileNavLink5.style.color = "black";
    mobileNavLink6.style.color = "black";
    mobileNavLink7.style.color = "black";


  } else {
    desktopNav.classList.remove('sticky');
    mobileNav.classList.remove('sticky-mobile-nav');
    desktopNavLink1.style.color = "white";
    desktopNavLink2.style.color = "white";
    desktopNavLink3.style.color = "white";
    desktopNavLink4.style.color = "white";
    desktopNavLink5.style.color = "white";
    desktopNavLink6.style.color = "white";
    desktopNavLink7.style.color = "white";

    mobileNavLink1.style.color = "white";
    mobileNavLink2.style.color = "white";
    mobileNavLink3.style.color = "white";
    mobileNavLink4.style.color = "white";
    mobileNavLink5.style.color = "white";
    mobileNavLink6.style.color = "white";
    mobileNavLink7.style.color = "white";
  }
}

// mobil menu open
    function ButtonBarToggle() {
      let mobilToggleButton = document.getElementById('menu-toggle');
      let mobileNav = document.getElementById('mobileNav');
      if (mobileNav.style.display === "none") {
        mobileNav.style.display = "block";
      } else {
        mobileNav.style.display = "none";
      }
    }




    // touch hover on little devices

    let i;
    for(i=1;i<7;i++){

      const servicesBoxes = document.getElementById('mobileHoverBox'+i);
   

      servicesBoxes.addEventListener('touchstart', function() {
        //servicesBoxes.classList.add('.services-icon');
        alert(22);
      });




    }
 
       
  
      














   
// let menuToggle = document.querySelector('.menu-toggle');
// let mainMenu = document.querySelector('.main-header > nav > main-menu');
// console.log(menuToggle, mainMenu);
// menuToggle.onclick = function() {
//   console.log(mainMenu.style.display);
//   if(mainMenu.style.display === '' || mainMenu.style.display === 'none' ) {
//     mainMenu.style.display = 'flex';
//   }else {
//     mainMenu.style.display = 'none';
//   }
// }


// // sticky - original for navbar
// window.onscroll = function() {
//   let poz = window.scrollY;
//   let desktopNav = document.querySelector('.desktop-navbar');
//   console.log(poz);
//   if (poz > 65) {
//     desktopNav.classList.add('sticky');
//   } else {
//     desktopNav.classList.remove('sticky');
//   }
// }
