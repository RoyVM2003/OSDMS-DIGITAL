/**
 * ABOUT US - Scripts para WordPress/Elementor
 * 1. Efecto máquina de escribir en el título del hero.
 * 2. Transición de color (gradiente animado) en título y frase final.
 * Carga este script en la página About Us (footer o con plugin de scripts).
 */

(function() {
    'use strict';

    var typewriterStarted = false;
    function initAnimatedBg() {
        var bg = document.getElementById('about-hero-bg');
        if (!bg) return;
        var gradients = [
            'linear-gradient(135deg, rgba(108, 99, 255, 0.7) 0%, rgba(54, 209, 220, 0.5) 100%)',
            'linear-gradient(135deg, rgba(255, 101, 132, 0.6) 0%, rgba(255, 154, 158, 0.4) 100%)',
            'linear-gradient(135deg, rgba(18, 24, 38, 0.9) 0%, rgba(108, 99, 255, 0.4) 100%)'
        ];
        for (var i = 0; i < 5; i++) {
            var blob = document.createElement('div');
            blob.className = 'gradient-blob';
            var size = Math.random() * 400 + 200;
            blob.style.width = size + 'px';
            blob.style.height = size + 'px';
            blob.style.left = (Math.random() * 100) + '%';
            blob.style.top = (Math.random() * 100) + '%';
            blob.style.background = gradients[i % gradients.length];
            blob.style.animationDelay = (Math.random() * 20) + 's';
            bg.appendChild(blob);
        }
        for (var j = 0; j < 15; j++) {
            var shape = document.createElement('div');
            shape.className = 'floating-shape';
            var size = Math.random() * 30 + 10;
            shape.style.width = size + 'px';
            shape.style.height = size + 'px';
            shape.style.left = (Math.random() * 100) + '%';
            shape.style.top = (Math.random() * 100) + '%';
            shape.style.borderRadius = Math.random() > 0.5 ? '50%' : '10%';
            shape.style.animationDelay = (Math.random() * 30) + 's';
            shape.style.animationDuration = (20 + Math.random() * 30) + 's';
            bg.appendChild(shape);
        }
    }

    function initTypewriter() {
        if (typewriterStarted) return true;
        var heroTitle = document.querySelector('.about-hero.about-us-wp .about-hero-title');
        if (!heroTitle) return false;
        var originalText = heroTitle.textContent.trim();
        if (!originalText) return false;
        typewriterStarted = true;
        var i = 0;
        function typeWriter() {
            var el = document.querySelector('.about-hero.about-us-wp .about-hero-title');
            if (!el) return;
            if (i < originalText.length) {
                el.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        setTimeout(function() {
            var el = document.querySelector('.about-hero.about-us-wp .about-hero-title');
            if (el) {
                el.textContent = '';
                el.style.visibility = 'visible';
            }
            setTimeout(typeWriter, 0);
        }, 1000);
        return true;
    }

    function initColorTransition() {
        var start = null;
        var duration = 6000;
        var durationHighlight = 4000;

        function run(timestamp) {
            if (!start) start = timestamp;
            var elapsed = (timestamp - start) % (duration * 2);
            var phase = elapsed < duration ? elapsed / duration : 2 - elapsed / duration;
            var pct = Math.round(phase * 100);

            var title = document.querySelector('.about-hero.about-us-wp .about-hero-title');
            if (title) title.style.backgroundPosition = pct + '% 50%';

            var elapsedH = (timestamp - start) % (durationHighlight * 2);
            var phaseH = elapsedH < durationHighlight ? elapsedH / durationHighlight : 2 - elapsedH / durationHighlight;
            var pctH = Math.round(phaseH * 100);
            var highlight = document.querySelector('.story-closing-section.about-us-wp .story-closing-highlight');
            if (highlight) highlight.style.backgroundPosition = pctH + '% 50%';

            requestAnimationFrame(run);
        }
        requestAnimationFrame(run);
    }

    function init() {
        initAnimatedBg();
        var tw = initTypewriter();
        initColorTransition();
        return tw;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            if (!init()) setTimeout(init, 500);
        });
    } else {
        if (!init()) setTimeout(init, 500);
    }

    // Reintento para Elementor (el widget HTML puede renderizarse después)
    setTimeout(init, 800);
    setTimeout(init, 2000);
})();
