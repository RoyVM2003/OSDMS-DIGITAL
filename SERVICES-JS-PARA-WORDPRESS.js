/**
 * SERVICES - WordPress/Elementor (listo para Premium)
 * 1. Carrusel Industrias stack (una al frente, dos atrás)
 * 2. Pestañas Soluciones Integrales
 * 3. Ecosistema (línea animada)
 * Con plugin Premium: activar "Load as file" para evitar errores de inyección.
 * Inserción: solo página Servicios. Ubicación: Footer o After Post.
 */

(function() {
    'use strict';

    var industries = [
        { id: 1, name: "Servicios Profesionales", imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop", description: "Consultorías, asesorías y servicios especializados" },
        { id: 2, name: "Consultoría y Negocios", imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop", description: "Bufetes, consultorías legales y asesoría empresarial" },
        { id: 3, name: "Salud y Farmacia", imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop", description: "Hospitales, clínicas, farmacias y salud digital" },
        { id: 4, name: "Energía e Industrial", imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop", description: "Renovables, industria y gestión ambiental" },
        { id: 5, name: "Tecnología y Software", imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop", description: "Startups tech, desarrollo SaaS y soluciones digitales" },
        { id: 6, name: "Inmobiliario y Promoción", imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop", description: "Constructoras, inmobiliarias y desarrolladoras" }
    ];
    var placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect fill='%231a1a2e' width='600' height='400'/%3E%3Ctext fill='%236c63ff' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24'%3E%3F%3C/text%3E%3C/svg%3E";
    var industriesCurrentIndex = 0;
    var industriesTotalItems = 6;
    var industriesCardElements = [];
    var industriesAnimating = false;
    var orbitRadius = 360;

    function initIndustriesCarousel() {
        var container = document.getElementById('industriesContainer');
        if (!container || !container.closest('.industries-section.services-wp')) return;
        var existing = container.querySelectorAll('.industry-card-wrapper');
        if (existing.length > 0) {
            industriesCardElements = Array.from(existing).sort(function(cardA, cardB) { return parseInt(cardA.dataset.index, 10) - parseInt(cardB.dataset.index, 10); });
            industriesCardElements.forEach(function(cardWrapper, index) {
                var angle = (index * (360 / industriesTotalItems)) * (Math.PI / 180);
                var x = Math.cos(angle) * orbitRadius;
                var y = Math.sin(angle) * orbitRadius;
                cardWrapper.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
                cardWrapper.addEventListener('click', function() {
                    if (!industriesAnimating) goToIndustry(index);
                });
            });
        } else {
            industries.forEach(function(industry, index) {
                var angle = (index * (360 / industriesTotalItems)) * (Math.PI / 180);
                var x = Math.cos(angle) * orbitRadius;
                var y = Math.sin(angle) * orbitRadius;
                var cardWrapper = document.createElement('div');
                cardWrapper.className = 'industry-card-wrapper';
                cardWrapper.style.setProperty('--card-index', index);
                cardWrapper.dataset.index = index;
                cardWrapper.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
                var cardLarge = document.createElement('div');
                cardLarge.className = 'industry-card-large';
                var imgWrap = document.createElement('div');
                imgWrap.className = 'industry-image-large';
                var img = document.createElement('img');
                img.className = 'industry-card-img';
                img.alt = industry.name || '';
                img.setAttribute('src', industry.imageUrl);
                img.onerror = function() { this.style.display = 'none'; imgWrap.style.backgroundImage = 'url("' + placeholderImage.replace(/"/g, '%22') + '")'; };
                imgWrap.appendChild(img);
                var overlay = document.createElement('div');
                overlay.className = 'image-overlay';
                imgWrap.appendChild(overlay);
                var content = document.createElement('div');
                content.className = 'industry-content';
                var h3 = document.createElement('h3');
                h3.className = 'industry-name-large';
                h3.textContent = industry.name;
                var p = document.createElement('p');
                p.className = 'industry-description';
                p.textContent = industry.description;
                content.appendChild(h3);
                content.appendChild(p);
                cardLarge.appendChild(imgWrap);
                cardLarge.appendChild(content);
                cardWrapper.appendChild(cardLarge);
                cardWrapper.addEventListener('click', function() {
                    if (!industriesAnimating) goToIndustry(index);
                });
                container.appendChild(cardWrapper);
                industriesCardElements.push(cardWrapper);
            });
        }
        updateActiveIndustryCard();
    }

    function goToIndustry(index) {
        if (industriesAnimating || index === industriesCurrentIndex) return;
        industriesAnimating = true;
        industriesCurrentIndex = index;
        var targetAngle = -(index * (360 / industriesTotalItems));
        industriesCardElements.forEach(function(card, cardIndex) {
            var newAngle = (cardIndex * (360 / industriesTotalItems) + targetAngle) * (Math.PI / 180);
            var x = Math.cos(newAngle) * orbitRadius;
            var y = Math.sin(newAngle) * orbitRadius;
            card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        });
        updateActiveIndustryCard();
        updateIndustriesCounter();
        updateIndustriesPositionIndicators();
        setTimeout(function() { industriesAnimating = false; }, 800);
    }

    function updateActiveIndustryCard() {
        industriesCardElements.forEach(function(card, index) {
            var isActive = index === industriesCurrentIndex;
            var dist = Math.min(Math.abs(index - industriesCurrentIndex), industriesTotalItems - Math.abs(index - industriesCurrentIndex));
            if (isActive) {
                card.classList.add('active');
                card.style.zIndex = '100';
            } else {
                card.classList.remove('active');
                card.style.zIndex = String(20 + (6 - dist));
            }
            var scale = isActive ? 1.15 : (dist === 1 ? 1.05 : (dist === 2 ? 1.0 : 0.88));
            card.style.scale = scale;
        });
    }

    function updateIndustriesCounter() {
        var counter = document.getElementById('counterText');
        if (counter) counter.textContent = 'Industria ' + (industriesCurrentIndex + 1) + ' de ' + industriesTotalItems;
    }

    function updateIndustriesPositionIndicators() {
        document.querySelectorAll('.position-dot').forEach(function(dot, index) {
            if (index === industriesCurrentIndex) dot.classList.add('active');
            else dot.classList.remove('active');
        });
    }

    function createIndustriesParticles() {
        var container = document.getElementById('orbitParticles');
        if (!container) return;
        for (var i = 0; i < 80; i++) {
            var particle = document.createElement('div');
            particle.className = 'orbit-particle-large';
            particle.style.setProperty('--particle-index', i);
            container.appendChild(particle);
        }
    }

    function createIndustriesStars() {
        var container = document.getElementById('starField');
        if (!container) return;
        for (var i = 0; i < 150; i++) {
            var star = document.createElement('div');
            star.className = 'star';
            star.style.setProperty('--star-index', i);
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            container.appendChild(star);
        }
    }

    function createIndustriesLightRays() {
        var container = document.getElementById('lightRays');
        if (!container) return;
        for (var i = 0; i < 8; i++) {
            var ray = document.createElement('div');
            ray.className = 'light-ray';
            ray.style.setProperty('--ray-index', i);
            ray.style.transform = 'rotate(' + (i * 45) + 'deg)';
            container.appendChild(ray);
        }
    }

    function createIndustriesPositionIndicators() {
        var container = document.getElementById('positionIndicators');
        if (!container || container.querySelector('.position-dot')) return;
        for (var i = 0; i < industriesTotalItems; i++) {
            var dot = document.createElement('div');
            dot.className = 'position-dot';
            if (i === industriesCurrentIndex) dot.classList.add('active');
            dot.dataset.index = i;
            dot.addEventListener('click', function() {
                var idx = parseInt(this.dataset.index, 10);
                if (!industriesAnimating) goToIndustry(idx);
            });
            container.appendChild(dot);
        }
    }

    function initIndustriesMobile() {
        var mobileTrack = document.getElementById('industriesMobileTrack');
        var counterTextMobile = document.getElementById('counterTextMobile');
        var prevBtnMobile = document.getElementById('prevBtnMobile');
        var nextBtnMobile = document.getElementById('nextBtnMobile');
        var positionIndicatorsMobile = document.getElementById('positionIndicatorsMobile');
        if (!mobileTrack || !mobileTrack.closest('.industries-section.services-wp')) return;
        var mobileIndex = 0;
        industries.forEach(function(industry) {
            var card = document.createElement('div');
            card.className = 'industries-mobile-card';
            var inner = document.createElement('div');
            inner.className = 'industries-mobile-card-inner';
            var imgWrap = document.createElement('div');
            imgWrap.className = 'industries-mobile-card-img';
            var img = document.createElement('img');
            img.className = 'industry-mobile-img';
            img.alt = industry.name || '';
            img.setAttribute('src', industry.imageUrl);
            imgWrap.appendChild(img);
            var body = document.createElement('div');
            body.className = 'industries-mobile-card-body';
            var h3 = document.createElement('h3');
            h3.textContent = industry.name;
            var p = document.createElement('p');
            p.textContent = industry.description;
            body.appendChild(h3);
            body.appendChild(p);
            inner.appendChild(imgWrap);
            inner.appendChild(body);
            card.appendChild(inner);
            mobileTrack.appendChild(card);
        });
        for (var i = 0; i < industriesTotalItems; i++) {
            var dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'industries-mobile-dot';
            if (i === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', 'Ir a industria ' + (i + 1));
            dot.dataset.index = i;
            dot.addEventListener('click', function() {
                mobileIndex = parseInt(this.dataset.index, 10);
                mobileTrack.style.transform = 'translateX(-' + mobileIndex * 100 + '%)';
                positionIndicatorsMobile.querySelectorAll('.industries-mobile-dot').forEach(function(d, j) {
                    d.classList.toggle('active', j === mobileIndex);
                });
                if (counterTextMobile) counterTextMobile.textContent = 'Industria ' + (mobileIndex + 1) + ' de ' + industriesTotalItems;
            });
            positionIndicatorsMobile.appendChild(dot);
        }
        function goToMobileIndustry(offset) {
            mobileIndex = (mobileIndex + offset + industriesTotalItems) % industriesTotalItems;
            mobileTrack.style.transform = 'translateX(-' + mobileIndex * 100 + '%)';
            positionIndicatorsMobile.querySelectorAll('.industries-mobile-dot').forEach(function(d, i) {
                d.classList.toggle('active', i === mobileIndex);
            });
            if (counterTextMobile) counterTextMobile.textContent = 'Industria ' + (mobileIndex + 1) + ' de ' + industriesTotalItems;
        }
        if (prevBtnMobile) prevBtnMobile.addEventListener('click', function() { goToMobileIndustry(-1); });
        if (nextBtnMobile) nextBtnMobile.addEventListener('click', function() { goToMobileIndustry(1); });
        if (counterTextMobile) counterTextMobile.textContent = 'Industria 1 de ' + industriesTotalItems;
    }

    /* ----- Carrusel stack (una al frente, dos atrás) ----- */
    var stackCurrentIndex = 0;
    var stackTotal = 0;
    var stackCards = [];
    var stackDotsContainer = null;

    function updateStackCarouselPositions() {
        stackCards.forEach(function(card, i) {
            var idx = parseInt(card.getAttribute('data-index'), 10);
            card.classList.remove('stack-prev', 'stack-current', 'stack-next', 'stack-hidden');
            if (idx === stackCurrentIndex) card.classList.add('stack-current');
            else if (idx === (stackCurrentIndex - 1 + stackTotal) % stackTotal) card.classList.add('stack-prev');
            else if (idx === (stackCurrentIndex + 1) % stackTotal) card.classList.add('stack-next');
            else card.classList.add('stack-hidden');
        });
        if (stackDotsContainer) {
            stackDotsContainer.querySelectorAll('.stack-dot').forEach(function(dot, i) {
                dot.classList.toggle('active', i === stackCurrentIndex);
            });
        }
    }

    function initIndustriesStackCarousel() {
        var section = document.querySelector('.industries-stack-carousel');
        if (!section) return;
        var track = section.querySelector('.industries-stack-track');
        if (!track) return;
        stackCards = Array.from(section.querySelectorAll('.industry-stack-card')).sort(function(cardA, cardB) {
            return parseInt(cardA.getAttribute('data-index'), 10) - parseInt(cardB.getAttribute('data-index'), 10);
        });
        stackTotal = stackCards.length;
        if (stackTotal === 0) return;
        stackCurrentIndex = 0;
        stackDotsContainer = section.querySelector('.stack-carousel-dots');
        if (stackDotsContainer) {
            stackDotsContainer.innerHTML = '';
            for (var d = 0; d < stackTotal; d++) {
                var dot = document.createElement('button');
                dot.type = 'button';
                dot.className = 'stack-dot' + (d === 0 ? ' active' : '');
                dot.setAttribute('aria-label', 'Ir a industria ' + (d + 1));
                dot.dataset.index = d;
                dot.addEventListener('click', function() {
                    stackCurrentIndex = parseInt(this.dataset.index, 10);
                    updateStackCarouselPositions();
                });
                stackDotsContainer.appendChild(dot);
            }
        }
        updateStackCarouselPositions();
        var prevBtn = section.querySelector('.stack-prev');
        var nextBtn = section.querySelector('.stack-next');
        if (prevBtn) prevBtn.addEventListener('click', function() {
            stackCurrentIndex = (stackCurrentIndex - 1 + stackTotal) % stackTotal;
            updateStackCarouselPositions();
        });
        if (nextBtn) nextBtn.addEventListener('click', function() {
            stackCurrentIndex = (stackCurrentIndex + 1) % stackTotal;
            updateStackCarouselPositions();
        });
        stackCards.forEach(function(card) {
            card.addEventListener('click', function() {
                var idx = parseInt(card.getAttribute('data-index'), 10);
                if (idx !== stackCurrentIndex) {
                    stackCurrentIndex = idx;
                    updateStackCarouselPositions();
                }
            });
        });
        var autoAdvanceId = null;
        function startAutoAdvance() {
            if (autoAdvanceId) return;
            autoAdvanceId = setInterval(function() {
                stackCurrentIndex = (stackCurrentIndex + 1) % stackTotal;
                updateStackCarouselPositions();
            }, 5000);
        }
        function stopAutoAdvance() {
            if (autoAdvanceId) { clearInterval(autoAdvanceId); autoAdvanceId = null; }
        }
        startAutoAdvance();
        section.addEventListener('mouseenter', stopAutoAdvance);
        section.addEventListener('mouseleave', startAutoAdvance);
    }

    function initIndustries() {
        if (document.querySelector('.industries-stack-carousel')) {
            initIndustriesStackCarousel();
            return;
        }
        initIndustriesCarousel();
        createIndustriesParticles();
        createIndustriesStars();
        createIndustriesLightRays();
        createIndustriesPositionIndicators();
        initIndustriesMobile();
        updateIndustriesCounter();
        var prevBtn = document.getElementById('prevBtn');
        var nextBtn = document.getElementById('nextBtn');
        if (prevBtn) prevBtn.addEventListener('click', function() {
            if (!industriesAnimating) goToIndustry((industriesCurrentIndex - 1 + industriesTotalItems) % industriesTotalItems);
        });
        if (nextBtn) nextBtn.addEventListener('click', function() {
            if (!industriesAnimating) goToIndustry((industriesCurrentIndex + 1) % industriesTotalItems);
        });
    }

    function initEcoGlow() {
        var path = document.querySelector('.services-ecosystem .eco-path-glow') || document.querySelector('.portfolio-section .eco-path-glow') || document.querySelector('.eco-path-glow');
        if (!path || typeof path.getTotalLength !== 'function') return;
        path.style.animation = 'none';
        var length = path.getTotalLength();
        var segment = Math.min(80, length * 0.1);
        path.setAttribute('stroke-dasharray', segment + ' ' + (length - segment));
        var start = null;
        var duration = 4000;
        function step(timestamp) {
            if (!start) start = timestamp;
            var elapsed = (timestamp - start) % duration;
            var offset = -(elapsed / duration) * length;
            path.style.strokeDashoffset = offset + 'px';
            requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    function initTabs() {
        document.addEventListener('click', function(e) {
            var btn = e.target && (e.target.classList && e.target.classList.contains('tab-button')) ? e.target : (e.target.closest && e.target.closest('.tab-button'));
            if (!btn) return;
            var tabId = btn.getAttribute('data-tab');
            if (!tabId) return;
            var section = btn.closest && btn.closest('.tabs-system.services-wp');
            if (!section) return;
            var buttons = section.querySelectorAll('.tab-button');
            var contents = section.querySelectorAll('.tab-content');
            for (var i = 0; i < buttons.length; i++) buttons[i].classList.remove('active');
            for (var j = 0; j < contents.length; j++) {
                contents[j].classList.remove('active');
                if (contents[j].id === tabId) contents[j].classList.add('active');
            }
            btn.classList.add('active');
        });
    }

    var typewriterStarted = false;

    function initHeroTypewriter() {
        if (typewriterStarted) return;
        var typewriterEl = document.getElementById('hero-typewriter-text');
        var cursorEl = document.querySelector('.hero-typewriter-cursor');
        if (!typewriterEl || !typewriterEl.closest('.hero-section.services-wp')) return;
        typewriterStarted = true;
        var fullText = 'Transformamos Ideas en Resultados\nDigitales';
        var buffer = '';
        var index = 0;
        var speedMs = 85;
        var pauseBeforeDigitales = 350;

        function typeChar() {
            if (index >= fullText.length) {
                if (cursorEl) cursorEl.classList.add('hero-typewriter-cursor-done');
                return;
            }
            if (index === 23) {
                buffer += '<span class="highlight">Resultados</span>';
                index = 33;
            } else if (index === 33) {
                buffer += '<br>';
                index++;
            } else {
                buffer += fullText[index] === '\n' ? '<br>' : fullText[index];
                index++;
            }
            typewriterEl.innerHTML = buffer;
            var nextDelay = (index === 34) ? pauseBeforeDigitales : speedMs;
            window.setTimeout(typeChar, nextDelay);
        }
        window.setTimeout(typeChar, 500);
    }

    /**
     * Fondo cyberpunk (igual que "7 Transformación Digital Integral"): partículas, nodos y conexiones en canvas.
     * Si el HTML ya ejecutó el script inline (SERVICES_CYBER_BG_ACTIVE), no iniciar de nuevo.
     */
    function initCyberBackground() {
        if (window.SERVICES_CYBER_BG_ACTIVE) return;
        var canvas = document.getElementById('services-cyber-bg-canvas');
        if (!canvas) return;
        window.SERVICES_CYBER_BG_ACTIVE = true;
        var ctx = canvas.getContext('2d');
        var particles = [];
        var nodes = [];
        var connections = [];
        var animationId;
        var mouseX = 0, mouseY = 0;
        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function initCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];
            var particleCount = Math.min(200, Math.floor((canvas.width * canvas.height) / 8000));
            for (var i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 3 + 1,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    color: 'rgba(' + Math.floor(Math.random() * 100 + 100) + ', ' + Math.floor(Math.random() * 200 + 55) + ', 255, ' + (Math.random() * 0.4 + 0.1) + ')'
                });
            }
            nodes = [];
            var nodeCount = 30;
            for (var n = 0; n < nodeCount; n++) {
                nodes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 4 + 2,
                    connections: []
                });
            }
            connections = [];
            for (var i = 0; i < nodes.length; i++) {
                for (var j = i + 1; j < nodes.length; j++) {
                    var dx = nodes[i].x - nodes[j].x;
                    var dy = nodes[i].y - nodes[j].y;
                    var distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 200) {
                        connections.push({
                            node1: nodes[i],
                            node2: nodes[j],
                            opacity: 0.05 + (1 - distance / 200) * 0.2
                        });
                    }
                }
            }
        }

        function drawBackground() {
            var gradient = ctx.createRadialGradient(
                canvas.width * 0.8, canvas.height * 0.5, 0,
                canvas.width * 0.8, canvas.height * 0.5, Math.max(canvas.width, canvas.height) * 0.8
            );
            gradient.addColorStop(0, 'rgba(10, 10, 40, 0.1)');
            gradient.addColorStop(1, 'rgba(5, 5, 20, 0.9)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            connections.forEach(function(conn) {
                var dx = conn.node1.x - conn.node2.x;
                var dy = conn.node1.y - conn.node2.y;
                var distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 200) {
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgba(0, 200, 255, ' + conn.opacity + ')';
                    ctx.lineWidth = 0.8;
                    ctx.moveTo(conn.node1.x, conn.node1.y);
                    ctx.lineTo(conn.node2.x, conn.node2.y);
                    ctx.stroke();
                }
            });

            particles.forEach(function(particle) {
                ctx.beginPath();
                ctx.fillStyle = particle.color;
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
                var dx = mouseX - particle.x;
                var dy = mouseY - particle.y;
                var distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    var angle = Math.atan2(dy, dx);
                    var force = (100 - distance) / 100;
                    particle.x -= Math.cos(angle) * force * 2;
                    particle.y -= Math.sin(angle) * force * 2;
                }
            });

            nodes.forEach(function(node) {
                ctx.beginPath();
                ctx.fillStyle = 'rgba(0, 220, 255, 0.8)';
                ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
                ctx.fill();
                var glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 4);
                glow.addColorStop(0, 'rgba(0, 220, 255, 0.6)');
                glow.addColorStop(1, 'rgba(0, 220, 255, 0)');
                ctx.beginPath();
                ctx.fillStyle = glow;
                ctx.arc(node.x, node.y, node.size * 4, 0, Math.PI * 2);
                ctx.fill();
            });

            animationId = requestAnimationFrame(drawBackground);
        }

        initCanvas();
        drawBackground();
        window.addEventListener('resize', function() {
            cancelAnimationFrame(animationId);
            initCanvas();
            drawBackground();
        });
    }

    function init() {
        initCyberBackground();
        initTabs();
        initIndustries();
        initEcoGlow();
        initHeroTypewriter();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    setTimeout(function() { initTabs(); initIndustries(); initEcoGlow(); }, 800);

    window.OSDEMS_SERVICES_JS_LOADED = true;
})();
