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

const calendarEvents = Object.freeze([
  {
    id: "evt-001",
    title: "Pekan IT: Semantik",
    start: "2026-05-13T08:00:00",
    end: "2026-05-13T12:00:00",
    category: "himtika",
    organizer: "HIMTIKA UNSIKA",
    location: "Gd. Fasilkom",
    description: "Kompetisi bagi Mahasiswa Informatika Unsika untuk menunjukkan bakat dan keahlian hard kill",
    image: "./assets/images/events/bg-semantik.webp",
    link: "https://www.instagram.com/pekanit_unsika/",
    featured: true
  },
  {
    id: "evt-002",
    title: "Hi-Link: HE (HIMTIKA Exchange)",
    start: "2026-05-16T07:00:00",
    end: "2026-05-16T20:00:00",
    category: "himtika",
    organizer: "HIMTIKA UNSIKA",
    location: "T. kumpul: Aula Syekh Quro",
    description: "Studi banding ke HMIF UPNVJ.",
    image: "",
    link: "https://youtu.be/xM5NkhJl__I?si=wM5F8V6H4-LDPi8n",
    featured: true
  },
  {
    id: "evt-003",
    title: "Hi-Link: HGTC (HIMTIKA Goes To Company)",
    start: "2026-07-03T06:00:00",
    end: "2026-07-03T20:30:00",
    category: "himtika",
    organizer: "HIMTIKA UNSIKA",
    location: "T. kumpul: Rektorat",
    description: "Kunjungan industri ke Hacktiv8 dan BLU by BCA Digital.",
    image: "",
    link: "https://youtu.be/iNu6ZJkP6qY?si=cgUOWNUOqPsxmFez",
    featured: true
  },
  {
    id: "evt-004",
    title: "Study Club",
    start: "2026-08-26T07:00:00",
    end: "2026-08-26T12:00:00",
    category: "informatika",
    organizer: "HIMTIKA UNSIKA",
    location: "Gd. Fasilkom",
    description: "Kegiatan belajar bersama mhs informatika bersama para mentor ahli di tiap kelas yang disediakan.",
    image: "",
    link: "https://www.instagram.com/studyclub_id/",
    featured: true
  },
  {
    id: "evt-005",
    title: "LKMM-PD",
    start: "2026-08-26T06:00:00",
    end: "2026-08-26T16:00:00",
    category: "bem",
    organizer: "HIMTIKA UNSIKA",
    location: "Aula Syekh Quro",
    description: "Latihan Kepemimpinan dan Manajemen Mahasiswa untuk mahasiswa baru Informatika 2026",
    image: "",
    link: "https://www.instagram.com/himtika_unsika/",
    featured: false
  },
  {
    id: "evt-006",
    title: "IT Bootcamp",
    start: "2026-08-26T06:00:00",
    end: "2026-08-26T12:00:00",
    category: "fasilkom",
    organizer: "Fasilkom UNSIKA",
    location: "soon",
    description: "Kegiatan pengenalan lingkungan Informatika Unsika untuk mengembangkan hardskill dan softskill serta membanung kebersamaan antarmahasiswa baru.",
    image: "",
    link: "https://www.instagram.com/himtika_unsika/",
    featured: false
  },
  {
    id: "evt-007",
    title: "Dies Natalis HIMTIKA IX",
    start: "2026-08-26T08:00:00",
    end: "2026-08-26T20:00:00",
    category: "blm",
    organizer: "HIMTIKA UNSIKA",
    location: "soon",
    description: "Rangkaian acara untuk memperingati hari lahir HIMTIKA ke-9 dalam rangka mempererat silaturahmi seluruh mahasiswa Informatika.",
    image: "",
    link: "https://www.instagram.com/diesnatalis.himtika/",
    featured: true
  },
  {
    id: "evt-008",
    title: "Dies Natalis HIMTIKA IX",
    start: "2026-08-26T08:00:00",
    end: "2026-08-26T20:00:00",
    category: "himtika",
    organizer: "HIMTIKA UNSIKA",
    location: "soon",
    description: "Rangkaian acara untuk memperingati hari lahir HIMTIKA ke-9 dalam rangka mempererat silaturahmi seluruh mahasiswa Informatika.",
    image: "",
    link: "https://www.instagram.com/diesnatalis.himtika/",
    featured: true
  }
]);
