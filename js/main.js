/**
 * main.js — Logic render & inisialisasi plugin
 * Mengambil data dari data.js, render ke DOM, dan init semua library.
 *
 * Dipakai di: index.html, artikel.html, portfolio.html, forum.html
 */

$(document).ready(function () {
  // 0. HELPER

  /**
   * Cek halaman aktif berdasarkan nama file di URL.
   */
  function getCurrentPage() {
    var path = window.location.pathname;
    if (path.indexOf("artikel") !== -1) return "artikel";
    if (path.indexOf("forum") !== -1) return "forum";
    if (path.indexOf("portfolio") !== -1) return "portfolio";
    return "index";
  }

  /**
   * Generate a CSS-only placeholder gradient based on string hash.
   * Returns an inline style string for background.
   */
  function placeholderBg(text) {
    var hash = 0;
    for (var i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    var hue1 = Math.abs(hash % 60) + 130;
    var hue2 = hue1 + 30;
    return "linear-gradient(135deg, hsl(" + hue1 + ",45%,42%) 0%, hsl(" + hue2 + ",55%,55%) 100%)";
  }

  /**
   * Create a placeholder image div or a real image div if user provided one.
   */
  function renderImage(item, extraClass) {
    var cls = extraClass ? ' ' + extraClass : '';
    // Check if item has a valid image string that is not the default dummy
    var hasRealImage = item.gambar && item.gambar.indexOf("artikel-") === -1 && item.gambar.indexOf("portfolio-") === -1;
    
    if (hasRealImage) {
      return '<div class="' + cls.trim() + '" style="background-image: url(\'' + item.gambar + '\'); background-size: cover; background-position: center;"></div>';
    } else {
      return '<div class="placeholder-img' + cls + '" style="background:' + placeholderBg(item.judul) + '">' +
        '<i class="bx bx-image"></i></div>';
    }
  }

  var page = getCurrentPage();

  // 1. NAVBAR — Sticky pill + mobile toggle + CTA visibility
  (function initNavbar() {
    var $navbar = $(".navbar");
    var $toggle = $(".navbar__toggle");
    var $menu = $(".navbar__menu");

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 60) {
        $navbar.addClass("navbar--scrolled");
      } else {
        $navbar.removeClass("navbar--scrolled");
      }
    });

    $toggle.on("click", function () {
      $menu.toggleClass("navbar__menu--open");
      var $icon = $(this).find("i");
      if ($menu.hasClass("navbar__menu--open")) {
        $icon.removeClass("bx-menu").addClass("bx-x");
      } else {
        $icon.removeClass("bx-x").addClass("bx-menu");
      }
    });

    // Close mobile menu on link click
    $menu.find("a").on("click", function () {
      $menu.removeClass("navbar__menu--open");
      $toggle.find("i").removeClass("bx-x").addClass("bx-menu");
    });

    // Close mobile menu on click outside
    $(document).on("click", function (e) {
      if ($menu.hasClass("navbar__menu--open") &&
          !$(e.target).closest(".navbar__menu, .navbar__toggle").length) {
        $menu.removeClass("navbar__menu--open");
        $toggle.find("i").removeClass("bx-x").addClass("bx-menu");
      }
    });
  })();

  // 2. AOS — Animate On Scroll (semua halaman)
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }

  // 3. HALAMAN UTAMA (index)
  if (page === "index") {

    // -- 3a. HERO: Typed.js --
    (function initHero() {
      var $typed = $(".typed-text");
      if ($typed.length && typeof Typed !== "undefined") {
        new Typed(".typed-text", {
          strings: DATA_HERO.typedStrings,
          typeSpeed: 60,
          backSpeed: 40,
          backDelay: 2000,
          loop: true,
          showCursor: true,
          cursorChar: "|",
        });
      }

      // Update hero subtitle
      $(".hero__subtitle").text(DATA_HERO.subtitle);

      if (DATA_HERO.sumberUrl) {
        var heroSource = '<a href="' + DATA_HERO.sumberUrl + '" target="_blank" class="card-source-link hero-source-link" rel="noopener noreferrer" style="margin-top: 24px;"><i class="bx bx-link-external"></i> ' + (DATA_HERO.sumberLabel || "Sumber") + '</a>';
        $(".hero__subtitle").after(heroSource);
      }

      // GSAP entrance animation
      if (typeof gsap !== "undefined") {
        gsap.from(".hero__content", {
          duration: 1,
          y: 50,
          opacity: 0,
          ease: "power3.out",
        });
        gsap.from(".hero__visual", {
          duration: 1,
          x: 40,
          opacity: 0,
          ease: "power3.out",
          delay: 0.3,
        });
        gsap.from(".hero__badge", {
          duration: 0.6,
          scale: 0.8,
          opacity: 0,
          ease: "back.out(1.7)",
          delay: 0.9,
        });
      }
    })();

    // -- 3b. STATISTIK --
    (function renderStats() {
      var $grid = $(".stats__grid");
      if (!$grid.length || typeof DATA_STATISTIK === "undefined") return;

      $grid.empty();
      DATA_STATISTIK.forEach(function (stat, i) {
        var delay = (i + 1) * 100;
        var sumberHtml = stat.sumberUrl ? '<a href="' + stat.sumberUrl + '" target="_blank" class="card-source-link" rel="noopener noreferrer"><i class="bx bx-link-external"></i> ' + (stat.sumberLabel || "Sumber") + '</a>' : '';
        $grid.append(
          '<div class="stats__card" data-delay="' + delay + '">' +
            '<div class="stats__icon"><i class="bx ' + stat.icon + '"></i></div>' +
            '<h3 class="stats__value">' + stat.nilai + "</h3>" +
            "<p>" + stat.deskripsi + "</p>" +
            sumberHtml +
          "</div>"
        );
      });
    })();

    // -- 3c. FITUR --
    (function renderFeatures() {
      var $grid = $(".features__grid");
      if (!$grid.length || typeof DATA_FITUR === "undefined") return;

      $grid.empty();
      DATA_FITUR.forEach(function (fitur, i) {
        var delay = i * 120;
        var sumberHtml = fitur.sumberUrl ? '<a href="' + fitur.sumberUrl + '" target="_blank" class="card-source-link" rel="noopener noreferrer"><i class="bx bx-link-external"></i> ' + (fitur.sumberLabel || "Sumber") + '</a>' : '';
        $grid.append(
          '<div class="features__item" data-delay="' + delay + '">' +
            '<div class="features__icon"><i class="bx ' + fitur.icon + '"></i></div>' +
            "<h3>" + fitur.judul + "</h3>" +
            "<p>" + fitur.deskripsi + "</p>" +
            sumberHtml +
          "</div>"
        );
      });
    })();

    // -- 3d. WAWASAN TERBARU --
    (function renderWawasan() {
      var $featured = $(".wawasan-featured");
      var $list = $(".wawasan-list");
      if (!$featured.length || !$list.length || typeof DATA_WAWASAN === "undefined") return;

      var feat = DATA_ARTIKEL[DATA_WAWASAN.featuredIndex];
      if (feat) {
        $featured.html(
          renderImage(feat, "wawasan-featured__img") +
          '<div class="wawasan-featured__content">' +
            '<span class="wawasan-featured__kategori">' + feat.kategoriLabel + "</span>" +
            '<span class="wawasan-featured__meta">' + feat.tanggal + " &bull; " + feat.waktuBaca + "</span>" +
            "<h3>" + feat.judul + "</h3>" +
            "<p>" + feat.ringkasan + "</p>" +
            '<a href="artikel.html" class="wawasan-featured__link">Baca Selengkapnya &rarr;</a>' +
          "</div>"
        );
      }

      $list.empty();
      DATA_WAWASAN.sideIndices.forEach(function (idx, i) {
        var art = DATA_ARTIKEL[idx];
        if (!art) return;
        var delay = (i + 1) * 120;
        $list.append(
          '<article class="wawasan-list__item" data-delay="' + delay + '">' +
            '<span class="wawasan-list__kategori">' + art.kategoriLabel + "</span>" +
            "<h4>" + art.judul + "</h4>" +
            "<p>" + art.ringkasan.substring(0, 120) + "...</p>" +
            '<a href="artikel.html">Baca Selengkapnya</a>' +
          "</article>"
        );
      });
    })();

    // -- 3e. CAROUSEL ARTIKEL PREVIEW --
    (function renderArtikelCarousel() {
      var $carousel = $(".artikel-carousel");
      if (!$carousel.length || typeof DATA_ARTIKEL === "undefined") return;

      $carousel.empty();
      DATA_ARTIKEL.slice(0, 4).forEach(function (artikel) {
        $carousel.append(
          '<div class="artikel-card">' +
            renderImage(artikel, "artikel-card__img-wrap") +
            '<div class="artikel-card__body">' +
              '<span class="artikel-card__kategori">' + artikel.kategoriLabel + "</span>" +
              "<h3>" + artikel.judul + "</h3>" +
              "<p>" + artikel.ringkasan + "</p>" +
              '<a href="artikel.html" class="artikel-card__link">Baca Selengkapnya &rarr;</a>' +
            "</div>" +
          "</div>"
        );
      });

      // Init OwlCarousel
      if ($.fn.owlCarousel) {
        $carousel.owlCarousel({
          loop: true,
          margin: 24,
          nav: true,
          navText: [
            '<i class="bx bx-chevron-left"></i>',
            '<i class="bx bx-chevron-right"></i>',
          ],
          dots: true,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          responsive: {
            0: { items: 1 },
            600: { items: 2 },
            960: { items: 3 },
          },
        });
      }
    })();

    // -- 3f. CTA --
    (function renderCTA() {
      var $cta = $(".cta-komunitas");
      if (!$cta.length || typeof DATA_CTA === "undefined") return;
      $cta.find("h2").text(DATA_CTA.heading);
      $cta.find("p").first().text(DATA_CTA.deskripsi);
    })();
    // -- 3g. FAQ --
    (function renderFAQ() {
      var $faqList = $("#faq-list");
      if (!$faqList.length || typeof DATA_FAQ === "undefined") return;

      $faqList.empty();
      DATA_FAQ.forEach(function (faq, index) {
        var activeClass = index === 0 ? " active" : "";
        $faqList.append(
          '<div class="faq__item' + activeClass + '">' +
            '<button class="faq__question">' +
              '<span>' + faq.pertanyaan + '</span>' +
              "<i class='bx bx-chevron-down'></i>" +
            '</button>' +
            '<div class="faq__answer">' +
              '<div class="faq__answer-inner">' +
                '<p>' + faq.jawaban + '</p>' +
              '</div>' +
            '</div>' +
          '</div>'
        );
      });
    })();

  } // end index

  // ============================================================
  // 4. HALAMAN ARTIKEL
  // ============================================================
  if (page === "artikel") {

    // -- 4a. Render artikel list --
    (function renderArtikelList() {
      var $list = $("#artikel-list");
      if (!$list.length || typeof DATA_ARTIKEL === "undefined") return;

      $list.empty();
      DATA_ARTIKEL.forEach(function (artikel) {
        var detailId = "detail-" + artikel.id;
        $list.append(
          '<article class="artikel-card" data-aos="fade-up" data-kategori="' + artikel.kategori + '">' +
            renderImage(artikel, "artikel-card__img-wrap") +
            '<div class="artikel-card__body">' +
              '<span class="artikel-card__kategori">' + artikel.kategoriLabel + "</span>" +
              "<h3>" + artikel.judul + "</h3>" +
              "<p>" + artikel.ringkasan + "</p>" +
              '<a href="#" class="artikel-card__link" data-fancybox data-src="#' + detailId + '">Baca Selengkapnya &rarr;</a>' +
            "</div>" +
          "</article>"
        );

        // Fancybox inline detail
        $("body").append(
          '<div id="' + detailId + '" class="artikel-detail" style="display:none; max-width:720px; padding:36px;">' +
            artikel.konten +
          "</div>"
        );
      });

      if (typeof AOS !== "undefined") AOS.refresh();
    })();

    // -- 4b. Filter --
    (function initArtikelFilter() {
      $(".artikel-filter").on("click", ".filter-btn", function () {
        $(".artikel-filter .filter-btn").removeClass("active");
        $(this).addClass("active");

        var kategori = $(this).data("kategori");
        var $cards = $("#artikel-list .artikel-card");

        if (kategori === "semua") {
          $cards.fadeIn(300);
        } else {
          $cards.hide();
          $cards.filter('[data-kategori="' + kategori + '"]').fadeIn(300);
        }
      });
    })();

    // -- 4c. Fancybox --
    if (typeof Fancybox !== "undefined") {
      Fancybox.bind("[data-fancybox]", {
        animated: true,
        dragToClose: false,
        mainClass: "fancybox-artikel",
      });
    }
  }

  // 5. HALAMAN PORTFOLIO
  if (page === "portfolio") {

    (function renderPortfolioGrid() {
      var $grid = $("#portfolio-grid");
      if (!$grid.length || typeof DATA_PORTFOLIO === "undefined") return;

      $grid.empty();
      DATA_PORTFOLIO.forEach(function (item, i) {
        var delay = i * 100;
        $grid.append(
          '<div class="portfolio-card" data-aos="fade-up" data-aos-delay="' + delay + '"' +
            ' data-fancybox="gallery" data-caption="<strong>' + item.judul + '</strong><br>' + item.deskripsi + '">' +
            renderImage(item, "portfolio-card__img") +
            '<div class="portfolio-card__overlay">' +
              "<h3>" + item.judul + "</h3>" +
              "<span>" + item.kategori + "</span>" +
            "</div>" +
          "</div>"
        );
      });

      // Fancybox for gallery
      if (typeof Fancybox !== "undefined") {
        Fancybox.bind('[data-fancybox="gallery"]', {
          animated: true,
          Toolbar: {
            display: ["close"],
          },
        });
      }

      if (typeof AOS !== "undefined") AOS.refresh();
    })();
  }

  // 6. GSAP — Micro-animations (conditional per page)
  (function initGSAP() {
    if (typeof gsap === "undefined") return;

    // 7. CUSTOM ANIMATION (Intersection Observer)
    // Animasi tanpa bug untuk elemen dinamis, sebagai pengganti AOS/GSAP
    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function(entries, obs) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var delay = $(entry.target).data("delay") || 0;
            setTimeout(function() {
              $(entry.target).addClass("is-visible");
            }, delay);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

      // Daftarkan elemen-elemen yang butuh animasi
      $(".stats__card, .features__item, .wawasan-list__item, .portfolio-card").each(function() {
        $(this).addClass("fade-up-custom");
        observer.observe(this);
      });
    }
    // GSAP dihapus untuk elemen dinamis/kartu agar tidak konflik dengan Intersection Observer

    // Page header entrance
    if ($(".page-header").length) {
      gsap.from(".page-header h1", {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: "power3.out",
      });
      gsap.from(".page-header p", {
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: "power3.out",
        delay: 0.15,
      });
    }
  })();

  // 8. FAQ ACCORDION
  (function initFAQ() {
    $("#faq").on("click", ".faq__question", function () {
      var $item = $(this).parent();
      var $answer = $(this).next();
      var isActive = $item.hasClass("active");

      // Tutup semua
      $(".faq__item").removeClass("active");
      $(".faq__answer").css("max-height", "0");

      // Buka yang di-klik jika sebelumnya tertutup
      if (!isActive) {
        $item.addClass("active");
        $answer.css("max-height", $answer.prop("scrollHeight") + "px");
      }
    });

    // Inisialisasi: buka item yang sudah aktif dari awal
    var $activeAnswer = $(".faq__item.active .faq__answer");
    if ($activeAnswer.length) {
      $activeAnswer.css("max-height", $activeAnswer.prop("scrollHeight") + "px");
    }
  })();

  // 9. SCROLL-TO-TOP BUTTON
  (function initScrollTop() {
    // Inject button
    $("body").append(
      '<button class="scroll-top" aria-label="Scroll to top"><i class="bx bx-chevron-up"></i></button>'
    );

    var $btn = $(".scroll-top");

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 400) {
        $btn.addClass("visible");
      } else {
        $btn.removeClass("visible");
      }
    });

    $btn.on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
    });
  })();

  // Refresh AOS after all dynamic DOM injections are complete
  if (typeof AOS !== "undefined") {
    setTimeout(function() {
      AOS.refresh();
    }, 100);
  }

});
