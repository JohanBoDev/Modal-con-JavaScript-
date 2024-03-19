document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const emailInput = document.getElementById('emailInput');
    const modal = document.querySelector('.modal');
    const correoElement = document.querySelector('.correo');
    const cerrarModal = document.querySelector('.boton');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        const correoUsuario = emailInput.value.trim();
        if (correoUsuario !== '') {
            correoElement.textContent = correoUsuario;
            modal.classList.add('modal--show');
        }
    });

    cerrarModal.addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.remove('modal--show');
    });
});