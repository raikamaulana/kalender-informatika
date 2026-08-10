"use strict";

/**
 * Satu-satunya file yang perlu diedit pengurus untuk menambah atau memperbarui event.
 * Format waktu menggunakan waktu lokal Indonesia (tanpa akhiran Z) agar tidak bergeser.
 */

const categoryConfig = Object.freeze({
  himtika: {
    label: "HIMTIKA",
    color: "#24B8B1",
    fallback: "linear-gradient(135deg, #0B403E, #24B8B1)"
  },
  informatika: {
    label: "INFORMATIKA",
    color: "#2CCB91",
    fallback: "linear-gradient(135deg, #0B3A2D, #2CCB91)"
  },
  fasilkom: {
    label: "FASILKOM",
    color: "#D6C26A",
    fallback: "linear-gradient(135deg, #645B25, #D6C26A)"
  },
  bem: {
    label: "BEM FASILKOM",
    color: "#E64D78",
    fallback: "linear-gradient(135deg, #68243B, #E64D78)"
  },
  blm: {
    label: "BLM FASILKOM",
    color: "#35A5D5",
    fallback: "linear-gradient(135deg, #164760, #35A5D5)"
  }
});

/**
  * ATURAN PENGGUNAAN FIELD END. GUNAKAN ATURAN BERIKUT INI:
  * 
  * || Jam selesai diketahui
  * end: "2026-08-28T12:00:00",
  * timeLabel: ""
  * 
  * || Jam selesai tidak diketahui
  * end: "2026-08-28T23:59:00",
  * timeLabel: "selesai"
  * 
  * JANGAN MENULIS
  * end: "2026-08-28"
 */

