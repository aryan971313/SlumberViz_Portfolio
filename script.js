// ================================
// PREMIUM PORTFOLIO - JAVASCRIPT
// Photographer & Videographer
// ================================

/**
 * HOW TO USE THIS FILE:
 * 
 * This file contains the data for your Gallery and Video sections.
 * You can easily add, remove, or edit items by changing the arrays below.
 * 
 * 1. galleryItems: Controls the "Photography" section.
 * 2. videoItems: Controls the "My Youtube Channel" section.
 */

// ===== THEME TOGGLE =====
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

// Check saved preference or system preference
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

html.setAttribute('data-theme', initialTheme);

// Three-way theme toggle: dark → light → sunset → dark
themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  let newTheme;

  if (currentTheme === 'dark') {
    newTheme = 'light';
  } else if (currentTheme === 'light') {
    newTheme = 'sunset';
  } else {
    newTheme = 'dark';
  }

  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// ===== MOBILE MENU =====
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

mobileMenuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  mobileMenuToggle.classList.toggle('active');
});

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
  });
});

// ===== CUSTOM CURSOR =====
const cursor = document.querySelector('.custom-cursor');
const cursorFollower = document.querySelector('.custom-cursor-follower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

// Smooth follower animation
function animateFollower() {
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;

  cursorFollower.style.left = followerX + 'px';
  cursorFollower.style.top = followerY + 'px';

  requestAnimationFrame(animateFollower);
}
animateFollower();

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .gallery-item');
hoverElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursorFollower.style.width = '60px';
    cursorFollower.style.height = '60px';
  });

  element.addEventListener('mouseleave', () => {
    cursorFollower.style.width = '40px';
    cursorFollower.style.height = '40px';
  });
});

// ===== GALLERY DATA =====
/**
 * CONFIGURATION:
 * - id: Unique number for each item.
 * - title: Title of the photo/project.
 * - category: Must match one of the filter buttons in index.html (portraits, landscapes, events, commercial).
 * - images: Array of image paths. 
 *    - For local images, put them in an 'assets' folder and use: ['assets/my-photo.jpg']
 *    - You can have multiple images for a carousel: ['assets/img1.jpg', 'assets/img2.jpg']
 * - description: Short text appearing in the lightbox.
 */
const galleryItems = [
  {
    id: 1,
    title: 'Portfolio Selection 1',
    category: 'all',
    images: [
      'assets/1.JPG',
      'assets/2.JPG',
      'assets/3.JPG'
    ],
    description: 'Selected works'
  },
  {
    id: 2,
    title: 'Portfolio Selection 2',
    category: 'all',
    images: [
      'assets/4.JPG',
      'assets/5.JPG',
      'assets/6.JPG',
      'assets/7.JPG'
    ],
    description: 'Selected works'
  },
  {
    id: 3,
    title: 'Portfolio Selection 3',
    category: 'all',
    images: [
      'assets/8.JPG',
      'assets/9.JPG',
      'assets/10.JPG'
    ],
    description: 'Selected works'
  },
  {
    id: 4,
    title: 'Portfolio Selection 4',
    category: 'all',
    images: [
      'assets/11.JPG',
      'assets/12.JPG',
      'assets/13.JPG'
    ],
    description: 'Selected works',
    objectFit: 'cover'
  },
  {
    id: 5,
    title: 'Portfolio Selection 5',
    category: 'all',
    images: [
      'assets/14.JPG',
      'assets/15.JPG',
      'assets/16.JPG',
      'assets/17.JPG',
      'assets/18.JPG'
    ],
    description: 'Selected works'
  },
  {
    id: 6,
    title: 'Portfolio Selection 6',
    category: 'all',
    images: [
      'assets/19.JPG',
      'assets/20.JPG'
    ],
    description: 'Selected works'
  },
  {
    id: 7,
    title: 'Portfolio Selection 7',
    category: 'all',
    images: [
      'assets/21.JPG',
      'assets/22.JPG'
    ],
    description: 'Selected works',
    objectFit: 'cover'
  },
  {
    id: 8,
    title: 'Portfolio Selection 8',
    category: 'all',
    images: [
      'assets/23.JPG',
      'assets/24.JPG'
    ],
    description: 'Selected works',
    objectFit: 'cover'
  },
  {
    id: 9,
    title: 'Portfolio Selection 9',
    category: 'all',
    images: [
      'assets/25.JPG',
      'assets/26.JPG',
      'assets/27.JPG'
    ],
    description: 'Selected works'
  },
  {
    id: 10,
    title: 'Portfolio Selection 10',
    category: 'all',
    images: [
      'assets/28.JPG',
      'assets/29.JPG',
      'assets/30.JPG'
    ],
    description: 'Selected works'
  },
  {
    id: 11,
    title: 'Portfolio Selection 11',
    category: 'all',
    images: [
      'assets/31.JPG',
      'assets/32.JPG',
      'assets/33.JPG',
      'assets/34.JPG'
    ],
    description: 'Selected works'
  },
  {
    id: 12,
    title: 'Portfolio Selection 12',
    category: 'all',
    images: [
      'assets/35.JPG',
      'assets/36.JPG',
      'assets/37.JPG',
      'assets/38.JPG',
      'assets/39.JPG'
    ],
    description: 'Selected works'
  }
];

