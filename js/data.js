/**
 * data.js — Data statis Green Data Center
 * Semua data dummy untuk artikel, portfolio, forum starter,
 * statistik, dan fitur value proposition.
 *
 * Dipakai oleh main.js (render ke DOM) dan forum.js (gabung dengan localStorage).
 */

// ============================================================
// 1. ARTIKEL EDUKASI
// ============================================================
const DATA_ARTIKEL = [
  {
    id: "artikel-1",
    judul: "Optimasi Pendinginan Server dengan Liquid Cooling",
    kategori: "cooling",
    kategoriLabel: "Cooling",
    ringkasan:
      "Pelajari teknik terbaru dalam liquid cooling dan airflow management untuk mengurangi konsumsi energi hingga 40% pada sistem pendinginan data center.",
    konten: `
      <h2>Optimasi Pendinginan Server dengan Liquid Cooling</h2>
      <p><strong>Kategori:</strong> Cooling &bull; <strong>Waktu baca:</strong> 5 menit</p>
      <p>Sistem pendinginan merupakan salah satu konsumen energi terbesar di data center, menyumbang hingga 40% dari total konsumsi listrik. Metode tradisional menggunakan pendinginan udara (air cooling) mulai mencapai batasnya seiring meningkatnya densitas komputasi per rack.</p>
      <h3>Apa itu Liquid Cooling?</h3>
      <p>Liquid cooling menggunakan cairan — biasanya campuran air dan propilen glikol, atau cairan dielektrik khusus — untuk menyerap panas langsung dari komponen server. Dibandingkan udara, cairan memiliki kapasitas termal 25 kali lebih besar, sehingga jauh lebih efisien dalam memindahkan panas.</p>
      <h3>Jenis-jenis Liquid Cooling</h3>
      <ul>
        <li><strong>Direct-to-Chip (DTC):</strong> Cairan disalurkan langsung ke cold plate yang menempel pada CPU/GPU. Metode ini paling umum digunakan di data center skala besar.</li>
        <li><strong>Rear Door Heat Exchanger (RDHx):</strong> Unit pendingin cairan dipasang di pintu belakang rack server, mendinginkan udara panas sebelum keluar rack.</li>
        <li><strong>Immersion Cooling:</strong> Seluruh server direndam dalam cairan dielektrik non-konduktif. Metode paling efisien tapi butuh desain infrastruktur khusus.</li>
      </ul>
      <h3>Dampak terhadap Efisiensi Energi</h3>
      <p>Implementasi liquid cooling dapat menurunkan Power Usage Effectiveness (PUE) dari rata-rata 1.58 (air cooling tradisional) menjadi mendekati 1.03-1.10. Artinya, hampir seluruh listrik yang masuk benar-benar digunakan untuk komputasi, bukan terbuang untuk pendinginan.</p>
      <h3>Studi Kasus: Google DeepMind</h3>
      <p>Google menggunakan AI untuk mengoptimalkan sistem pendinginan di data center mereka, menghasilkan penghematan energi pendinginan hingga 40%. Sistem ini mempelajari pola beban kerja dan kondisi lingkungan untuk memprediksi kebutuhan pendinginan secara real-time.</p>
      <p>Dengan semakin meningkatnya kebutuhan komputasi AI dan cloud computing, liquid cooling bukan lagi opsi eksperimental — melainkan kebutuhan mendasar untuk data center masa depan yang berkelanjutan.</p>
    `,
    gambar: "assets/img/artikel/liquid-cooling.jpg",
    tanggal: "15 Okt 2024",
    waktuBaca: "5 mnt baca",
  },
  {
    id: "artikel-2",
    judul: "Masa Depan AI di Data Center Hijau",
    kategori: "ai",
    kategoriLabel: "AI Monitoring",
    ringkasan:
      "Bagaimana kecerdasan buatan digunakan untuk tidak hanya memproses data, tetapi juga mengoptimalkan konsumsi energi infrastruktur secara real-time.",
    konten: `
      <h2>Masa Depan AI di Data Center Hijau</h2>
      <p><strong>Kategori:</strong> AI Monitoring &bull; <strong>Waktu baca:</strong> 6 menit</p>
      <p>Artificial Intelligence (AI) memainkan peran ganda di data center modern: sebagai beban kerja utama yang membutuhkan komputasi besar, sekaligus sebagai alat untuk mengoptimalkan efisiensi operasional fasilitas itu sendiri.</p>
      <h3>AI untuk Manajemen Energi</h3>
      <p>Model machine learning dapat menganalisis ribuan sensor secara bersamaan — suhu, kelembaban, beban listrik, kecepatan kipas, hingga kondisi cuaca luar — untuk membuat keputusan pendinginan dan distribusi daya yang optimal dalam hitungan milidetik.</p>
      <h3>Predictive Maintenance</h3>
      <p>AI tidak hanya mengoptimalkan operasi saat ini, tapi juga memprediksi kapan peralatan akan mengalami degradasi atau kegagalan. Ini mencegah downtime yang tidak terencana dan memastikan efisiensi optimal sepanjang siklus hidup peralatan.</p>
      <h3>Smart Load Balancing</h3>
      <p>Dengan AI, beban kerja komputasi dapat didistribusikan secara dinamis ke server dan lokasi yang paling efisien secara energi pada waktu tertentu. Misalnya, memindahkan workload ke data center yang sedang menerima energi surya berlimpah di siang hari.</p>
      <h3>Hasil Nyata</h3>
      <p>DeepMind menerapkan reinforcement learning untuk mengontrol sistem pendinginan data center Google, menghasilkan penurunan konsumsi energi pendinginan sebesar 40%. Sistem ini terus belajar dan beradaptasi, semakin efisien seiring waktu.</p>
      <p>Ke depan, AI akan menjadi "otak" di balik setiap data center hijau — mengoordinasikan energi terbarukan, penyimpanan baterai, beban kerja komputasi, dan sistem pendinginan menjadi satu ekosistem yang terintegrasi dan sangat efisien.</p>
    `,
    gambar: "assets/img/artikel/data-center-hijau-artikel.jpg",
    tanggal: "12 Okt 2024",
    waktuBaca: "6 mnt baca",
  },
  {
    id: "artikel-3",
    judul: "Transisi ke Energi Terbarukan untuk Data Center",
    kategori: "energy",
    kategoriLabel: "Renewable Energy",
    ringkasan:
      "Panduan praktis mengintegrasikan tenaga surya dan angin ke dalam infrastruktur kritis tanpa mengorbankan reliability.",
    konten: `
      <h2>Transisi ke Energi Terbarukan untuk Data Center</h2>
      <p><strong>Kategori:</strong> Renewable Energy &bull; <strong>Waktu baca:</strong> 7 menit</p>
      <p>Data center menyumbang sekitar 1-1.5% konsumsi listrik global, setara dengan total konsumsi energi beberapa negara kecil. Transisi ke energi terbarukan bukan sekadar pilihan etis — ini adalah keharusan bisnis dan lingkungan.</p>
      <h3>Sumber Energi Terbarukan untuk Data Center</h3>
      <ul>
        <li><strong>Solar (Tenaga Surya):</strong> Panel surya di atap dan lahan sekitar data center. Banyak operator besar seperti Apple dan Google memasang solar farm khusus untuk fasilitas mereka.</li>
        <li><strong>Wind (Tenaga Angin):</strong> Power Purchase Agreement (PPA) dengan operator wind farm. Microsoft telah menandatangani PPA terbesar di dunia untuk energi angin.</li>
        <li><strong>Hydroelectric (Tenaga Air):</strong> Data center di lokasi strategis dekat pembangkit listrik tenaga air — alasan mengapa banyak data center dibangun di Skandinavia dan Pacific Northwest AS.</li>
      </ul>
      <h3>Tantangan dan Solusi</h3>
      <p>Energi terbarukan bersifat intermiten — matahari tidak selalu bersinar, angin tidak selalu bertiup. Solusinya meliputi:</p>
      <ul>
        <li>Battery Energy Storage Systems (BESS) untuk menyimpan kelebihan energi</li>
        <li>Smart grid integration untuk menyeimbangkan beban</li>
        <li>Diversifikasi sumber energi (solar + wind + grid) untuk redundansi</li>
        <li>AI-driven demand response untuk menyesuaikan beban kerja dengan ketersediaan energi</li>
      </ul>
      <h3>Pencapaian Industri</h3>
      <p>Google mencapai 100% renewable energy matching untuk operasi globalnya sejak 2017. Apple mengoperasikan seluruh data center mereka dengan 100% energi terbarukan. Meta (Facebook) berkomitmen mencapai net-zero emissions untuk seluruh value chain pada 2030.</p>
      <p>Transisi ini menunjukkan bahwa reliability dan sustainability bukan hal yang saling bertentangan — dengan perencanaan yang tepat, keduanya bisa berjalan beriringan.</p>
    `,
    gambar: "assets/img/artikel/energi-terbarukan.webp",
    tanggal: "8 Okt 2024",
    waktuBaca: "7 mnt baca",
  },
  {
    id: "artikel-4",
    judul: "5 Langkah Memulai Transisi Energi di Server Room",
    kategori: "energy",
    kategoriLabel: "Renewable Energy",
    ringkasan:
      "Panduan praktis untuk administrator sistem yang ingin mengurangi jejak karbon server mereka — mulai dari audit energi hingga implementasi monitoring.",
    konten: `
      <h2>5 Langkah Memulai Transisi Energi di Server Room</h2>
      <p><strong>Kategori:</strong> Renewable Energy &bull; <strong>Waktu baca:</strong> 5 menit</p>
      <p>Tidak semua orang mengelola data center skala hyperscale. Banyak perusahaan kecil-menengah dan institusi pendidikan yang masih mengoperasikan server room on-premise. Kabar baiknya, transisi ke operasi yang lebih hijau bisa dimulai dari langkah sederhana.</p>
      <h3>Langkah 1: Audit Konsumsi Energi</h3>
      <p>Mulai dengan mengukur berapa sebenarnya konsumsi energi server room Anda. Pasang smart power meter di PDU (Power Distribution Unit) dan catat konsumsi per rack selama minimal satu bulan. Tanpa data baseline, Anda tidak bisa mengukur kemajuan.</p>
      <h3>Langkah 2: Optimalkan Airflow</h3>
      <p>Implementasikan hot aisle/cold aisle containment. Pastikan tidak ada celah di lantai raised floor yang menyebabkan kebocoran udara dingin. Langkah sederhana ini bisa menghemat 10-25% energi pendinginan tanpa biaya besar.</p>
      <h3>Langkah 3: Konsolidasi dan Virtualisasi</h3>
      <p>Server yang underutilized (beban rata-rata di bawah 15%) harus dikonsolidasi melalui virtualisasi. Menjalankan 10 server virtual di 1 mesin fisik jauh lebih efisien energi daripada 10 mesin fisik terpisah.</p>
      <h3>Langkah 4: Upgrade Hardware secara Bertahap</h3>
      <p>Saat mengganti peralatan yang sudah end-of-life, pilih server dengan sertifikasi ENERGY STAR dan power supply dengan efisiensi 80 PLUS Titanium. CPU dan PSU modern bisa 2-3x lebih efisien energi dibanding generasi 5 tahun lalu.</p>
      <h3>Langkah 5: Pasang Monitoring Real-time</h3>
      <p>Gunakan tools open-source seperti Grafana + Prometheus untuk monitoring real-time konsumsi energi, suhu, dan PUE. Dashboard visual membantu tim operasional mengidentifikasi anomali dan mengambil tindakan proaktif.</p>
    `,
    gambar: "assets/img/artikel/transisi-energi.jpg",
    tanggal: "5 Okt 2024",
    waktuBaca: "5 mnt baca",
  },
  {
    id: "artikel-5",
    judul: "Efisiensi Ekstrim: Pendinginan Iklim Tropis",
    kategori: "cooling",
    kategoriLabel: "Cooling",
    ringkasan:
      "Bagaimana pusat data di Asia Tenggara mengatasi tantangan pendinginan dengan suhu dan kelembaban tinggi sepanjang tahun.",
    konten: `
      <h2>Efisiensi Ekstrim: Pendinginan Iklim Tropis</h2>
      <p><strong>Kategori:</strong> Cooling &bull; <strong>Waktu baca:</strong> 6 menit</p>
      <p>Data center di iklim tropis seperti Indonesia, Singapura, dan Malaysia menghadapi tantangan unik: suhu rata-rata 28-34°C dan kelembaban relatif 70-90% sepanjang tahun. Free cooling (mengandalkan udara luar dingin) yang efektif di Eropa Utara praktis tidak bisa digunakan di sini.</p>
      <h3>Tantangan Spesifik Iklim Tropis</h3>
      <ul>
        <li>Suhu udara luar terlalu tinggi untuk economizer mode</li>
        <li>Kelembaban tinggi meningkatkan risiko kondensasi pada equipment</li>
        <li>Selisih suhu kecil antara udara luar dan target suhu server room (18-27°C menurut ASHRAE)</li>
        <li>Beban pendinginan konstan 24/7/365 tanpa variasi musiman</li>
      </ul>
      <h3>Solusi Inovatif</h3>
      <p><strong>Raised Temperature Operation:</strong> ASHRAE telah memperluas batas suhu operasi yang direkomendasikan. Menjalankan server di suhu 27°C alih-alih 20°C dapat mengurangi energi pendinginan hingga 4% per derajat kenaikan.</p>
      <p><strong>Indirect Evaporative Cooling:</strong> Meskipun tidak bisa menggunakan free cooling langsung, evaporative cooling tidak langsung tetap bisa menurunkan beban CRAC (Computer Room Air Conditioning) secara signifikan.</p>
      <p><strong>Liquid Cooling:</strong> Di iklim tropis, liquid cooling menjadi semakin menarik karena tidak bergantung pada suhu udara ambien. Immersion cooling khususnya mengeliminasi kebutuhan pendinginan ruangan sepenuhnya.</p>
      <h3>Studi Kasus: Data Center Singapura</h3>
      <p>Beberapa operator data center di Singapura berhasil mencapai PUE di bawah 1.3 meskipun berada di iklim tropis, menggunakan kombinasi liquid cooling, AI-optimized HVAC, dan desain bangunan yang mengintegrasikan ventilasi natural untuk area non-kritis.</p>
    `,
    gambar: "assets/img/artikel/efisiensi-ekstrim.png",
    tanggal: "1 Okt 2024",
    waktuBaca: "6 mnt baca",
  },
  {
    id: "artikel-6",
    judul: "Monitoring PUE Real-time dengan Tools Open Source",
    kategori: "ai",
    kategoriLabel: "AI Monitoring",
    ringkasan:
      "Setup dashboard monitoring Power Usage Effectiveness menggunakan Grafana dan Prometheus — cocok untuk home lab maupun server room kantor.",
    konten: `
      <h2>Monitoring PUE Real-time dengan Tools Open Source</h2>
      <p><strong>Kategori:</strong> AI Monitoring &bull; <strong>Waktu baca:</strong> 8 menit</p>
      <p>Power Usage Effectiveness (PUE) adalah metrik standar industri untuk mengukur efisiensi energi data center. PUE dihitung sebagai rasio total energi fasilitas dibagi energi yang benar-benar digunakan oleh peralatan IT.</p>
      <h3>Memahami PUE</h3>
      <ul>
        <li><strong>PUE 2.0:</strong> Sangat tidak efisien — separuh energi terbuang untuk overhead (pendinginan, lighting, dsb)</li>
        <li><strong>PUE 1.6:</strong> Rata-rata industri saat ini</li>
        <li><strong>PUE 1.2:</strong> Efisien — target realistis untuk fasilitas modern</li>
        <li><strong>PUE 1.0:</strong> Sempurna (teoretis) — seluruh energi untuk IT, nol overhead</li>
      </ul>
      <h3>Stack Monitoring Open Source</h3>
      <p>Anda tidak perlu software mahal untuk memonitor PUE secara real-time. Berikut stack open source yang bisa di-setup di home lab:</p>
      <ul>
        <li><strong>Sensor:</strong> Smart plug dengan MQTT (Shelly, Sonoff) atau PDU dengan SNMP</li>
        <li><strong>Data Collection:</strong> Prometheus + node_exporter untuk metrics server, SNMP exporter untuk PDU</li>
        <li><strong>Dashboard:</strong> Grafana dengan panel khusus untuk PUE, konsumsi per-rack, dan trend historis</li>
        <li><strong>Alerting:</strong> Grafana alerting atau Alertmanager untuk notifikasi jika PUE melonjak di atas threshold</li>
      </ul>
      <h3>Cara Menghitung PUE Otomatis</h3>
      <p>Di Grafana, buat calculated field dengan formula sederhana:</p>
      <p><code>PUE = total_facility_power / total_it_equipment_power</code></p>
      <p>Dengan smart plug di PDU utama dan PDU IT, Anda bisa mendapatkan angka PUE real-time yang di-update setiap beberapa detik. Ini jauh lebih berguna daripada pengukuran manual bulanan yang sering dilakukan di fasilitas kecil.</p>
    `,
    gambar: "assets/img/artikel/monitoring-artikel.png",
    tanggal: "28 Sep 2024",
    waktuBaca: "8 mnt baca",
  },
];

