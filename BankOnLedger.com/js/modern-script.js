// Modern Bank On Ledger JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all components
  initPreloader()
  initNavigation()
  initScrollEffects()
  initAnimations()
  initSearchFunctionality()
  initBackToTop()
  initSmoothScrolling()
})

// Preloader
function initPreloader() {
  const preloader = document.getElementById("preloader")

  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.style.opacity = "0"
      setTimeout(() => {
        preloader.style.display = "none"
      }, 500)
    }, 1000)
  })
}

// Navigation
function initNavigation() {
  const navbar = document.getElementById("navbar")
  const navToggle = document.getElementById("nav-toggle")
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
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })

  // Active link highlighting
  window.addEventListener("scroll", () => {
    let current = ""
    const sections = document.querySelectorAll("section[id]")

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active")
      }
    })
  })
}

// Scroll Effects
function initScrollEffects() {
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

  // Observe elements with animation attributes
  const animatedElements = document.querySelectorAll("[data-aos]")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.8s ease-out"
    observer.observe(el)
  })
}

// Animations
function initAnimations() {
  // Floating shapes animation
  const shapes = document.querySelectorAll(".shape")
  shapes.forEach((shape, index) => {
    shape.style.animationDelay = `${index * 0.5}s`
  })

  // Counter animation for stats (if needed)
  function animateCounter(element, target, duration = 2000) {
    let start = 0
    const increment = target / (duration / 16)

    function updateCounter() {
      start += increment
      if (start < target) {
        element.textContent = Math.floor(start)
        requestAnimationFrame(updateCounter)
      } else {
        element.textContent = target
      }
    }

    updateCounter()
  }

  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll(".floating-shapes")

    parallaxElements.forEach((element) => {
      const speed = 0.5
      element.style.transform = `translateY(${scrolled * speed}px)`
    })
  })
}

// Search Functionality
function initSearchFunctionality() {
  const identityInput = document.querySelector(".text_identity")
  const recordIdInput = document.querySelector(".text_record_id")
  const identityButton = document.querySelector(".member-link-app-identity-url")
  const recordIdButton = document.querySelector(".member-link-app-record-id")
  const qrCodeLink = document.querySelector(".member-link-app-identity-qr-code")
  const networkSelect = document.querySelector(".select-network")

  // Update button URLs based on input values
  function updateUrls() {
    const identity = identityInput.value.trim()
    const recordId = recordIdInput.value.trim()
    const network = networkSelect.value
    const networkParam = network ? `&network=${network}` : ""

    if (identity) {
      const identityParts = identity.split("/")
      const identityName = identityParts[0]
      const identityPath = identityParts[1] || ""

      const identityUrl = `https://${identityName}.BankOnLedger.com/${identityPath}?${networkParam}`
      identityButton.href = identityUrl

      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(identityUrl)}`
      qrCodeLink.href = qrUrl
    }

    if (recordId) {
      const recordUrl = `https://record.BankOnLedger.com?search-url-data-entry-id=${recordId}${networkParam}`
      recordIdButton.href = recordUrl
    }
  }

  // Add event listeners
  identityInput.addEventListener("input", updateUrls)
  recordIdInput.addEventListener("input", updateUrls)
  networkSelect.addEventListener("change", updateUrls)

  // Button click handlers
  identityButton.addEventListener("click", (e) => {
    if (!identityInput.value.trim()) {
      e.preventDefault()
      showNotification("Please enter an identity name", "warning")
      identityInput.focus()
    }
  })

  recordIdButton.addEventListener("click", (e) => {
    if (!recordIdInput.value.trim()) {
      e.preventDefault()
      showNotification("Please enter a record ID", "warning")
      recordIdInput.focus()
    }
  })

  qrCodeLink.addEventListener("click", (e) => {
    if (!identityInput.value.trim()) {
      e.preventDefault()
      showNotification("Please enter an identity name first", "warning")
      identityInput.focus()
    }
  })
}

// Back to Top Button
function initBackToTop() {
  const backToTopButton = document.getElementById("backToTop")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("show")
    } else {
      backToTopButton.classList.remove("show")
    }
  })

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
}

// Smooth Scrolling
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80 // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
}

// Utility Functions
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    const offsetTop = section.offsetTop - 80
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === "warning" ? "#ff9800" : "#2196f3"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `

  document.body.appendChild(notification)

  // Show notification
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Auto hide after 5 seconds
  setTimeout(() => {
    hideNotification(notification)
  }, 5000)

  // Close button handler
  const closeBtn = notification.querySelector(".notification-close")
  closeBtn.addEventListener("click", () => {
    hideNotification(notification)
  })
}

function hideNotification(notification) {
  notification.style.transform = "translateX(100%)"
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification)
    }
  }, 300)
}

// Form Validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function validateUrl(url) {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// Loading States
function showLoading(element) {
  const originalText = element.textContent
  element.textContent = "Loading..."
  element.disabled = true
  element.dataset.originalText = originalText
}

function hideLoading(element) {
  element.textContent = element.dataset.originalText || "Submit"
  element.disabled = false
}

// Debounce function for performance
function debounce(func, wait) {
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

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle
  return function () {
    const args = arguments
    
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Export functions for global use
window.scrollToSection = scrollToSection
window.showNotification = showNotification
