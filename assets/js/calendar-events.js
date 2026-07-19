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
    organizer: "HIMTIKA UNSIKA",
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
    organizer: "HIMTIKA UNSIKA",
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
    organizer: "HIMTIKA UNSIKA",
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
    title: "Pembukaan Study Club",
    start: "2026-08-15T07:00:00",
    end: "2026-08-15T23:59:00",
    timeLabel: "selesai",
    category: "himtika",
    organizer: "HIMTIKA UNSIKA",
    location: "Gd. Fasilkom",
    description: "Kegiatan belajar bersama mhs informatika bersama para mentor ahli di tiap kelas yang disediakan.",
    dialogContent: ``,
    image: "./assets/images/events/bg-study-club.webp",
    link: "https://www.instagram.com/studyclub_id/",
    featured: true
  },
  {
    id: "evt-005",
    title: "LKMM-PD",
    start: "2026-08-26T06:00:00",
    end: "2026-08-26T16:00:00",
    timeLabel: "",
    category: "himtika",
    organizer: "HIMTIKA UNSIKA",
    location: "Aula Syekh Quro Unsika",
    description: "Latihan Kepemimpinan dan Manajemen Mahasiswa untuk mahasiswa baru Informatika 2026",
    dialogContent: ``,
    image: "",
    link: "https://www.instagram.com/himtika_unsika/",
    featured: false
  },
  {
    id: "evt-006",
    title: "IT Bootcamp",
    start: "2026-09-03T06:00:00",
    end: "2026-09-04T23:59:00",
    timeLabel: "selesai",
    category: "himtika",
    organizer: "HIMTIKA UNSIKA",
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
    featured: false
  },
  {
    id: "evt-007",
    title: "Dies Natalis HIMTIKA IX",
    start: "2026-10-18T08:00:00",
    end: "2026-10-18T23:59:00",
    timeLabel: "selesai",
    category: "himtika",
    organizer: "HIMTIKA UNSIKA",
    location: "Coming soon",
    description: "Rangkaian acara untuk memperingati hari lahir HIMTIKA ke-9 dalam rangka mempererat silaturahmi seluruh mahasiswa Informatika.",
    dialogContent: ``,
    image: "",
    link: "https://www.instagram.com/diesnatalis.himtika/",
    featured: true
  }
]);