// ============================================================
// 2. PORTFOLIO PROYEK
// ============================================================
const DATA_PORTFOLIO = [
  {
    id: "portfolio-1",
    judul: "EcoVault Data Center",
    deskripsi:
      "Desain konseptual data center modular dengan atap panel surya, sistem pendinginan hybrid (liquid + evaporative), dan rainwater harvesting untuk cooling tower. Kapasitas 2MW IT load dengan target PUE 1.10.",
    gambar: "assets/img/portfolio/ecovault.jpg",
    kategori: "Desain Fasilitas",
  },
  {
    id: "portfolio-2",
    judul: "Green Server Rack dengan Vertical Garden",
    deskripsi:
      "Integrasi vertical garden ke dalam desain server rack enclosure, memanfaatkan exhaust heat untuk mempercepat pertumbuhan tanaman sekaligus menyediakan insulation natural. Proyek kolaborasi antara IT dan biologi.",
    gambar: "assets/img/portfolio/garden.jpg",
    kategori: "Inovasi Hijau",
  },
  {
    id: "portfolio-3",
    judul: "Solar-Powered Micro Data Center",
    deskripsi:
      "Micro data center off-grid bertenaga surya untuk komunitas pedesaan. Dilengkapi 20 kWp solar array, battery storage 40 kWh, dan 4 server low-power ARM untuk layanan edge computing dan local CDN.",
    gambar: "assets/img/portfolio/solar.jpg",
    kategori: "Energi Terbarukan",
  },
  {
    id: "portfolio-4",
    judul: "AI-Driven Cooling Optimization",
    deskripsi:
      "Dashboard dan algoritma reinforcement learning untuk mengoptimalkan parameter HVAC di data center secara real-time. Prototype berhasil menurunkan konsumsi energi pendinginan sebesar 35% di test environment.",
    gambar: "assets/img/portfolio/aicooling.png",
    kategori: "AI & Monitoring",
  },
  {
    id: "portfolio-5",
    judul: "Wind-Powered Edge Computing Hub",
    deskripsi:
      "Hub edge computing yang terintegrasi dengan turbine angin skala kecil (10 kW). Dirancang untuk aplikasi IoT pertanian dan monitoring lingkungan di area remote dengan konektivitas grid terbatas.",
    gambar: "assets/img/portfolio/wind.jpg",
    kategori: "Energi Terbarukan",
  },
  {
    id: "portfolio-6",
    judul: "Underwater Cooling System Prototype",
    deskripsi:
      "Prototype sistem pendinginan yang memanfaatkan air laut pada kedalaman 30 meter sebagai heat sink natural. Terinspirasi dari Project Natick Microsoft, diadaptasi untuk skala yang lebih kecil dan terjangkau.",
    gambar: "assets/img/portfolio/underwater.jpg",
    kategori: "Desain Fasilitas",
  },
];

