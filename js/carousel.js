function initCarousel() {
    const carousel = document.getElementById('testimonial-carousel');
    if (!carousel) return; // se il carosello non esiste ancora, esce

    const cards = Array.from(carousel.querySelectorAll('.snap-center'));
    if (cards.length === 0) return;

    let index = 0;

    function scrollToCard(i) {
        const card = cards[i];
        const scrollLeft = card.offsetLeft - (carousel.offsetWidth - card.offsetWidth) / 2;
        carousel.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
        });
    }

    setInterval(() => {
        index = (index + 1) % cards.length;
        scrollToCard(index);
    }, 5000);
}
