/**
 * PREMIUM / CONTACTANOS - WordPress/Elementor
 * La página Premium es principalmente formulario + contacto.
 * En WordPress puedes: (1) Sustituir el form por shortcode de Contact Form 7 / WPForms,
 * o (2) cargar este JS solo en la página Premium y enlazar #premiumProForm a tu endpoint.
 * Si no usas este archivo, no hace falta cargarlo.
 */
(function() {
    'use strict';
    var form = document.getElementById('premiumProForm');
    if (!form) return;
    form.addEventListener('submit', function(ev) {
        /* Ejemplo: evitar envío por defecto y enviar por AJAX
        ev.preventDefault();
        var data = new FormData(form);
        fetch('/wp-admin/admin-ajax.php?action=premium_contact', { method: 'POST', body: data })
            .then(function(r) { return r.json(); })
            .then(function(res) { alert(res.ok ? 'Enviado.' : (res.message || 'Error')); })
            .catch(function() { alert('Error de conexión.'); });
        */
    });
})();
