/**
 * AGENTIVAS + CONVERSIÓN WEB - Scripts para WordPress/Elementor
 * Incluye: Chatbot agentivo de servicios, tabs (Servicios/Beneficios/Tecnología), validación del formulario.
 * Carga este archivo en la página después del HTML (o pega su contenido en un widget HTML/Custom Code).
 * Requiere: Font Awesome para iconos. IDs: chatMessages, chatInput, sendButton, demoForm, name, email, message.
 */
(function() {
    'use strict';

    var servicesKnowledgeBase = {
        "desarrollo web": { description: "Creación de sitios web modernos, responsivos y optimizados para conversiones.", details: "Incluye: Diseño UI/UX personalizado, desarrollo frontend y backend, optimización SEO, integración de CMS (WordPress, Shopify).", pricing: "Desde $1,500 para landing pages, $3,000+ para sitios corporativos, $5,000+ para e-commerce.", timeframe: "2-4 semanas para sitios básicos, 4-8 semanas para proyectos complejos.", technologies: "HTML5, CSS3, JavaScript, React, Vue.js, WordPress, Shopify, Laravel, Node.js" },
        "wordpress development": { description: "Desarrollo personalizado con WordPress.", details: "Theme development personalizado, plugins a medida, optimización de rendimiento, seguridad avanzada.", pricing: "Desde $2,000 para sitios WordPress personalizados.", timeframe: "3-5 semanas.", benefits: "Fácil de actualizar, amplia comunidad, miles de plugins disponibles." },
        "e-commerce development": { description: "Tiendas online completas con carrito de compras, pasarelas de pago y gestión de inventario.", details: "Shopify, WooCommerce o soluciones personalizadas. Integración PayPal, Stripe, MercadoPago.", pricing: "Desde $3,500 para tiendas básicas, $7,000+ para marketplaces.", timeframe: "4-8 semanas.", features: "Carrito persistente, checkout optimizado, gestión de inventario." },
        "ui/ux design": { description: "Diseño de interfaces centrado en el usuario y experiencia óptima.", details: "Research de usuarios, wireframes, prototipos interactivos, design systems.", pricing: "Desde $1,500 para proyectos de diseño.", timeframe: "2-4 semanas." },
        "seo": { description: "Optimización para motores de búsqueda para aumentar visibilidad orgánica.", details: "Keyword research, optimización on-page, building de enlaces, SEO técnico, contenido optimizado.", pricing: "Desde $800/mes para SEO local, $1,500+/mes para SEO nacional.", timeframe: "Resultados visibles en 3-6 meses." },
        "ppc": { description: "Campañas de publicidad pagada en Google, Facebook, Instagram y LinkedIn.", details: "Setup completo de campañas, keyword research, creación de ads, landing pages optimizadas.", pricing: "Fee de gestión: 15-20% del presupuesto de ads + presupuesto de publicidad.", timeframe: "Resultados desde la primera semana.", platforms: "Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads." },
        "social media management": { description: "Gestión completa de redes sociales con contenido estratégico.", details: "Estrategia de contenido, calendarización, creación de posts, community management.", pricing: "Desde $600/mes para 2 redes sociales.", timeframe: "Contrato mínimo de 3 meses.", networks: "Instagram, Facebook, LinkedIn, Twitter, TikTok, Pinterest." },
        "app móvil": { description: "Desarrollo de aplicaciones nativas y cross-platform.", details: "iOS (Swift), Android (Kotlin), o cross-platform con React Native/Flutter.", pricing: "Desde $10,000 para apps básicas, $25,000+ para apps complejas.", timeframe: "3-6 meses." },
        "web app development": { description: "Aplicaciones web progresivas (PWA) y aplicaciones de una sola página (SPA).", details: "Desarrollo con React, Angular o Vue.js.", pricing: "Desde $8,000 para web apps básicas.", timeframe: "2-4 meses.", benefits: "No requiere instalación, actualizaciones automáticas, multiplataforma." },
        "branding": { description: "Desarrollo de identidad visual completa para marcas.", details: "Logo design, paleta de colores, tipografía, guías de estilo.", pricing: "Desde $2,500 para paquetes de branding básico.", timeframe: "3-5 semanas." },
        "video production": { description: "Producción de videos profesionales para marketing y comunicación.", details: "Videos corporativos, testimonios, explicativos animados, videos para redes sociales.", pricing: "Desde $1,500 para videos cortos, $5,000+ para producciones complejas.", timeframe: "2-6 semanas.", types: "Live action, animation, motion graphics, 3D animation." },
        "presupuesto": { response: "Los precios varían según el proyecto. Desarrollo web: desde $1,500. Apps: desde $10,000. Marketing digital: desde $600/mes. ¿Tienes un proyecto específico en mente?" },
        "tiempo entrega": { response: "Desarrollo web: 2-8 semanas. Apps: 3-6 meses. Diseño: 2-4 semanas. Marketing: resultados orgánicos en 3-6 meses, paid ads desde la primera semana." },
        "tecnologías": { response: "Usamos React, Vue.js, Node.js, Laravel, WordPress, Shopify, Flutter, React Native, y herramientas de IA como TensorFlow y OpenAI API para proyectos avanzados." },
        "garantía": { response: "Ofrecemos 30 días de garantía en desarrollo y soporte post-lanzamiento. Para marketing, revisiones mensuales y ajustes de estrategia según resultados." },
        "proceso": { response: "1. Consulta inicial 2. Propuesta y presupuesto 3. Firma de contrato 4. Fase de diseño/planning 5. Desarrollo/implementación 6. Testing 7. Lanzamiento 8. Soporte post-lanzamiento" }
    };
    var serviceCategories = { "desarrollo": ["web design", "wordpress", "e-commerce", "ui/ux", "cms", "shopify"], "marketing": ["seo", "ppc", "social media", "email marketing", "content", "geo"], "apps": ["web app", "mobile app", "react", "node", "laravel", "ai", "blockchain"], "diseño": ["branding", "logo", "design", "creative"], "video": ["video production", "animation", "photography", "3d", "streaming"] };

    var chatMessages = document.getElementById('chatMessages');
    var chatInput = document.getElementById('chatInput');
    var sendButton = document.getElementById('sendButton');

    if (!chatMessages || !chatInput || !sendButton) return;

    function formatearRespuesta(servicio, data) {
        var r = '<strong>' + servicio.toUpperCase() + '</strong><br><br>';
        r += '<strong>Descripción:</strong> ' + (data.description || data.response) + '<br><br>';
        if (data.details) r += '<strong>Detalles:</strong> ' + data.details + '<br><br>';
        if (data.pricing) r += '<strong>Inversión estimada:</strong> ' + data.pricing + '<br><br>';
        if (data.timeframe) r += '<strong>Tiempo estimado:</strong> ' + data.timeframe + '<br><br>';
        if (data.technologies || data.features) r += '<strong>Tecnologías/Características:</strong> ' + (data.technologies || data.features) + '<br><br>';
        if (data.benefits) r += '<strong>Beneficios:</strong> ' + data.benefits + '<br><br>';
        r += '<em style="font-size:0.9em;opacity:0.9;">¿Te gustaría saber más sobre algún aspecto específico o preguntar sobre otro servicio?</em>';
        return r;
    }

    function buscarRespuesta(pregunta) {
        var q = pregunta.toLowerCase(), mejorMatch = null, mejorPuntaje = 0, keyword, data, palabras, i, puntaje, cat, j, k;
        for (keyword in servicesKnowledgeBase) {
            if (q.indexOf(keyword) !== -1) return formatearRespuesta(keyword, servicesKnowledgeBase[keyword]);
            data = servicesKnowledgeBase[keyword];
            palabras = q.split(' ');
            puntaje = 0;
            for (i = 0; i < palabras.length; i++) {
                if (palabras[i].length > 3 && keyword.indexOf(palabras[i]) !== -1) puntaje += 2;
                if (data.description && data.description.toLowerCase().indexOf(palabras[i]) !== -1) puntaje += 1;
            }
            if (puntaje > mejorPuntaje) { mejorPuntaje = puntaje; mejorMatch = keyword; }
        }
        for (cat in serviceCategories) {
            for (j = 0; j < serviceCategories[cat].length; j++) {
                if (q.indexOf(serviceCategories[cat][j]) !== -1) {
                    for (k in servicesKnowledgeBase) {
                        if (k.indexOf(serviceCategories[cat][j]) !== -1 || serviceCategories[cat][j].indexOf(k) !== -1)
                            return formatearRespuesta(k, servicesKnowledgeBase[k]);
                    }
                }
            }
        }
        if (mejorPuntaje >= 2 && mejorMatch) return formatearRespuesta(mejorMatch, servicesKnowledgeBase[mejorMatch]);
        return 'Entiendo que tienes dudas sobre "' + pregunta + '". Como asistente de OSDEMS Digital, puedo ayudarte con <strong>Desarrollo Web</strong>, <strong>Marketing Digital</strong>, <strong>App Development</strong>, <strong>Diseño &amp; Branding</strong>, <strong>Foto &amp; Video</strong>. ¿Podrías especificar qué servicio te interesa?';
    }

    function procesarPregunta(pregunta) {
        var typing = document.createElement('div');
        typing.className = 'exp-message exp-message-system';
        typing.innerHTML = '<i class="fas fa-cog fa-spin"></i> El asistente está buscando información sobre "' + pregunta + '"...';
        chatMessages.appendChild(typing);
        setTimeout(function() {
            typing.remove();
            var botMsg = document.createElement('div');
            botMsg.className = 'exp-message exp-message-bot';
            botMsg.innerHTML = buscarRespuesta(pregunta);
            chatMessages.appendChild(botMsg);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            setTimeout(function() {
                var sug = document.createElement('div');
                sug.className = 'exp-message exp-message-system';
                sug.innerHTML = '<i class="fas fa-lightbulb"></i> <strong>También podrías preguntar:</strong> ¿Cuál es el proceso de trabajo? ¿Ofrecen mantenimiento? ¿Tienen casos de estudio?';
                chatMessages.appendChild(sug);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 500);
        }, 1500 + Math.random() * 800);
    }

    function enviarMensaje() {
        var texto = (chatInput.value || '').trim();
        if (!texto) return;
        var userMsg = document.createElement('div');
        userMsg.className = 'exp-message exp-message-user';
        userMsg.textContent = texto;
        chatMessages.appendChild(userMsg);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
        procesarPregunta(texto);
    }

    sendButton.addEventListener('click', enviarMensaje);
    chatInput.addEventListener('keypress', function(e) { if (e.key === 'Enter') enviarMensaje(); });

    document.querySelectorAll('.exp-suggestion-chip').forEach(function(chip) {
        chip.addEventListener('click', function() {
            chatInput.value = this.getAttribute('data-question') || '';
            enviarMensaje();
        });
    });

    document.querySelectorAll('.exp-tab-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var tabId = this.getAttribute('data-tab');
            document.querySelectorAll('.exp-tab-btn').forEach(function(b) { b.classList.remove('active'); });
            document.querySelectorAll('.exp-tab-content').forEach(function(c) { c.classList.remove('active'); });
            this.classList.add('active');
            var content = document.getElementById(tabId + 'Tab');
            if (content) content.classList.add('active');
        });
    });

    var ejemplos = ["¿Cuánto cuesta una página web?", "¿Qué incluye un servicio de SEO completo?", "¿Desarrollan apps móviles?", "¿Cuánto tiempo toma crear un e-commerce?"];
    var idx = 0;
    function actualizarPlaceholder() {
        chatInput.placeholder = (window.innerWidth <= 768 ? ('Ej: ' + ejemplos[idx]) : ('Ejemplo: "' + ejemplos[idx] + '"'));
    }
    setInterval(function() { idx = (idx + 1) % ejemplos.length; actualizarPlaceholder(); }, 5000);
    actualizarPlaceholder();

    setTimeout(function() {
        if (chatMessages.children.length <= 2) {
            var ex = document.createElement('div');
            ex.className = 'exp-message exp-message-system';
            ex.innerHTML = '<i class="fas fa-comment-alt"></i> <strong>Prueba el chatbot:</strong> Pregunta "¿Cuánto cuesta desarrollar una app móvil?" o haz clic en cualquier chip.';
            chatMessages.appendChild(ex);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }, 3000);
})();

(function() {
    'use strict';
    var form = document.getElementById('demoForm');
    if (!form) return;
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');

    function setFeedback(id, msg, ok) {
        var el = document.getElementById(id + '-feedback');
        if (el) { el.textContent = msg; el.style.color = ok ? 'var(--accent-color)' : '#ff4757'; }
    }

    if (nameInput) nameInput.addEventListener('input', function() {
        setFeedback('name', this.value.length < 2 ? 'Mínimo 2 caracteres' : '✓ Válido', this.value.length >= 2);
    });
    if (emailInput) emailInput.addEventListener('input', function() {
        var ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value);
        setFeedback('email', ok ? '✓ Formato válido' : 'Email válido requerido', ok);
    });
    if (messageInput) messageInput.addEventListener('input', function() {
        var ok = this.value.length >= 10 && this.value.length <= 500;
        setFeedback('message', this.value.length < 10 ? 'Mínimo 10 caracteres' : this.value.length > 500 ? 'Máximo 500' : '✓', ok);
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Gracias por tu interés. Te contactaremos pronto. (Demo: formulario no envía a servidor.)');
    });
})();
