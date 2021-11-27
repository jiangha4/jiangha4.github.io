// When the user clicks on the button, scroll to the top of the document
function topOfPage() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Function to replay the intro animation when viewport is back on screen
const observer_intro = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const intro_div = entry.target.querySelector('.intro_text');

        if (entry.isIntersecting) {
            intro_div.classList.add('intro_animation');
            return;
        }

        intro_div.classList.remove('intro_animation');
    });
});

observer_intro.observe(document.querySelector('.parallax-intro'));




// Remove the transition class
const square = document.querySelectorAll('.card');
square.forEach(card => {
    card.classList.remove('card-transition');

    const observer_work = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                card.classList.add('card-transition');
                return;
            }

            card.classList.remove('card-transition');
        });
    });
    observer_work.observe(document.querySelector('.card_container'));
})