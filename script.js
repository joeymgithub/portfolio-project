document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector('.landing-nav');
    const links = nav.querySelectorAll('a');

    nav.addEventListener('click', function () {
        nav.classList.toggle('show-menu');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('show-menu'); // Close the menu when a link is clicked
        });
    });

    document.getElementById('confettiButton').addEventListener('click', function() {
        // Fire confetti
        confetti();
    });

    
});
