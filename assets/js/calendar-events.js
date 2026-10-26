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
    title: "Sosialisasi LKMM Pra-Dasar 2026",
    start: "2026-08-13T19:00:00",
    end: "2026-08-13T23:59:00",
    timeLabel: "selesai",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Zoom Meeting",
    description: "",
    dialogContent: `
      <h3><strong>[📢 𝐒𝐎𝐒𝐈𝐀𝐋𝐈𝐒𝐀𝐒𝐈 𝐋𝐊𝐌𝐌 𝐏𝐑𝐀-𝐃𝐀𝐒𝐀𝐑 𝟐𝟎𝟐𝟔]</strong></h3>

      <p>Hello Sobat Informatics 2026! 👋🏻</p>

      <p>Sebagai mahasiswa Informatika, berkembang bukan hanya tentang belajar di dalam kelas. Pengalaman, kerja sama, dan keberanian untuk mengambil peran juga menjadi bagian dari proses kita. ✨</p>

      <p>Nah, untuk mengenal lebih dekat LKMM-PD 2026, yuk ikuti Sosialisasinya! Kamu bisa mendapatkan informasi mengenai rangkaian kegiatan, tujuan, serta hal-hal yang perlu dipersiapkan.</p>

      <p>
      Dengan Tema:<br>
      <strong><em>✨ “𝐌𝐞𝐦𝐛𝐞𝐧𝐭𝐮𝐤 𝐉𝐢𝐰𝐚 𝐊𝐞𝐩𝐞𝐦𝐢𝐦𝐩𝐢𝐧𝐚𝐧 𝐌𝐚𝐡𝐚𝐬𝐢𝐬𝐰𝐚 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐤𝐚 𝐲𝐚𝐧𝐠 𝐁𝐞𝐫𝐢𝐧𝐭𝐞𝐠𝐫𝐢𝐭𝐚𝐬, 𝐀𝐝𝐚𝐩𝐭𝐢𝐟, 𝐝𝐚𝐧 𝐏𝐫𝐨𝐟𝐞𝐬𝐢𝐨𝐧𝐚𝐥 𝐝𝐢 𝐄𝐫𝐚 𝐃𝐢𝐠𝐢𝐭𝐚𝐥” ✨</em></strong>
      </p>

      <p>
      <span><strong>🗓️ Kamis, 13 Agustus 2026</strong></span><br>
      <span><strong>⏰ 19.00 WIB – selesai</strong></span><br>
      <span><strong>👔 Baju bebas & sopan</strong></span><br>
      <span><strong>📍  Zoom Meeting</strong></span><br>
      <span><strong>🔗 Link menyusul</strong></span>
      </p>

      <p>
      Jangan sampai ketinggalan! Mari bersama-sama berkembang, berproses, dan mempersiapkan diri menjadi mahasiswa yang lebih baik. 💙
      </p>

      <p>
      <strong>📞 CP:</strong><br>
      <span><strong>Kayla — </strong><a href="https://wa.me/6285779321250" target="_blank">
      https://wa.me/6285779321250</a></span><br>
      <span><strong>Bintang — </strong><a href="https://wa.me/6282190158256" target="_blank">
      https://wa.me/6282190158256</a></span>
      </p>

      <p>
        #LKMMPD2026<br>
        #HIMTIKA2026<br>
        #BersamaKitaJaya<br>
        #KabinetSelaras<br>
        #FasilkomUnsika
      </p>
    `,
    image: "./assets/images/events/bg-sosialisasi-lkmmpd.webp",
    link: "https://www.instagram.com/himtika_unsika/",
    featured: true
  },
  {
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
    title: "Sosialisasi Dies Natalis HIMTIKA IX Championship",
    start: "2026-08-24T19:00:00",
    end: "2026-08-24T23:59:00",
    timeLabel: "selesai",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Zoom Meeting",
    description: "",
    dialogContent: `
      <h3><strong>🌊 [SOSIALISASI DIES NATALIS HIMTIKA IX CHAMPIONSHIP] 🌊</strong></h3><br>

      <p>Halo, Future Sailors! ⚓🌊</p>

      <p>Sebuah perjalanan baru akan segera dimulai! Dalam rangka menyambut <b>Dies Natalis HIMTIKA ke-9</b>, kami mengajak seluruh Future Sailors untuk bersama-sama mengenal lebih dalam rangkaian perjalanan yang telah dipersiapkan. 🧭✨</p>

      <p>
      Penasaran dengan apa saja yang akan hadir dan bagaimana kalian bisa menjadi bagian dari perjalanan ini? 👀
      </p>

      <p>
      Jangan khawatir, kami akan membuka peta perjalanan melalui <strong>Sosialisasi Dies Natalis HIMTIKA IX Championship! 🌊⚓</strong> Sosialisasi ini akan membahas berbagai informasi penting seputar rangkaian acara Dies Natalis HIMTIKA IX.
      </p>
      
      <span><strong>Catat jadwalnya, ya! 📌</strong></span><br>
      <p><strong>
      <span>🗓️ Senin, 24 Agustus 2026</span><br>
      <span>⏰ 19.00 WIB – Selesai</span><br>
      <span>📍 Zoom Meeting: <br>(<a href="https://us06web.zoom.us/j/81453051465">https://us06web.zoom.us/j/81453051465</a>)</span><br><br>
      <span>🖼️ Virtual Background: <br>(<a href="https://drive.google.com/file/d/1zxBGbYHQR8g_g9wd4vfLSbtM8hcERC64/view?usp=drive_link">https://drive.google.com/file/d/1zxBGbYHQR8g_g9wd4vfLSbtM8hcERC64/view?usp=drive_link</a>)</span><br><br>
      <span>📖 Guidebook: <br>(<a href="https://canva.link/su6vetss7tf06xn">https://canva.link/su6vetss7tf06xn</a>)</span><br><br>
      <span>💬 Contact Person: <br>Wisnu - (<a href="https://wa.me/qr/S4PCW4F4AWKMG1">https://wa.me/qr/S4PCW4F4AWKMG1</a>)</span><br><br>
      </strong></p>

      <p>
      📱 Ikuti informasi terbaru di Instagram:<br>
      <span><a href="https://www.instagram.com/himtika_unsika/">@himtika_unsika</a></span><br>
      <span><a href="https://www.instagram.com/diesnatalis.himtika/">@diesnatalis.himtika</a></span>
      </p>
      <p>
      Mari berlayar dan selami perjalanan Dies Natalis HIMTIKA IX bersama! 🌊✨
      </p>
      <p>
      <b>Dive Deeper. Grow Stronger. ⚓</b>
      </p>
      <p>
        #DiesNatalisIX<br>
        #DiveDeeperGrowStronger<br>
        #HIMTIKA2026<br>
        #BersamaKitaJaya<br>
        #KabinetSelaras
      </p>
    `,
    image: "./assets/images/events/bg-sosialisasi-diesnat.webp",
    link: "https://www.instagram.com/diesnatalis.himtika/",
    featured: true
  },
  {
    title: "Pendaftaran Lomba Dies Natalis HIMTIKA IX",
    start: "2026-08-24T07:00:00",
    end: "2026-08-31T23:59:00",
    timeLabel: "selesai",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Google Form",
    description: "",
    dialogContent: `
      <h3><strong>🏆[OPEN REGISTRATION DIES NATALIS HIMTIKA IX CHAMPIONSHIP] 🌊</strong></h3><br>

      <p>Halo, Future Sailors! ⚓🌊</p>

      <p>Saatnya tunjukkan taji dan ukir prestasi di panggung <b>DIES NATALIS HIMTIKA IX CHAMPIONSHIP! 🥳🏆 </b></p>

      <p>
      Apakah kamu dan timmu yang siap menjadi juara, melibas semua lawan, dan menguasai arena? Jangan cuma jadi penonton, tunjukkan kemampuan terbaikmu sekarang! 🔥
      </p>

      <p><strong>
      <span>🎮 Mobile Legends 💰 HTM: Rp50.000 / Tim</span><br>
      <span>⚽ PES PlayStation 💰 HTM: Rp15.000 / Player</span><br>
      <span>🎤 Vocal Music 💰 HTM: Free / Gratis</span>
      </strong></p>
      
      <p><strong>
      <span>📖 Guidebook: <br>(<a href="https://canva.link/su6vetss7tf06xn">https://canva.link/su6vetss7tf06xn</a>)</span><br><br>
      <span>📝 Form Pendaftaran: <br>(<a href="https://bit.ly/PendaftaranDiesNatalisIXChampionship">https://bit.ly/PendaftaranDiesNatalisIXChampionship</a>)</span><br>
      </strong></p>
      
      <span>📲 Contact Person:<br>
      <ul>
      <li>MLBB: Wisnu <br>(<a href="https://wa.me/qr/S4PCW4F4AWKMG1">https://wa.me/qr/S4PCW4F4AWKMG1</a>)</li>
      <li>PES: Fazran <br>(<a href="https://wa.me/qr/WZOTCOLFRUCVF1">https://wa.me/qr/WZOTCOLFRUCVF1</a>)</li>
      <li>Vocal Music: Kayla <br>(<a href="https://wa.me/6285779321250">https://wa.me/6285779321250</a>)</li>
      </ul>

      <p>
      Tunggu apa lagi? Ambil kemudi, daftar sekarang, dan jadilah bagian dari sejarah kemenangan tahun ini! ⚓🏆
      </p>
      <p>
      <b>Dive Deeper. Grow Stronger. ⚓</b>
      </p>
      <p>
      📱 Ikuti informasi terbaru di Instagram:<br>
      <span><a href="https://www.instagram.com/himtika_unsika/">@himtika_unsika</a></span><br>
      <span><a href="https://www.instagram.com/diesnatalis.himtika/">@diesnatalis.himtika</a></span>
      </p>
      <p>
        #DiesNatalisIX<br>
        #DiveDeeperGrowStronger<br>
        #HIMTIKA2026<br>
        #BersamaKitaJaya<br>
        #KabinetSelaras
      </p>
    `,
    image: "./assets/images/events/bg-pendaftaran-lomba-diesnat.webp",
    link: "https://www.instagram.com/diesnatalis.himtika/",
    featured: true
  },
  {
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
    title: "LKMM-PD",
    start: "2026-08-26T06:00:00",
    end: "2026-08-26T17:00:00",
    timeLabel: "",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Aula Syekh Quro Unsika",
    description: "Latihan Kepemimpinan dan Manajemen Mahasiswa untuk mahasiswa baru Informatika 2026",
    dialogContent: `
      <h3><strong>[LKMM PRA-DASAR 2026]</strong></h3><br>

      <p>🚨 HARI YANG DINANTIKAN AKHIRNYA TIBA! 🚨</p>

      <p>Halo, Calon Pemimpin Muda Informatika! 🤩👋🏻</p>

      <p>
      Setelah melewati berbagai persiapan, akhirnya hari ini kita akan memulai perjalanan bersama di LKMM PRA-DASAR 2026! 🔥
      </p>

      <p>
      Sudah siap untuk belajar, berkembang, berproses, dan menciptakan pengalaman baru bersama? 🚀✨
      </p>

      <p><strong>
      <span>🗓️ Rabu, 26 Agustus 2026</span><br>
      <span>⏰ 06.00 WIB – selesai</span><br>
      <span>📍 Aula Syekh Quro, Universitas Singaperbangsa Karawang</span>
      </strong></p>

      <span><strong>⚠️ NOTES:</strong></span><br>
      <ol>
      <li>Mahasiswa baru <strong>diperbolehkan membawa motor</strong> ke lingkungan kampus. Namun, segala bentuk kehilangan atau kerusakan kendaraan <strong>bukan tanggung jawab Panitia LKMMPD 2026</strong>.</li>
      <li>Jangan membawa barang-barang yang dilarang seperti <strong>vape, rokok, parfum, senjata tajam, dan barang terlarang lainnya</strong>.<br>📖 Info lengkap bisa cek di Link Guidebook: <a href="https://bit.ly/GuidebookLKMMPD2026">https://bit.ly/GuidebookLKMMPD2026</a></li>
      </ol>

      <p>
      Datang dengan semangat terbaik kalian, karena hari ini bukan sekadar tentang mengikuti kegiatan, tapi tentang memulai sebuah proses baru sebagai bagian dari keluarga besar Informatika. 💙
      </p>
      <p>
      See you, calon pemimpin muda Informatika! 🔥<br><b>Embrace the Process, Create the Impact!</b>
      </p>
      <p>
        #LKMMPD2026<br>
        #HIMTIKA<br>
        #BersamaKitaJaya<br>
        #KabinetSelaras
      </p>
    `,
    image: "./assets/images/events/bg-lkmmpd.webp",
    link: "https://www.instagram.com/himtika_unsika/",
    featured: true
  },
  {
    title: "Pre-Order Danusan Dies Natalis HIMTIKA IX X Pekan IT 2026 Batch 3",
    start: "2026-09-13T06:00:00",
    end: "2026-09-17T23:59:00",
    timeLabel: "selesai",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Google Form",
    description: "Danusan Dies Natalis x Pekan IT Batch 3",
    dialogContent: `
      <h3><strong>🔥 [PRE-ORDER DANUSAN DIES NATALIS HIMTIKA IX X PEKAN IT 2026 #BATCH 3] 🍪🥟✨</strong></h3><br>

      <span>🔥 Hallo Fasilkomers! 👋</span><br>
      <p>
        Lagi laper pas nunggu jam kuliah, atau butuh manis-manis & gurih buat nambah semangat pas nugas? 😋
      </p>

      <p>
        Pas banget! <strong>Danusan Dies Natalis HIMTIKA IX X Pekan IT 2026</strong> kembali hadir membawa aneka snack kekinian yang wajib kamu cobain! 🚀
      </p>

      <span><strong>🍽️ Pilihan Menu Favorit:</strong></span><br>
      <ol>
        <li>
          Aneka Risol (Mayo & Ayam Suir) — Pack/Satuan (Mentah & Matang) <strong>(Start 3K)</strong>
        </li>
        <li>
          Aneka Mochi (6 Pilihan Varian Rasa) — <strong>Rp8.000 / pcs</strong>
        </li>
        <li>
          Aneka Soft Cookies (8 Pilihan Varian Rasa) — <strong>Start Rp8.000</strong>
        </li>
        <li>
          Kulitiq (Basreng Balado Daun Jeruk, Nori Ori, Nori Spicy) — <strong>Start Rp10.000</strong>
        </li>
        <li>
          Dubai Chewy Cookies — <strong>Rp25.000</strong>
        </li>
      </ol>

      <span><strong>📌 INFORMASI PO & COD:</strong></span><br>
      <p>
        <span>📅 Periode PO: 13 – 17 September 2026</span><br>
        <span>🚚 Pengambilan (COD): Kamis, 17 September 2026</span><br>
        <span>📍 Lokasi COD: Depan Gedung Fasilkom</span><br>
        <span>⏰ Jam Operasional: 10.00 – 15.00 WIB</span><br>
      </p>
      
      <p><strong>💳 Metode Pembayaran:</strong> QRIS</p>
      
      <span>📲 <strong>Cara Pemesanan:</strong></span><br>
      <ol>
        <li>Scan QR Code pada pamflet atau klik link G-Form di bawah.</li>
        <li>Pilih menu dan varian favoritmu.</li>
        <li>Wajib tulis ulang detail pesanan & jumlahnya di kolom yang tersedia.</li>
        <li>Upload bukti pembayaran QRIS lalu Submit!</li>
      </ol>

      <p>
        Ambil pesananmu di titik COD Depan Gedung Fasilkom pada hari Senin! 😉
      </p>

      <p>
        🔗 <strong>Link Pemesanan:</strong><br>
        <a href="https://bit.ly/Danusan-DiesNatHimtikaIX-Kulitiq">
          https://bit.ly/Danusan-DiesNatHimtikaIX-Kulitiq
        </a>
      </p>

      <p>
        📞 <strong>Contact Person (CP):</strong><br>
        📱 <a href="https://wa.me/6282319260867">https://wa.me/6282319260867</a> (Ajay)<br>
        📱 <a href="https://wa.me/6283877797489">https://wa.me/6283877797489</a> (Azhar)
      </p>

      <p>
        KUY ORDER SEKARANG! 😋
      </p>

      <p>
        Jangan lupa ajak temen sekelas, temen kosan, atau pasangan biar bisa jajan bareng! 🙌
      </p>

      <p>
        #DiesNatalisIX<br>
        #PekanIT2026<br>
        #DanusanPekanITxDiesNatalis<br>
        #HIMTIKA2026<br>
        #BersamaKitaJaya<br>
        #KabinetSelaras<br>
        #FasilkomUnsika
      </p>
    `,
    image: "./assets/images/events/bg-danusan-diesnat-pekan-it-batch-3.webp",
    link: "https://www.instagram.com/himtika_unsika/",
    featured: true
  },
  {
    title: "Sosialisasi IT Bootcamp 2026",
    start: "2026-09-14T19:30:00",
    end: "2026-09-14T23:59:00",
    timeLabel: "selesai",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Zoom Meeting",
    description: "Sosialisasi IT Bootcamp 2026",
    dialogContent: `
      <h3><strong>[𝐒𝐎𝐒𝐈𝐀𝐋𝐈𝐒𝐀𝐒𝐈 𝐈𝐓 𝐁𝐎𝐎𝐓𝐂𝐀𝐌𝐏: 𝐈𝐍𝐃𝐄𝐏𝐄𝐍𝐃𝐄𝐍𝐓 𝐏𝐑𝐎𝐉𝐄𝐂𝐓]</strong></h3><br>

      <p>Halo Informatics 2026! 👋🏻 </p>

      <p>
      Ada informasi penting buat kalian! Dalam rangka mempersiapkan pelaksanaan IT BOOTCAMP: INDEPENDENT PROJECT 2026, akan dilaksanakan kegiatan sosialisasi yang wajib diikuti oleh seluruh Mahasiswa Baru Informatika 2026.
      </p>

      <span>Adapun kegiatan tersebut akan dilaksanakan pada:</span><br>
      <p><strong>
      <span>🗓️ 𝐇𝐚𝐫𝐢, 𝐭𝐚𝐧𝐠𝐠𝐚𝐥: 𝐒𝐞𝐧𝐢𝐧, 𝟏𝟒 𝐒𝐞𝐩𝐭𝐞𝐦𝐛𝐞𝐫 𝟐𝟎𝟐𝟔</span><br>
      <span>🕰️ 𝐖𝐚𝐤𝐭𝐮: 𝟏𝟗.𝟑𝟎 𝐖𝐈𝐁 - 𝐒𝐞𝐥𝐞𝐬𝐚𝐢</span><br>
      <span>👔 𝐃𝐫𝐞𝐬𝐬 𝐜𝐨𝐝𝐞: 𝐁𝐞𝐛𝐚𝐬 𝐒𝐨𝐩𝐚𝐧</span><br>
      <span>📍 𝐓𝐞𝐦𝐩𝐚𝐭: 𝐙𝐨𝐨𝐦 𝐌𝐞𝐞𝐭𝐢𝐧𝐠</span>
      </strong></p>

      <p>
      <span><strong>🔗 𝐋𝐢𝐧𝐤:</strong><br>(<a href="https://us06web.zoom.us/j/86587929746?pwd=bG15F8ax6wZFo6qvxfjuApwMKPL4WC.1">https://us06web.zoom.us/j/86587929746?pwd=bG15F8ax6wZFo6qvxfjuApwMKPL4WC.1</a>)</span><br><br>
      <span><strong>𝐕𝐢𝐫𝐭𝐮𝐚𝐥 𝐁𝐚𝐜𝐤𝐠𝐫𝐨𝐮𝐧𝐝:</strong><br>(<a href="https://bit.ly/VIRTUALBACKGROUNDSOSIALISASI">https://bit.ly/VIRTUALBACKGROUNDSOSIALISASI</a>)</span><br>
      </p>
      
      <p>
      Siapkan diri kalian dan jangan lupa catat tanggalnya! 🤩 
      </p>

      <span><strong>📱 𝐌𝐨𝐫𝐞 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧:</strong><br>
      <p>
      <span>📞 <a href="https://wa.me/6281514154348">https://wa.me/6281514154348</a> (Aditya Akwinda)</span><br>
      <span>📞 <a href="https://wa.me/6281586278049">https://wa.me/6281586278049</a> (Muhammad Zahwan Andika)</span><br>
      </p>

      <p>
      <span>Salam hangat,</span><br>
      Panitia Pelaksana IT Bootcamp: Independent Project 2026
      </p>
      <p>
        #ITBootcamp2026<br>
        #HIMTIKA2026<br>
        #KabinetSelaras<br>
        #BersamaKitaJaya<br>
        #FasilkomUnsika
      </p>
    `,
    image: "./assets/images/events/bg-sosialisasi-itb.webp",
    link: "https://www.instagram.com/himtika_unsika/",
    featured: true
  },
  {
    title: "LKMM X Inaugurasi",
    start: "2026-09-19T06:00:00",
    end: "2026-09-20T23:59:00",
    timeLabel: "selesai",
    category: "bem",
    organizer: "BEM Fasilkom Unsika",
    location: "Agro Kartika, Karawang",
    description: "Program pembinaan dan pengenalan mahasiswa baru Fasilkom Unsika angkatan 2026 yang bertujuan membekali pengetahuan, keterampilan, dan sikap dalam manajemen organisasi sekaligus menumbuhkan rasa kekeluargaan, kebersamaan, dan keakraban antar mahasiswa dalam lingkungan Fasilkom.",
    dialogContent: ``,
    image: "./assets/images/events/bg-lkmm.webp",
    link: "https://www.instagram.com/lkmminaufasilkom/",
    featured: true
  },
  {
    title: "IT Bootcamp: Independent Project 2026",
    start: "2026-10-03T06:00:00",
    end: "2026-10-04T23:59:00",
    timeLabel: "selesai",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Saung Endah, Karawang",
    description: "Kegiatan pengenalan lingkungan Informatika Unsika untuk mengembangkan hardskill dan softskill serta membanung kebersamaan antarmahasiswa baru.",
    dialogContent: `
      <h3><strong>📢 [ 𝐈𝐓 𝐁𝐎𝐎𝐓𝐂𝐀𝐌𝐏: 𝐈𝐍𝐃𝐄𝐏𝐄𝐍𝐃𝐄𝐍𝐓 𝐏𝐑𝐎𝐉𝐄𝐂𝐓 𝟐𝟎𝟐𝟔 ] 📢</strong></h3><br>

      <p>Halo Informatics 2026! 👋🏻 </p>
      <p>The day is finally here!</p>

      <p>
      Setelah melalui berbagai persiapan, akhirnya hari yang ditunggu-tunggu tiba! Saatnya memulai perjalanan IT Bootcamp: Independent Project 2026. 💻
      </p>

      <p><strong>
      <span>📅 𝐇𝐚𝐫𝐢 𝐓𝐚𝐧𝐠𝐠𝐚𝐥: 𝐒𝐚𝐛𝐭𝐮 𝐬𝐝. 𝐌𝐢𝐧𝐠𝐠𝐮, 𝟑 - 𝟒 𝐎𝐤𝐭𝐨𝐛𝐞𝐫 𝟐𝟎𝟐𝟔</span><br>
      <span>🕐 𝐖𝐚𝐤𝐭𝐮: 𝟎𝟔.𝟎𝟎 𝐖𝐈𝐁 - 𝐒𝐞𝐥𝐞𝐬𝐚𝐢.</span><br>
      <span>📍 𝐋𝐨𝐤𝐚𝐬𝐢: 𝐒𝐚𝐮𝐧𝐠 𝐄𝐧𝐝𝐚𝐡, 𝐊𝐚𝐫𝐚𝐰𝐚𝐧𝐠</span>
      </strong></p>

      <p>
      Siapkan semangat dan energi terbaik kalian untuk belajar, berkolaborasi, mendapatkan pengalaman baru, dan menciptakan cerita bersama keluarga Informatics 2026! 🤝✨
      </p>
      
      <p>Today is the day. Let’s make it memorable! 🙌🏻✨</p>
      <p>See you, Informatics 2026! 🚀</p>
      
      <p>
        #ITBootcamp2026<br>
        #HIMTIKA2026<br>
        #KabinetSelaras<br>
        #BersamaKitaJaya<br>
        #FasilkomUnsika
      </p>
    `,
    image: "./assets/images/events/bg-itb.webp",
    link: "https://www.instagram.com/himtika_unsika/",
    featured: true
  },
  {
    title: "Pre-order Merchandise Dies Natalis HIMTIKA IX",
    start: "2026-10-06T06:00:00",
    end: "2026-10-11T23:59:00",
    timeLabel: "selesai",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Google Form",
    description: "Open Pre-order merchandise Dies Natalis HIMTIKA IX.",
    dialogContent: `
      <h3><strong>🌊[𝐎𝐏𝐄𝐍 𝐏𝐑𝐄-𝐎𝐑𝐃𝐄𝐑 𝐌𝐄𝐑𝐂𝐇𝐀𝐍𝐃𝐈𝐒𝐄 𝐃𝐈𝐄𝐒 𝐍𝐀𝐓𝐀𝐋𝐈𝐒 𝐇𝐈𝐌𝐓𝐈𝐊𝐀 𝐈𝐗] 🌊✨</strong></h3><br>

      <span>Hi, Future Sailor! 🌊🐙</span><br>
      <span>Dive deeper and grow stronger bersama Dies Natalis HIMTIKA IX!</span><br>
      <p>
        Saatnya lengkapi harimu dengan Official Merchandise Dies Natalis HIMTIKA IX yang hadir dengan desain spesial untuk kamu! 
      </p>

      <span><strong>🛍️ AVAILABLE MERCHANDISE</strong></span><br>
      <ul>
        <li>
          T-Shirt — <strong>90K</strong>
        </li>
        <li>
          Totebag — <strong>30K</strong>
        </li>
        <li>
          Sticker Pack — <strong>7K</strong>
        </li>
        <li>
          Keychain — <strong>10K</strong>
        </li>
      </ul>
      
      <span><strong>PAKET BUNDLING</strong></span><br>
      <span><em>(All Bundling = Free Sticker)</em></span><br>
      <ul>
        <li>
          <strong>Bundling 1</strong> — Little Ocean Pack: Sticker Pack + Keychain — 15K
        </li>
        <li>
          <strong>Bundling 2</strong> — Ocean Pack: T-Shirt + Totebag — 115K
        </li>
        <li>
          <strong>Bundling 3</strong> — Buddy Pack: 2 T-Shirt — 170K
        </li>
        <li>
          <strong>Bundling 4</strong> — Full Ocean Pack: T-Shirt + Totebag + Sticker Pack + Keychain — 125K
        </li>
      </ul>

      <br><span><strong>📅 Timeline:</strong></span><br>
      <p>
        <span>Open PO: 6-12 Oktober 2026</span><br>
        <span>Pelunasan: 13-14 Oktober 2026</span><br>
        <span>Pengambilan: 15 Oktober 2026</span><br>
      </p>

      <p>
        🛒 Order sekarang di:</strong><br>
        <a href="https://bit.ly/OpenPOMerchandiseDiesNatHIMTIKAIX">
          https://bit.ly/OpenPOMerchandiseDiesNatHIMTIKAIX
        </a>
      </p>

      <p>
        <strong>📲 Contact Person:</strong><br>
        <a href="https://wa.me/6282190158256">https://wa.me/6282190158256</a> (Bintang)
      </p>
      <p>
        <strong>🌐 Info lengkap:</strong><br>
        <a href="https://instagram.com/himtika_unsika">@himtika_unsika </a> | <a href="https://instagram.com/diesnatalis.himtika">@diesnatalis.himtika</a><br> 
        <a href="https://himtika.cs.unsika.ac.id">himtika.cs.unsika.ac.id</a>
      </p>

      <p>
        #DiesNatalisIX<br>
        #DiveDeeperGrowStronger<br>
        #HIMTIKA2026<br>
        #BersamaKitaJaya<br>
        #KabinetSelaras
      </p>
    `,
    image: "./assets/images/events/bg-merchandise-diesnat.webp",
    link: "https://www.instagram.com/diesnatalis.himtika/",
    featured: true
  },
  {
    title: "Pendaftaran HIMTIKA Awards 2026",
    start: "2026-10-12T06:00:00",
    end: "2026-10-14T23:59:00",
    timeLabel: "selesai",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Google Form",
    description: "Pendaftaran untuk mahasiswa Informatika Unsika yang memiliki pengetahuan dan bakat yang akan menjadi nominasi penghargaan.",
    dialogContent: `
      <h3><strong>🏆[𝐏𝐄𝐍𝐃𝐀𝐅𝐓𝐀𝐑𝐀𝐍 𝐇𝐈𝐌𝐓𝐈𝐊𝐀 𝐀𝐖𝐀𝐑𝐃𝐒 𝟐𝟎𝟐𝟔]🏆</strong></h3><br>

      <p>Halo, Informatics! 🙌🏻</p>
      <p>
        Dalam rangka memberikan apresiasi kepada mahasiswa Informatika yang aktif berkarya, mengembangkan kemampuan, dan menunjukkan kontribusi melalui bidang teknologi, kami dari Himpunan Mahasiswa Informatika (HIMTIKA) mempersembahkan <strong>HIMTIKA AWARDS 2026 🏆</strong>
      </p>
      <p>
        <strong>HIMTIKA AWARDS</strong> merupakan bentuk apresiasi bagi mahasiswa Informatika yang menunjukkan kemampuan dan karya terbaiknya dalam bidang teknologi dan Informatika.
      </p>
      <p>
        Untuk itu, kami mengajak seluruh mahasiswa Informatika untuk mendaftarkan diri dan mengikuti HIMTIKA AWARDS 2026 pada kategori berikut:
      </p>

      <ol>
        <li>
          <strong>Digital Development 💻</strong>
        </li>
        <li>
          <strong>Digital Literacy 🌐</strong>
        </li>
      </ol>

      <p>
        <strong>🔗 Form Pendaftaran:</strong><br>
        <a href="https://forms.gle/iT8HVQPw9aADAC689">
          https://forms.gle/iT8HVQPw9aADAC689
        </a>
      </p>

      <p><strong>Pendaftaran dapat dilakukan hingga 14 Oktober 2026.</strong></p>

      <p>
        <strong>Contact Person:</strong><br>
        <span>📞 <a href="https://wa.me/qr/P3AW4T6FVF3DH1">https://wa.me/qr/P3AW4T6FVF3DH1</a>(Kayla)</span>
      </p>
      
      <p>
        <span>Salam hangat,</span><br>
        <span>Departemen HC HIMTIKA</span>
      </p>

      <p>
        #HIMTIKA2026<br>
        #BersamaKitaJaya<br>
        #KabinetSelaras<br>
        #FasilkomUnsika
      </p>
    `,
    image: "./assets/images/events/bg-pendaftaran-himtika-award.webp",
    link: "https://www.instagram.com/diesnatalis.himtika/",
    featured: true
  },
  {
    title: "Forum Silaturahmi Fasilkom 2026",
    start: "2026-10-13T14:00:00",
    end: "2026-10-13T23:59:00",
    timeLabel: "selesai",
    category: "bem",
    organizer: "BEM Fasilkom Unsika",
    location: "Gedung Fasilkom Lantai 4, Ruang 78",
    description: "Kegiatan wadah bagi mahasiswa dan civitas akademika Fasilkom untuk tumbuh bersama, mempererat silaturahmi, serta menyampaikan aspirasi dan mencari solusi demi kemajuan Fasilkom.",
    dialogContent: `
      <h3><strong>📢 [𝐅𝐎𝐑𝐔𝐌 𝐒𝐈𝐋𝐀𝐓𝐔𝐑𝐀𝐇𝐌𝐈 𝐅𝐀𝐒𝐈𝐋𝐊𝐎𝐌 𝟐𝟎𝟐𝟔] 📢</strong></h3><br>

      <p>Halo Fasilkomers! 🙌🏻</p>
      <p>
        Yuk hadir di FORSI (Forum Silaturahmi) Fasilkom 2026! 💬🤝
      </p>
      <p>
        Kegiatan ini menjadi wadah bagi mahasiswa dan civitas akademika Fasilkom untuk tumbuh bersama, mempererat silaturahmi, serta menyampaikan aspirasi dan mencari solusi demi kemajuan Fasilkom. Mari bersama-sama membangun ruang diskusi yang terbuka, penuh kebersamaan, dan bermakna! ✨
      </p>
      
      <span><strong>Kegiatan ini dilaksanakan pada:</strong></span><br>
      <p>
      <span><strong>🗓️ Selasa, 13 Oktober 2026</strong></span><br>
      <span><strong>⏰ 14.00 WIB – Selesai</strong></span><br>
      <span><strong>📍 Gedung Fasilkom Lantai 4, Ruang 78</strong></span><br>
      </p>

      <p>
        Jangan lewatkan kesempatan untuk menyampaikan aspirasi dan ikut berkontribusi dalam mewujudkan Fasilkom yang lebih baik! Suara kita, perubahan bersama! 🙌🏻
      </p>

      <p>
        <strong>📞 Contact Person</strong><br>
        <span>Gilbran – <a href="https://wa.me/6285891189980">https://wa.me/6285891189980</a></span>
      </p>

      <span>━━━━</span><br>
      <p>
        <span>Kabinet Sahitya</span><br>
        <span>BEM Fasilkom UNSIKA 2026</span><br>
        <span>Bidang Sosial dan Politik</span><br>
        <span>Departemen Advokasi Kesejahteraan Mahasiswa</span>
      </p>
      <span>━━━━</span>

      <p>
        #KabinetSahitya<br>
        #BEMFasilkomUnsika2026<br>
        #TogetherMovingForward
      </p>
    `,
    image: "./assets/images/events/bg-forum-silaturahmi-fasilkom-2026.webp",
    link: "https://www.instagram.com/bemfasilkomunsika/",
    featured: true
  },
  {
    title: "Open Regist Pendaftaran Webinar Nasional Dies Natalis HIMTIKA IX",
    start: "2026-10-12T06:00:00",
    end: "2026-10-24T23:59:00",
    timeLabel: "selesai",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Google Form",
    description: "Pembukaan pendaftaran webinar nasional dies natalis HIMTIKA yang ke-9.",
    dialogContent: `
      <h3><strong>🌊 [EXTENDED REGISTRATION — WEBINAR NASIONAL DIES NATALIS HIMTIKA IX] 🌊</strong></h3><br>

      <p>Hi, Future Sailor! ⚓✨</p>
      <p>
        <strong>📢 PENDAFTARAN DIPERPANJANG!</strong>   
      </p>
      <p>
        Yuk, perluas wawasanmu bersama <strong>Muhammad Akbar Maulana</strong> dalam Webinar Nasional Dies Natalis HIMTIKA IX dengan tema:
      </p>
      <p>
        <strong>“Peran Kesadaran Digital, Keamanan Siber, dan Inovasi yang Bertanggung Jawab dalam Membangun Masa Depan Digital” 🔐🤖</strong>
      </p>

      <p>
        <span><strong>✨ BENEFITS</strong></span><br>
        <ul>
          <li>Free Class Dicoding untuk 100 pendaftar pertama</li>
          <li>Poin SKP</li>
          <li>E-Certificate</li>
          <li>Cybersecurity & Digital Safety Insights</li>
          <li>Tips Melindungi Data Pribadi dan Mengenali Penipuan Digital</li>
          <li>Insight Penggunaan AI yang Aman dan Bertanggung Jawab</li>
          <li>Interactive Discussion & Q&A Session</li>
        </ul>
      </p>

      <span><strong>📍 SAVE THE DATE!</strong></span><br>
      <p>
        <span>📅 Minggu, 25 Oktober 2026</span><br>
        <span>⏰ 08.00 WIB–selesai</span><br>
        <span>📍 Zoom Meeting</span><br>
        <span>💰 HTM Rp10.000</span>
      </p>
      <p>
        <span>🗓️ <strong>Extended Registration:</strong> 20–23 Oktober 2026</span><br>
        <span>⏳ Penutupan: 24 Oktober 2026</span>
      </p>

      <span><strong>📝 REGISTER NOW!</strong></span><br>
      <p>
        (<a href="https://bit.ly/PendaftaranWebinarNasionalDiesNatalisHIMTIKAIX">https://bit.ly/PendaftaranWebinarNasionalDiesNatalisHIMTIKAIX</a>)
      </p>

      <p>
        <strong>📲 CP:</strong> Aqilah — <a href="https://wa.me/087819100690">https://wa.me/087819100690</a>
      </p>
      
      <p>
        Jangan lewatkan kesempatan untuk belajar dan meningkatkan kesadaran digital bersama! 🌊
      </p>
      <p><b>DIVE DEEPER. GROW STRONGER. ⚓</b></p>

      <p>
        #DiesNatalisIX<br>
        #DiveDeeperGrowStronger<br>
        #HIMTIKA2026<br>
        #BersamaKitaJaya<br>
        #KabinetSelaras<br>
        #FasilkomUnsika
      </p>
    `,
    image: "./assets/images/events/bg-open-regist-webinar-diesnat.webp",
    link: "https://www.instagram.com/diesnatalis.himtika/",
    featured: true
  },
  {
    title: "Kelas Offline Study Club",
    start: "2026-10-16T09:00:00",
    end: "2026-10-16T23:59:00",
    timeLabel: "selesai",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Gedung Fasilkom, Lantai 4",
    description: "Wadah belajar bareng, berdiskusi, dan saling bertukar cerita seputar dunia perkuliahan secara santai dan interaktif yang diselenggarakan Study Club HIMTIKA!",
    dialogContent: `
      <h3><strong>​🚀✨ [FIRST OFFLINE MEETING STUDY CLUB HIMTIKA 2026] ✨🚀</strong></h3><br>

      <p>​Halo, Star-Seekers dan Sobat Informatics! 👋🏻🌟</p>
      <p>
        Akhirnya, momen yang ditunggu-tunggu tiba juga! 🚀🔥
      </p>
      <p>
        Setelah sebelumnya kita bertemu secara online, sekarang saatnya kita berkumpul secara langsung dalam pertemuan offline pertama Study Club HIMTIKA 2026! 🎉
      </p>
      <p>
        Dengan semangat “Upgrade Your Skills, Unlock Your Potential”, inilah waktunya buat kita mulai perjalanan belajar, eksplorasi, dan berkembang bersama di bidang teknologi! 💻✨
      </p>
      
      <span><strong>📍 SAVE THE DATE!</strong></span><br>
      <p>
      <span><strong>​📅 Hari/Tanggal: Jumat, 16 Oktober 2026</strong></span><br>
      <span><strong>⏰ Jam: 09.00 WIB – selesai</strong></span><br>
      <span><strong>📍 Tempat: Gedung Fasilkom, Lantai 4</strong></span>
      </p>
      
      <p>
        <span>Tahun ini, ada tiga kelas seru yang siap menemani perjalanan kalian:</span><br>
        <ul>
          <li>Web Development bersama <strong>Aldi Wijaya</strong></li>
          <li>Data Science bersama <strong>Kintan Diyah A.</strong></li>
          <li>UI/UX Design bersama <strong>Brandon Haniif L.</strong></li>
        </ul>
      </p>

      <p>
        Jadi, gimana nih, Star-Seekers? Udah siap buat belajar bareng, menambah pengalaman, dan mengembangkan skill bersama? 👀🔥
      </p>
      <p>
        Jangan lupa hadir tepat waktu, siapkan semangat terbaik kalian, dan manfaatkan kesempatan ini untuk saling mengenal serta bertumbuh bersama! 🌌🚀
      </p>
      <p>
        See you in the class, Star-Seekers! 💫
      </p>
      <p>
        ✨ “Upgrade Your Skills, Unlock Your Potential” ✨
      </p>
      <p>
        #StudyClub2026<br>
        #HIMTIKA2026<br>
        #BersamaKitaJaya<br>
        #KabinetSelaras<br>
        #FasilkomUnsika
      </p>
    `,
    image: "./assets/images/events/bg-kelas-offline-study-club.webp",
    link: "https://www.instagram.com/studyclub_id/",
    featured: true
  },
  {
    title: "Malam Puncak Dies Natalis HIMTIKA IX",
    start: "2026-10-17T17:00:00",
    end: "2026-10-17T23:59:00",
    timeLabel: "selesai",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Techno Mart Sky Garden",
    description: "Rangkaian acara untuk memperingati hari lahir HIMTIKA ke-9 dalam rangka mempererat silaturahmi seluruh mahasiswa Informatika.",
    dialogContent: `
      <h3><strong>🌊 [𝐓𝐇𝐄 𝐅𝐈𝐍𝐀𝐋 𝐖𝐀𝐕𝐄𝐒 ー 𝐃𝐈𝐄𝐒 𝐍𝐀𝐓𝐀𝐋𝐈𝐒 𝐇𝐈𝐌𝐓𝐈𝐊𝐀 𝐈𝐗] 🌊</strong></h3><br>

      <span>Hi, Future Sailor! 🌊🐙</span><br>
      <p>
        Saatnya merapatkan kapal di Malam Puncak Dies Natalis HIMTIKA IX! Mari rayakan perjalanan hebat ini bersama-sama! 🚀💙   
      </p>

      <p>
        <span><strong>✨ SPECIAL PERFORMANCES</strong></span><br>
        <ul>
          <li>🎸 WOLF YOUTH</li>
          <li>🎧 DJ CH4N</li>
          <li>💃 UKF Modern Dance & Fasilkom Dance Crew</li>
        </ul>
      </p>
      <p>
        <span><strong>🏆 EVENTS</strong></span><br>
        <ul>
          <li>🎮 Grand Final Mobile Legends</li>
          <li>🎶 Concert</li>
          <li>🎖️ Awarding</li>
        </ul>
      </p>
      <p>
        <span><strong>📸 PHOTOBOOTH</strong></span><br>
        <span>
          Only 20k/strip (Free Property, Soft File, & Special Frame) | Open 18.00 WIB
        </span>
      </p>

      <span><strong>📍 SAVE THE DATE!</strong></span><br>
      <p>
        <span>🗓️ Sabtu, 17 Oktober 2026</span><br>
        <span>🕔 Pukul 17.00 WIB – Selesai</span><br>
        <span>📍 Techno Mart Sky Garden</span><br>
        <span>🎨 Dress Code: Blue Palette</span>
      </p>

      <p>
        Acara ini TERBUKA UNTUK UMUM! Datang dan ciptakan momen tak terlupakan bersama kami! 🔥
      </p>
      
      <p><b>Dive Deeper. Grow Stronger. 🌊⚓</b></p>

      <p>
        <strong>📱 Info lebih lanjut:</strong><br>
        <a href="https://instagram.com/himtika_unsika">@himtika_unsika </a> | <a href="https://instagram.com/diesnatalis.himtika">@diesnatalis.himtika</a><br> 
        <a href="https://himtika.cs.unsika.ac.id">himtika.cs.unsika.ac.id</a>
      </p>

      <p>
        #DiesNatalisIX<br>
        #DiveDeeperGrowStronger<br>
        #HIMTIKA2026<br>
        #BersamaKitaJaya<br>
        #KabinetSelaras<br>
        #FasilkomUnsika
      </p>
    `,
    image: "./assets/images/events/bg-malam-puncak-diesnat.webp",
    link: "https://www.instagram.com/diesnatalis.himtika/",
    featured: true
  },
  {
    title: "Seminar Nasional Fasilkom Fest 2026",
    start: "2026-10-24T07:00:00",
    end: "2026-10-24T23:59:00",
    timeLabel: "selesai",
    category: "bem",
    organizer: "BEM Fasilkom Unsika",
    location: "Hybrid: Aula Husni Hamid (Offline) & Zoom Meeting (Online)",
    description: "Seminar Nasional yang diadakan oleh Fasilkom dengan rangkaian acara materi serta pameran IT",
    dialogContent: `
      <h3><strong>📢 𝐒𝐄𝐌𝐈𝐍𝐀𝐑 𝐍𝐀𝐒𝐈𝐎𝐍𝐀𝐋 𝐅𝐀𝐒𝐈𝐋𝐊𝐎𝐌 𝐅𝐄𝐒𝐓 𝟐𝟎𝟐𝟔 𝐒𝐄𝐆𝐄𝐑𝐀 𝐇𝐀𝐃𝐈𝐑! 📢</strong></h3><br>

      <p>Halo, Fellas! 👋🏻</p>
      <p>
      FASILKOM FEST 2026 menghadirkan Seminar Nasional dengan tema:
      </p>
      <p>
        <strong><i>✨ “𝑾𝒐𝒓𝒌 𝑺𝒎𝒂𝒓𝒕𝒆𝒓, 𝑺𝒕𝒂𝒚 𝑯𝒖𝒎𝒂𝒏: 𝑨𝑰 𝒂𝒔 𝒀𝒐𝒖𝒓 𝑺𝒕𝒓𝒂𝒕𝒆𝒈𝒊𝒄 𝑪𝒐-𝑷𝒊𝒍𝒐𝒕”✨</i></strong>
      </p>
      <p>
        Di era perkembangan teknologi yang semakin pesat, Artificial Intelligence (AI) hadir sebagai teknologi yang dapat membantu kita bekerja lebih cerdas dan efektif. Namun, bagaimana cara memanfaatkan AI secara strategis tanpa mengesampingkan peran manusia?
      </p>
      <p>
        Yuk, ikuti seminar ini dan dapatkan wawasan baru mengenai pemanfaatan AI serta kesempatan untuk belajar dan berdiskusi bersama narasumber! 🚀
      </p>
      
      <span><strong>📌 𝗖𝗮𝘁𝗮𝘁 𝗧𝗮𝗻𝗴𝗴𝗮𝗹𝗻𝘆𝗮!</strong></span><br>
      <p>
      <span><strong>📅 Sabtu, 24 Oktober 2026</strong></span><br>
      <span><strong>⏰ 07.00 WIB – Selesai</strong></span><br>
      <span><strong>📍 Hybrid (Aula Husni Hamid & Zoom Meeting)</strong></span><br>
      </p>
      <p>
      <span><strong>🎤 Pemateri: Rino Alfian</strong></span><br>
      <span><strong>🎙️ Moderator: Andhika Sukma Jiwatama</strong></span><br>
      <span><strong>🎙️ Master of Ceremony: Regina Martha & Naufal Fathir</strong></span><br>
      </p>

      <p>
        <strong><i>🔗 Link Pendaftaran: </i></strong><br>
        <a href="https://s.id/RegistrasiSeminarNasionalFasilkomFest2026">
          https://s.id/RegistrasiSeminarNasionalFasilkomFest2026
        </a>
      </p>

      <span><strong>🎁 Benefit Peserta:</strong></span><br>
      <ul>
        <li>E-Sertifikat</li>
        <li>Poin SKP</li>
        <li>Ilmu Bermanfaat</li>
        <li>Snackbox (<i>offline</i>)</li>
      </ul>
      <p>
        📢 Jangan lewatkan kesempatan untuk menambah wawasan, memperluas perspektif, dan memahami bagaimana AI dapat menjadi strategic co-pilot dalam aktivitas kita sehari-hari!
      </p>
      <p>
        <strong><i>📞 Contact Person: </i></strong><br>
        <span><a href="https://wa.me/6282258956295">https://wa.me/6282258956295</a> (Fahmi)</span><br>
        <span><a href="https://wa.me/62895604013700">https://wa.me/62895604013700</a> (Nazwa)</span>
      </p>
      
      <p>Sampai bertemu di FASILKOM FEST 2026! ❤️‍🔥</p>

      <p>
        #FasilkomFest2026<br>
        #FasilkomFestCompetition<br>
        #BEMFasilkomUnsika<br>
        #KabinetSahitya<br>
        #TogetherMovingForward
      </p>
    `,
    image: "./assets/images/events/bg-seminar-fasilkom-fest.webp",
    link: "https://www.instagram.com/fasilkom.fest/",
    featured: true
  },
  {
    title: "Study Up Sharing Sesion by Study Club",
    start: "2026-10-23T08:00:00",
    end: "2026-10-23T23:59:00",
    timeLabel: "selesai",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Gedung Fasilkom, Lantai 4",
    description: "Wadah belajar bareng, berdiskusi, dan saling bertukar cerita seputar dunia perkuliahan secara santai dan interaktif yang diselenggarakan Study Club HIMTIKA!",
    dialogContent: `
      <h3><strong>​🚀✨ [SHARING SESSION STUDY UP BY STUDY CLUB HIMTIKA 2026] ✨🚀</strong></h3><br>

      <p>​Halo, Star-Seekers dan Sobat Informatics! 👋🏻🌟</p>
      <p>
        ​Punya banyak pertanyaan seputar dunia perkuliahan? Mau lebih paham materi kuliah atau butuh teman diskusi dan sharing pengalaman belajar? Tenang, kita punya solusinya! 🚀🔥 
      </p>
      <p>
        ​Study Club HIMTIKA kembali menghadirkan STUDY UP (Sharing Session)! Wadah belajar bareng, berdiskusi, dan saling bertukar cerita seputar dunia perkuliahan secara santai dan interaktif! 🎉
      </p>
      <p>
        ​Dengan semangat "Upgrade Your Skills, Unlock Your Potential", inilah saatnya buat kita memperdalam materi perkuliahan dan berdiskusi langsung dengan kakak tingkat! 💻✨
      </p>

      <p>
        <span><strong>📌 Apa aja sih kegiatannya?</strong></span><br>
        <span>​📚 Review Mata Kuliah: Bedah materi dan pendalaman topik untuk matkul Kalkulus (Angkatan 2026) & Basis Data (Angkatan 2025).</span>
      </p>
      <p>
      💬 Sharing Session: Sesi diskusi santai, tanya jawab seputar kendala perkuliahan, serta berbagi tips & pengalaman bersama kakak angkatan 2024.
      </p>
      
      <span><strong>📍 SAVE THE DATE!</strong></span><br>
      <p>
        <span><strong>​📅 Hari/Tanggal: Jumat, 23 Oktober 2026</strong></span><br>
        <span><strong>​⏰ Waktu: 08.00 WIB – Selesai</strong></span><br>
        <span><strong>📍 Tempat: Gedung Fasilkom, Lantai 4</strong></span>
      </p>

      <p>
        <span><strong>​👥 SIAPA AJA YANG BOLEH IKUT?</strong></span><br>
        <span>​Acara ini <strong>TERBUKA UNTUK SELURUH MAHASISWA INFORMATIKA Angkatan 2026, 2025 dan 2024</strong> (Bukan hanya anggota Study Club, mahasiswa umum sangat diperbolehkan dan disambut hangat buat bergabung!) 🎓✨</span>
      </p>
      <p>
        <span><strong>​​🎁 SPECIAL BENEFIT:</strong></span><br>
        <span>30 orang tercepat yang datang di lokasi bakal dapet  <strong>MERCHANDISE MENARIK! 😱</strong> (Jangan sampai terlambat ya, siap-siap makin pagi biar nggak kehabisan!) ⚡</span>
      </p>
      <p>
        ​Jadi, tunggu apa lagi? Udah siap buat belajar bareng, nambah relasi, dapet ilmu, plus dapet merchandise seru? 👀🔥
      </p>
      <p>
        Jangan sampai terlewat! Siapkan semangat terbaik kalian, persiapkan pertanyaanmu, dan yuk bertumbuh bareng di sini! 🌌🚀
      </p>

      <p>
        <span>​See you there!</span><br>
        <span>​✨ “Upgrade Your Skills, Unlock Your Potential” ✨</span>
      </p>
      <p>
        #StudyClub2026<br>
        #HIMTIKA2026<br>
        #BersamaKitaJaya<br>
        #KabinetSelaras<br>
        #FasilkomUnsika
      </p>
    `,
    image: "./assets/images/events/bg-study-up.webp",
    link: "https://www.instagram.com/studyclub_id/",
    featured: true
  },
  {
    title: "Webinar Nasional Dies Natalis HIMTIKA IX",
    start: "2026-10-25T08:00:00",
    end: "2026-10-25T23:59:00",
    timeLabel: "selesai",
    category: "himtika",
    organizer: "HIMTIKA Unsika",
    location: "Zoom Meeting (Online)",
    description: "Webinar Nasional Dies Natalis HIMTIKA bertemakan meningkatkan wawasan tentang Cybersecurity, Digital Safety, dan penggunaan AI yang bertanggung jawab!",
    dialogContent: `
      <h3><strong>🌊 [EXTENDED REGISTRATION — WEBINAR NASIONAL DIES NATALIS HIMTIKA IX] 🌊</strong></h3><br>

      <p>Hi, Future Sailor! ⚓✨</p>
      <p>
        <strong>📢 PENDAFTARAN DIPERPANJANG!</strong>   
      </p>
      <p>
        Yuk, perluas wawasanmu bersama <strong>Muhammad Akbar Maulana</strong> dalam Webinar Nasional Dies Natalis HIMTIKA IX dengan tema:
      </p>
      <p>
        <strong>“Peran Kesadaran Digital, Keamanan Siber, dan Inovasi yang Bertanggung Jawab dalam Membangun Masa Depan Digital” 🔐🤖</strong>
      </p>

      <p>
        <span><strong>✨ BENEFITS</strong></span><br>
        <ul>
          <li>Free Class Dicoding untuk 100 pendaftar pertama</li>
          <li>Poin SKP</li>
          <li>E-Certificate</li>
          <li>Cybersecurity & Digital Safety Insights</li>
          <li>Tips Melindungi Data Pribadi dan Mengenali Penipuan Digital</li>
          <li>Insight Penggunaan AI yang Aman dan Bertanggung Jawab</li>
          <li>Interactive Discussion & Q&A Session</li>
        </ul>
      </p>

      <span><strong>📍 SAVE THE DATE!</strong></span><br>
      <p>
        <span>📅 Minggu, 25 Oktober 2026</span><br>
        <span>⏰ 08.00 WIB–selesai</span><br>
        <span>📍 Zoom Meeting</span><br>
        <span>💰 HTM Rp10.000</span>
      </p>
      <p>
        <span>🗓️ <strong>Extended Registration:</strong> 20–23 Oktober 2026</span><br>
        <span>⏳ Penutupan: 24 Oktober 2026</span>
      </p>

      <span><strong>📝 REGISTER NOW!</strong></span><br>
      <p>
        (<a href="https://bit.ly/PendaftaranWebinarNasionalDiesNatalisHIMTIKAIX">https://bit.ly/PendaftaranWebinarNasionalDiesNatalisHIMTIKAIX</a>)
      </p>

      <p>
        <strong>📲 CP:</strong> Aqilah — <a href="https://wa.me/087819100690">https://wa.me/087819100690</a>
      </p>
      
      <p>
        Jangan lewatkan kesempatan untuk belajar dan meningkatkan kesadaran digital bersama! 🌊
      </p>
      <p><b>DIVE DEEPER. GROW STRONGER. ⚓</b></p>

      <p>
        #DiesNatalisIX<br>
        #DiveDeeperGrowStronger<br>
        #HIMTIKA2026<br>
        #BersamaKitaJaya<br>
        #KabinetSelaras<br>
        #FasilkomUnsika
      </p>
    `,
    image: "./assets/images/events/bg-open-regist-webinar-diesnat.webp",
    link: "https://www.instagram.com/diesnatalis.himtika/",
    featured: true
  },
  {
    title: "Seminar Nasional Legislative School 2026",
    start: "2026-10-31T08:30:00",
    end: "2026-10-31T23:59:00",
    timeLabel: "selesai",
    category: "blm",
    organizer: "BLM Fasilkom Unsika",
    location: "Galeri Pemda Karawang",
    description: "Legislative School adalah kegiatan seperti seminar/talkshow perihal ranah legislatif dimana akan mengundang narasumber yang ahli dibidangnya seperti anggota DPR/DPRD serta akan ada simulasi persidangan di akhir kegiatan.",
    dialogContent: `
      <h3><strong>📢 𝐏𝐄𝐍𝐃𝐀𝐅𝐓𝐀𝐑𝐀𝐍 𝐒𝐄𝐌𝐈𝐍𝐀𝐑 𝐍𝐀𝐒𝐈𝐎𝐍𝐀𝐋 𝐋𝐄𝐆𝐈𝐒𝐋𝐀𝐓𝐈𝐕𝐄 𝐒𝐂𝐇𝐎𝐎𝐋 𝟐𝟎𝟐𝟔 𝐓𝐄𝐋𝐀𝐇 𝐃𝐈𝐁𝐔𝐊𝐀 📢</strong></h3><br>

      <span>​Halo, rekan-rekan Mahasiswa dan Masyarakat Umum!</span>
      <p>
        ​Badan Legislatif Mahasiswa (BLM) FASILKOM UNSIKA menyelenggarakan Seminar Nasional Legislative School 2026 dengan tema “Etika dan Integritas Legislator sebagai Pilar Utama Tata Kelola Demokrasi yang Baik”.
      </p>
      <p>
        ​Kegiatan ini bertujuan untuk mengenalkan dasar-dasar mengenai apa itu lembaga legislatif, serta membahas dinamika dan isu-isu yang berkaitan dengan politik. Jangan lewatkan kesempatan untuk belajar dan berdiskusi langsung!
      </p>
      
      <span><strong>​📌 Catat Tanggalnya:</strong></span><br>
      <p>
      <span><strong>🗓️ Hari, Tanggal: Sabtu, 31 Oktober 2026</strong></span><br>
      <span><strong>⏰ Waktu: 08.00 WIB s.d. Selesai</strong></span><br>
      <span><strong>📍 Tempat: To Be Announced</strong></span><br>
      </p>

      <span><strong>🎁 Benefit Peserta:</strong></span><br>
      <ul>
        <li>E-Certificate</li>
        <li>20 SKP (Khusus Mahasiswa UNSIKA)</li>
        <li>Knowledge</li>
        <li>Merchandise (<i>Khusus 100 peserta pertama yang hadir pada Hari H</i>)</li>
        <li>Doorprize</li>
      </ul>

      <p>
        <strong><i>🔗 Link Pendaftaran: </i></strong><br>
        <a href="https://unsika.link/legislativeschool2026">
          https://unsika.link/legislativeschool2026
        </a>
      </p>

      <p>​Acara ini terbuka untuk UMUM! Segera daftarkan dirimu karena kuota terbatas.</p>

      <p>
        <strong>📞 Contact Person: </strong><br>
        <span><a href="https://wa.me/6285142375037">https://wa.me/6285142375037</a> (Arra)</span><br>
        <span><a href="https://wa.me/6281289372757">https://wa.me/6281289372757</a> (Najwa)</span>
      </p>
    `,
    image: "./assets/images/events/bg-seminar-legislative-school.webp",
    link: "https://www.instagram.com/ls.fasilkomunsika/",
    featured: true
  }
].map((event, index) => ({
  id: `evt-${String(index + 1).padStart(3, "0")}`, ...event
})));
