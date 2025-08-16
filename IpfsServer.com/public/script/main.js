

      // Theme Toggle Functionality
      const themeToggle = document.getElementById("themeToggle");
      const body = document.body;

      // Check for saved theme preference or default to 'dark'
      const currentTheme = localStorage.getItem("theme") || "dark";
      body.setAttribute("data-theme", currentTheme);

      themeToggle.addEventListener("click", () => {
        const currentTheme = body.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        body.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
      });

      // Navbar scroll effect
      const navbar = document.getElementById("navbar");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });

      // Progress bar
      const progressBar = document.getElementById("progressBar");
      window.addEventListener("scroll", () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + "%";
      });

      // Scroll animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, observerOptions);

      // Observe all fade-in elements
      document
        .querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")
        .forEach((el) => {
          observer.observe(el);
        });

      // Accordion functionality
      document.querySelectorAll(".accordion-header").forEach((header) => {
        header.addEventListener("click", () => {
          const item = header.parentElement;
          const isActive = item.classList.contains("active");

          // Close all accordion items
          document
            .querySelectorAll(".accordion-item")
            .forEach((accordionItem) => {
              accordionItem.classList.remove("active");
            });

          // Open clicked item if it wasn't active
          if (!isActive) {
            item.classList.add("active");
          }
        });
      });

      // Back to top button
      const backToTop = document.getElementById("backToTop");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          backToTop.classList.add("visible");
        } else {
          backToTop.classList.remove("visible");
        }
      });

      backToTop.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });

      // Loading animation
      const loader = document.getElementById("loader");
      window.addEventListener("load", () => {
        setTimeout(() => {
          loader.classList.add("hidden");
        }, 1000);
      });

      // Parallax effect for hero section
      window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector(".hero-content");
        if (parallax) {
          const speed = scrolled * 0.5;
          parallax.style.transform = `translateY(${speed}px)`;
        }
      });
    