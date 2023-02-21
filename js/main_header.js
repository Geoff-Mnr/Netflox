//selection de toute la navbar
const nav = document.querySelector('nav');

//quand l'événement scroll est activé des que le scroll est inférieur ou egale à 50px
//du coup ça active les propriété de la classe active_nav
window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        nav.classList.add('active_nav');
    } else {
        nav.classList.remove('active_nav');
    }
})