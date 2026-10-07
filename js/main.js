/* ================================================================
   MAIN.JS — Maurice Portfolio
================================================================ */

// ── Campaign Data ─────────────────────────────────────────────
const campaigns = [
  {
    id: 1,
    brand: "Adidas",
    title: "Summer Campaign 2024",
    category: "Fashion / Sports",
    description: "Full social media campaign across Instagram and TikTok. Directed, shot and edited 12 short-form videos and 30+ stills for the summer collection launch in Germany.",
    views: "18.2M",
    engagement: "4.7%",
    platforms: "Instagram, TikTok",
    image: "images/hero1.jpg"
  },
  {
    id: 2,
    brand: "Nike",
    title: "Just Do It — Berlin",
    category: "Sports",
    description: "City-specific campaign for the Berlin marathon season. Raw, documentary-style content that captured the energy of the city's running culture.",
    views: "24.1M",
    engagement: "5.2%",
    platforms: "Instagram, YouTube Shorts",
    image: "images/hero2.jpg"
  },
  {
    id: 3,
    brand: "Gymshark",
    title: "Change Your Story",
    category: "Fitness / Lifestyle",
    description: "UGC-style transformation content series. 6-part video narrative following real athletes through their daily training routines.",
    views: "11.8M",
    engagement: "6.1%",
    platforms: "TikTok, Instagram",
    image: "images/hero4.jpg"
  },
  {
    id: 4,
    brand: "Red Bull",
    title: "Give You Wings — Live",
    category: "Energy / Events",
    description: "Behind-the-scenes and event coverage for the Red Bull Cliff Diving World Series. Shot on location in Oslo and Lisbon.",
    views: "31.5M",
    engagement: "3.9%",
    platforms: "TikTok, Instagram, YouTube",
    image: "https://picsum.photos/seed/redbull-live/800/600"
  },
  {
    id: 5,
    brand: "Dior",
    title: "J'adore — Summer Edit",
    category: "Luxury / Beauty",
    description: "Aspirational lifestyle content for the J'adore fragrance summer edition. High-fashion aesthetic with golden-hour cinematography.",
    views: "8.4M",
    engagement: "4.3%",
    platforms: "Instagram",
    image: "images/hero3.jpg"
  },
  {
    id: 6,
    brand: "Spotify",
    title: "Wrapped 2024",
    category: "Tech / Music",
    description: "Creator-led content for Spotify Wrapped launch. 15 short-form videos featuring European artists and their top listeners.",
    views: "42.0M",
    engagement: "7.8%",
    platforms: "TikTok, Instagram, YouTube Shorts",
    image: "https://picsum.photos/seed/spotify-wrapped/800/600"
  },
  {
    id: 7,
    brand: "Zara",
    title: "New Season Drop",
    category: "Fashion",
    description: "Fast-turnaround campaign for Zara's autumn collection. 3-day shoot in Barcelona, 20 pieces, 60+ deliverables across all formats.",
    views: "15.3M",
    engagement: "4.1%",
    platforms: "Instagram, Pinterest",
    image: "https://picsum.photos/seed/zara-aw24/800/600"
  },
  {
    id: 8,
    brand: "Samsung",
    title: "Galaxy S25 Launch",
    category: "Technology",
    description: "Product launch content strategy and execution for the German market. Comparison content, day-in-the-life formats, and tech-review style videos.",
    views: "19.7M",
    engagement: "3.4%",
    platforms: "YouTube, TikTok, Instagram",
    image: "https://picsum.photos/seed/samsung-s25/800/600"
  },
  {
    id: 9,
    brand: "Puma",
    title: "Forever Faster",
    category: "Sports / Fashion",
    description: "Street-style athletic campaign with real runners from Berlin and Hamburg. Gritty, urban aesthetic that resonated strongly with Gen Z audiences.",
    views: "13.6M",
    engagement: "5.5%",
    platforms: "TikTok, Instagram",
    image: "images/hero5.jpg"
  },
  {
    id: 10,
    brand: "Levi's",
    title: "501 — Timeless Edit",
    category: "Fashion",
    description: "Heritage brand meets new generation. Mini-documentary on what 501s mean to young people in 2024, shot across four European cities.",
    views: "9.2M",
    engagement: "5.9%",
    platforms: "Instagram, YouTube",
    image: "https://picsum.photos/seed/levis-501/800/600"
  },
  {
    id: 11,
    brand: "Apple",
    title: "Shot on iPhone",
    category: "Technology / Lifestyle",
    description: "Creator-contribution to Apple's Shot on iPhone campaign. Urban night photography series exploring Berlin's underground art scene.",
    views: "28.4M",
    engagement: "4.6%",
    platforms: "Instagram, Apple.com",
    image: "https://picsum.photos/seed/apple-iphone/800/600"
  },
  {
    id: 12,
    brand: "Balenciaga",
    title: "Speed Runners",
    category: "Luxury / Fashion",
    description: "Experimental fashion-forward content series for the Speed Runner sneaker line. Surrealist visual language, minimal text, maximum impact.",
    views: "7.1M",
    engagement: "6.7%",
    platforms: "Instagram, TikTok",
    image: "https://picsum.photos/seed/balenciaga-speed/800/600"
  }
];

