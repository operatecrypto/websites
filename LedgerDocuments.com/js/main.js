
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        // Loading Screen
        window.addEventListener('load', function() {
            const loading = document.getElementById('loading');
            setTimeout(() => {
                loading.classList.add('hidden');
            }, 1500);
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for navigation links
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

        // Search Functions
        function searchByIdentity() {
            const input = document.getElementById('identitySearch');
            const result = document.getElementById('identityResult');
            
            if (input.value.trim()) {
                result.classList.add('show');
                // Simulate search delay
                setTimeout(() => {
                    result.innerHTML = `
                        <p><strong>Document Found:</strong></p>
                        <p>Identity: ${input.value}</p>
                        <p>Status: Verified ✅</p>
                        <p>Blockchain: Accumulate Network</p>
                        <a href="https://LedgerDocuments.com/search?id=${encodeURIComponent(input.value)}" target="_blank" class="btn btn-secondary">View Document</a>
                    `;
                }, 1000);
            }
        }

        function searchByVersion() {
            const input = document.getElementById('versionSearch');
            const result = document.getElementById('versionResult');
            
            if (input.value.trim()) {
                result.classList.add('show');
                // Simulate search delay
                setTimeout(() => {
                    result.innerHTML = `
                        <p><strong>Version Found:</strong></p>
                        <p>Record ID: ${input.value.substring(0, 20)}...</p>
                        <p>Version: v2.1 - Last modified 3 days ago</p>
                        <p>Status: Verified ✅</p>
                        <a href="https://record.LedgerDocuments.com/?search-url-data-entry-id=${input.value}" target="_blank" class="btn btn-secondary">View Record</a>
                    `;
                }, 1000);
            }
        }

        function generateQR() {
            const input = document.getElementById('qrSearch');
            const result = document.getElementById('qrResult');
            
            if (input.value.trim()) {
                result.classList.add('show');
                // Simulate QR generation
                setTimeout(() => {
                    result.innerHTML = `
                        <p><strong>QR Code Generated:</strong></p>
                        <div class="qr-code">
                            <i class="fas fa-qrcode" style="font-size: 4rem; color: #333;"></i>
                            <p style="margin-top: 1rem; font-size: 0.8rem;">QR Code for: ${input.value.substring(0, 30)}...</p>
                        </div>
                        <button class="btn btn-secondary" onclick="openQRModal('${input.value}')">View Full Size</button>
                        <button class="btn btn-primary" onclick="downloadQR()">Download QR</button>
                    `;
                }, 1000);
            }
        }

        function openQRModal(data) {
            const modal = document.getElementById('qrModal');
            const qrDisplay = document.getElementById('qrCodeDisplay');
            
            qrDisplay.innerHTML = `
                <i class="fas fa-qrcode" style="font-size: 6rem; color: #333;"></i>
                <p style="margin-top: 1rem; color: #333;">Document: ${data.substring(0, 40)}...</p>
            `;
            
            modal.style.display = 'block';
        }

        function closeQRModal() {
            document.getElementById('qrModal').style.display = 'none';
        }

        function downloadQR() {
            // Simulate QR download
            const link = document.createElement('a');
            link.download = 'ledger-document-qr.png';
            link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
            link.click();
            
            // Show success message
            alert('QR Code downloaded successfully!');
        }

        // Email obfuscation
        document.addEventListener('DOMContentLoaded', function() {
            const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
            emailLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    // Add analytics or other tracking here if needed
                    console.log('Email link clicked:', this.href);
                });
            });
        });
        // Mobile menu functionality
        const mobileMenuToggle = document.createElement('button');
        mobileMenuToggle.className = 'mobile-menu-toggle';
        mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        mobileMenuToggle.style.cssText = `
            display: none;
            background: none;
            border: 2px solid rgba(116, 41, 252, 0.3);
            color: var(--text-primary);
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 8px;
            transition: all 0.3s var(--ease-smooth);
        `;

        // Add mobile styles
        const mobileStyles = document.createElement('style');
        mobileStyles.textContent = `
            @media (max-width: 768px) {
                .mobile-menu-toggle {
                    display: block !important;
                }
                
                .mobile-menu-toggle:hover {
                    border-color: var(--accent-purple);
                    background: rgba(116, 41, 252, 0.1);
                }
                
                .nav-links {
                    position: fixed;
                    top: 80px;
                    left: -100%;
                    width: 100%;
                    height: calc(100vh - 80px);
                    background: var(--primary-bg);
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    padding-top: 2rem;
                    transition: left 0.3s var(--ease-smooth);
                    backdrop-filter: blur(20px);
                    border-right: 1px solid rgba(116, 41, 252, 0.1);
                }
                
                .nav-links.active {
                    left: 0;
                }
                
                .nav-links li {
                    margin: 1rem 0;
                }
                
                .nav-links a {
                    font-size: 1.1rem;
                    padding: 0.5rem 1rem;
                }
            }
        `;
        document.head.appendChild(mobileStyles);

        const navContainer = document.querySelector('.nav-container');
        navContainer.appendChild(mobileMenuToggle);

        mobileMenuToggle.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                this.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                this.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });

        // Close mobile menu when clicking on links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                const navLinks = document.querySelector('.nav-links');
                const mobileToggle = document.querySelector('.mobile-menu-toggle');
                navLinks.classList.remove('active');
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('qrModal');
            if (event.target === modal) {
                closeQRModal();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeQRModal();
                
                const navLinks = document.querySelector('.nav-links');
                const mobileToggle = document.querySelector('.mobile-menu-toggle');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });

        // Add focus management for accessibility
        document.querySelectorAll('.btn, .nav-links a, input').forEach(element => {
            element.addEventListener('focus', function() {
                this.style.outline = '2px solid var(--accent-purple)';
                this.style.outlineOffset = '2px';
            });
            
            element.addEventListener('blur', function() {
                this.style.outline = 'none';
            });
        });

        // Add loading states to buttons
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                if (this.href && this.href.includes('#')) return;
                if (this.onclick) return;
                
                e.preventDefault();
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                this.style.pointerEvents = 'none';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.pointerEvents = 'auto';
                }, 2000);
            });
        });

        // Respect reduced motion preferences
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.querySelectorAll('*').forEach(el => {
                el.style.animationDuration = '0.01ms';
                el.style.animationIterationCount = '1';
                el.style.transitionDuration = '0.01ms';
            });
        }

        // Add particle effect
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: var(--accent-gradient);
                border-radius: 50%;
                pointer-events: none;
                animation: particleFloat 8s linear infinite;
                opacity: 0.6;
                z-index: -1;
            `;
            
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100%';
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 8000);
        }

        // Add particle animation keyframes
        const particleStyles = document.createElement('style');
        particleStyles.textContent = `
            @keyframes particleFloat {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 0.6;
                }
                90% {
                    opacity: 0.6;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(particleStyles);

        // Create particles periodically
        setInterval(createParticle, 3000);

        console.log('🚀 Ledger Documents - Full Platform Loaded!');
        console.log('📄 Document Collaboration Platform Ready');
        console.log('🔗 All links and functionality active');
        console.log('🌐 Visit: https://LedgerDocuments.com');
    