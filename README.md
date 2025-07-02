# Invoice App (React + JavaScript + Vite) Frontend

Aplikasi Invoice sederhana berbasis React dan Vite, sudah dimigrasi sepenuhnya ke JavaScript (tanpa TypeScript).

## Fitur Utama

- CRUD Invoice (buat, edit, hapus, lihat detail)
- Filter, sort, dan pencarian invoice
- Responsive design
- Penyimpanan data lokal (localStorage/sessionStorage)
- Menggunakan Redux Toolkit untuk state management
- Styling dengan CSS Modules & SCSS

## Penting: Hanya Frontend (FE) Saja

- **Project ini hanya berisi frontend (FE) React.**
- Tidak ada backend/server di repo ini.
- Semua data invoice disimpan secara lokal (localStorage/sessionStorage) atau dari file data bawaan.
- Jika ingin backend, silakan buat secara terpisah.

## Cara Menjalankan Project

1. **Clone repository ini**
2. **Install dependency**
   ```bash
   npm install
   ```
3. **Jalankan aplikasi**
   ```bash
   npm run dev
   ```
4. **Akses di browser**
   Buka [http://localhost:5173](http://localhost:5173) (atau port yang tertera di terminal)

## Struktur Folder Utama

- `src/components` : Komponen UI
- `src/features` : Fitur utama (invoice, dsb)
- `src/pages` : Halaman utama aplikasi
- `src/redux` : State management
- `src/utilities` : Utility/helper functions
- `src/assets` : Gambar, style, dan aset statis

## Catatan

- Jika menemukan bug/error, silakan laporkan atau perbaiki langsung di file JS terkait.

---

Dibuat dengan ❤️ menggunakan React, Vite, dan JavaScript murni.