// ===== VIDEO DATA =====
/**
 * CONFIGURATION:
 * - id: Unique number.
 * - title: Video title.
 * - description: Short description.
 * - thumbnail: URL to the thumbnail image.
 * - youtubeId: The ID from the YouTube URL (e.g., for https://www.youtube.com/watch?v=dQw4w9WgXcQ, the ID is dQw4w9WgXcQ).
 * - duration: Video length string (e.g., '10:32').
 */
const videoItems = [
  {
    id: 1,
    title: 'Connect & Create | Photo-Walk in Toronto',
    description: 'Join me on an exciting creative adventure in Toronto as I attend a photo walk meetup. In this vlog, I take you along on this amazing journey!',
    thumbnail: 'https://img.youtube.com/vi/y1FC7494yiU/maxresdefault.jpg',
    youtubeId: 'y1FC7494yiU',
    duration: '8:00'
  },
  {
    id: 2,
    title: 'A New Perspective: Unboxing the Future of My Channel!',
    description: 'Exciting new direction for my content! Watch as I unbox and share my vision for what\'s coming next.',
    thumbnail: 'https://img.youtube.com/vi/rmDWmvyqW6M/maxresdefault.jpg',
    youtubeId: 'rmDWmvyqW6M',
    duration: '11:07'
  },
  {
    id: 3,
    title: 'Relaxing by the Beach in Goderich',
    description: 'Why I Chose Bruce County for My GIS Adventure. A peaceful journey exploring beautiful coastal landscapes.',
    thumbnail: 'https://img.youtube.com/vi/EyZ1GCuhnmw/maxresdefault.jpg',
    youtubeId: 'EyZ1GCuhnmw',
    duration: '6:04'
  },
  {
    id: 4,
    title: 'Moving Out of London, Ontario – A New Chapter Begins',
    description: 'Follow along as I embark on a new journey, leaving London behind for fresh opportunities. Vlog 2 of my adventure!',
    thumbnail: 'https://img.youtube.com/vi/JKrY0griCEo/maxresdefault.jpg',
    youtubeId: 'JKrY0griCEo',
    duration: '10:32'
  },
  {
    id: 5,
    title: 'This Sunset Is For You | Golden Hour in Bruce County',
    description: 'Capturing the breathtaking golden hour moments in Bruce County, Canada. Pure cinematic beauty.',
    thumbnail: 'https://img.youtube.com/vi/gQsNWA3rMrM/maxresdefault.jpg',
    youtubeId: 'gQsNWA3rMrM',
    duration: '7:44'
  },
  {
    id: 6,
    title: 'EYUKALIPTUS - Into My World',
    description: 'A visual journey into my creative world. Experience the artistry and emotion through this cinematic piece.',
    thumbnail: 'https://img.youtube.com/vi/Sc2Hx5LW_24/maxresdefault.jpg',
    youtubeId: 'Sc2Hx5LW_24',
    duration: '1:54'
  },
  {
    id: 7,
    title: 'Brent Faiyaz - Been Away [Slumber Visualizer]',
    description: 'Immersive visual experience set to Brent Faiyaz\'s Been Away on repeat. A perfect blend of music and visuals.',
    thumbnail: 'https://img.youtube.com/vi/59tMb1Yln6g/maxresdefault.jpg',
    youtubeId: '59tMb1Yln6g',
    duration: '3:45'
  },
  {
    id: 8,
    title: 'Euphoria [Visual] - Don Toliver ft Travis Scott & Kaash Paige',
    description: 'Visual masterpiece featuring Don Toliver, Travis Scott, and Kaash Paige. Euphoric vibes captured in motion.',
    thumbnail: 'https://img.youtube.com/vi/OJA73WKRpDo/maxresdefault.jpg',
    youtubeId: 'OJA73WKRpDo',
    duration: '3:12'
  },
  {
    id: 9,
    title: 'Bali [My First Travel Video]',
    description: 'My very first travel video documenting the beauty and culture of Bali. A memorable journey begins here.',
    thumbnail: 'https://img.youtube.com/vi/JcA7GwnYNRc/maxresdefault.jpg',
    youtubeId: 'JcA7GwnYNRc',
    duration: '2:01'
  },
  {
    id: 10,
    title: 'ScHoolboy Q - Dangerous (ft Kid Cudi) [Visual]',
    description: 'Cinematic visual for ScHoolboy Q and Kid Cudi\'s Dangerous. Dark, moody, and captivating.',
    thumbnail: 'https://img.youtube.com/vi/bHWxK4oCG_I/maxresdefault.jpg',
    youtubeId: 'bHWxK4oCG_I',
    duration: '1:27'
  },
  {
    id: 11,
    title: '[lo-fi Visual] Monty Datta - Sing to You (feat Shiloh Dynasty)',
    description: 'Chill lo-fi visual featuring Monty Datta and Shiloh Dynasty. Perfect ambient vibes.',
    thumbnail: 'https://img.youtube.com/vi/mbgjMcSFQCk/maxresdefault.jpg',
    youtubeId: 'mbgjMcSFQCk',
    duration: '0:58'
  },
  {
    id: 12,
    title: '[lo-fi Visual] Unclenathannn - BAD IDEA! (feat Shiloh Dynasty)',
    description: 'Lo-fi visual experience with Unclenathannn featuring Shiloh Dynasty. Moody and atmospheric.',
    thumbnail: 'https://img.youtube.com/vi/hZhKsDvEos8/maxresdefault.jpg',
    youtubeId: 'hZhKsDvEos8',
    duration: '0:43'
  }
];

