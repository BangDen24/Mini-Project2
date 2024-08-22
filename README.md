# Dokumentasi Mini Project 2: Dashboard Web

## Pendahuluan

Proyek ini merupakan bagian dari mini project untuk kursus Frontend Development. Dalam proyek ini, dibangun halaman web bertema "Dashboard" menggunakan React.js dan memanfaatkan API dari [Reqres](https://reqres.in/).

## Teknologi yang Digunakan

- **React.js**: Digunakan sebagai framework frontend untuk membangun antarmuka pengguna.
- **Axios**: Digunakan untuk melakukan permintaan HTTP ke API Reqres.
- **React Router**: Digunakan untuk mengelola routing dan implementasi protected routes.
- **SCSS**: Digunakan untuk styling komponen dengan menggunakan preprocessor CSS.
- **Vite**: Digunakan sebagai build tool untuk proyek React.

## Fitur Utama

1. **Register User**: Pengguna dapat melakukan pendaftaran melalui endpoint "REGISTER - SUCCESSFUL" dan "REGISTER - UNSUCCESSFUL".
2. **Login User**: Pengguna dapat melakukan login melalui endpoint "LOGIN - SUCCESSFUL" dan "LOGIN - UNSUCCESSFUL".
3. **List Users**: Pengguna dapat melihat daftar user yang ada di halaman utama, dengan data diambil dari endpoint "LIST USERS".
4. **Detail User**: Pengguna dapat melihat detail dari masing-masing user dengan memanfaatkan endpoint "SINGLE USER".
5. **Pagination**: Implementasi pagination pada halaman utama untuk navigasi antar halaman daftar user.
6. **Protected Routes**: Hanya pengguna yang sudah login yang dapat mengakses halaman tertentu.
7. **Responsive Design**: Website ini sudah dioptimalkan untuk berbagai ukuran layar, termasuk tampilan mobile.

## Fitur Tambahan

1. **Animasi UI**: Implementasi animasi menggunakan vanilla CSS untuk meningkatkan pengalaman pengguna.
2. **Hamburger Menu**: Pada tampilan layar kecil, navbar disembunyikan dan digantikan dengan hamburger menu yang dapat dibuka untuk menampilkan navigasi.

## Cara Menjalankan Proyek
1. Clone repository dari GitHub.
   ```bash
   git clone <link-repository-github>
   cd nama-folder-proyek

2. Install Dependencies
   npm install

3. Menjalankan project locally
   npm run dev

## Catatan
   - API yang digunakan pada Project ini adalah API dari https://reqres.in/
   - Pastikan Node.Js sudah terintal pada sistem sebelum menjalankan Project ini.