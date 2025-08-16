// Page Animation Controller
class AnimationController {
  constructor() {
    this.init()
  }

  init() {
    this.setupPageAnimations()
    this.setupScrollAnimations()
    this.setupNavigation()
    this.setupCounters()
    this.setupTypingEffect()
    this.setupTabs()
    this.setupScrollToTop()
    this.setupMobileMenu()
  }

  setupPageAnimations() {
    // Add page enter animation
    document.body.classList.add("page-enter")

    // Stagger animations for elements
    const elements = document.querySelectorAll(".fade-in-up, .slide-in-left, .slide-in-right, .scale-in")
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`
    })
  }

  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "-50px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")
        }
      })
    }, observerOptions)

    // Observe scroll reveal elements
    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el)
    })

    // Observe product cards for staggered animation
    document
      .querySelectorAll(".product-card, .wallet-card, .service-card, .resource-card, .course-card, .value-card")
      .forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`
        observer.observe(card)
      })
  }

  setupNavigation() {
    const navbar = document.getElementById("navbar")

    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        navbar.classList.add("scrolled")
      } else {
        navbar.classList.remove("scrolled")
      }
    })

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault()
        const target = document.querySelector(anchor.getAttribute("href"))
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })
  }

  setupCounters() {
    const counters = document.querySelectorAll("[data-count]")

    const animateCounter = (counter) => {
      const target = Number.parseInt(counter.getAttribute("data-count"))
      const duration = 2000
      const step = target / (duration / 16)
      let current = 0

      const updateCounter = () => {
        current += step
        if (current < target) {
          counter.textContent = Math.floor(current).toLocaleString()
          requestAnimationFrame(updateCounter)
        } else {
          counter.textContent =
            target.toLocaleString() +
            (counter.getAttribute("data-count") === "10000"
              ? "+"
              : counter.getAttribute("data-count") === "1000000"
                ? "+"
                : "+")
        }
      }

      updateCounter()
    }

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target)
          counterObserver.unobserve(entry.target)
        }
      })
    })

    counters.forEach((counter) => {
      counterObserver.observe(counter)
    })
  }

  setupTypingEffect() {
    const typingElements = document.querySelectorAll(".typing-text")

    typingElements.forEach((element) => {
      const text = element.getAttribute("data-text")
      element.textContent = ""

      let i = 0
      const typeWriter = () => {
        if (i < text.length) {
          element.textContent += text.charAt(i)
          i++
          setTimeout(typeWriter, 100)
        } else {
          // Remove cursor after typing is complete
          setTimeout(() => {
            element.style.borderRight = "none"
          }, 1000)
        }
      }

      // Start typing after a delay
      setTimeout(typeWriter, 1000)
    })
  }

  setupTabs() {
    const tabButtons = document.querySelectorAll(".tab-btn")
    const tabContents = document.querySelectorAll(".tab-content")

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetTab = button.getAttribute("data-tab")

        // Remove active class from all buttons and contents
        tabButtons.forEach((btn) => btn.classList.remove("active"))
        tabContents.forEach((content) => content.classList.remove("active"))

        // Add active class to clicked button and corresponding content
        button.classList.add("active")
        const targetContent = document.getElementById(targetTab)
        if (targetContent) {
          targetContent.classList.add("active")

          // Animate tab content
          targetContent.style.opacity = "0"
          targetContent.style.transform = "translateY(20px)"

          setTimeout(() => {
            targetContent.style.transition = "all 0.3s ease"
            targetContent.style.opacity = "1"
            targetContent.style.transform = "translateY(0)"
          }, 50)
        }
      })
    })
  }

  setupScrollToTop() {
    const scrollToTopBtn = document.getElementById("scrollToTop")

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("visible")
      } else {
        scrollToTopBtn.classList.remove("visible")
      }
    })

    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  setupMobileMenu() {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn")
    const navMenu = document.getElementById("navMenu")

    mobileMenuBtn.addEventListener("click", () => {
      mobileMenuBtn.classList.toggle("active")
      navMenu.classList.toggle("active")
    })

    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuBtn.classList.remove("active")
        navMenu.classList.remove("active")
      })
    })
  }
}

// Button Animation Effects
class ButtonEffects {
  constructor() {
    this.setupMorphingButtons()
    this.setupHoverEffects()
  }