// ── Navbar Scroll ─────────────────────────────────────────────
function initNavbar() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Burger menu
  const burger = document.querySelector('.nav__burger');
  const mobileMenu = document.querySelector('.nav__mobile');
  if (!burger || !mobileMenu) return;

  burger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
    burger.querySelectorAll('span').forEach((s, i) => {
      if (open) {
        if (i === 0) { s.style.transform = 'rotate(45deg) translate(4px, 4.5px)'; }
        if (i === 1) { s.style.opacity = '0'; s.style.transform = 'scaleX(0)'; }
        if (i === 2) { s.style.transform = 'rotate(-45deg) translate(4px, -4.5px)'; }
      } else {
        s.style.transform = '';
        s.style.opacity = '';
      }
    });
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── Active Nav Link ───────────────────────────────────────────
function initActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html') || (path === '/' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ── Hero Slideshow ────────────────────────────────────────────
function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero__slide');
  if (slides.length < 2) return;

  let current = 0;

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 5000);
}

// ── Scroll Reveal ─────────────────────────────────────────────
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
}

// ── Portfolio Grid ─────────────────────────────────────────────
function initPortfolioGrid() {
  const grid = document.querySelector('.portfolio-grid');
  if (!grid) return;

  campaigns.forEach((c, i) => {
    const card = document.createElement('div');
    card.className = 'campaign-card reveal';
    if (i > 0) card.classList.add(`reveal-delay-${Math.min(i % 3 + 1, 3)}`);
    card.innerHTML = `
      <span class="campaign-card__badge">${c.brand}</span>
      <img class="campaign-card__thumb" src="${c.image}" alt="${c.title}" loading="lazy">
      <div class="campaign-card__overlay">
        <span class="campaign-card__brand">${c.brand}</span>
        <div class="campaign-card__title">${c.title}</div>
        <div class="campaign-card__cat">${c.category}</div>
      </div>
    `;
    card.addEventListener('click', () => openModal(c));
    grid.appendChild(card);
  });
}

// ── Modal ─────────────────────────────────────────────────────
function initModal() {
  const backdrop = document.getElementById('modal-backdrop');
  if (!backdrop) return;

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  document.getElementById('modal-close')?.addEventListener('click', closeModal);
}

function openModal(campaign) {
  const backdrop = document.getElementById('modal-backdrop');
  if (!backdrop) return;

  document.getElementById('modal-img').src = campaign.image;
  document.getElementById('modal-brand').textContent = campaign.brand;
  document.getElementById('modal-title').textContent = campaign.title;
  document.getElementById('modal-desc').textContent = campaign.description;
  document.getElementById('modal-views').textContent = campaign.views;
  document.getElementById('modal-engagement').textContent = campaign.engagement;
  document.getElementById('modal-platforms').innerHTML = `<strong>Platforms</strong> — ${campaign.platforms}`;

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const backdrop = document.getElementById('modal-backdrop');
  if (!backdrop) return;
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initActiveNav();
  initHeroSlideshow();
  initPortfolioGrid(); // Cards must exist before observer starts
  initScrollReveal();
  initModal();
});