// ============================================================
// 3. FORUM STARTER POSTS (dummy awal, bukan dari localStorage)
// ============================================================
const DATA_FORUM_STARTER = [
  {
    id: "forum-starter-1",
    nama: "Budi Santoso",
    judul: "Implementasi Liquid Cooling pada Server Tua",
    isi: "Saya sedang mencari informasi tentang kelayakan menerapkan sistem liquid cooling pada rack server generasi lama untuk mengurangi konsumsi energi PUE. Apakah ada yang punya pengalaman retrofit liquid cooling ke server yang awalnya didesain untuk air cooling? Budget terbatas, jadi saya lebih condong ke rear-door heat exchanger daripada direct-to-chip. Mohon rekomendasi vendor atau DIY guide kalau ada.",
    kategori: "hardware",
    tanggal: "2024-10-14T10:30:00",
    komentar: 12,
    suka: 34,
  },
  {
    id: "forum-starter-2",
    nama: "Siti Aminah",
    judul: "Monitoring PUE secara Real-time dengan Open Source",
    isi: "Adakah rekomendasi tools open source terbaik untuk memonitoring Power Usage Effectiveness (PUE) secara real-time? Saya sedang membangun dashboard monitoring untuk server room kampus yang punya 6 rack server. Saat ini saya explore Grafana + Prometheus tapi masih bingung soal sensor/exporter yang tepat untuk mengambil data power consumption dari PDU kami (APC branded).",
    kategori: "software",
    tanggal: "2024-10-14T07:45:00",
    komentar: 8,
    suka: 21,
  },
  {
    id: "forum-starter-3",
    nama: "Ahmad Ridwan",
    judul: "Penggunaan Panel Surya untuk Micro Data Center",
    isi: "Diskusi mengenai efisiensi dan ROI penggunaan panel surya sebagai sumber energi utama untuk micro data center di daerah tropis. Mari berbagi perhitungan dan pengalaman. Setup saya: 10 kWp solar panel, 20 kWh LiFePO4 battery, 2 server rack dengan total draw ~3 kW. Di daerah Jawa Barat, irradiance rata-rata ~4.5 kWh/m²/hari.",
    kategori: "hardware",
    tanggal: "2024-10-13T15:20:00",
    komentar: 24,
    suka: 56,
  },
  {
    id: "forum-starter-4",
    nama: "Dewi Lestari",
    judul: "Best Practice Green Hosting untuk Startup",
    isi: "Sebagai startup kecil yang peduli lingkungan, kami ingin memilih provider hosting atau cloud yang benar-benar menggunakan energi terbarukan, bukan sekadar membeli carbon offset. Ada rekomendasi provider di Asia Tenggara yang transparan soal sumber energinya? Atau mungkin ada yang punya pengalaman self-hosting dengan renewable energy?",
    kategori: "lainnya",
    tanggal: "2024-10-12T09:10:00",
    komentar: 15,
    suka: 42,
  },
];