const calendarEvents = Object.freeze([
  {
    id: "evt-001",
    title: "Pekan IT: Semantik",
    start: "2026-05-13T08:00:00",
    end: "2026-05-13T12:00:00",
    timeLabel: "",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Gd. Fasilkom",
    description: "Kompetisi bagi Mahasiswa Informatika Unsika untuk menunjukkan bakat dan keahlian hard kill",
    dialogContent: ``,
    image: "./assets/images/events/bg-semantik.webp",
    link: "https://www.instagram.com/pekanit_unsika/",
    featured: true
  },
  {
    id: "evt-002",
    title: "Hi-Link: HE (HIMTIKA Exchange)",
    start: "2026-05-16T07:00:00",
    end: "2026-05-16T20:00:00",
    timeLabel: "",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "T. kumpul: Depan Aula Syekh Quro",
    description: "Kegiatan untuk menjalin relasi serta mendapatkan ilmu dengan himpunan universitas lain. Studi banding tahun ini dengan HMIF UPNVJ.",
    dialogContent: ``,
    image: "./assets/images/events/bg-he.webp",
    link: "https://www.instagram.com/reel/DYW_J4Ulqyg/?igsh=Z3YwZzF5ZGM2ZmJ6",
    featured: true
  },
  {
    id: "evt-003",
    title: "Hi-Link: HGTC (HIMTIKA Goes To Company)",
    start: "2026-07-03T06:00:00",
    end: "2026-07-03T20:30:00",
    timeLabel: "",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "T. kumpul: Depan Aula Syekh Quro Unsika",
    description: "Kunjungan industri ke Hacktiv8 dan BLU by BCA Digital.",
    dialogContent: `
      <h3>⚠️ [ HIMTIKA Goes To Company 2026 ] ⚠️</h3>
      <span>
        Halo teman-teman Peserta  HGTC 2026 👋.
      </span>
      <p>
        Diinformasikan kepada seluruh Peserta untuk memperhatikan ketentuan berikut pada pelaksanaan kegiatan <b>HIMTIKA Goes To Company 2026</b>.
      </p>
      <h3>📍 Titik Kumpul: Depan AULA UNSIKA</h3>
      <h3>⏰ Tanggal & Waktu: Jumat, 3 Juli 2026 kumpul Jam 05:00 WIB </h3>

      <h3>👕 Dresscode:</h3>
      <ul>
        <li>Almamaters</li>
        <li>Pakaian Sopan dan Rapih</li>
        <li>Sepatu</li>
        <li>Boleh menggunakan outer</li>
      </ul>
      <h3>🎒 Perlengkapan yang wajib dibawa:</h3>
      <ul>
        <li>Alat Tulis</li>
        <li>Tumblr / botol minum pribadi</li>
        <li>Keperluan pribadi lainnya yang diperlukan</li>
      </ul>
      <p>
        ⚠️ Diharapkan seluruh peserta dapat menjaga ketertiban, disiplin waktu, serta mematuhi seluruh ketentuan yang telah ditetapkan agar kegiatan dapat berjalan dengan lancar.
      </p>
      <p>
        Sampai jumpa dan semangat untuk HIMTIKA Goes To Company 2026 🚀✨
      </p>

      <p class="event-dialog__note">
        Informasi lebih lengkap dapat dilihat melalui tautan
        resmi kegiatan.
      </p>
    `,
    image: "./assets/images/events/bg-hgtc.webp",
    link: "https://youtu.be/iNu6ZJkP6qY?si=cgUOWNUOqPsxmFez",
    featured: true
  },
  {
    id: "evt-004",
    title: "Seminar Nasional Pekan IT",
    start: "2026-08-09T08:00:00",
    end: "2026-08-09T14:00:00",
    timeLabel: "",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Aula Husni Hamid Pemda Karawang",
    description: "Seminar Nasional IT dengan tema manusia dan Artificial Intelligence beserta booth pameran IT.",
    dialogContent: `
      <h3>📢 [𝐒𝐄𝐌𝐈𝐍𝐀𝐑 𝐍𝐀𝐒𝐈𝐎𝐍𝐀𝐋 & 𝐏𝐀𝐌𝐄𝐑𝐀𝐍 𝐏𝐄𝐊𝐀𝐍 𝐈𝐓 𝟐𝟎𝟐𝟔] 📢</h3>
      <p>Halo, Sobat Pekan IT! 👋</p>

      <p>
      Pendaftaran <strong>Seminar Nasional &amp; Pameran PEKAN IT 2026</strong> resmi dibuka! 🚀
      </p>

      <p>
      Yuk, perluas wawasanmu mengenai kolaborasi antara manusia dan Artificial Intelligence bersama praktisi yang berpengalaman. Melalui seminar yang mengusung tema:
      </p>

      <p>
      <strong><em>"𝐇𝐮𝐦𝐚𝐧 𝐚𝐧𝐝 𝐀𝐈 𝐂𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐨𝐧: 𝐅𝐫𝐨𝐦 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐭𝐨 𝐄𝐧𝐡𝐚𝐧𝐜𝐞𝐝 𝐂𝐚𝐩𝐚𝐛𝐢𝐥𝐢𝐭𝐢𝐞𝐬"</em></strong>
      </p>

      <p>
      <strong>Kunjungi juga pameran inovasi teknologi yang menampilkan berbagai karya kreatif</strong>. Dapatkan insight terbaru, bangun relasi, dan jadilah bagian dari diskusi yang relevan dengan perkembangan teknologi.
      </p>

      <span><strong>✨ 𝐁𝐞𝐧𝐞𝐟𝐢𝐭:</strong></span><br>

      <ul>
          <li>📄 E-Certificate</li>
          <li>🎓 20 Poin SKP</li>
          <li>🤝 Networking &amp; Relasi</li>
          <li>💡 Insight dari Praktisi</li>
          <li>🖥️ Melihat Langsung Showcase Proyek IT</li>
          <li>🎁 Doorprize Eksklusif untuk Peserta Terpilih</li>
      </ul>

      <p>
      <strong>💵 HTM: </strong>
      Rp20.000 <br>
      
      <strong>📅 Pelaksanaan: </strong>
      Minggu, 9 Agustus 2026 <br>
      
      <strong>📍 Lokasi: </strong>
      Aula Husni Hamid Pemda Karawang
      </p>

      <p>
      <strong>📅 𝐏𝐞𝐧𝐝𝐚𝐟𝐭𝐚𝐫𝐚𝐧:</strong><br>
      25 Juli – 5 Agustus 2026<br>
      <strong>📝 𝐃𝐚𝐟𝐭𝐚𝐫 𝐬𝐞𝐤𝐚𝐫𝐚𝐧𝐠: </strong><br>
      <a href="https://bit.ly/SeminarPekanIT" target="_blank">
      https://bit.ly/SeminarPekanIT
      </a>
      </p>

      <p>
      <strong>📱 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐏𝐞𝐫𝐬𝐨𝐧: </strong><br>
      Nanang :
      <a href="https://wa.me/6283165298532" target="_blank">
      https://wa.me/6283165298532
      </a><br>
      Zahwan :
      <a href="https://wa.me/628812127615" target="_blank">
      https://wa.me/628812127615
      </a>
      </p>

      <p>
      Mari bergabung dan ajak teman-temanmu untuk menjadi bagian dari Seminar Nasional &amp; Pameran PEKAN IT 2026! ✨
      </p>
      <p>
      <strong>✨ 𝐂𝐨𝐦𝐩𝐢𝐥𝐞 𝐭𝐡𝐞 𝐕𝐢𝐬𝐢𝐨𝐧, 𝐄𝐱𝐞𝐜𝐮𝐭𝐞 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧 ✨</strong>
      </p>
      <p>
        #PekanIT2026<br>
        #HIMTIKA2026<br>
        #KabinetSelaras<br>
        #BersamaKitaJaya<br>
        #FasilkomUnsika
      </p>

      <p class="event-dialog__note">
        Informasi lebih lengkap dapat dilihat melalui tautan
        resmi kegiatan.
      </p>
    `,
    image: "./assets/images/events/bg-seminar-pekan-it.webp",
    link: "https://www.instagram.com/pekanit_unsika/",
    featured: true
  },
  {
    id: "evt-005",
    title: "CnC: Demonstrasi Project",
    start: "2026-08-09T13:00:00",
    end: "2026-08-09T14:00:00",
    timeLabel: "",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Aula Husni Hamid Pemda Karawang",
    description: "Project CnC yang sudah selesai dan siap untuk dipamerkan pada Seminar Pekan IT 2026.",
    dialogContent: ``,
    image: "./assets/images/events/bg-cnc.webp",
    link: "https://www.instagram.com/cnc_himtika/",
    featured: false
  },
  {
    id: "evt-006",
    title: "Pre-order PDH Anggota HIMTIKA",
    start: "2026-08-09T00:00:01",
    end: "2026-08-15T23:59:59",
    timeLabel: "",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Google Form",
    description: "",
    dialogContent: `
      <h3>📢 [ 𝐎𝐏𝐄𝐍 𝐏𝐑𝐄-𝐎𝐑𝐃𝐄𝐑 𝐏𝐃𝐇 𝐀𝐍𝐆𝐆𝐎𝐓𝐀 𝐇𝐈𝐌𝐓𝐈𝐊𝐀 ] 📢</h3>
      <p>Halo Mahasiswa Baru Informatika UNSIKA 2026! 👋 </p>

      <p>
      Saatnya melengkapi identitasmu sebagai bagian dari HIMTIKA dengan melakukan Pre-Order PDH Anggota HIMTIKA.
      </p>

      <p>
      PDH bukan hanya sekadar seragam, tetapi juga menjadi simbol kebersamaan, kekompakan, dan semangat bertumbuh bersama selama menjalani perjalanan di Informatika. ✨
      </p>

      <p>
        <span><strong>📆 Periode Pre-Order:</strong></span><br>
        <span>9-15 Agustus 2026</span><br>
        <span><strong>💸 Harga:</strong></span><br>
        <span>Rp150.000</span><br>
        <span><strong>💳 DP 50% (Rp75.000)</strong></span><br>
      </p>

      <p>
        <strong>📎 Link Pemesanan:</strong><br>
        <a href="https://bit.ly/PRE-ORDERPDHANGGOTA" target="_blank">
        https://bit.ly/PRE-ORDERPDHANGGOTA 
        </a><br>
      </p>
      
      <span><strong>📍 Pembayaran dapat dilakukan melalui:</strong></span>
      <ul>
        <li>Dana: 085714901222 (a.n. Luckyta Rizqia Jubaedi)</li>
        <li>Seabank: 901014645610 (a.n. Luckyta Rizqia Jubaedi)</li>
        <li>Cash (Konfirmasi terlebih dahulu ke Luckyta (<a href="https://wa.me/6285780442228" target="_blank">https://wa.me/6285780442228</a>)</li>
      </ul>
      
      <p>
      <strong>📲 Informasi lebih lanjut bisa menghubungi</strong><br>
      <span>📞 <a href="https://wa.me/6285780442228" target="_blank">
      https://wa.me/6285780442228</a> (Luckyta Rizqia Jubaedi)</span><br>
      <span>📞 <a href="https://wa.me/6285210535495" target="_blank">
      https://wa.me/6285210535495</a> (Marsello Hotasi Marpaung)</span>
      </p>

      <p>
        #ITBootcamp2026<br>
        #HIMTIKA2026<br>
        #BersamaKitaJaya<br>
        #KabinetSelaras<br>
        #FasilkomUnsika<br>
        #PDHAnggota
      </p>

      <p class="event-dialog__note">
        Informasi lebih lengkap dapat dilihat melalui tautan di bawah ini.
      </p>
    `,
    image: "./assets/images/events/bg-pdh-anggota.webp",
    link: "https://bit.ly/PRE-ORDERPDHANGGOTA",
    featured: true
  },
  {
    id: "evt-007",
    title: "Sosialisasi LKMM-PD",
    start: "2026-08-13T19:00:00",
    end: "2026-08-13T23:59:00",
    timeLabel: "selesai",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Zoom Meeting",
    description: "",
    dialogContent: ``,
    image: "",
    link: "https://www.instagram.com/himtika_unsika/",
    featured: true
  },
  {
    id: "evt-008",
    title: "Keputrian X Kenali",
    start: "2026-08-14T15:00:00",
    end: "2026-08-14T23:59:00",
    timeLabel: "selesai",
    category: "bem",
    organizer: "BEM Fasilkom Unsika",
    location: "Gedung Vaksin",
    description: "Sarana atau wadah untuk menambah wawasan ilmu pengetahuan, keterampilan, dan pemahaman bagi mahasiswi Fasilkom Unsika.",
    dialogContent: `
      <h3>[𝐊𝐄𝐏𝐔𝐓𝐑𝐈𝐀𝐍 𝐗 𝐊𝐄𝐍𝐀𝐋𝐈🌷✨]</h3>

      <p>Halo Fasilkomers! 👋</p>

      <p>Mahasiswi baru 2026, siap kenal lebih dekat dengan diri sendiri dan lingkungan baru di Fasilkom? 💗</p>

      <p>
      Yuk, ikuti kegiatan:<br>
      <strong>✨ Keputrian X Kenali ✨</strong>
      </p>

      <p>
      Kegiatan ini hadir sebagai ruang untuk mengenal lebih dekat, berbagi pengalaman, dan membangun langkah awal yang positif sebagai bagian dari keluarga Fasilkom! 🌸
      </p>

      <span><strong>Catat jadwalnya, jangan sampai kelewatan:</strong></span><br>

      <p>
      <span>🗓️ Jum’at, 14 Agustus 2026</span><br>
      <span>⏰ 15.00 WIB – selesai</span><br>
      <span>📍 Gedung Vaksin</span>
      </p>

      <p>
      <strong>📌 Wajib diikuti oleh seluruh mahasiswi baru Fasilkom angkatan 2026.</strong>
      </p>
      <p>
      Jangan lewatkan kesempatan untuk bertemu, berkenalan, dan memulai perjalanan baru bersama! 💫
      </p>
      <p>
      Sampai ketemu di Keputrian X Kenali! 🫶🏻
      </p>
      <p>
        #Keputrian2026<br>
        #BEMFasilkomUnsika<br>
        #KabinetSahitya<br>
        #TogetherMovingForward
      </p>
    `,
    image: "./assets/images/events/bg-keputrian-x-kenali.webp",
    link: "https://www.instagram.com/bemfasilkomunsika/",
    featured: true
  },
  {
    id: "evt-009",
    title: "Pelaksanaan Kelas Study Club",
    start: "2026-08-15T07:00:00",
    end: "2026-08-15T23:59:00",
    timeLabel: "selesai",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Hybrid (Gmeet/Offline)",
    description: "Pelaksanaan kelas Study Club HIMTIKA bersama para mentor ahli di kelas Web Dev., UI/UX Design, & Data Science tiap minggu hingga tanggal 25 Oktober 2026.",
    dialogContent: ``,
    image: "./assets/images/events/bg-study-club.webp",
    link: "https://www.instagram.com/studyclub_id/",
    featured: true
  },
  {
    id: "evt-010",
    title: "LKMM-PD",
    start: "2026-08-26T06:00:00",
    end: "2026-08-26T16:00:00",
    timeLabel: "",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Aula Syekh Quro Unsika",
    description: "Latihan Kepemimpinan dan Manajemen Mahasiswa untuk mahasiswa baru Informatika 2026",
    dialogContent: ``,
    image: "",
    link: "https://www.instagram.com/himtika_unsika/",
    featured: true
  },
  {
    id: "evt-011",
    title: "LKMM X Inaugurasi",
    start: "2026-09-19T06:00:00",
    end: "2026-09-20T23:59:00",
    timeLabel: "selesai",
    category: "bem",
    organizer: "BEM Fasilkom Unsika",
    location: "coming soon",
    description: "Program pembinaan dan pengenalan mahasiswa baru Fasilkom Unsika angkatan 2026 yang bertujuan membekali pengetahuan, keterampilan, dan sikap dalam manajemen organisasi sekaligus menumbuhkan rasa kekeluargaan, kebersamaan, dan keakraban antar mahasiswa dalam lingkungan Fasilkom.",
    dialogContent: ``,
    image: "",
    link: "https://www.instagram.com/bemfasilkomunsika/",
    featured: true
  },
  {
    id: "evt-012",
    title: "IT Bootcamp",
    start: "2026-10-03T06:00:00",
    end: "2026-10-04T23:59:00",
    timeLabel: "selesai",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Coming soon",
    description: "Kegiatan pengenalan lingkungan Informatika Unsika untuk mengembangkan hardskill dan softskill serta membanung kebersamaan antarmahasiswa baru.",
    dialogContent: `
      <p>
        IT Bootcamp merupakan kegiatan pengenalan lingkungan
        Informatika UNSIKA untuk mengembangkan kemampuan teknis,
        kemampuan interpersonal, dan kebersamaan mahasiswa.
      </p>

      <h3>Informasi Kegiatan</h3>

      <ul>
        <li>Peserta wajib hadir tepat waktu.</li>
        <li>Membawa perlengkapan yang telah ditentukan.</li>
        <li>Mengikuti seluruh rangkaian kegiatan.</li>
      </ul>

      <p class="event-dialog__note">
        Informasi lebih lengkap dapat dilihat melalui tautan
        resmi kegiatan.
      </p>
    `,
    image: "",
    link: "https://www.instagram.com/himtika_unsika/",
    featured: true
  },
  {
    id: "evt-013",
    title: "Dies Natalis HIMTIKA IX",
    start: "2026-10-18T08:00:00",
    end: "2026-10-18T23:59:00",
    timeLabel: "selesai",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Coming soon",
    description: "Rangkaian acara untuk memperingati hari lahir HIMTIKA ke-9 dalam rangka mempererat silaturahmi seluruh mahasiswa Informatika.",
    dialogContent: ``,
    image: "",
    link: "https://www.instagram.com/diesnatalis.himtika/",
    featured: true
  },
  {
    id: "evt-014",
    title: "Penutupan Pelaksanaan Study Club",
    start: "2026-10-25T08:00:00",
    end: "2026-10-25T23:59:00",
    timeLabel: "selesai",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Coming soon",
    description: "Kelas Terakhir sekaligus penutupan dari kegiatan Study Club HIMTIKA.",
    dialogContent: ``,
    image: "",
    link: "https://www.instagram.com/studyclub_id/",
    featured: true
  }
]);
