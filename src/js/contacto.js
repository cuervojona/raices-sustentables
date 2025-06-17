document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form.needs-validation');
    const mensaje = document.getElementById('mensaje');
    const charCount = document.getElementById('charCount');

    // Bootstrap validation only
    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);

    // Char count
    if (mensaje && charCount) {
        mensaje.addEventListener('input', function() {
            charCount.textContent = mensaje.value.length;
        });
        // Initialize on load
        charCount.textContent = mensaje.value.length;
    }
});