// Navigation functionality
document.addEventListener("DOMContentLoaded", () => {
  // Fix loading screen - hide it immediately after DOM loads
  const loadingScreen = document.getElementById("loading-screen")
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.classList.add("hidden")
      document.body.classList.add("loaded")
    }, 1500) // Show loading for 1.5 seconds then hide
  }

  const navbar = document.getElementById("navbar")
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("nav-menu")
  const navLinks = document.querySelectorAll(".nav-link")

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Mobile menu toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      hamburger.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu) navMenu.classList.remove("active")
      if (hamburger) hamburger.classList.remove("active")
    })
  })

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Animate elements on scroll
  const animateElements = document.querySelectorAll(
    ".feature-card, .tech-card, .ai-card, .partner-card, .ecosystem-card, .security-card",
  )

  animateElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(element)
  })

  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroGraphic = document.querySelector(".hero-graphic")
    const gridOverlay = document.querySelector(".grid-overlay")

    if (heroGraphic) {
      heroGraphic.style.transform = `translateY(-50%) translateX(${scrolled * 0.1}px)`
    }

    if (gridOverlay) {
      gridOverlay.style.transform = `translate(${scrolled * 0.05}px, ${scrolled * 0.05}px)`
    }
  })

  // Add glow effect to cards on mouse move
  const cards = document.querySelectorAll(
    ".feature-card, .tech-card, .ai-card, .partner-card, .ecosystem-card, .security-card",
  )

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      card.style.setProperty("--mouse-x", x + "px")
      card.style.setProperty("--mouse-y", y + "px")
    })
  })

  // Typing effect for hero title
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const text = heroTitle.textContent
    heroTitle.textContent = ""

    let i = 0
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i)
        i++
        setTimeout(typeWriter, 50)
      }
    }

    setTimeout(typeWriter, 2000) // Start typing after loading screen
  }

  // Add floating animation to feature icons
  const featureIcons = document.querySelectorAll(".feature-icon, .tech-icon, .ai-icon, .security-icon")
  featureIcons.forEach((icon, index) => {
    icon.style.animation = `float 3s ease-in-out infinite ${index * 0.5}s`
  })

  // Create floating particles effect
  function createParticles() {
    const particlesContainer = document.createElement("div")
    particlesContainer.className = "particles-container"
    particlesContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        `
    document.body.appendChild(particlesContainer)

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div")
      particle.className = "particle"
      particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background:rgb(59, 246, 131);
                border-radius: 50%;
                opacity: 0.3;
                animation: particleFloat ${Math.random() * 10 + 10}s linear infinite;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 10}s;
            `
      particlesContainer.appendChild(particle)
    }
  }

  // Add CSS for particle animation
  const style = document.createElement("style")
  style.textContent = `
        @keyframes particleFloat {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.3;
            }
            90% {
                opacity: 0.3;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        @keyframes float {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-10px);
            }
        }
        
        .feature-card::after,
        .tech-card::after,
        .ai-card::after,
        .partner-card::after,
        .ecosystem-card::after,
        .security-card::after {
            content: '';
            position: absolute;
            top: var(--mouse-y, 50%);
            left: var(--mouse-x, 50%);
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(59, 246, 100, 0.1) 0%, transparent 70%);
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        }
        
        .feature-card:hover::after,
        .tech-card:hover::after,
        .ai-card:hover::after,
        .partner-card:hover::after,
        .ecosystem-card:hover::after,
        .security-card:hover::after {
            opacity: 1;
        }
    `
  document.head.appendChild(style)

  // Initialize particles
  createParticles()

  // Simple image loading with fade-in effect
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.style.opacity = "0"
    img.style.transition = "opacity 0.8s ease"

    // Show image when it loads
    if (img.complete) {
      img.style.opacity = "1"
    } else {
      img.onload = () => {
        img.style.opacity = "1"
      }
      // Fallback - show image after 2 seconds even if not loaded
      setTimeout(() => {
        img.style.opacity = "1"
      }, 2000)
    }
  })

  // Add click ripple effect to buttons
  const buttons = document.querySelectorAll(".btn-primary, .btn-secondary, .cta-button")
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const ripple = document.createElement("span")
      const rect = button.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `

      button.style.position = "relative"
      button.style.overflow = "hidden"
      button.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })

  // Add ripple animation CSS
  const rippleStyle = document.createElement("style")
  rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `
  document.head.appendChild(rippleStyle)

  // Add enhanced visual effects
  function addEnhancedEffects() {
    // Create animated background elements
    const heroSection = document.querySelector(".hero")
    if (heroSection) {
      // Add floating geometric shapes
      for (let i = 0; i < 8; i++) {
        const shape = document.createElement("div")
        shape.className = "floating-shape"
        shape.style.cssText = `
                    position: absolute;
                    width: ${Math.random() * 100 + 50}px;
                    height: ${Math.random() * 100 + 50}px;
                    background: linear-gradient(45deg, rgba(59, 246, 121, 0.1), rgba(59, 246, 121, 0.05));
                    border: 1px solid rgba(59, 246, 90, 0.3);
                    border-radius: ${Math.random() > 0.5 ? "50%" : "10px"};
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation: floatShape ${Math.random() * 20 + 15}s linear infinite;
                    z-index: -1;
                `
        heroSection.appendChild(shape)
      }
    }
  }

  // Add the enhanced effects
  addEnhancedEffects()

  // Add more dynamic CSS animations
  const enhancedStyle = document.createElement("style")
  enhancedStyle.textContent = `
        @keyframes floatShape {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.3;
            }
            90% {
                opacity: 0.3;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        /* Enhanced card animations */
        .feature-card, .tech-card, .ai-card, .partner-card, .ecosystem-card, .security-card {
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(59, 246, 131, 0.1);
        }
        
        .feature-card:hover, .tech-card:hover, .ai-card:hover, 
        .partner-card:hover, .ecosystem-card:hover, .security-card:hover {
            box-shadow: 0 20px 60px rgba(59, 246, 90, 0.3);
            border-color: rgba(59, 246, 106, 0.8);
        }
        
        /* Enhanced image styles */
        img {
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
        }
        
        img:hover {
            transform: scale(1.02);
            box-shadow: 0 15px 40px rgba(59, 246, 90, 0.3);
        }
        
        /* Glowing text effects */
        .hero-title {
            text-shadow: 0 0 20px rgba(59, 246, 115, 0.3);
        }
        
        .logo-text {
            text-shadow: 0 0 10px rgba(59, 246, 121, 0.5);
        }
    `
  document.head.appendChild(enhancedStyle)

  // Newsletter form functionality
  const newsletterForm = document.querySelector(".newsletter-form")
  if (newsletterForm) {
    const newsletterInput = newsletterForm.querySelector(".newsletter-input")
    const newsletterButton = newsletterForm.querySelector(".newsletter-button")

    newsletterButton.addEventListener("click", (e) => {
      e.preventDefault()
      const email = newsletterInput.value.trim()

      if (email && email.includes("@")) {
        newsletterButton.textContent = "Subscribed!"
        newsletterButton.style.background = "#22c55e"
        newsletterInput.value = ""

        setTimeout(() => {
          newsletterButton.textContent = "Subscribe"
          newsletterButton.style.background = "linear-gradient(135deg,rgb(59, 246, 84),rgb(37, 235, 153))"
        }, 3000)
      } else {
        newsletterButton.textContent = "Invalid Email"
        newsletterButton.style.background = "#ef4444"

        setTimeout(() => {
          newsletterButton.textContent = "Subscribe"
          newsletterButton.style.background = "linear-gradient(135deg,rgb(59, 246, 131),rgb(37, 235, 96))"
        }, 2000)
      }
    })
  }
})

// Ensure loading screen is hidden on window load as backup
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen")
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.classList.add("hidden")
      document.body.classList.add("loaded")
    }, 500)
  }
})
