/* ============================================================
   Kansas Prairie Webworks — main.js
   kansasprairiewebworks.com
   ============================================================ */

'use strict';

/* ============================================================
   1. STICKY NAV — adds .scrolled at 80px
   ============================================================ */
(function initStickyNav() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  function handleScroll() {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
})();

/* ============================================================
   2. HAMBURGER TOGGLE
   Drops DOWN as stacked buttons, closes on link/outside/ESC
   ============================================================ */
(function initHamburger() {
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile-menu');
  if (!hamburger || !mobileMenu) return;

  function openMenu() {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('open');
    document.body.style.overflow = '';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
  }

  hamburger.addEventListener('click', function () {
    if (mobileMenu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', function (e) {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-label', 'Open navigation menu');
})();

/* ============================================================
   3. SERVICES DROPDOWN — hover on desktop, tap on mobile
   ============================================================ */
(function initDropdown() {
  const dropdowns = document.querySelectorAll('.navbar__dropdown');
  if (!dropdowns.length) return;

  dropdowns.forEach(function (dd) {
    const toggle = dd.querySelector('a');
    if (!toggle) return;

    toggle.addEventListener('click', function (e) {
      if (window.innerWidth < 769) {
        e.preventDefault();
        const isOpen = dd.classList.contains('open');
        dropdowns.forEach(function (d) { d.classList.remove('open'); });
        if (!isOpen) dd.classList.add('open');
      }
    });
  });

  document.addEventListener('click', function (e) {
    dropdowns.forEach(function (dd) {
      if (!dd.contains(e.target)) dd.classList.remove('open');
    });
  });
})();

/* ============================================================
   4. SMOOTH SCROLL — all anchor links
   ============================================================ */
(function initSmoothScroll() {
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const targetId = link.getAttribute('href').slice(1);
    if (!targetId) return;
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '72', 10);
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  });
})();

/* ============================================================
   5. FAQ ACCORDION — one open at a time
   ============================================================ */
(function initFaqAccordion() {
  function setupAccordions(container) {
    const items = container.querySelectorAll('.faq-item');
    items.forEach(function (item) {
      const btn = item.querySelector('.faq-item__question');
      if (!btn) return;

      btn.setAttribute('aria-expanded', 'false');

      btn.addEventListener('click', function () {
        const isOpen = item.classList.contains('open');

        items.forEach(function (i) {
          i.classList.remove('open');
          const b = i.querySelector('.faq-item__question');
          if (b) b.setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  document.querySelectorAll('.faq-list, .faq-category').forEach(function (container) {
    setupAccordions(container);
  });
})();

/* ============================================================
   6. CONTACT FORM VALIDATION
   ============================================================ */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    let valid = true;

    form.querySelectorAll('.form-error').forEach(function (el) { el.textContent = ''; });

    const name = form.querySelector('#contactName');
    const email = form.querySelector('#contactEmail');
    const message = form.querySelector('#contactMessage');

    if (name && name.value.trim() === '') {
      showError(name, 'Please enter your name.');
      valid = false;
    }

    if (email && !isValidEmail(email.value.trim())) {
      showError(email, 'Please enter a valid email address.');
      valid = false;
    }

    if (message && message.value.trim().length < 10) {
      showError(message, 'Please enter a message (at least 10 characters).');
      valid = false;
    }

    if (!valid) {
      e.preventDefault();
      return;
    }

    const successEl = form.querySelector('.form-success');
    if (successEl) {
      e.preventDefault();
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          form.reset();
          successEl.classList.add('visible');
          successEl.textContent = 'Thank you! We\'ll be in touch within 1 business day.';
        } else {
          successEl.style.background = '#f8d7da';
          successEl.style.color = '#721c24';
          successEl.classList.add('visible');
          successEl.textContent = 'There was an error. Please call us at 785-577-7695 or try again.';
        }
      }).catch(function () {
        successEl.style.background = '#f8d7da';
        successEl.style.color = '#721c24';
        successEl.classList.add('visible');
        successEl.textContent = 'There was an error. Please call us at 785-577-7695.';
      });
    }
  });

  function showError(field, message) {
    const err = field.parentElement.querySelector('.form-error');
    if (err) err.textContent = message;
    field.focus();
  }
})();

/* ============================================================
   7. BLOG INTAKE FORM VALIDATION
   ============================================================ */
