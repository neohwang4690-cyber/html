document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    // Scroll event for sticky header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Initial check in case page is loaded already scrolled
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    }

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mainNav.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (mainNav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            header.classList.add('scrolled'); // Ensure header is solid when menu is open
        } else {
            document.body.style.overflow = '';
            if (window.scrollY <= 50) {
                header.classList.remove('scrolled');
            }
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mainNav.classList.contains('active') && 
            !mainNav.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            
            mobileMenuBtn.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
            
            if (window.scrollY <= 50) {
                header.classList.remove('scrolled');
            }
        }
    });
});
