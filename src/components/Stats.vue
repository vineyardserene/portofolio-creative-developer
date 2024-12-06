<template>
  <div class="bg-black overflow-hidden">
    <!-- Kontainer untuk teks bergerak -->
    <div class="flex items-center text-lg text-white py-2 h-[90px] animate-marquee">
      <div class="marquee-content">
        <span>LANDING PAGE</span>
        <img src="@/assets/star.png" alt="star" class="w-7 h-7 mx-2" />
        <span>WEB DEV</span>
        <img src="@/assets/star.png" alt="star" class="w-7 h-7 mx-2" />
        <span>SOSIAL MEDIA DESIGN</span>
        <img src="@/assets/star.png" alt="star" class="w-7 h-7 mx-2" />
        <span>UI/UX DESIGN</span>
        <img src="@/assets/star.png" alt="star" class="w-7 h-7 mx-2" />
        <span>PRODUCT DESIGN</span>
        <img src="@/assets/star.png" alt="star" class="w-7 h-7 mx-2" />
      </div>
      
      <!-- Duplikat konten untuk animasi looping tanpa henti -->
      <div class="marquee-content">
        <span>LANDING PAGE</span>
        <img src="@/assets/star.png" alt="star" class="w-7 h-7 mx-2" />
        <span>WEB DEV</span>
        <img src="@/assets/star.png" alt="star" class="w-7 h-7 mx-2" />
        <span>SOSIAL MEDIA DESIGN</span>
        <img src="@/assets/star.png" alt="star" class="w-7 h-7 mx-2" />
        <span>UI/UX DESIGN</span>
        <img src="@/assets/star.png" alt="star" class="w-7 h-7 mx-2" />
        <span>PRODUCT DESIGN</span>
        
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Efek marquee bergerak terus menerus */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Kelas untuk animasi */
.animate-marquee {
  display: flex;
  overflow: hidden;
  width: 100vw; /* Pastikan marquee hanya mengisi layar */
}

/* Kontainer yang berisi teks dan bintang */
.marquee-content {
  display: flex;
  gap: 20px; /* Jarak antar teks dan ikon */
  white-space: nowrap; /* Pastikan teks tidak pecah ke baris baru */
  animation: marquee 15s linear infinite; /* Set animasi dengan durasi 15 detik */
  flex-shrink: 0; /* Menghindari konten mengecil */
}

/* Styling untuk teks */
body {
  font-family: 'Roboto', sans-serif;
}
</style>
