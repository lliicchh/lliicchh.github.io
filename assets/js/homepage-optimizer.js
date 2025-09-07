/**
 * Homepage Performance Optimizer
 * Enhances loading performance and user experience
 */

(function() {
  'use strict';

  // Performance monitoring
  const perfMonitor = {
    start: performance.now(),
    
    log: function(event, data = {}) {
      console.log(`[Homepage] ${event}:`, {
        timestamp: performance.now() - this.start,
        ...data
      });
    }
  };

  // Lazy loading for images and content
  const lazyLoader = {
    observer: null,
    
    init: function() {
      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.loadElement(entry.target);
              this.observer.unobserve(entry.target);
            }
          });
        }, {
          rootMargin: '50px',
          threshold: 0.1
        });

        // Observe post items
        document.querySelectorAll('.post-item').forEach(item => {
          this.observer.observe(item);
        });
      }
    },
    
    loadElement: function(element) {
      element.setAttribute('data-loaded', 'true');
      perfMonitor.log('Element lazy loaded', { element: element.tagName });
    }
  };

  // Animation optimizations
  const animationOptimizer = {
    init: function() {
      // Respect user motion preferences
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      if (prefersReducedMotion.matches) {
        document.body.classList.add('reduced-motion');
      }
      
      // Optimize animations for performance
      this.optimizeHeroAnimations();
    },
    
    optimizeHeroAnimations: function() {
      const heroElements = document.querySelectorAll('.hero-content > *');
      
      // Stagger animations for better performance
      heroElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        element.style.willChange = 'transform, opacity';
      });
      
      // Clean up will-change after animations complete
      setTimeout(() => {
        heroElements.forEach(element => {
          element.style.willChange = 'auto';
        });
      }, 2000);
    }
  };

  // Resource preloading
  const resourcePreloader = {
    init: function() {
      this.preloadCriticalResources();
      this.setupResourceHints();
    },
    
    preloadCriticalResources: function() {
      // Preload critical images
      const criticalImages = [
        // Add critical image URLs here
      ];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    },
    
    setupResourceHints: function() {
      // Add DNS prefetch for external domains
      const externalDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];
      
      externalDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      });
    }
  };

  // Font loading optimization
  const fontOptimizer = {
    init: function() {
      if ('fonts' in document) {
        this.optimizeFontLoading();
      }
    },
    
    optimizeFontLoading: function() {
      // Use font-display: swap for better performance
      const font = new FontFace('Inter', 'url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap)', {
        display: 'swap'
      });
      
      font.load().then(() => {
        document.fonts.add(font);
        document.body.classList.add('fonts-loaded');
        perfMonitor.log('Fonts loaded');
      });
    }
  };

  // Intersection Observer for performance monitoring
  const performanceObserver = {
    init: function() {
      if ('PerformanceObserver' in window) {
        this.observePerformance();
      }
    },
    
    observePerformance: function() {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            perfMonitor.log('LCP:', { value: entry.startTime });
          }
          if (entry.entryType === 'first-input-delay') {
            perfMonitor.log('FID:', { value: entry.processingStart - entry.startTime });
          }
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input-delay'] });
    }
  };

  // Initialize all optimizations
  function init() {
    perfMonitor.log('Initializing homepage optimizations');
    
    lazyLoader.init();
    animationOptimizer.init();
    resourcePreloader.init();
    fontOptimizer.init();
    performanceObserver.init();
    
    // Log total initialization time
    window.addEventListener('load', () => {
      perfMonitor.log('Homepage fully loaded', { 
        loadTime: performance.now() - perfMonitor.start 
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose performance utilities globally
  window.homepageOptimizer = {
    perfMonitor,
    lazyLoader,
    animationOptimizer
  };

})();