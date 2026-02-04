// JS principal de la nueva página unificada
// Manejo de mega menús de Services e Industries

document.addEventListener("DOMContentLoaded", () => {
    console.log("OSDEMS Digital - nueva página unificada lista.");
    
    // ==================== MEGA MENÚS ====================
    const servicesBtn = document.getElementById('servicesBtn');
    const industriesBtn = document.getElementById('industriesBtn');
    const servicesMegaMenu = document.getElementById('servicesMegaMenu');
    const industriesMegaMenu = document.getElementById('industriesMegaMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    
    if (!servicesBtn || !industriesBtn || !servicesMegaMenu || !industriesMegaMenu || !menuOverlay) {
        console.warn("Algunos elementos del menú no se encontraron");
        return;
    }

    const servicesDropdown = servicesBtn.closest('.services-dropdown');
    const industriesDropdown = industriesBtn.closest('.industries-dropdown');
    let servicesCloseTimer = null;
    let industriesCloseTimer = null;
    
    // Función para cerrar todos los mega menús
    function closeAllMegaMenus() {
        servicesBtn.classList.remove('active');
        industriesBtn.classList.remove('active');
        servicesMegaMenu.classList.remove('active');
        industriesMegaMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
    }
    
    // Services: hover = mostrar mega-menú; clic = ir a services.html (sin retraso)
    if (servicesDropdown) {
        servicesDropdown.addEventListener('mouseenter', () => {
            if (servicesCloseTimer) {
                clearTimeout(servicesCloseTimer);
                servicesCloseTimer = null;
            }
            if (industriesMegaMenu.classList.contains('active')) {
                closeAllMegaMenus();
                setTimeout(openServicesMenu, 50);
            } else {
                openServicesMenu();
            }
        });
        servicesDropdown.addEventListener('mouseleave', (e) => {
            // Pequeño retraso para no cerrar al mover el ratón hacia el menú (hay hueco entre botón y menú)
            servicesCloseTimer = setTimeout(() => {
                servicesBtn.classList.remove('active');
                servicesMegaMenu.classList.remove('active');
                menuOverlay.classList.remove('active');
                servicesCloseTimer = null;
            }, 180);
        });
        // Mantener abierto si el ratón entra en el mega-menú (está en otro lugar del DOM pero es parte de Services)
        servicesMegaMenu.addEventListener('mouseenter', () => {
            if (servicesCloseTimer) {
                clearTimeout(servicesCloseTimer);
                servicesCloseTimer = null;
            }
        });
        servicesMegaMenu.addEventListener('mouseleave', () => {
            servicesCloseTimer = setTimeout(() => {
                servicesBtn.classList.remove('active');
                servicesMegaMenu.classList.remove('active');
                menuOverlay.classList.remove('active');
                servicesCloseTimer = null;
            }, 150);
        });
    }
    function openServicesMenu() {
        servicesBtn.classList.add('active');
        servicesMegaMenu.classList.add('active');
        menuOverlay.classList.add('active');
    }
    
    function openIndustriesMenu() {
        industriesBtn.classList.add('active');
        industriesMegaMenu.classList.add('active');
        menuOverlay.classList.add('active');
    }
    
    // Industries: hover = mostrar mega-menú (igual que Services)
    if (industriesDropdown) {
        industriesDropdown.addEventListener('mouseenter', () => {
            if (industriesCloseTimer) {
                clearTimeout(industriesCloseTimer);
                industriesCloseTimer = null;
            }
            if (servicesMegaMenu.classList.contains('active')) {
                closeAllMegaMenus();
                setTimeout(openIndustriesMenu, 50);
            } else {
                openIndustriesMenu();
            }
        });
        industriesDropdown.addEventListener('mouseleave', () => {
            industriesCloseTimer = setTimeout(() => {
                industriesBtn.classList.remove('active');
                industriesMegaMenu.classList.remove('active');
                menuOverlay.classList.remove('active');
                industriesCloseTimer = null;
            }, 180);
        });
        industriesMegaMenu.addEventListener('mouseenter', () => {
            if (industriesCloseTimer) {
                clearTimeout(industriesCloseTimer);
                industriesCloseTimer = null;
            }
        });
        industriesMegaMenu.addEventListener('mouseleave', () => {
            industriesCloseTimer = setTimeout(() => {
                industriesBtn.classList.remove('active');
                industriesMegaMenu.classList.remove('active');
                menuOverlay.classList.remove('active');
                industriesCloseTimer = null;
            }, 150);
        });
    }
    
    // Clic en Industries: ir a la página si es enlace, o abrir menú (para móvil/touch)
    industriesBtn.addEventListener('click', (e) => {
        if (window.matchMedia('(max-width: 992px)').matches) {
            e.preventDefault();
            var isServices = /services\.html$/i.test(window.location.pathname);
            window.location.href = isServices ? 'services.html#industrias-services' : 'index.html#industrias-home';
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (window.matchMedia('(hover: none)').matches) {
            industriesBtn.classList.toggle('active');
            industriesMegaMenu.classList.toggle('active');
            menuOverlay.classList.toggle('active');
        }
    });
    
    // Cerrar mega menús al hacer clic en overlay
    menuOverlay.addEventListener('click', () => {
        closeAllMegaMenus();
        document.body.classList.remove('nav-open');
    });

    // Menú hamburguesa (móvil): tres rayas → abrir/cerrar lista
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            document.body.classList.toggle('nav-open');
            if (document.body.classList.contains('nav-open')) {
                menuOverlay.classList.add('active');
            } else {
                menuOverlay.classList.remove('active');
            }
        });
        mainNav.querySelectorAll('a[href]').forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('nav-open');
                menuOverlay.classList.remove('active');
            });
        });
    }
    
    // Cerrar mega menús al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!servicesMegaMenu.contains(e.target) && !servicesBtn.contains(e.target) &&
            !industriesMegaMenu.contains(e.target) && !industriesBtn.contains(e.target)) {
            closeAllMegaMenus();
        }
    });
    
    // Cerrar menús con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllMegaMenus();
        }
    });
    
    // Cerrar menús al hacer clic en enlaces del mega menú
    document.querySelectorAll('.mega-menu-category a').forEach(link => {
        link.addEventListener('click', () => {
            closeAllMegaMenus();
        });
    });

    // ==================== CARRUSEL INDUSTRIAS (solo en Home) ====================
    const industriesContainer = document.getElementById('industriesContainer');
    if (industriesContainer) {
        const industries = [
            { id: 1, name: "Servicios Profesionales", imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop", description: "Consultorías, asesorías y servicios especializados" },
            { id: 2, name: "Consultoría y Negocios", imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop", description: "Bufetes, consultorías legales y asesoría empresarial" },
            { id: 3, name: "Salud y Farmacia", imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop", description: "Hospitales, clínicas, farmacias y salud digital" },
            { id: 4, name: "Energía e Industrial", imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop", description: "Renovables, industria y gestión ambiental" },
            { id: 5, name: "Tecnología y Software", imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop", description: "Startups tech, desarrollo SaaS y soluciones digitales" },
            { id: 6, name: "Inmobiliario y Promoción", imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop", description: "Constructoras, inmobiliarias y desarrolladoras" }
        ];
        const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect fill='%231a1a2e' width='600' height='400'/%3E%3Ctext fill='%236c63ff' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24'%3E%3F%3C/text%3E%3C/svg%3E";
        let industriesCurrentIndex = 0;
        const industriesTotalItems = industries.length;
        let industriesCardElements = [];
        let industriesAnimating = false;
        let industriesAutoRotateInterval = null;
        let industriesAutoRotateEnabled = true;
        const orbitRadius = 360;

        function initIndustriesCarousel() {
            industries.forEach((industry, index) => {
                const angle = (index * (360 / industriesTotalItems)) * (Math.PI / 180);
                const x = Math.cos(angle) * orbitRadius;
                const y = Math.sin(angle) * orbitRadius;
                const cardWrapper = document.createElement('div');
                cardWrapper.className = 'industry-card-wrapper';
                cardWrapper.style.setProperty('--card-index', index);
                cardWrapper.dataset.index = index;
                cardWrapper.style.transform = `translate(${x}px, ${y}px)`;
                cardWrapper.innerHTML = `
                    <div class="industry-card-large">
                        <div class="industry-image-large" style="background-image: url('${industry.imageUrl}')">
                            <div class="image-overlay"></div>
                        </div>
                        <div class="industry-content">
                            <h3 class="industry-name-large">${industry.name}</h3>
                            <p class="industry-description">${industry.description}</p>
                        </div>
                    </div>
                `;
                cardWrapper.addEventListener('click', () => {
                    if (!industriesAnimating) goToIndustry(index);
                });
                industriesContainer.appendChild(cardWrapper);
                industriesCardElements.push(cardWrapper);
                // Si la imagen falla al cargar, mostrar placeholder
                const imgDiv = cardWrapper.querySelector('.industry-image-large');
                const imgTest = new Image();
                imgTest.onerror = () => {
                    if (imgDiv) imgDiv.style.backgroundImage = `url('${placeholderImage}')`;
                };
                imgTest.src = industry.imageUrl;
            });
            updateActiveIndustryCard();
        }

        function createIndustriesParticles() {
            const container = document.getElementById('orbitParticles');
            if (!container) return;
            for (let i = 0; i < 80; i++) {
                const particle = document.createElement('div');
                particle.className = 'orbit-particle-large';
                particle.style.setProperty('--particle-index', i);
                container.appendChild(particle);
            }
        }

        function createIndustriesStars() {
            const container = document.getElementById('starField');
            if (!container) return;
            for (let i = 0; i < 150; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.setProperty('--star-index', i);
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                container.appendChild(star);
            }
        }

        function createIndustriesLightRays() {
            const container = document.getElementById('lightRays');
            if (!container) return;
            for (let i = 0; i < 8; i++) {
                const ray = document.createElement('div');
                ray.className = 'light-ray';
                ray.style.setProperty('--ray-index', i);
                ray.style.transform = `rotate(${i * 45}deg)`;
                container.appendChild(ray);
            }
        }

        function createIndustriesPositionIndicators() {
            const container = document.getElementById('positionIndicators');
            if (!container) return;
            for (let i = 0; i < industriesTotalItems; i++) {
                const dot = document.createElement('div');
                dot.className = 'position-dot';
                if (i === industriesCurrentIndex) dot.classList.add('active');
                dot.dataset.index = i;
                dot.addEventListener('click', () => {
                    if (!industriesAnimating) goToIndustry(i);
                });
                container.appendChild(dot);
            }
        }

        function goToIndustry(index) {
            if (industriesAnimating || index === industriesCurrentIndex) return;
            industriesAnimating = true;
            industriesCurrentIndex = index;
            const targetAngle = -(index * (360 / industriesTotalItems));
            industriesCardElements.forEach((card, cardIndex) => {
                const newAngle = (cardIndex * (360 / industriesTotalItems) + targetAngle) * (Math.PI / 180);
                const x = Math.cos(newAngle) * orbitRadius;
                const y = Math.sin(newAngle) * orbitRadius;
                card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.transform = `translate(${x}px, ${y}px)`;
            });
            updateActiveIndustryCard();
            updateIndustriesCounter();
            updateIndustriesPositionIndicators();
            setTimeout(() => { industriesAnimating = false; }, 800);
            pauseIndustriesAutoRotation(3000);
        }

        function updateActiveIndustryCard() {
            industriesCardElements.forEach((card, index) => {
                const isActive = index === industriesCurrentIndex;
                const dist = Math.min(Math.abs(index - industriesCurrentIndex), industriesTotalItems - Math.abs(index - industriesCurrentIndex));
                if (isActive) {
                    card.classList.add('active');
                    card.style.zIndex = '100';
                } else {
                    card.classList.remove('active');
                    card.style.zIndex = String(20 + (6 - dist));
                }
                const scale = isActive ? 1.15 : (dist === 1 ? 1.05 : (dist === 2 ? 1.0 : 0.88));
                card.style.scale = scale;
            });
        }

        function updateIndustriesCounter() {
            const counter = document.getElementById('counterText');
            if (counter) counter.textContent = `Industria ${industriesCurrentIndex + 1} de ${industriesTotalItems}`;
            const el = document.querySelector('.industry-counter-large');
            if (el) { el.style.transform = 'scale(1.1)'; setTimeout(() => { el.style.transform = 'scale(1)'; }, 300); }
        }

        function updateIndustriesPositionIndicators() {
            document.querySelectorAll('.position-dot').forEach((dot, index) => {
                if (index === industriesCurrentIndex) dot.classList.add('active');
                else dot.classList.remove('active');
            });
        }

        function startIndustriesAutoRotation() {
            if (industriesAutoRotateInterval) clearInterval(industriesAutoRotateInterval);
            industriesAutoRotateInterval = setInterval(() => {
                if (industriesAutoRotateEnabled && !industriesAnimating) {
                    goToIndustry((industriesCurrentIndex + 1) % industriesTotalItems);
                }
            }, 4000);
        }

        function pauseIndustriesAutoRotation(duration) {
            industriesAutoRotateEnabled = false;
            if (industriesAutoRotateInterval) clearInterval(industriesAutoRotateInterval);
            setTimeout(() => {
                industriesAutoRotateEnabled = true;
                startIndustriesAutoRotation();
            }, duration);
        }

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        if (prevBtn) prevBtn.addEventListener('click', () => {
            if (!industriesAnimating) goToIndustry((industriesCurrentIndex - 1 + industriesTotalItems) % industriesTotalItems);
        });
        if (nextBtn) nextBtn.addEventListener('click', () => {
            if (!industriesAnimating) goToIndustry((industriesCurrentIndex + 1) % industriesTotalItems);
        });

        document.addEventListener('keydown', (e) => {
            if (!industriesContainer || industriesAnimating) return;
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                goToIndustry((industriesCurrentIndex - 1 + industriesTotalItems) % industriesTotalItems);
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                goToIndustry((industriesCurrentIndex + 1) % industriesTotalItems);
            }
        });

        const carouselEl = document.querySelector('.carousel-container');
        if (carouselEl) {
            carouselEl.addEventListener('mouseenter', () => { industriesAutoRotateEnabled = false; });
            carouselEl.addEventListener('mouseleave', () => { industriesAutoRotateEnabled = true; });
        }

        initIndustriesCarousel();
        createIndustriesParticles();
        createIndustriesStars();
        createIndustriesLightRays();
        createIndustriesPositionIndicators();
        startIndustriesAutoRotation();
        updateIndustriesCounter();
        window.addEventListener('resize', () => {
            if (industriesContainer.children.length) updateCarouselPositions();
        });

        const mobileCarousel = document.getElementById('industriesMobileCarousel');
        const mobileTrack = document.getElementById('industriesMobileTrack');
        const counterTextMobile = document.getElementById('counterTextMobile');
        const prevBtnMobile = document.getElementById('prevBtnMobile');
        const nextBtnMobile = document.getElementById('nextBtnMobile');
        const positionIndicatorsMobile = document.getElementById('positionIndicatorsMobile');
        if (mobileCarousel && mobileTrack) {
            let mobileIndex = 0;
            const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect fill='%231a1a2e' width='600' height='400'/%3E%3Ctext fill='%236c63ff' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24'%3E%3F%3C/text%3E%3C/svg%3E";
            industries.forEach((industry) => {
                const card = document.createElement('div');
                card.className = 'industries-mobile-card';
                card.innerHTML = `
                    <div class="industries-mobile-card-inner">
                        <div class="industries-mobile-card-img" style="background-image:url('${industry.imageUrl}')"></div>
                        <div class="industries-mobile-card-body">
                            <h3>${industry.name}</h3>
                            <p>${industry.description}</p>
                        </div>
                    </div>
                `;
                const imgDiv = card.querySelector('.industries-mobile-card-img');
                const imgTest = new Image();
                imgTest.onerror = () => { if (imgDiv) imgDiv.style.backgroundImage = `url('${placeholderImage}')`; };
                imgTest.src = industry.imageUrl;
                mobileTrack.appendChild(card);
            });
            for (let i = 0; i < industriesTotalItems; i++) {
                const dot = document.createElement('button');
                dot.type = 'button';
                dot.className = 'industries-mobile-dot';
                if (i === 0) dot.classList.add('active');
                dot.setAttribute('aria-label', 'Ir a industria ' + (i + 1));
                dot.dataset.index = i;
                dot.addEventListener('click', () => goToMobileIndustry(i));
                positionIndicatorsMobile.appendChild(dot);
            }
            function goToMobileIndustry(index) {
                mobileIndex = (index + industriesTotalItems) % industriesTotalItems;
                mobileTrack.style.transform = `translateX(-${mobileIndex * 100}%)`;
                positionIndicatorsMobile.querySelectorAll('.industries-mobile-dot').forEach((d, i) => {
                    d.classList.toggle('active', i === mobileIndex);
                });
                if (counterTextMobile) counterTextMobile.textContent = `Industria ${mobileIndex + 1} de ${industriesTotalItems}`;
            }
            if (prevBtnMobile) prevBtnMobile.addEventListener('click', () => goToMobileIndustry(mobileIndex - 1));
            if (nextBtnMobile) nextBtnMobile.addEventListener('click', () => goToMobileIndustry(mobileIndex + 1));
            if (counterTextMobile) counterTextMobile.textContent = `Industria 1 de ${industriesTotalItems}`;
            const isMobileView = () => window.innerWidth <= 768;
            window.addEventListener('resize', () => {
                mobileCarousel.setAttribute('aria-hidden', isMobileView() ? 'false' : 'true');
            });
            mobileCarousel.setAttribute('aria-hidden', isMobileView() ? 'false' : 'true');
        }
    }

    // ==================== SOLUCIONES INTEGRALES - TABS ====================
    const solucionesTabs = document.querySelector('.tabs-system');
    if (solucionesTabs) {
        solucionesTabs.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', function () {
                const tabId = this.getAttribute('data-tab');
                solucionesTabs.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
                solucionesTabs.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                this.classList.add('active');
                const tabContent = document.getElementById(tabId);
                if (tabContent) tabContent.classList.add('active');
            });
        });
    }
});

