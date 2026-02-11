// =====================================================
// PREMIUM - Electrónica Industrial | OSDEMS Digital
// JavaScript para Carousel y Formulario
// =====================================================

(function() {
    'use strict';

    // === CAROUSEL FUNCTIONALITY ===
    class Carousel {
        constructor(container) {
            this.container = container;
            this.wrapper = container.querySelector('.carousel-wrapper');
            this.carousel = container.querySelector('.carousel');
            this.cards = container.querySelectorAll('.project-card');
            this.prevButton = container.querySelector('.carousel-prev');
            this.nextButton = container.querySelector('.carousel-next');
            this.indicatorsContainer = container.querySelector('.carousel-indicators');
            this.indicators = [];
            this.currentIndex = 0;
            this.cardWidth = 0;
            this.visibleCards = this.getVisibleCards();
            this.totalPages = Math.ceil(this.cards.length / this.visibleCards);
            
            this.init();
        }

        init() {
            this.buildIndicators();
            this.updateCardWidth();
            this.updateButtons();
            this.attachEventListeners();
            this.updateIndicators();
            
            // Recalcular cuando las imágenes hayan cargado (evita que el slide se desplace al cargar)
            var self = this;
            if (document.readyState === 'complete') {
                setTimeout(function() { self.refreshSlidePosition(); }, 100);
            } else {
                window.addEventListener('load', function() {
                    setTimeout(function() { self.refreshSlidePosition(); }, 100);
                });
            }
            
            // Actualizar en resize
            var self = this;
            window.addEventListener('resize', this.debounce(function() {
                self.visibleCards = self.getVisibleCards();
                self.totalPages = Math.ceil(self.cards.length / self.visibleCards);
                self.updateCardWidth();
                self.goToSlide(self.currentIndex);
            }, 250));
        }
        
        refreshSlidePosition() {
            this.updateCardWidth();
            this.goToSlide(this.currentIndex);
            this.updateIndicators();
        }

        buildIndicators() {
            if (!this.indicatorsContainer || this.totalPages <= 0) return;
            this.indicatorsContainer.innerHTML = '';
            this.indicators = [];
            for (var i = 0; i < this.totalPages; i++) {
                var btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'carousel-indicator' + (i === 0 ? ' active' : '');
                btn.setAttribute('role', 'tab');
                btn.setAttribute('aria-label', 'Ir a diapositiva ' + (i + 1));
                btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
                this.indicatorsContainer.appendChild(btn);
                this.indicators.push(btn);
            }
        }

        getVisibleCards() {
            return 1;
        }

        updateCardWidth() {
            // Usar el ancho del wrapper (contenedor visible) para que el cálculo no dependa de imágenes cargadas
            if (this.wrapper && this.wrapper.clientWidth > 0) {
                this.cardWidth = this.wrapper.clientWidth;
            } else if (this.cards.length > 0) {
                this.cardWidth = this.cards[0].offsetWidth;
            }
        }

        attachEventListeners() {
            if (this.prevButton) {
                this.prevButton.addEventListener('click', () => this.prev());
            }
            
            if (this.nextButton) {
                this.nextButton.addEventListener('click', () => this.next());
            }

            this.indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => this.goToSlide(index));
            });

            // Soporte para teclado
            this.container.addEventListener('keydown', (evt) => {
                if (evt.key === 'ArrowLeft') {
                    this.prev();
                } else if (evt.key === 'ArrowRight') {
                    this.next();
                }
            });

            // Soporte para touch/swipe
            let touchStartX = 0;
            let touchEndX = 0;

            this.carousel.addEventListener('touchstart', (evt) => {
                touchStartX = evt.changedTouches[0].screenX;
            }, { passive: true });

            this.carousel.addEventListener('touchend', (evt) => {
                touchEndX = evt.changedTouches[0].screenX;
                this.handleSwipe(touchStartX, touchEndX);
            }, { passive: true });
        }

        handleSwipe(startX, endX) {
            const threshold = 50;
            const diff = startX - endX;

            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
        }

        prev() {
            var nextIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.totalPages - 1;
            this.goToSlide(nextIndex);
        }

        next() {
            var nextIndex = this.currentIndex < this.totalPages - 1 ? this.currentIndex + 1 : 0;
            this.goToSlide(nextIndex);
        }

        goToSlide(index) {
            this.currentIndex = index;
            const offset = -this.currentIndex * this.cardWidth * this.visibleCards;
            this.carousel.style.transform = `translateX(${offset}px)`;
            
            this.updateButtons();
            this.updateIndicators();
        }

        updateButtons() {
            if (this.prevButton) {
                this.prevButton.disabled = false;
            }
            if (this.nextButton) {
                this.nextButton.disabled = false;
            }
        }

        updateIndicators() {
            this.indicators.forEach(function(indicator, index) {
                indicator.classList.toggle('active', index === this.currentIndex);
                indicator.setAttribute('aria-selected', index === this.currentIndex ? 'true' : 'false');
                indicator.setAttribute('aria-label', 'Ir a diapositiva ' + (index + 1));
            }.bind(this));
        }

        debounce(callback, wait) {
            let timeoutId;
            return function executedFunction(...restArgs) {
                const later = () => {
                    clearTimeout(timeoutId);
                    callback(...restArgs);
                };
                clearTimeout(timeoutId);
                timeoutId = setTimeout(later, wait);
            };
        }
    }

    // === FORM HANDLING ===
    class ContactForm {
        constructor(form) {
            this.form = form;
            this.init();
        }

        init() {
            this.form.addEventListener('submit', (evt) => this.handleSubmit(evt));
            
            // Validación en tiempo real
            const inputs = this.form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('blur', () => this.validateField(input));
            });
        }

        validateField(field) {
            const value = field.value.trim();
            let isValid = true;
            let errorMessage = '';

            // Validación según tipo de campo
            if (field.hasAttribute('required') && !value) {
                isValid = false;
                errorMessage = 'Este campo es obligatorio';
            } else if (field.type === 'email' && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Ingrese un email válido';
                }
            } else if (field.type === 'tel' && value) {
                const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
                if (!phoneRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Ingrese un teléfono válido';
                }
            }

            this.showFieldError(field, isValid, errorMessage);
            return isValid;
        }

        showFieldError(field, isValid, message) {
            // Remover error anterior
            const existingError = field.parentElement.querySelector('.field-error');
            if (existingError) {
                existingError.remove();
            }

            if (!isValid) {
                field.setAttribute('aria-invalid', 'true');
                field.style.borderColor = '#ff4444';
                
                const errorElement = document.createElement('span');
                errorElement.className = 'field-error';
                errorElement.textContent = message;
                errorElement.style.color = '#ff4444';
                errorElement.style.fontSize = '0.875rem';
                errorElement.style.marginTop = '0.25rem';
                errorElement.style.display = 'block';
                errorElement.setAttribute('role', 'alert');
                
                field.parentElement.appendChild(errorElement);
            } else {
                field.removeAttribute('aria-invalid');
                field.style.borderColor = '';
            }
        }

        async handleSubmit(evt) {
            evt.preventDefault();

            // Validar todos los campos
            const inputs = this.form.querySelectorAll('input, textarea, select');
            let isFormValid = true;

            inputs.forEach(input => {
                if (!this.validateField(input)) {
                    isFormValid = false;
                }
            });

            if (!isFormValid) {
                // Hacer focus en el primer campo inválido
                const firstInvalid = this.form.querySelector('[aria-invalid="true"]');
                if (firstInvalid) {
                    firstInvalid.focus();
                }
                return;
            }

            // Obtener datos del formulario
            const formData = new FormData(this.form);
            const data = Object.fromEntries(formData);

            // Mostrar loading
            const submitButton = this.form.querySelector('.submit-button');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;

            try {
                // Aquí puedes integrar con tu servicio de backend
                // Por ahora, simularemos el envío
                await this.simulateSubmit(data);

                // Éxito
                this.showSuccessMessage();
                this.form.reset();
                
            } catch (error) {
                // Error
                this.showErrorMessage(error.message);
            } finally {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        }

        simulateSubmit(data) {
            return new Promise((resolve) => {
                // Simular delay de red
                setTimeout(() => {
                    console.log('Formulario enviado:', data);
                    resolve();
                }, 1500);
            });
        }

        showSuccessMessage() {
            const message = document.createElement('div');
            message.className = 'form-message success';
            message.textContent = '¡Gracias! Hemos recibido tu mensaje. Te contactaremos pronto.';
            message.style.cssText = `
                background: rgba(0, 212, 255, 0.1);
                border: 1px solid #00d4ff;
                color: #00d4ff;
                padding: 1rem;
                border-radius: 0.5rem;
                margin-bottom: 1rem;
                text-align: center;
            `;
            message.setAttribute('role', 'status');
            message.setAttribute('aria-live', 'polite');

            this.form.insertBefore(message, this.form.firstChild);
            
            setTimeout(() => message.remove(), 5000);
        }

        showErrorMessage(errorText) {
            const message = document.createElement('div');
            message.className = 'form-message error';
            message.textContent = `Error: ${errorText}. Por favor, intenta nuevamente.`;
            message.style.cssText = `
                background: rgba(255, 68, 68, 0.1);
                border: 1px solid #ff4444;
                color: #ff4444;
                padding: 1rem;
                border-radius: 0.5rem;
                margin-bottom: 1rem;
                text-align: center;
            `;
            message.setAttribute('role', 'alert');

            this.form.insertBefore(message, this.form.firstChild);
            
            setTimeout(() => message.remove(), 5000);
        }
    }

    // === SMOOTH SCROLL FOR SKIP LINK ===
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (evt) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                evt.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Focus para accesibilidad
                    target.focus();
                    if (!target.hasAttribute('tabindex')) {
                        target.setAttribute('tabindex', '-1');
                    }
                }
            });
        });
    }

    // === LAZY LOADING IMAGES ===
    function initLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }
    }

    // === INITIALIZATION ===
    document.addEventListener('DOMContentLoaded', () => {
        // Inicializar carousel
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            new Carousel(carouselContainer);
        }

        // Inicializar formulario
        const contactForm = document.querySelector('#contact-form');
        if (contactForm) {
            new ContactForm(contactForm);
        }

        // Inicializar smooth scroll
        initSmoothScroll();

        // Inicializar lazy loading
        initLazyLoading();

        // Anunciar página cargada para lectores de pantalla
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = 'Página cargada completamente';
        document.body.appendChild(announcement);
    });

})();
