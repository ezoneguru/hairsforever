/**
 * HairsForever - Static Website JavaScript
 * Handles all interactive functionality
 */

document.addEventListener('DOMContentLoaded', function () {
    // Initialize all features
    initMobileMenu();
    initNavbarScroll();
    initFAQAccordion();
    initGalleryToggle();
    initProductsToggle();
    initSmoothScroll();
});

/**
 * Mobile Menu Toggle
 * Opens and closes the mobile navigation menu
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (!mobileMenuBtn || !mobileMenu) return;

    let isOpen = false;

    mobileMenuBtn.addEventListener('click', function () {
        isOpen = !isOpen;

        if (isOpen) {
            mobileMenu.classList.remove('hidden');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });

    // Close menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
            isOpen = false;
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });

    // Close menu on resize to desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 768 && isOpen) {
            isOpen = false;
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });
}

/**
 * Navbar Scroll Effect
 * Changes navbar background on scroll
 */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');

    if (!navbar) return;

    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        }
    }

    window.addEventListener('scroll', updateNavbar);
    updateNavbar(); // Initial check
}

/**
 * FAQ Accordion
 * Toggle open/close for FAQ items
 */
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');

        if (!question) return;

        question.addEventListener('click', function () {
            const isActive = item.classList.contains('active');

            // Close all items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

/**
 * Gallery Show More/Less Toggle
 */
function initGalleryToggle() {
    const toggleBtn = document.getElementById('gallery-toggle');
    const hiddenItems = document.querySelectorAll('.gallery-hidden');

    if (!toggleBtn || hiddenItems.length === 0) return;

    let isExpanded = false;

    toggleBtn.addEventListener('click', function () {
        isExpanded = !isExpanded;

        const btnText = toggleBtn.querySelector('span');
        const chevronDown = toggleBtn.querySelector('.chevron-down');
        const chevronUp = toggleBtn.querySelector('.chevron-up');

        if (isExpanded) {
            // Show all items
            hiddenItems.forEach(item => {
                item.classList.add('show');
            });
            btnText.textContent = 'Show Less';
            chevronDown.classList.add('hidden');
            chevronUp.classList.remove('hidden');
        } else {
            // Hide extra items
            hiddenItems.forEach(item => {
                item.classList.remove('show');
            });
            btnText.textContent = 'Show More';
            chevronDown.classList.remove('hidden');
            chevronUp.classList.add('hidden');
        }
    });
}

/**
 * Products Show More/Less Toggle
 */
function initProductsToggle() {
    const toggleBtn = document.getElementById('products-toggle');
    const hiddenItems = document.querySelectorAll('.product-hidden');

    if (!toggleBtn || hiddenItems.length === 0) return;

    let isExpanded = false;

    toggleBtn.addEventListener('click', function () {
        isExpanded = !isExpanded;

        const btnText = toggleBtn.querySelector('span');
        const chevronDown = toggleBtn.querySelector('.chevron-down');
        const chevronUp = toggleBtn.querySelector('.chevron-up');

        if (isExpanded) {
            // Show all items
            hiddenItems.forEach(item => {
                item.classList.add('show');
            });
            btnText.textContent = 'Show Less';
            chevronDown.classList.add('hidden');
            chevronUp.classList.remove('hidden');
        } else {
            // Hide extra items
            hiddenItems.forEach(item => {
                item.classList.remove('show');
            });
            btnText.textContent = 'Show More';
            chevronDown.classList.remove('hidden');
            chevronUp.classList.add('hidden');
        }
    });
}

/**
 * Smooth Scroll for Navigation Links
 */
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Skip if it's just "#"
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                // Calculate offset for sticky navbar
                const navbarHeight = document.getElementById('navbar')?.offsetHeight || 72;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Form Submission Handler (Optional - for demo purposes)
 */
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        // Log form data (in production, this would be sent to a server)
        console.log('Form submitted:', data);

        // Show success message
        alert('Thank you for your message! We will get back to you soon.');

        // Reset form
        this.reset();
    });
}
