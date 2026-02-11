/**
 * MANTTO WEB - WordPress/Elementor
 * - Semicírculos "¿Sabías que?": animación de relleno y número al entrar en vista.
 * Carga solo en la página Mantto Web.
 */

(function() {
    'use strict';

    var ARC_LENGTH = 125.7;

    function initSabiasQue() {
        var box = document.getElementById('mantto-sabias-box');
        if (!box) return;

        var stats = box.querySelectorAll('.mantto-stat');
        if (!stats.length) return;

        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (!entry.isIntersecting) return;
                box.classList.add('is-visible');
                stats.forEach(function(stat, index) {
                    var value = parseInt(stat.getAttribute('data-value'), 10) || 0;
                    var valueEl = stat.querySelector('.mantto-stat-value');
                    var offset = ARC_LENGTH * (1 - value / 100);

                    var delay = index * 180;
                    setTimeout(function() {
                        stat.style.setProperty('--mantto-fill-offset', String(offset));
                        animateValue(valueEl, 0, value, 900);
                    }, delay);
                });
                observer.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -80px 0px', threshold: 0.2 });

        observer.observe(box);
    }

    function animateValue(el, from, to, duration) {
        if (!el) return;
        var start = typeof performance !== 'undefined' ? performance.now() : Date.now();
        function step(now) {
            var elapsed = now - start;
            var t = Math.min(elapsed / duration, 1);
            t = 1 - Math.pow(1 - t, 2);
            var current = Math.round(from + (to - from) * t);
            el.textContent = current + '%';
            if (t < 1) requestAnimationFrame(step);
            else el.textContent = to + '%';
        }
        requestAnimationFrame(step);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSabiasQue);
    } else {
        initSabiasQue();
    }
})();
