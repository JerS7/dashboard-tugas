# Btanya — Kuesioner dan Dashboard Penelitian

Dua halaman HTML terpisah, tanpa login aplikasi:

- `Kuisioner/index.html`: pertanyaan SUS/ASQ dan konfirmasi penyimpanan untuk responden.
- `Kuisioner/pemilik.html`: ringkasan, grafik, data penelitian, edit jawaban, dan ekspor CSV.

Tulisan samar **pemilik.html** di bawah sidebar kuesioner merupakan tautan ke halaman pemilik. Tautan **index.html** pada halaman pemilik kembali ke kuesioner. Ini perpindahan file HTML, bukan sekadar mengganti tab pada satu halaman.

## Menjalankan

Jalankan `python -m http.server 8000` dari folder ini, kemudian buka:

- http://localhost:8000/Kuisioner/index.html
- http://localhost:8000/Kuisioner/pemilik.html

Halaman index.html di akar mengarahkan ke kuesioner. Jalankan melalui server lokal atau hosting agar penyimpanan antarhalaman konsisten.

## GitHub

Unggah seluruh isi folder ini ke repositori dashboard-tugas, termasuk folder Kuisioner. Untuk GitHub Pages gunakan branch yang diinginkan dan folder root. Pertahankan huruf besar K pada nama folder dan URL. Tidak diperlukan instalasi paket atau build.

## Struktur

- index.html: pengarah ke kuesioner.
- Kuisioner/index.html: halaman responden.
- Kuisioner/pemilik.html: halaman ringkasan dan data penelitian.
- Kuisioner/app.js: perilaku kedua halaman.
- Kuisioner/scoring.js: perhitungan SUS/ASQ.
- Kuisioner/style.css: tampilan.
- scoring.test.cjs: pengujian perhitungan; jalankan `node scoring.test.cjs`.

## Metode

SUS: 10 item pada skala 1–5. Kontribusi item ganjil = jawaban − 1; item genap = 5 − jawaban. Jumlah kontribusi dikalikan 2,5, menghasilkan skor 0–100 (bukan persentase).

ASQ: 3 item pada skala 1–7. Rata-rata dihitung dari jawaban valid, N/A dikecualikan. Semua N/A menghasilkan skor tidak tersedia. Arah skala dapat dipilih; ringkasan tidak menggabungkan arah berbeda.

Teks Inggris mengikuti materi acuan pengguna. Terjemahan Indonesia membantu pengisian, bukan klaim instrumen terjemahan yang telah divalidasi.

## Penyimpanan

Kedua halaman berbagi localStorage pada browser dan domain yang sama. Data lama pada domain yang sama tetap terbaca. Halaman pemilik diperbarui ketika tab lain menyimpan jawaban.

Jawaban dari perangkat atau browser berbeda belum dikumpulkan terpusat. Data tidak masuk ke repositori GitHub. Ekspor CSV untuk cadangan. Tidak ada login aplikasi; siapa pun dapat membuka alamat halaman pemilik dan melihat data yang ada pada browser tersebut. Mode contoh terpisah dari jawaban penelitian.
