const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu'); // Ensure the ID is correct.
const navList = document.querySelectorAll('.nav-list');
console.log(navList);
// Toggle mobile menu when clicking the menu button
menuBtn.addEventListener('click',()=>{
  mobileMenu.classList.toggle('hidden')
})
// Add event listener to each nav item

navList.forEach((items)=>{
  items.addEventListener('click',()=>{
    mobileMenu.classList.add('hidden')
  })
})
const autoTyped = document.getElementsByClassName('auto-type');

if (autoTyped.length > 0) { 
  // Only initialize Typed if there are elements with the class 'auto-type'
  new Typed(autoTyped[0], { 
    strings: ["programmer", "frontend developer", "web developer"], 
    typeSpeed: 70, 
    backSpeed: 50, 
    loop: true, 
    loopCount: Infinity 
  }); 
}