// ===== RENDER GALLERY =====
const galleryGrid = document.querySelector('.gallery-grid');
let currentFilter = 'all';
let currentLightboxIndex = 0;
let carouselStates = {}; // Track current image index for each gallery item

function renderGallery(filter = 'all') {
  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  galleryGrid.innerHTML = filteredItems.map(item => {
    const hasMultipleImages = item.images.length > 1;

    return `
      <div class="gallery-item" data-id="${item.id}" data-category="${item.category}">
        <div class="gallery-carousel">
          <div class="gallery-images-wrapper" data-item-id="${item.id}">
            ${item.images.map((img, index) => `
              <img src="${img}"
                   alt="${item.title} - Image ${index + 1}"
                   class="gallery-image ${index === 0 ? 'active' : ''} ${item.objectFit === 'cover' ? 'fit-cover' : ''}"
                   loading="lazy">
            `).join('')}
          </div>

          ${hasMultipleImages ? `
            <button class="nav-arrow prev" aria-label="Previous image">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button class="nav-arrow next" aria-label="Next image">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <div class="carousel-dots">
              ${item.images.map((_, index) => `
                <span class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
              `).join('')}
            </div>

            <div class="carousel-counter">
              <span class="current">1</span>/<span class="total">${item.images.length}</span>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  // Add click events to gallery items (lightbox) - ONLY on the image wrapper to avoid triggering on arrows
  document.querySelectorAll('.gallery-images-wrapper').forEach((wrapper, index) => {
    wrapper.addEventListener('click', (e) => {
      // Don't open lightbox if dragging
      if (wrapper.dataset.isDragging === 'true') return;
      openLightbox(index, filteredItems);
    });
  });

  // Add carousel functionality
  initializeCarousels();
}

// ===== CAROUSEL NAVIGATION =====
function initializeCarousels() {
  document.querySelectorAll('.gallery-carousel').forEach(carousel => {
    const wrapper = carousel.querySelector('.gallery-images-wrapper');
    const images = carousel.querySelectorAll('.gallery-image');
    const dots = carousel.querySelectorAll('.dot');
    const counter = carousel.querySelector('.carousel-counter');

    if (images.length <= 1) return; // Skip if only one image

    let currentIndex = 0;
    let startX = 0;
    let isDragging = false;

    // Update carousel display
    function updateCarousel(index) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });

      if (dots.length) {
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
        });
      }

      if (counter) {
        counter.querySelector('.current').textContent = index + 1;
      }

      currentIndex = index;
    }

    // Click dots to navigate
    dots.forEach((dot, index) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        updateCarousel(index);
      });
    });

    // Arrow navigation
    const prevBtn = carousel.querySelector('.nav-arrow.prev');
    const nextBtn = carousel.querySelector('.nav-arrow.next');

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel(newIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const newIndex = (currentIndex + 1) % images.length;
        updateCarousel(newIndex);
      });
    }

    // Touch/Swipe navigation
    wrapper.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });

    wrapper.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
    });

    wrapper.addEventListener('touchend', (e) => {
      if (!isDragging) return;

      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0 && currentIndex < images.length - 1) {
          // Swipe left - next image
          updateCarousel(currentIndex + 1);
        } else if (diff < 0 && currentIndex > 0) {
          // Swipe right - previous image
          updateCarousel(currentIndex - 1);
        }
      }

      isDragging = false;
    });

    // Mouse drag navigation (desktop)
    wrapper.addEventListener('mousedown', (e) => {
      startX = e.clientX;
      isDragging = true;
      e.preventDefault();
    });

    wrapper.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
    });

    wrapper.addEventListener('mouseup', (e) => {
      if (!isDragging) return;

      const endX = e.clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) {
        if (diff > 0 && currentIndex < images.length - 1) {
          updateCarousel(currentIndex + 1);
        } else if (diff < 0 && currentIndex > 0) {
          updateCarousel(currentIndex - 1);
        }
      }

      isDragging = false;
    });

    wrapper.addEventListener('mouseleave', () => {
      isDragging = false;
    });
  });
}

