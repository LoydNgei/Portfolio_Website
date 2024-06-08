// // index.js
// document.addEventListener("DOMContentLoaded", function () {
//     const navbar = document.querySelector('.navbar');
//     const menuIcon = document.querySelector('.menu-icon');

//     // Function to toggle the menu
//     function toggleMenu() {
//         console.log()
//         navbar.classList.toggle('show');
//     }

//     // Add click event listener to the menu icon
//     menuIcon.addEventListener('click', toggleMenu);
// });

// script.js
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
}

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar');
        navbar.classList.remove('show');
    });
});