// ============================================================
// 4. STATISTIK (section stats di halaman utama)
// ============================================================
const DATA_STATISTIK = [
  {
    icon: "bx-bolt-circle",
    nilai: "40%",
    deskripsi: "Potensi penghematan energi pendinginan data center melalui optimasi AI.",
    sumberUrl: "https://deepmind.google/discover/blog/deepmind-ai-reduces-google-data-centre-cooling-bill-by-40/",
    sumberLabel: "Riset Google DeepMind"
  },
  {
    icon: "bx-world",
    nilai: "460 TWh",
    deskripsi: "Perkiraan konsumsi listrik tahunan seluruh data center secara global pada tahun 2022.",
    sumberUrl: "https://www.iea.org/energy-system/buildings/data-centres-and-data-transmission-networks",
    sumberLabel: "Laporan IEA"
  },
  {
    icon: "bx-bar-chart-alt-2",
    nilai: "1.58",
    deskripsi: "Rata-rata global rasio efisiensi energi (PUE) di industri data center.",
    sumberUrl: "https://uptimeinstitute.com/resources/research-and-reports/uptime-institute-global-data-center-survey-results",
    sumberLabel: "Uptime Institute Survey"
  },
];

// ============================================================
// 5. FITUR / VALUE PROPOSITION
// ============================================================
const DATA_FITUR = [
  {
    icon: "bx-chip",
    judul: "Smart Cooling",
    deskripsi:
      "Sistem pendingin berbasis AI yang mengoptimalkan suhu secara real-time, sebuah teknologi yang terbukti mampu memangkas daya secara signifikan.",
    sumberUrl: "https://deepmind.google/discover/blog/deepmind-ai-reduces-google-data-centre-cooling-bill-by-40/",
    sumberLabel: "Studi Kasus DeepMind"
  },
  {
    icon: "bx-brain",
    judul: "Load Balancing",
    deskripsi:
      "Distribusi beban kerja komputasi yang dinamis dan efisien, meminimalkan penggunaan daya saat idle dan mengoptimalkan efisiensi energi server.",
    sumberUrl: "https://thenetworkinstallers.com/blog/data-center-energy-consumption-statistics/",
    sumberLabel: "Network Installers Guide"
  },
  {
    icon: "bx-sun",
    judul: "Renewable Power",
    deskripsi:
      "Merespons ancaman krisis energi dari konsumsi jaringan listrik data center global, infrastruktur kami mengadopsi integrasi sumber energi terbarukan.",
    sumberUrl: "https://www.iea.org/energy-system/buildings/data-centres-and-data-transmission-networks",
    sumberLabel: "Data Konsumsi IEA"
  },
  {
    icon: "bx-line-chart",
    judul: "Real-time Monitoring",
    deskripsi:
      "Pantau emisi karbon dan jejak energi melalui dashboard komprehensif untuk melacak Power Usage Effectiveness (PUE) secara akurat.",
    sumberUrl: "https://thenetworkinstallers.com/blog/data-center-energy-consumption-statistics/",
    sumberLabel: "Statistik Konsumsi Energi"
  },
  {
    icon: "bx-recycle",
    judul: "E-Waste Reduction",
    deskripsi:
      "Penerapan siklus hidup perangkat keras sirkular dan strategi manajemen e-waste untuk mengurangi dampak limbah elektronik industri data center.",
    sumberUrl: "https://thenetworkinstallers.com/blog/data-center-energy-consumption-statistics/",
    sumberLabel: "E-Waste Strategy Guide"
  },
  {
    icon: "bx-leaf",
    judul: "Green Certifications",
    deskripsi:
      "Infrastruktur yang dirancang mematuhi standar efisiensi energi global dan sertifikasi lingkungan terakreditasi untuk operasi netral karbon.",
    sumberUrl: "https://thenetworkinstallers.com/blog/data-center-energy-consumption-statistics/",
    sumberLabel: "Standard & Efficiency Benchmarks"
  },
];