// Initial gallery render
renderGallery();

// ===== FILTER TABS =====
const filterTabs = document.querySelectorAll('.filter-tab');

filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.getAttribute('data-filter');
    currentFilter = filter;
    renderGallery(filter);
  });
});

// ===== LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxTitle = document.querySelector('.lightbox-title');
const lightboxCategory = document.querySelector('.lightbox-category');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

let currentGalleryItems = [];

function openLightbox(index, items) {
  currentGalleryItems = items;
  currentLightboxIndex = index;
  updateLightbox();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function updateLightbox() {
  const item = currentGalleryItems[currentLightboxIndex];
  lightboxImage.src = item.images[0]; // Use first image from array
  lightboxImage.alt = item.title;
  lightboxTitle.textContent = item.title;
  lightboxCategory.textContent = item.category.toUpperCase();
}

function nextImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % currentGalleryItems.length;
  updateLightbox();
}

function prevImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
  updateLightbox();
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', nextImage);
lightboxPrev.addEventListener('click', prevImage);

// Close on background click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;

  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
});

// ===== RENDER VIDEOS =====
const videoGrid = document.querySelector('.video-grid');

function renderVideos() {
  videoGrid.innerHTML = videoItems.map(video => `
    <div class="video-card" data-id="${video.id}">
      <div class="video-thumbnail" data-youtube="${video.youtubeId}">
        <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
        <div class="play-overlay">
          <svg viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
        <div class="duration-badge">${video.duration}</div>
      </div>
      <div class="video-info">
        <h3 class="video-title">${video.title}</h3>
        <p class="video-description">${video.description}</p>
      </div>
    </div>
  `).join('');

  // Add click events to video thumbnails
  document.querySelectorAll('.video-thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
      const youtubeId = this.getAttribute('data-youtube');
      const iframe = document.createElement('iframe');
      iframe.className = 'video-iframe';
      iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;

      this.innerHTML = '';
      this.appendChild(iframe);
    });
  });
}

renderVideos();

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('.section-header, .service-card, .about-image, .about-text').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});





// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ===== NAVBAR SCROLL EFFECT =====
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    nav.style.padding = '12px 40px';
    nav.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.1)';
  } else {
    nav.style.padding = '20px 40px';
    nav.style.boxShadow = 'none';
  }

  lastScroll = currentScroll;
});

// ===== PARALLAX EFFECT =====
const heroBg = document.querySelector('.hero-bg');

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  if (heroBg) {
    heroBg.style.transform = `scale(1.1) translateY(${scrolled * 0.5}px)`;
  }
});

// ===== HIDE SCROLL INDICATOR ON SCROLL =====
const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      scrollIndicator.style.opacity = '0';
    } else {
      scrollIndicator.style.opacity = '1';
    }
  }, { passive: true });
}

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
});

console.log('🎬 Premium Portfolio Loaded Successfully!');
