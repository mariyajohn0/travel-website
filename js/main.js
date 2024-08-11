function initializeHeaderScripts() {
    console.log('Initializing header scripts');

    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const scrollUp = document.getElementById('scroll-up');
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section[id]');

    // MENU SHOW
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            console.log('Toggle button clicked');
            if (navMenu) {
                navMenu.classList.remove('nav__menu');
                navMenu.classList.add('show__menu');
            } else {
                console.warn('navMenu element not found.');
            }
        });
    } else {
        console.warn('navToggle element not found.');
    }

    // MENU HIDDEN
    if (navClose) {
        navClose.addEventListener('click', () => {
            if (navMenu) {
                navMenu.classList.remove('show__menu');
                navMenu.classList.add('nav__menu');
            } else {
                console.warn('navMenu element not found.');
            }
        });
    } else {
        console.warn('navClose element not found.');
    }

    // REMOVE MENU MOBILE
    const navLinks = document.querySelectorAll('.nav__link');
    if (navLinks.length > 0) {
        const linkAction = () => {
            if (navMenu) {
                navMenu.classList.remove('show-menu');
            } else {
                console.warn('navMenu element not found.');
            }
        };
        navLinks.forEach(link => link.addEventListener('click', linkAction));
    } else {
        console.warn('No navLink elements found.');
    }

    // ADD BLUR TO HEADER
    const blurHeader = () => {
        if (header) {
            if (window.scrollY >= 50) {
                header.classList.add('blur-header');
            } else {
                header.classList.remove('blur-header');
            }
        } else {
            console.warn('Header element not found.');
        }
    };
    window.addEventListener('scroll', blurHeader);

    // SHOW SCROLL UP
    const scrollUpHandler = () => {
        if (scrollUp) {
            if (window.scrollY >= 350) {
                scrollUp.classList.add('show-scroll');
            } else {
                scrollUp.classList.remove('show-scroll');
            }
        } else {
            console.warn('scrollUp element not found.');
        }
    };
    window.addEventListener('scroll', scrollUpHandler);

    // SCROLL SECTIONS ACTIVE LINK
    const scrollActive = () => {
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 58;
            const sectionId = current.getAttribute('id');
            const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

            if (sectionsClass) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    sectionsClass.classList.add('active-link');
                } else {
                    sectionsClass.classList.remove('active-link');
                }
            } else {
                console.warn('Sections class not found for ID:', sectionId);
            }
        });
    };
    window.addEventListener('scroll', scrollActive);
}
