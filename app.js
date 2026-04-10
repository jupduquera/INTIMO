// ÍNTIMO - Dark Velvet Edition
// JavaScript para efectos e interacciones

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSpotlight();
    initRevealAnimations();
    initSmoothScroll();
    initLightbox();
});

/**
 * Navegación con indicador deslizante
 */
function initNavigation() {
    const navPill = document.querySelector('.nav-pill');
    const navIndicator = document.getElementById('navIndicator');
    const navButtons = document.querySelectorAll('.nav-btn');
    const categoryViews = document.querySelectorAll('.category-view');

    if (!navPill || !navIndicator) return;

    // Posicionar indicador inicial
    updateIndicator(navButtons[0]);

    // Click handlers
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetTab = btn.dataset.tab;

            // Actualizar botones activos
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Mover indicador
            updateIndicator(btn);

            // Cambiar vista
            categoryViews.forEach(view => {
                view.classList.remove('active');
                if (view.id === targetTab) {
                    view.classList.add('active');
                    // Re-trigger animations for new section
                    initRevealAnimations();
                }
            });

            // Scroll suave a la sección
            document.querySelector('.nav-container').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    function updateIndicator(activeBtn) {
        if (!activeBtn) return;
        const pillRect = navPill.getBoundingClientRect();
        const btnRect = activeBtn.getBoundingClientRect();

        navIndicator.style.width = `${btnRect.width}px`;
        navIndicator.style.left = `${btnRect.left - pillRect.left}px`;
    }

    // Actualizar en resize
    window.addEventListener('resize', () => {
        const activeBtn = document.querySelector('.nav-btn.active');
        updateIndicator(activeBtn);
    });
}

/**
 * Efecto Spotlight que sigue al cursor
 */
function initSpotlight() {
    const spotlight = document.getElementById('spotlight');
    if (!spotlight) return;

    // Solo en desktop
    if (window.matchMedia('(pointer: coarse)').matches) {
        spotlight.style.display = 'none';
        return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let spotlightX = 0;
    let spotlightY = 0;
    let isActive = true;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!isActive) {
            isActive = true;
            animateSpotlight();
        }
    });

    // Smooth follow animation
    function animateSpotlight() {
        if (!isActive) return;

        const dx = mouseX - spotlightX;
        const dy = mouseY - spotlightY;

        spotlightX += dx * 0.1;
        spotlightY += dy * 0.1;

        spotlight.style.left = `${spotlightX}px`;
        spotlight.style.top = `${spotlightY}px`;

        requestAnimationFrame(animateSpotlight);
    }

    animateSpotlight();

    // Pausar cuando la pestaña no está visible
    document.addEventListener('visibilitychange', () => {
        isActive = !document.hidden;
        if (isActive) animateSpotlight();
    });
}

/**
 * Animaciones de revelado al hacer scroll
 */
function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
}

/**
 * Smooth scroll para enlaces internos
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Lazy loading para imágenes con fade-in
 */
function initLazyLoading() {
    const images = document.querySelectorAll('.product-image');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';

                // Esperar a que cargue
                if (img.complete) {
                    fadeInImage(img);
                } else {
                    img.addEventListener('load', () => fadeInImage(img));
                }

                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.01
    });

    images.forEach(img => imageObserver.observe(img));
}

function fadeInImage(img) {
    setTimeout(() => {
        img.style.transition = 'opacity 0.6s ease';
        img.style.opacity = '1';
    }, 100);
}

/**
 * Manejo de errores en imágenes
 */
document.querySelectorAll('.product-image').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
        const wrapper = this.closest('.product-image-wrapper');
        if (wrapper) {
            const placeholder = document.createElement('div');
            placeholder.className = 'product-image-placeholder';
            placeholder.innerHTML = '<span>Imagen no disponible</span>';
            wrapper.appendChild(placeholder);
        }
    });
});

// Inicializar lazy loading después de cargar
document.addEventListener('DOMContentLoaded', initLazyLoading);

/**
 * Parallax sutil para el hero
 */
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero && scrolled < window.innerHeight) {
        const parallax = scrolled * 0.3;
        hero.style.transform = `translateY(${parallax}px)`;
    }
});

/**
 * Lightbox para ver imágenes ampliadas
 */
function initLightbox() {
    // Crear elemento lightbox si no existe
    let lightbox = document.getElementById('lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <button class="lightbox-close">×</button>
            <div class="lightbox-content">
                <img class="lightbox-image" src="" alt="">
                <div class="lightbox-title"></div>
            </div>
        `;
        document.body.appendChild(lightbox);
    }

    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const lightboxTitle = lightbox.querySelector('.lightbox-title');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    // Abrir lightbox al hacer clic en tarjetas
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const img = card.querySelector('.product-image');
            const name = card.querySelector('.product-name')?.textContent || '';

            if (img) {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightboxTitle.textContent = name;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Cerrar lightbox
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeLightbox);

    // Cerrar al hacer clic fuera de la imagen
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Cerrar con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

/**
 * Detectar preferencia de reducción de movimiento
 */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Desactivar animaciones complejas
    document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('visible');
        el.style.transition = 'none';
    });
}
