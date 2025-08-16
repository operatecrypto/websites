
        // Initialize Elegant AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic'
        });

        // Elegant Custom Cursor
        const cursor = document.querySelector('.elegant-cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Elegant Loader
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.getElementById('loader').classList.add('hidden');
            }, 3000);
        });

        // Elegant Navbar Effects
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            const scrollProgress = document.getElementById('scrollProgress');
            
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Elegant scroll progress
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            scrollProgress.style.width = scrollPercent + '%';
        });

        // Elegant Smooth Scrolling
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

        // Elegant Button Effects
        document.querySelectorAll('.elegant-btn').forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-4px)';
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Elegant Intersection Observer
        const elegantObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('fade-in-elegant')) {
                        entry.target.classList.add('visible');
                    }
                    if (entry.target.classList.contains('scale-in-elegant')) {
                        entry.target.classList.add('visible');
                    }
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all elegant elements
        document.querySelectorAll('.fade-in-elegant, .scale-in-elegant').forEach(el => {
            elegantObserver.observe(el);
        });

        // Elegant Card Hover Effects
        document.querySelectorAll('.elegant-feature-card, .search-card, .tech-card, .service-card, .partner-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Elegant Performance Optimization
        let elegantTicking = false;
        function updateElegantEffects() {
            if (!elegantTicking) {
                requestAnimationFrame(function() {
                    // Elegant scroll effects here
                    elegantTicking = false;
                });
                elegantTicking = true;
            }
        }

        window.addEventListener('scroll', updateElegantEffects);
    