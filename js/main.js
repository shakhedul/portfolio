/*==================== CHANGE BACKGROUND HEADER ====================*/ 
// function scrollHeader(){
//     const nav = document.getElementById('header')
//     // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
//     if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
// }
// window.addEventListener('scroll', scrollHeader)


// Open mobile navication
let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times')
let mobileNav = document.querySelector('.mobile-nav')

hamberger.addEventListener('click', function(){
    mobileNav.classList.add('open');
});

times.addEventListener('click', function(){
     mobileNav.classList.remove('open');
});



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu  a[href*=' + sectionId).classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId).classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// ==================SHOW SCROLL TOP=================================
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll', scrollTop)

