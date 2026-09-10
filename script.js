// miHoYo ACG Club Website Interactive Logic

function initMihoyoClubWebsite() {
  // Mobile Hamburger Menu Toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.onclick = () => {
      navLinks.classList.toggle('mobile-open');
    };

    // Close menu when clicking nav links
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // Join Dropdown - Mobile Touch Toggle
  const joinDropdowns = document.querySelectorAll('.join-dropdown');
  joinDropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.btn-join');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        // Close other dropdowns
        joinDropdowns.forEach(d => {
          if (d !== dropdown) d.classList.remove('active');
        });
        dropdown.classList.toggle('active');
      });
    }
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.join-dropdown')) {
      joinDropdowns.forEach(d => d.classList.remove('active'));
    }
  });

  // =============================
  // IG QR Code Modal
  // =============================
  const igQrModal = document.getElementById('igQrModal');
  const igQrClose = document.getElementById('igQrClose');
  const igQrTriggers = document.querySelectorAll('.ig-qr-trigger');

  function openIgQrModal() {
    if (igQrModal) {
      igQrModal.classList.add('active');
      // Close any open dropdowns
      joinDropdowns.forEach(d => d.classList.remove('active'));
    }
  }

  function closeIgQrModal() {
    if (igQrModal) {
      igQrModal.classList.remove('active');
    }
  }

  igQrTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openIgQrModal();
    });
  });

  if (igQrClose) {
    igQrClose.addEventListener('click', closeIgQrModal);
  }

  if (igQrModal) {
    igQrModal.addEventListener('click', (e) => {
      if (e.target === igQrModal) {
        closeIgQrModal();
      }
    });
  }

  // =============================
  // DC QR Code Modal
  // =============================
  const dcQrModal = document.getElementById('dcQrModal');
  const dcQrClose = document.getElementById('dcQrClose');
  const dcQrTriggers = document.querySelectorAll('.dc-qr-trigger');

  function openDcQrModal() {
    if (dcQrModal) {
      dcQrModal.classList.add('active');
      // Close any open dropdowns
      joinDropdowns.forEach(d => d.classList.remove('active'));
    }
  }

  function closeDcQrModal() {
    if (dcQrModal) {
      dcQrModal.classList.remove('active');
    }
  }

  dcQrTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openDcQrModal();
    });
  });

  if (dcQrClose) {
    dcQrClose.addEventListener('click', closeDcQrModal);
  }

  if (dcQrModal) {
    dcQrModal.addEventListener('click', (e) => {
      if (e.target === dcQrModal) {
        closeDcQrModal();
      }
    });
  }

  // ESC key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (igQrModal && igQrModal.classList.contains('active')) closeIgQrModal();
      if (dcQrModal && dcQrModal.classList.contains('active')) closeDcQrModal();
    }
  });

  // =============================
  // Hero Slideshow System
  // =============================
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slide-dot');
  const prevBtn = document.getElementById('slidePrev');
  const nextBtn = document.getElementById('slideNext');
  const gameLabel = document.getElementById('slideGameLabel');

  const slideData = [
    { name: '崩壞：星穹鐵道', iconClass: 'hsr' },
    { name: '原神', iconClass: 'genshin' },
    { name: '絕區零', iconClass: 'zzz' },
  ];

  let currentSlide = 0;
  let slideInterval = null;
  const SLIDE_DURATION = 5000; // 5 seconds per slide

  function goToSlide(index, direction) {
    if (index === currentSlide) return;

    // Remove active from current
    const prevSlide = slides[currentSlide];
    prevSlide.classList.remove('active');
    prevSlide.classList.add('exiting');
    setTimeout(() => {
      prevSlide.classList.remove('exiting');
    }, 1300);

    // Reset dot progress animation
    dots[currentSlide].classList.remove('active');
    const prevProgress = dots[currentSlide].querySelector('.dot-progress');
    if (prevProgress) {
      prevProgress.style.animation = 'none';
      prevProgress.offsetHeight; // force reflow
      prevProgress.style.animation = '';
    }

    // Activate new slide
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');

    // Restart dot progress animation
    const newProgress = dots[currentSlide].querySelector('.dot-progress');
    if (newProgress) {
      newProgress.style.animation = 'none';
      newProgress.offsetHeight; // force reflow
      newProgress.style.animation = '';
    }

    // Update game label
    updateGameLabel(currentSlide);
  }

  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next, 'next');
  }

  function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev, 'prev');
  }

  function updateGameLabel(index) {
    if (!gameLabel) return;
    const data = slideData[index];
    const icon = gameLabel.querySelector('.slide-label-icon');
    const text = gameLabel.querySelector('.slide-label-text');

    // Fade out
    gameLabel.classList.remove('visible');

    setTimeout(() => {
      if (icon) {
        icon.className = 'slide-label-icon ' + data.iconClass;
      }
      if (text) {
        text.textContent = data.name;
      }
      // Fade in
      gameLabel.classList.add('visible');
    }, 300);
  }

  function startAutoplay() {
    stopAutoplay();
    slideInterval = setInterval(nextSlide, SLIDE_DURATION);
  }

  function stopAutoplay() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  // Initialize slideshow if slides exist
  if (slides.length > 0) {
    // Bind arrow buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoplay(); // reset timer after manual nav
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoplay(); // reset timer after manual nav
      });
    }

    // Bind dot indicators
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const target = parseInt(dot.getAttribute('data-slide'), 10);
        goToSlide(target);
        startAutoplay(); // reset timer after manual nav
      });
    });

    // Show initial game label
    setTimeout(() => {
      updateGameLabel(0);
    }, 500);

    // Pause on hover, resume on leave
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.addEventListener('mouseenter', stopAutoplay);
      heroSection.addEventListener('mouseleave', startAutoplay);
    }

    // Click left / right region to switch slides
    let isSwiping = false;
    if (heroSection) {
      heroSection.addEventListener('click', (e) => {
        if (isSwiping) return;
        if (e.target.closest('button, a, .slide-dot, .slide-arrow, .join-dropdown')) return;

        const rect = heroSection.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        if (clickX < rect.width / 2) {
          prevSlide();
        } else {
          nextSlide();
        }
        startAutoplay();
      });
    }

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      heroEl.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
          isSwiping = true;
          setTimeout(() => { isSwiping = false; }, 300);
          if (diff > 0) {
            nextSlide();
          } else {
            prevSlide();
          }
          startAutoplay();
        }
      }, { passive: true });
    }

    // Start autoplay
    startAutoplay();
  }


  // =============================
  // Game Tab Switcher
  // =============================
  const tabBtns = document.querySelectorAll('.tab-btn');
  const gameCards = document.querySelectorAll('.game-detail-card');

  tabBtns.forEach(btn => {
    btn.onclick = () => {
      const targetGame = btn.getAttribute('data-game');
      
      // Update Tab Buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show/Hide Game Cards
      gameCards.forEach(card => {
        if (targetGame === 'all' || card.getAttribute('data-game') === targetGame) {
          card.style.display = 'grid';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    };
  });

  // =============================
  // Image Lightbox Modal
  // =============================
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalClose = document.getElementById('modalClose');
  const screenshotBoxes = document.querySelectorAll('.screenshot-box');

  screenshotBoxes.forEach(box => {
    box.onclick = () => {
      const img = box.querySelector('.screenshot-img');
      if (img && modal && modalImg) {
        modalImg.src = img.src;
        modal.classList.add('active');
      }
    };
  });

  if (modalClose) {
    modalClose.onclick = () => {
      modal.classList.remove('active');
    };
  }

  if (modal) {
    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    };
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMihoyoClubWebsite);
} else {
  initMihoyoClubWebsite();
}
