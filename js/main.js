/* ==================== MAIN.JS - JavaScript Vanilla ==================== */
/* Site Dr. Augusto Cesar - Direito Bancário */

'use strict';

/* ==================== PARTICLES.JS INITIALIZATION ==================== */
window.addEventListener('load', () => {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#00D4FF', '#7C3AED', '#F59E0B']
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00D4FF',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
});

/* ==================== MOBILE MENU TOGGLE ==================== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        document.body.style.overflow = 'hidden'; // Prevent scroll when menu is open
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        document.body.style.overflow = ''; // Restore scroll
    });
}

// Close menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        document.body.style.overflow = '';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('show-menu')) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('show-menu');
            document.body.style.overflow = '';
        }
    }
});

/* ==================== SCROLL HEADER ==================== */
const header = document.getElementById('header');
let lastScrollTop = 0;

function scrollHeader() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add blur background when scrolled
    if (scrollTop >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }

    // Hide/show header on scroll (optional)
    // if (scrollTop > lastScrollTop && scrollTop > 200) {
    //     header.classList.add('scroll-down');
    //     header.classList.remove('scroll-up');
    // } else {
    //     header.classList.remove('scroll-down');
    //     header.classList.add('scroll-up');
    // }

    lastScrollTop = scrollTop;
}

window.addEventListener('scroll', scrollHeader);

/* ==================== ACTIVE LINK ON SCROLL ==================== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

/* ==================== SMOOTH SCROLL ==================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Ignore empty hash
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* ==================== SCROLL REVEAL ANIMATION (Intersection Observer) ==================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

/* ==================== COUNTER ANIMATION ==================== */
const counters = document.querySelectorAll('.stat__number');
const speed = 200; // Animation speed

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute('data-target');
            const increment = target / speed;
            let count = 0;

            const updateCounter = () => {
                count += increment;
                if (count < target) {
                    counter.textContent = Math.ceil(count);
                    setTimeout(updateCounter, 10);
                } else {
                    counter.textContent = target;
                    counter.classList.add('counting');
                }
            };

            updateCounter();
            counterObserver.unobserve(counter);
        }
    });
}, observerOptions);

counters.forEach(counter => {
    counterObserver.observe(counter);
});

/* ==================== DEPOIMENTOS SLIDER ==================== */
const sliderWrapper = document.querySelector('.slider__wrapper');
const prevBtn = document.querySelector('.slider__btn--prev');
const nextBtn = document.querySelector('.slider__btn--next');

if (sliderWrapper && prevBtn && nextBtn) {
    const cards = sliderWrapper.querySelectorAll('.depoimento__card');
    let currentIndex = 0;

    function updateSlider() {
        const cardWidth = cards[0].offsetWidth;
        const gap = 24; // 1.5rem gap
        const offset = currentIndex * (cardWidth + gap);

        // For mobile, show one card at a time
        if (window.innerWidth < 768) {
            sliderWrapper.style.transform = `translateX(-${offset}px)`;
        }

        // Update active card
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === currentIndex) {
                card.classList.add('active');
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : cards.length - 1;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = currentIndex < cards.length - 1 ? currentIndex + 1 : 0;
        updateSlider();
    });

    // Auto slide (optional)
    let autoSlideInterval = setInterval(() => {
        currentIndex = currentIndex < cards.length - 1 ? currentIndex + 1 : 0;
        updateSlider();
    }, 5000);

    // Pause auto slide on hover
    sliderWrapper.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    sliderWrapper.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(() => {
            currentIndex = currentIndex < cards.length - 1 ? currentIndex + 1 : 0;
            updateSlider();
        }, 5000);
    });

    // Reset on window resize
    window.addEventListener('resize', updateSlider);

    // Initialize
    updateSlider();
}

/* ==================== FAQ ACCORDION ==================== */
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

/* ==================== SCROLL TO TOP BUTTON ==================== */
const scrollTopBtn = document.getElementById('scroll-top');

function showScrollTop() {
    if (window.pageYOffset >= 400) {
        scrollTopBtn.classList.add('show-scroll');
    } else {
        scrollTopBtn.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', showScrollTop);

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ==================== PARALLAX EFFECT ==================== */
function parallaxEffect() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');

    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}

window.addEventListener('scroll', parallaxEffect);

/* ==================== FORM VALIDATION (if needed) ==================== */
const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form inputs
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        if (isValid) {
            // Form is valid, you can submit it or handle it here
            console.log('Form is valid!');
            // form.submit(); // Uncomment to actually submit
        } else {
            console.log('Please fill in all required fields');
        }
    });
});

/* ==================== LAZY LOADING IMAGES ==================== */
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // Trigger load
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
} else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyImages.forEach(img => {
        img.src = img.src;
    });
}

/* ==================== DETECT MOBILE DEVICE ==================== */
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Add mobile class to body if on mobile
if (isMobileDevice()) {
    document.body.classList.add('mobile-device');
}

/* ==================== PERFORMANCE OPTIMIZATION ==================== */
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll handlers
window.addEventListener('scroll', debounce(scrollHeader, 10));
window.addEventListener('scroll', debounce(scrollActive, 10));
window.addEventListener('scroll', debounce(showScrollTop, 10));

/* ==================== PRELOAD CRITICAL RESOURCES ==================== */
// Preload hero image and other critical assets
document.addEventListener('DOMContentLoaded', () => {
    const criticalImages = document.querySelectorAll('.hero__img, .sobre__img');

    criticalImages.forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    });
});

/* ==================== ACCESSIBILITY: KEYBOARD NAVIGATION ==================== */
// Trap focus in mobile menu when open
const focusableElements = navMenu.querySelectorAll(
    'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
);

const firstFocusable = focusableElements[0];
const lastFocusable = focusableElements[focusableElements.length - 1];

navMenu.addEventListener('keydown', (e) => {
    if (!navMenu.classList.contains('show-menu')) return;

    if (e.key === 'Tab') {
        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    }

    if (e.key === 'Escape') {
        navMenu.classList.remove('show-menu');
        document.body.style.overflow = '';
        navToggle.focus();
    }
});

/* ==================== CONSOLE MESSAGE ==================== */
console.log('%c🔐 Dr. Augusto Cesar - Direito Bancário', 'color: #00D4FF; font-size: 20px; font-weight: bold;');
console.log('%cSite desenvolvido por HO DEVWEB', 'color: #7C3AED; font-size: 14px;');
console.log('%cVisite: https://hodevweb.com', 'color: #F59E0B; font-size: 12px;');

/* ==================== ANALYTICS (placeholder) ==================== */
// Add your analytics code here (Google Analytics, Facebook Pixel, etc.)
// Example:
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'GA_MEASUREMENT_ID');

/* ==================== SERVICE WORKER (PWA - optional) ==================== */
// Uncomment to enable Progressive Web App features
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/sw.js')
//             .then(registration => console.log('SW registered:', registration))
//             .catch(error => console.log('SW registration failed:', error));
//     });
// }

/* ==================== EASTER EGG (optional) ==================== */
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiPattern.length - 1, konamiCode.length - konamiPattern.length);

    if (konamiCode.join('').includes(konamiPattern.join(''))) {
        console.log('%c🎮 Konami Code Activated! 🎮', 'color: #F59E0B; font-size: 24px; font-weight: bold;');
        console.log('%cVocê descobriu o easter egg! 🎉', 'color: #00D4FF; font-size: 16px;');
        // Add your easter egg here (confetti, special message, etc.)
    }
});

/* ==================== END OF MAIN.JS ==================== */
