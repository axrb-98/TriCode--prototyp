document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.kontakt-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        form.querySelectorAll('.error-message').forEach(el => el.remove());
        form.querySelectorAll('.form-group').forEach(el => el.classList.remove('error'));

        const fields = [
            { id: 'vorname', message: 'Bitte gib deinen Vornamen ein.' },
            { id: 'nachname', message: 'Bitte gib deinen Nachnamen ein.' },
            { id: 'email', message: 'Bitte gib eine gültige E-Mail-Adresse ein.', validate: value => /\S+@\S+\.\S+/.test(value) },
            { id: 'nachricht', message: 'Bitte gib eine Nachricht ein.' }
        ];

        fields.forEach(field => {
            const input = document.getElementById(field.id);
            const value = input.value.trim();
            const isFieldValid = field.validate ? field.validate(value) : value !== '';

            if (!isFieldValid) {
                isValid = false;
                const error = document.createElement('div');
                error.classList.add('error-message');
                error.textContent = field.message;
                input.closest('.form-group').appendChild(error);
                input.closest('.form-group').classList.add('error');
            }
        });

        if (isValid) {
            alert('Vielen Dank für deine Nachricht!');
            form.reset();
        }
    });
});
