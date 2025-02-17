document.addEventListener("DOMContentLoaded", function () {
    const animatedTexts = document.querySelectorAll(".animated-text"); 

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("p-visible");
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.6 }); 

    animatedTexts.forEach(text => observer.observe(text));
});
