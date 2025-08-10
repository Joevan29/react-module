'use client';

import Image from 'next/image';
import { useState } from 'react'; // 1. Impor `useState` dari React

export default function KartuProfil({ nama, pekerjaan, gambar }) {
  // 2. Deklarasikan sebuah state variable bernama "jumlahSuka"
  // `useState(0)` berarti nilai awalnya adalah 0.
  // `setJumlahSuka` adalah fungsi yang kita gunakan untuk mengubah nilainya.
  const [jumlahSuka, setJumlahSuka] = useState(0);

  // 3. Buat sebuah "event handler", yaitu fungsi yang akan dijalankan saat tombol diklik.
  function handleSukaClick() {
    // Menggunakan fungsi `setJumlahSuka` untuk menambah nilai state sebesar 1.
    setJumlahSuka(jumlahSuka + 1);
    console.log(`Tombol suka untuk ${nama} diklik!`);
  }

  return (
    <div className="w-80 rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="flex justify-center">
        <Image
          src={gambar}
          alt={`Foto profil ${nama}`}
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>

      <h2 className="mt-4 text-center text-2xl font-bold dark:text-white">{nama}</h2>
      <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
        {pekerjaan ? pekerjaan : 'Belum ada pekerjaan'}
      </p>

      {/* 4. Tambahkan bagian baru untuk tombol dan tampilan jumlah suka */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={handleSukaClick} // `onClick` adalah event yang memicu fungsi kita
          className="rounded-lg bg-pink-500 px-5 py-2 font-semibold text-white transition hover:bg-pink-600"
        >
          Suka 👍
        </button>
        <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
          {/* Tampilkan nilai state `jumlahSuka` di sini */}
          {jumlahSuka} Suka
        </p>
      </div>
    </div>
  );
}