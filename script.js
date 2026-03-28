// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

  /* =========================
     CUSTOM CURSOR
  ========================= */
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');

  if (cursor && ring) {
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
    });

    function animateCursor() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;

      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';

      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';

      requestAnimationFrame(animateCursor);
    }

    animateCursor();

    document.querySelectorAll('a, button, .menu-card, .t-dot').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        ring.style.width = '55px';
        ring.style.height = '55px';
        ring.style.opacity = '0.3';
      });

      el.addEventListener('mouseleave', () => {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        ring.style.width = '36px';
        ring.style.height = '36px';
        ring.style.opacity = '0.6';
      });
    });
  }

  /* =========================
     HAMBURGER MENU
  ========================= */
  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      this.classList.toggle('open');
    });
  }

  /* =========================
     SCROLL REVEAL
  ========================= */
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach(el => observer.observe(el));
  }

  /* =========================
     TESTIMONIALS
  ========================= */
  const testimonials = [
    {
      q: "Brûlé is the rare place where the atmosphere is as carefully made as the coffee. I leave feeling genuinely restored.",
      a: "— Margot L., Regular Guest"
    },
    {
      q: "I've visited cafés across three continents. Brûlé's cold brew is simply the finest cup I've ever had. No contest.",
      a: "— James R., Coffee Critic"
    },
    {
      q: "The lavender fog changed my relationship with mornings. I can't imagine starting my day anywhere else now.",
      a: "— Elena M., Poet"
    }
  ];

  let current = 0;

  const tq = document.getElementById('testimonial-text');
  const ta = document.getElementById('testimonial-author');
  const dots = document.querySelectorAll('.t-dot');

  function setTestimonial(i) {
    if (!tq || !ta) return;

    current = i;

    tq.style.opacity = 0;
    ta.style.opacity = 0;

    setTimeout(() => {
      tq.textContent = `"${testimonials[i].q}"`;
      ta.textContent = testimonials[i].a;

      tq.style.transition = 'opacity 0.5s';
      ta.style.transition = 'opacity 0.5s';

      tq.style.opacity = 1;
      ta.style.opacity = 1;
    }, 300);

    dots.forEach((d, j) => {
      d.classList.toggle('active', j === i);
    });
  }

  if (tq && ta) {
    setTestimonial(0);

    setInterval(() => {
      setTestimonial((current + 1) % testimonials.length);
    }, 5000);
  }

  /* =========================
     PARALLAX HERO
  ========================= */
  const hero = document.querySelector('.hero-left');

  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      hero.style.transform = `translateY(${scrolled * 0.15}px)`;
    });
  }

});