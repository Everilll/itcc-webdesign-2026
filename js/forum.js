/**
 * forum.js Logic localStorage untuk forum diskusi
 * Menggabungkan dummy posts (DATA_FORUM_STARTER dari data.js)
 * dengan posts dari localStorage, lalu render ke DOM.
 *
 * Dipakai di: forum.html (di-load SEBELUM main.js)
 */

(function () {
  "use strict";

  var STORAGE_KEY = "gdc_forum_posts";

  // 1. HELPER FUNCTIONS

  /**
   * Format tanggal ISO ke format relatif (x jam/hari yang lalu).
   */
  function timeAgo(dateString) {
    var now = new Date();
    var date = new Date(dateString);
    var diff = Math.floor((now - date) / 1000);

    if (diff < 60) return "Baru saja";
    if (diff < 3600) return Math.floor(diff / 60) + " menit yang lalu";
    if (diff < 86400) return Math.floor(diff / 3600) + " jam yang lalu";
    if (diff < 2592000) return Math.floor(diff / 86400) + " hari yang lalu";

    var bulan = [
      "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
      "Jul", "Agt", "Sep", "Okt", "Nov", "Des",
    ];
    return date.getDate() + " " + bulan[date.getMonth()] + " " + date.getFullYear();
  }

  /**
   * Generate simple unique ID.
   */
  function generateId() {
    return "forum-user-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
  }

  // 2. LOCALSTORAGE CRUD

  /** Ambil semua user posts dari localStorage. */
  function getUserPosts() {
    try {
      var data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn("forum.js: Gagal membaca localStorage", e);
      return [];
    }
  }

  /** Simpan array user posts ke localStorage. */
  function saveUserPosts(posts) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    } catch (e) {
      console.warn("forum.js: Gagal menyimpan ke localStorage", e);
    }
  }

  /** Tambah post baru ke localStorage. */
  function addPost(nama, judul, isi, kategori) {
    var posts = getUserPosts();
    var newPost = {
      id: generateId(),
      nama: nama,
      judul: judul,
      isi: isi,
      kategori: kategori || "lainnya",
      tanggal: new Date().toISOString(),
      komentar: 0,
      suka: 0,
      isUser: true,
    };
    posts.unshift(newPost);
    saveUserPosts(posts);
    return newPost;
  }

  /** Toggle suka pada post (by id). */
  function toggleSuka(postId) {
    var likedKey = "gdc_liked_" + postId;
    var isLiked = localStorage.getItem(likedKey) === "1";

    var userPosts = getUserPosts();
    var found = false;
    for (var i = 0; i < userPosts.length; i++) {
      if (userPosts[i].id === postId) {
        userPosts[i].suka = (userPosts[i].suka || 0) + (isLiked ? -1 : 1);
        if (userPosts[i].suka < 0) userPosts[i].suka = 0;
        found = true;
        break;
      }
    }
    if (found) saveUserPosts(userPosts);

    // Toggle liked state
    if (isLiked) {
      localStorage.removeItem(likedKey);
    } else {
      localStorage.setItem(likedKey, "1");
    }

    return !isLiked;
  }

  /** Cek apakah post sudah di-like user. */
  function isPostLiked(postId) {
    return localStorage.getItem("gdc_liked_" + postId) === "1";
  }

  // 3. RENDER POSTS

  /**
   * Gabung starter posts + user posts, urutkan berdasarkan tanggal (terbaru dulu),
   * lalu render ke #forum-list.
   * @param {string} filterKategori — "semua" atau nama kategori
   */
  function renderAllPosts(filterKategori) {
    var $list = $("#forum-list");
    if (!$list.length) return;

    // Gabungkan data
    var starterPosts =
      typeof DATA_FORUM_STARTER !== "undefined" ? DATA_FORUM_STARTER : [];
    var userPosts = getUserPosts();
    var allPosts = starterPosts.concat(userPosts);

    // Urutkan: terbaru dulu
    allPosts.sort(function (a, b) {
      return new Date(b.tanggal) - new Date(a.tanggal);
    });

    // Filter
    if (filterKategori && filterKategori !== "semua") {
      allPosts = allPosts.filter(function (post) {
        return post.kategori === filterKategori;
      });
    }

    // Clear dan render
    $list.empty();

    if (allPosts.length === 0) {
      $list.html(
        '<div class="forum-empty" data-aos="fade-up">' +
          '<i class="bx bx-message-square-dots"></i>' +
          "<p>Belum ada diskusi untuk kategori ini. Mulai diskusi pertama!</p>" +
        "</div>"
      );
      return;
    }

    allPosts.forEach(function (post, i) {
      var liked = isPostLiked(post.id);
      var likedClass = liked ? " forum-post__suka--active" : "";
      var sukaCount = post.suka || 0;
      if (liked && !post.isUser) {
        sukaCount = (post.suka || 0) + 1;
      }

      var delay = Math.min(i * 80, 400);
      var isNewBadge = post.isUser
        ? '<span class="forum-post__badge">Baru</span>'
        : "";

      var html =
        '<article class="forum-post" data-aos="fade-up" data-aos-delay="' + delay +
          '" data-id="' + post.id + '" data-kategori="' + post.kategori + '">' +
          '<div class="forum-post__header">' +
            '<div class="forum-post__author">' +
              '<span class="forum-post__avatar"><i class="bx bxs-user-circle"></i></span>' +
              '<span class="forum-post__nama">Oleh ' + escapeHtml(post.nama) + "</span>" +
              '<span class="forum-post__tanggal">&bull; ' + timeAgo(post.tanggal) + "</span>" +
            "</div>" +
            isNewBadge +
          "</div>" +
          '<h3 class="forum-post__judul">' + escapeHtml(post.judul) + "</h3>" +
          '<p class="forum-post__isi">' + escapeHtml(post.isi) + "</p>" +
          '<div class="forum-post__footer">' +
            '<span class="forum-post__komentar">' +
              '<i class="bx bx-message-square-detail"></i> ' +
              (post.komentar || 0) + " Komentar" +
            "</span>" +
            '<button class="forum-post__suka' + likedClass + '" data-id="' + post.id + '">' +
              '<i class="bx ' + (liked ? "bxs-heart" : "bx-heart") + '"></i> ' +
              sukaCount + " Suka" +
            "</button>" +
          "</div>" +
        "</article>";

      $list.append(html);
    });

    // Refresh AOS
    if (typeof AOS !== "undefined") AOS.refresh();
  }

  /**
   * Escape HTML to prevent XSS dari user input.
   */
  function escapeHtml(text) {
    if (!text) return "";
    var map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return text.replace(/[&<>"']/g, function (m) {
      return map[m];
    });
  }

  // 4. EVENT HANDLERS

  $(document).ready(function () {
    // Cek apakah kita ada di halaman forum
    var isForumPage = window.location.pathname.indexOf("forum") !== -1;
    if (!isForumPage) return;

    // -- 4a. Initial render --
    renderAllPosts("semua");

    // -- 4b. Form submit --
    $("#form-diskusi").on("submit", function (e) {
      e.preventDefault();

      var $form = $(this);
      var nama = $.trim($form.find("#nama").val());
      var judul = $.trim($form.find("#judul").val());
      var isi = $.trim($form.find("#isi").val());

      // Validasi
      if (!nama || !judul || !isi) {
        showToast("Mohon lengkapi semua field!", "error");
        return;
      }

      if (nama.length > 50) {
        showToast("Nama maksimal 50 karakter.", "error");
        return;
      }

      if (judul.length > 120) {
        showToast("Judul maksimal 120 karakter.", "error");
        return;
      }

      // Deteksi kategori dari isi (sederhana)
      var kategori = detectKategori(judul + " " + isi);

      // Simpan
      addPost(nama, judul, isi, kategori);

      // Reset form
      $form[0].reset();

      // Re-render dengan filter aktif saat ini
      var activeFilter = $(".forum-filter .filter-btn.active").data("kategori") || "semua";
      renderAllPosts(activeFilter);

      // Scroll ke post baru
      $("html, body").animate(
        { scrollTop: $("#forum-list").offset().top - 100 },
        500
      );

      showToast("Diskusi berhasil dikirim! 🎉", "success");
    });

    // -- 4c. Filter kategori --
    $(".forum-filter .filter-btn").on("click", function () {
      $(".forum-filter .filter-btn").removeClass("active");
      $(this).addClass("active");

      var kategori = $(this).data("kategori");
      renderAllPosts(kategori);
    });

    // -- 4d. Like button (event delegation) --
    $("#forum-list").on("click", ".forum-post__suka", function () {
      var $btn = $(this);
      var postId = $btn.data("id");
      var nowLiked = toggleSuka(postId);

      // Update UI tanpa full re-render
      var $icon = $btn.find("i");
      var currentCount = parseInt($btn.text().replace(/\D/g, ""), 10) || 0;

      if (nowLiked) {
        $btn.addClass("forum-post__suka--active");
        $icon.removeClass("bx-heart").addClass("bxs-heart");
        $btn.html('<i class="bx bxs-heart"></i> ' + (currentCount + 1) + " Suka");
      } else {
        $btn.removeClass("forum-post__suka--active");
        $icon.removeClass("bxs-heart").addClass("bx-heart");
        $btn.html('<i class="bx bx-heart"></i> ' + Math.max(0, currentCount - 1) + " Suka");
      }

      // Tambah micro animation
      $btn.addClass("forum-post__suka--pop");
      setTimeout(function () {
        $btn.removeClass("forum-post__suka--pop");
      }, 300);
    });
  });

  // 5. UTILITAS TAMBAHAN

  /**
   * Deteksi kategori otomatis dari teks (sederhana, keyword-based).
   */
  function detectKategori(text) {
    var lower = text.toLowerCase();
    var hardwareKeywords = [
      "server", "rack", "hardware", "cooling", "liquid", "pendingin",
      "panel surya", "solar", "baterai", "battery", "ups", "pdu",
      "fan", "kipas", "heatsink",
    ];
    var softwareKeywords = [
      "monitoring", "software", "grafana", "prometheus", "dashboard",
      "pue", "ai", "machine learning", "algoritma", "script",
      "open source", "tools", "docker", "virtualisasi",
    ];

    for (var i = 0; i < hardwareKeywords.length; i++) {
      if (lower.indexOf(hardwareKeywords[i]) !== -1) return "hardware";
    }
    for (var j = 0; j < softwareKeywords.length; j++) {
      if (lower.indexOf(softwareKeywords[j]) !== -1) return "software";
    }
    return "lainnya";
  }

  /**
   * Toast notification sederhana.
   */
  function showToast(message, type) {
    // Hapus toast lama jika ada
    $(".forum-toast").remove();

    var iconClass = type === "success" ? "bx-check-circle" : "bx-error-circle";
    var $toast = $(
      '<div class="forum-toast forum-toast--' + type + '">' +
        '<i class="bx ' + iconClass + '"></i>' +
        "<span>" + message + "</span>" +
      "</div>"
    );

    $("body").append($toast);

    // Animate in
    setTimeout(function () {
      $toast.addClass("forum-toast--show");
    }, 10);

    // Auto dismiss
    setTimeout(function () {
      $toast.removeClass("forum-toast--show");
      setTimeout(function () {
        $toast.remove();
      }, 400);
    }, 3000);
  }
})();