// ============================================================
// 6. DATA HERO (Typed.js strings)
// ============================================================
const DATA_HERO = {
  typedStrings: [
    "Berkelanjutan",
    "Hemat Energi",
    "Net-Zero 2030",
    "Cerdas",
  ],
  subtitle:
    "Infrastruktur data center kami dirancang untuk efisiensi maksimal dan dampak iklim minimal. Kami mendukung penuh revolusi teknologi netral karbon global."
};

// ============================================================
// 7. DATA WAWASAN TERBARU (index halaman artikel yang ditampilkan)
//    — referensi ke DATA_ARTIKEL berdasarkan index
// ============================================================
const DATA_WAWASAN = {
  featuredIndex: 1, // "Masa Depan AI di Data Center Hijau"
  sideIndices: [3, 4], // "5 Langkah Memulai..." & "Efisiensi Ekstrim..."
};

// ============================================================
// 8. DATA CTA & FOOTER
// ============================================================
const DATA_CTA = {
  heading: "Siap Berkontribusi?",
  deskripsi:
    "Bergabunglah dengan ribuan ahli dan antusias teknologi hijau lainnya di forum komunitas kami. Bagikan ide, temukan solusi, dan bangun koneksi.",
};

// ============================================================
// 9. DATA FAQ
// ============================================================
const DATA_FAQ = [
  {
    pertanyaan: "Apa itu Green Data Center?",
    jawaban: "Green Data Center adalah pusat data yang dirancang, dibangun, dan dioperasikan dengan tujuan untuk memaksimalkan efisiensi energi dan meminimalkan dampak lingkungan. Hal ini mencakup penggunaan energi terbarukan, sistem pendingin canggih, dan material ramah lingkungan."
  },
  {
    pertanyaan: "Mengapa efisiensi energi penting untuk server?",
    jawaban: "Pusat data konvensional mengonsumsi listrik dalam jumlah sangat besar (hingga 1-2% total listrik global). Dengan meningkatkan efisiensi, kita tidak hanya mengurangi biaya operasional secara drastis, tetapi juga menekan emisi jejak karbon secara signifikan."
  },
  {
    pertanyaan: "Bagaimana cara AI membantu menghemat energi?",
    jawaban: "Kecerdasan Buatan (AI) memantau ribuan metrik suhu dan beban server secara real-time. Melalui machine learning, AI dapat memprediksi kapan dan di mana pendinginan dibutuhkan, mengoptimalkan aliran udara, dan mematikan sistem yang sedang idle otomatis."
  },
  {
    pertanyaan: "Apakah performa server akan menurun?",
    jawaban: "Sama sekali tidak. Justru dengan manajemen suhu yang lebih stabil dan distribusi beban kerja cerdas melalui sistem hybrid, umur pakai perangkat keras akan lebih panjang dan risiko downtime dapat dihindari."
  },
  {
    pertanyaan: "Apa itu PUE dan berapa angka idealnya?",
    jawaban: "PUE (Power Usage Effectiveness) adalah rasio efisiensi energi data center. Semakin mendekati angka 1.0, semakin efisien data center tersebut. Standar industri konvensional berada di sekitar 1.58, sedangkan Green Data Center menargetkan PUE di bawah 1.2."
  },
  {
    pertanyaan: "Apa bedanya Air Cooling dan Liquid Immersion Cooling?",
    jawaban: "Air cooling mengandalkan kipas dan AC untuk mendinginkan ruangan server, yang menyedot banyak energi. Liquid Immersion Cooling merendam komponen server langsung ke dalam cairan dielektrik khusus yang menyerap panas 1.000x lebih efektif dari udara."
  },
  {
    pertanyaan: "Apakah solusi Green Data Center cocok untuk server skala kecil/home server?",
    jawaban: "Sangat cocok. Prinsip dasar seperti optimasi daya saat idle, penggunaan komponen hemat energi (Low TDP), hingga penggunaan panel surya mikro dapat diterapkan dari skala lab pribadi hingga pusat data besar."
  },
  {
    pertanyaan: "Bagaimana cara mulai berkontribusi atau berdiskusi di platform ini?",
    jawaban: "Kamu bisa langsung mengunjungi halaman Forum untuk bertanya, membagikan studi kasus, atau berdiskusi seputar teknologi infrastruktur hijau dengan anggota komunitas lainnya tanpa dipungut biaya."
  }
];