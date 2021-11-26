const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const intro_div = entry.target.querySelector('.intro_text');

        if (entry.isIntersecting) {
            intro_div.classList.add('intro_animation');
            return;
        }

        intro_div.classList.remove('intro_animation');
    });
});

observer.observe(document.querySelector('.parallax-intro'));