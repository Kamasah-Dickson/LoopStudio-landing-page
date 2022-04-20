const closeMenu = document.querySelector('.close');
const openMenu = document.querySelector('.hamburger');
const naviGation = document.querySelector('.nav-links');
const li = document.querySelectorAll('li');

li.forEach(link => {
    link.addEventListener('click', ()=> {
        naviGation.classList.remove('open-nav');
    });
    
});


openMenu.addEventListener('click', () => {
    naviGation.classList.add('open-nav');
});

closeMenu.addEventListener('click', () => {
    naviGation.classList.remove('open-nav');
});

// links.forEach(link => {  
//     link.addEventListener('click',() => {
//         console.log('clicked');
//     });
// });

