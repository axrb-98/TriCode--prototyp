// Funzione per attivare l'effetto quando la sezione è visibile
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.5
});

// Applica l'observer a ogni sezione
document.querySelectorAll('.leistung').forEach(section => {
    observer.observe(section);
});
