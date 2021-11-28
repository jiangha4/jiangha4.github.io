function topOfPage() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function linkToGitHub(url){
    window.open(url, "_blank");
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

// Fade in for cards
const work_card = document.querySelectorAll('.work_card');
const project_card = document.querySelectorAll('.project_card');

function observeCards(cards, html_class){
    cards.forEach(card => {
        card.classList.remove('card-transition');

        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    card.classList.add('card-transition');
                    return;
                }

                card.classList.remove('card-transition');
            });
        });
        observer.observe(document.querySelector(html_class));
    })
}

observeCards(work_card, ".card_container")
observeCards(project_card, ".projects_container")