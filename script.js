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

  // Game Tab Switcher
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

  // Image Lightbox Modal
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