(function initBlogForm() {
  const form = document.getElementById('blogIntakeForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    let valid = true;

    form.querySelectorAll('.form-error').forEach(function (el) { el.textContent = ''; });

    const businessName = form.querySelector('#blogBusinessName');
    const deliveryEmail = form.querySelector('#blogDeliveryEmail');

    if (businessName && businessName.value.trim() === '') {
      showBlogError(businessName, 'Please enter your business name.');
      valid = false;
    }

    if (deliveryEmail && !isValidEmail(deliveryEmail.value.trim())) {
      showBlogError(deliveryEmail, 'Please enter a valid delivery email.');
      valid = false;
    }

    if (!valid) {
      e.preventDefault();
      return;
    }

    const successEl = form.querySelector('.form-success');
    if (successEl) {
      e.preventDefault();
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          form.reset();
          successEl.classList.add('visible');
          successEl.textContent = 'Blog intake form submitted! We\'ll follow up within 1 business day.';
        } else {
          successEl.style.background = '#f8d7da';
          successEl.style.color = '#721c24';
          successEl.classList.add('visible');
          successEl.textContent = 'There was an error. Please call us at 785-577-7695.';
        }
      }).catch(function () {
        successEl.style.background = '#f8d7da';
        successEl.style.color = '#721c24';
        successEl.classList.add('visible');
        successEl.textContent = 'There was an error. Please call us at 785-577-7695.';
      });
    }
  });

  function showBlogError(field, message) {
    const err = field.parentElement.querySelector('.form-error');
    if (err) err.textContent = message;
  }
})();

/* ============================================================
   8. INTERSECTION OBSERVER — scroll animations
   ============================================================ */
(function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(function (el) { observer.observe(el); });
})();

/* ============================================================
   9. GEO-BANNER — ipapi.co, Midwest states
   ============================================================ */
const midwestStates = ['KS', 'MO', 'NE', 'OK', 'CO', 'IA'];

async function checkGeoLocation() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    if (data.region_code && !midwestStates.includes(data.region_code)) {
      showGeoBanner(data.region || data.country_name);
    }
  } catch (e) {
    /* Silent fail — never block site load on API error */
  }
}

function showGeoBanner(location) {
  const banner = document.createElement('div');
  banner.className = 'geo-banner';
  banner.innerHTML =
    '<div class="geo-banner__inner">' +
      '<span>🌾 Looks like you\'re visiting from <strong>' + location + '</strong>. ' +
      'We serve Central Kansas — but you\'re always welcome! ' +
      'Know a Kansas business that needs help? ' +
      '<a href="mailto:kansasprairiewebworks@gmail.com">Send them our way.</a></span>' +
      '<button onclick="this.closest(\'.geo-banner\').remove()" aria-label="Close geo banner">✕</button>' +
    '</div>';
  document.body.prepend(banner);
}

document.addEventListener('DOMContentLoaded', checkGeoLocation);

/* ============================================================
   9a. FLOATING FACEBOOK MESSENGER BUTTON
   ============================================================ */
function dismissFbFloat() {
  const el = document.getElementById('fbFloat');
  if (el) {
    el.classList.add('dismissed');
    sessionStorage.setItem('fbFloatDismissed', 'true');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (sessionStorage.getItem('fbFloatDismissed') === 'true') {
    const el = document.getElementById('fbFloat');
    if (el) el.classList.add('dismissed');
  }
});

/* ============================================================
   10. PRICING TOGGLE — Tier 4: $150 maintenance / $350 active
   ============================================================ */
(function initPricingToggle() {
  const toggleBtns = document.querySelectorAll('.pricing-toggle__btn');
  if (!toggleBtns.length) return;

  toggleBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const group = btn.closest('.pricing-card') || btn.closest('.pricing-toggle-group');
      if (!group) return;

      group.querySelectorAll('.pricing-toggle__btn').forEach(function (b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');

      const tier = btn.getAttribute('data-tier');
      const priceEl = group.querySelector('.tier4-price');
      const monthlyEl = group.querySelector('.tier4-monthly-label');
      const featuresList = group.querySelector('.tier4-features');

      if (tier === 'maintenance') {
        if (priceEl) priceEl.textContent = '$150';
        if (monthlyEl) monthlyEl.textContent = '/month — Maintenance';
        if (featuresList) {
          featuresList.querySelectorAll('.active-content-only').forEach(function (li) {
            li.style.display = 'none';
          });
          featuresList.querySelectorAll('.maintenance-only').forEach(function (li) {
            li.style.display = '';
          });
        }
      } else if (tier === 'active') {
        if (priceEl) priceEl.textContent = '$350';
        if (monthlyEl) monthlyEl.textContent = '/month — Active Content';
        if (featuresList) {
          featuresList.querySelectorAll('.active-content-only').forEach(function (li) {
            li.style.display = '';
          });
          featuresList.querySelectorAll('.maintenance-only').forEach(function (li) {
            li.style.display = 'none';
          });
        }
      }
    });
  });
})();

/* ============================================================
   11. PORTFOLIO FILTER
   ============================================================ */
(function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.portfolio-filter__btn');
  const cards = document.querySelectorAll('.portfolio-card');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(function (card) {
        const tag = card.getAttribute('data-category');
        if (filter === 'all' || tag === filter) {
          card.style.display = '';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
})();

/* ============================================================
   12. MONTHLY POSTING TABS
   ============================================================ */
(function initTabs() {
  const tabBtns = document.querySelectorAll('.tabs-nav__btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  if (!tabBtns.length) return;

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      tabPanels.forEach(function (p) { p.classList.remove('active'); });

      btn.classList.add('active');
      const target = btn.getAttribute('data-tab');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });
})();

/* ============================================================
   UTILITY
   ============================================================ */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
