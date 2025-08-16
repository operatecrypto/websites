// Partner links functionality
document.addEventListener("DOMContentLoaded", () => {
  const partnerLinks = document.querySelectorAll(".partner-link")
  const partnerCards = document.querySelectorAll(".partner-card")

  partnerLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const url = this.getAttribute("href")

      if (url && url !== "#") {
        // Add https:// if not present
        const fullUrl = url.startsWith("http") ? url : `https://${url}`
        window.open(fullUrl, "_blank", "noopener,noreferrer")
      }
    })
  })

  partnerCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      // Don't trigger if clicking on the actual link
      if (e.target.classList.contains("partner-link")) {
        return
      }

      const link = card.querySelector(".partner-link")
      if (link) {
        const url = link.getAttribute("href")
        if (url && url !== "#") {
          // Add https:// if not present
          const fullUrl = url.startsWith("http") ? url : `https://${url}`
          window.open(fullUrl, "_blank", "noopener,noreferrer")
        }
      }
    })
  })
})

// Loading Screen
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen")
  setTimeout(() => {
    loadingScreen.style.opacity = "0"
    setTimeout(() => {
      loadingScreen.style.display = "none"
    }, 500)
  }, 2000)
})

// Navigation
const navbar = document.getElementById("navbar")
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")
const navLinks = document.querySelectorAll(".nav-link")

// Navbar scroll effect
let lastScrollTop = 0
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (scrollTop > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }

  lastScrollTop = scrollTop
})

// Mobile menu toggle
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active")
  navMenu.classList.toggle("active")
  document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : ""
})

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active")
    navMenu.classList.remove("active")
    document.body.style.overflow = ""
  })
})

// Smooth scrolling for navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault()
    const targetId = this.getAttribute("href")
    const targetSection = document.querySelector(targetId)

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Active navigation link highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")
  const scrollPos = window.scrollY + 100

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active")
        }
      })
    }
  })
})

// Tab functionality for process section
const tabButtons = document.querySelectorAll(".tab-btn")
const tabPanes = document.querySelectorAll(".tab-pane")

tabButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const targetTab = this.getAttribute("data-tab")

    // Remove active class from all buttons and panes
    tabButtons.forEach((btn) => btn.classList.remove("active"))
    tabPanes.forEach((pane) => pane.classList.remove("active"))

    // Add active class to clicked button and corresponding pane
    this.classList.add("active")
    document.getElementById(targetTab).classList.add("active")
  })
})

// Search functionality
const networkSelector = document.querySelector(".form-select")

 
// Contact form handling
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const formData = new FormData(this)
    const formInputs = contactForm.querySelectorAll(".form-input")
    const submitButton = contactForm.querySelector(".btn-primary")

    // Disable form during submission
    formInputs.forEach((input) => (input.disabled = true))
    submitButton.disabled = true
    submitButton.textContent = "Sending..."

    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! We will get back to you soon.")
      contactForm.reset()

      // Re-enable form
      formInputs.forEach((input) => (input.disabled = false))
      submitButton.disabled = false
      submitButton.textContent = "Send Message"
    }, 2000)
  })
}

// Notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === "success" ? "check-circle" : type === "error" ? "exclamation-circle" : "info-circle"}"></i>
            <span>${message}</span>
        </div>
    `

  // Add notification styles if not already present
  if (!document.querySelector(".notification-styles")) {
    const styles = document.createElement("style")
    styles.className = "notification-styles"
    styles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: var(--background-light);
                border: 1px solid var(--border-color);
                border-radius: 10px;
                padding: 15px 20px;
                z-index: 10000;
                transform: translateX(400px);
                transition: transform 0.3s ease;
                box-shadow: var(--shadow-card);
            }
            .notification.show {
                transform: translateX(0);
            }
            .notification-success {
                border-color: #10B981;
                background: rgba(16, 185, 129, 0.05);
            }
            .notification-error {
                border-color: #EF4444;
                background: rgba(239, 68, 68, 0.05);
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 10px;
                color: var(--text-primary);
                font-size: 14px;
            }
            .notification-success .notification-content i {
                color: #10B981;
            }
            .notification-error .notification-content i {
                color: #EF4444;
            }
        `
    document.head.appendChild(styles)
  }

  document.body.appendChild(notification)

  // Show notification
  setTimeout(() => {
    notification.classList.add("show")
  }, 100)

  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove("show")
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in")
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(".feature-card, .tech-card, .partner-card, .process-step")
  animateElements.forEach((el) => {
    observer.observe(el)
  })
})

// Update particle creation for light theme
function createParticles() {
  const heroParticles = document.querySelector(".hero-particles")
  if (!heroParticles) return

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"
    particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(253, 111, 1, 0.3);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `
    heroParticles.appendChild(particle)
  }
}

// Initialize particles
createParticles()

// Smooth hover effects for cards
const cards = document.querySelectorAll(".feature-card, .tech-card, .partner-card")
cards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})

// Certificate mockup animation
const certificateCard = document.querySelector(".certificate-card")
if (certificateCard) {
  certificateCard.addEventListener("mouseenter", () => {
    certificateCard.style.animationPlayState = "paused"
  })

  certificateCard.addEventListener("mouseleave", () => {
    certificateCard.style.animationPlayState = "running"
  })
}

// Glow button effect
const glowButtons = document.querySelectorAll(".glow-btn")
glowButtons.forEach((button) => {
  button.addEventListener("mouseenter", function () {
    this.style.boxShadow = "0 0 50px rgba(253, 111, 1, 0.4)"
  })

  button.addEventListener("mouseleave", function () {
    this.style.boxShadow = "var(--shadow-glow)"
  })
})

// Social links hover effect
const socialLinks = document.querySelectorAll(".social-link")
socialLinks.forEach((link) => {
  link.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px) scale(1.1)"
    this.style.boxShadow = "0 10px 20px rgba(253, 111, 1, 0.2)"
  })

  link.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)"
    this.style.boxShadow = "none"
  })
})

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect on load (uncomment to enable)
// window.addEventListener('load', function() {
//     const heroTitle = document.querySelector('.hero-title');
//     if (heroTitle) {
//         typeWriter(heroTitle, 'Issue Digital Certificates with Blockchain', 50);
//     }
// });

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
  // Navbar scroll effect
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (scrollTop > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
}, 16)

window.addEventListener("scroll", throttledScrollHandler)

// Preload critical images
const preloadImages = () => {
  const images = ["images/logo-ci.jpg"]

  images.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

// Initialize preloading
preloadImages()

// Error handling for external links
document.addEventListener("click", (e) => {
  if (e.target.matches('a[href^="http"]')) {
    e.target.setAttribute("rel", "noopener noreferrer")
  }
})

console.log("🚀 Certified Items website loaded successfully!")
