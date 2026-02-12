/**
 * Encabezado: mega menús (Services / Industries) y menú hamburguesa
 * WordPress: cargar en footer (WPCode, Insert Headers and Footers, etc.)
 * Reintenta si el header se carga tarde (Elementor).
 */
(function() {
    var inited = false;

    function initHeaderMenu() {
        if (inited) return;
        var servicesBtn = document.getElementById('servicesBtn');
        var industriesBtn = document.getElementById('industriesBtn');
        var servicesMegaMenu = document.getElementById('servicesMegaMenu');
        var industriesMegaMenu = document.getElementById('industriesMegaMenu');
        var menuOverlay = document.getElementById('menuOverlay');
        if (!servicesBtn || !industriesBtn || !servicesMegaMenu || !industriesMegaMenu || !menuOverlay) return;

        inited = true;
        var servicesDropdown = servicesBtn.closest('.services-dropdown');
        var industriesDropdown = industriesBtn.closest('.industries-dropdown');
        var servicesCloseTimer = null;
        var industriesCloseTimer = null;

        function closeAllMegaMenus() {
            servicesBtn.classList.remove('active');
            industriesBtn.classList.remove('active');
            servicesMegaMenu.classList.remove('active');
            industriesMegaMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
        }

        function openServicesMenu() {
            industriesBtn.classList.remove('active');
            industriesMegaMenu.classList.remove('active');
            servicesBtn.classList.add('active');
            servicesMegaMenu.classList.add('active');
            menuOverlay.classList.add('active');
        }
        function openIndustriesMenu() {
            servicesBtn.classList.remove('active');
            servicesMegaMenu.classList.remove('active');
            industriesBtn.classList.add('active');
            industriesMegaMenu.classList.add('active');
            menuOverlay.classList.add('active');
        }

        /* Hover: abrir el listado al pasar el ratón por encima */
        if (servicesDropdown) {
            servicesDropdown.addEventListener('mouseenter', function() {
                if (servicesCloseTimer) { clearTimeout(servicesCloseTimer); servicesCloseTimer = null; }
                if (industriesMegaMenu.classList.contains('active')) {
                    closeAllMegaMenus();
                    setTimeout(openServicesMenu, 50);
                } else { openServicesMenu(); }
            });
            servicesDropdown.addEventListener('mouseleave', function() {
                servicesCloseTimer = setTimeout(function() {
                    servicesBtn.classList.remove('active');
                    servicesMegaMenu.classList.remove('active');
                    menuOverlay.classList.remove('active');
                    servicesCloseTimer = null;
                }, 180);
            });
            servicesMegaMenu.addEventListener('mouseenter', function() {
                if (servicesCloseTimer) { clearTimeout(servicesCloseTimer); servicesCloseTimer = null; }
            });
            servicesMegaMenu.addEventListener('mouseleave', function() {
                servicesCloseTimer = setTimeout(function() {
                    servicesBtn.classList.remove('active');
                    servicesMegaMenu.classList.remove('active');
                    menuOverlay.classList.remove('active');
                    servicesCloseTimer = null;
                }, 150);
            });
        }

        if (industriesDropdown) {
            industriesDropdown.addEventListener('mouseenter', function() {
                if (industriesCloseTimer) { clearTimeout(industriesCloseTimer); industriesCloseTimer = null; }
                if (servicesMegaMenu.classList.contains('active')) {
                    closeAllMegaMenus();
                    setTimeout(openIndustriesMenu, 50);
                } else { openIndustriesMenu(); }
            });
            industriesDropdown.addEventListener('mouseleave', function() {
                industriesCloseTimer = setTimeout(function() {
                    industriesBtn.classList.remove('active');
                    industriesMegaMenu.classList.remove('active');
                    menuOverlay.classList.remove('active');
                    industriesCloseTimer = null;
                }, 180);
            });
            industriesMegaMenu.addEventListener('mouseenter', function() {
                if (industriesCloseTimer) { clearTimeout(industriesCloseTimer); industriesCloseTimer = null; }
            });
            industriesMegaMenu.addEventListener('mouseleave', function() {
                industriesCloseTimer = setTimeout(function() {
                    industriesBtn.classList.remove('active');
                    industriesMegaMenu.classList.remove('active');
                    menuOverlay.classList.remove('active');
                    industriesCloseTimer = null;
                }, 150);
            });
        }

        /* No agregar listener de clic a servicesBtn: el <a href="/servicios/"> debe navegar siempre al hacer clic. */
        industriesBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (window.matchMedia('(max-width: 992px)').matches) {
                if (industriesMegaMenu.classList.contains('active')) closeAllMegaMenus();
                else openIndustriesMenu();
            }
        });

        menuOverlay.addEventListener('click', function() {
            closeAllMegaMenus();
            document.body.classList.remove('nav-open');
        });

        var navToggle = document.getElementById('navToggle');
        var mainNav = document.getElementById('mainNav');
        if (navToggle && mainNav) {
            navToggle.addEventListener('click', function() {
                document.body.classList.toggle('nav-open');
                if (document.body.classList.contains('nav-open')) {
                    menuOverlay.classList.add('active');
                } else {
                    menuOverlay.classList.remove('active');
                }
            });
            mainNav.querySelectorAll('a[href]').forEach(function(link) {
                if (link.id === 'servicesBtn') return;
                link.addEventListener('click', function() {
                    document.body.classList.remove('nav-open');
                    menuOverlay.classList.remove('active');
                });
            });
        }

        document.addEventListener('click', function(e) {
            if (!servicesMegaMenu.contains(e.target) && !servicesBtn.contains(e.target) &&
                !industriesMegaMenu.contains(e.target) && !industriesBtn.contains(e.target)) {
                closeAllMegaMenus();
            }
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeAllMegaMenus();
        });
        var megaLinks = document.querySelectorAll('.mega-menu-category a');
        for (var i = 0; i < megaLinks.length; i++) {
            megaLinks[i].addEventListener('click', closeAllMegaMenus);
        }
    }

    function run() {
        initHeaderMenu();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }
    window.addEventListener('load', run);
    setTimeout(run, 800);
    setTimeout(run, 1500);
})();