  setupMorphingButtons() {
    document.querySelectorAll(".morphing-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const ripple = document.createElement("span")
        const rect = btn.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height)
        const x = e.clientX - rect.left - size / 2
        const y = e.clientY - rect.top - size / 2

        ripple.style.width = ripple.style.height = size + "px"
        ripple.style.left = x + "px"
        ripple.style.top = y + "px"
        ripple.classList.add("ripple")

        btn.appendChild(ripple)

        setTimeout(() => {
          ripple.remove()
        }, 600)
      })
    })
  }

  setupHoverEffects() {
    // Add hover effects to cards
    document
      .querySelectorAll(
        ".product-card, .wallet-card, .service-card, .resource-card, .course-card, .value-card, .screenshot-card",
      )
      .forEach((card) => {
        card.addEventListener("mouseenter", () => {
          card.style.transform = "translateY(-10px) scale(1.02)"
        })

        card.addEventListener("mouseleave", () => {
          card.style.transform = "translateY(0) scale(1)"
        })
      })

    // Add hover effects to buttons
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)"
      })

      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)"
      })
    })
  }
}

// Floating Elements Animation
class FloatingElements {
  constructor() {
    this.createFloatingElements()
  }

  createFloatingElements() {
    const floatingContainer = document.querySelector(".floating-elements")
    if (!floatingContainer) return

    const icons = ["🌐", "🌐", "🌐", "🌐", "🌐", "🌐"]

    const positions = [
      { x: "10%", y: "20%" },
      { x: "80%", y: "30%" },
      { x: "20%", y: "70%" },
      { x: "90%", y: "80%" },
      { x: "60%", y: "15%" },
      { x: "30%", y: "85%" },
    ]

    icons.forEach((icon, index) => {
      const element = document.createElement("div")
      element.textContent = icon
      element.style.position = "absolute"
      element.style.left = positions[index].x
      element.style.top = positions[index].y
      element.style.fontSize = "2rem"
      element.style.opacity = "0.3"
      element.style.animation = `float 8s ease-in-out infinite ${index * 2}s`
      element.style.pointerEvents = "none"

      floatingContainer.appendChild(element)
    })
  }
}

// Particle System
class ParticleSystem {
  constructor() {
    this.canvas = this.createCanvas()
    if (!this.canvas) return
    this.ctx = this.canvas.getContext("2d")
    this.particles = []
    this.init()
  }

  createCanvas() {
    const animatedBg = document.querySelector(".animated-bg")
    if (!animatedBg) return null

    const canvas = document.createElement("canvas")
    canvas.style.position = "absolute"
    canvas.style.top = "0"
    canvas.style.left = "0"
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    canvas.style.pointerEvents = "none"
    canvas.style.opacity = "0.4"
    canvas.style.zIndex = "1"

    animatedBg.appendChild(canvas)
    return canvas
  }

  init() {
    this.resize()
    this.createParticles()
    this.animate()

    window.addEventListener("resize", () => this.resize())
  }

  resize() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }

  createParticles() {
    for (let i = 0; i < 150; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2,
      })
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.particles.forEach((particle, index) => {
      // Update particle position
      particle.x += particle.vx
      particle.y += particle.vy
      particle.pulse += 0.02

      // Wrap around edges
      if (particle.x < 0) particle.x = this.canvas.width
      if (particle.x > this.canvas.width) particle.x = 0
      if (particle.y < 0) particle.y = this.canvas.height
      if (particle.y > this.canvas.height) particle.y = 0

      // Draw particle
      const pulseSize = particle.size + Math.sin(particle.pulse) * 0.5

      this.ctx.beginPath()
      this.ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2)

      const gradient = this.ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, pulseSize * 3)
      gradient.addColorStop(0, `rgba(34, 211, 238, ${particle.opacity})`)
      gradient.addColorStop(0.5, `rgba(34, 211, 238, ${particle.opacity * 0.3})`)
      gradient.addColorStop(1, "rgba(34, 211, 238, 0)")

      this.ctx.fillStyle = gradient
      this.ctx.fill()

      // Draw connections
      this.particles.forEach((otherParticle, otherIndex) => {
        if (index !== otherIndex) {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            this.ctx.beginPath()
            this.ctx.moveTo(particle.x, particle.y)
            this.ctx.lineTo(otherParticle.x, otherParticle.y)
            const opacity = 0.15 * (1 - distance / 120)
            this.ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`
            this.ctx.lineWidth = 0.5
            this.ctx.stroke()
          }
        }
      })
    })

    requestAnimationFrame(() => this.animate())
  }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new AnimationController()
  new ButtonEffects()
  new FloatingElements()
  new ParticleSystem()
})

// Add CSS for ripple effect
const style = document.createElement("style")
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)
