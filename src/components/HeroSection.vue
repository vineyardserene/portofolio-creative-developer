<template>
    <div class="container mx-auto py-10">
      <!-- Header Section -->
      <div class="flex flex-col items-center mb-12">
        <!-- Teks Utama di Atas Foto -->
        <h1 class="text-6xl font-bold font-urbanist text-center leading-tight">
          Hello, <span class="text-[# 4C5AC2]">I’m</span><br />
          UI/UX Designer
          <span class="inline-block">
            <img
              src="../assets/Vector.png"
              alt="vector"
              class="inline-block w-[90px] h-[100px] ml-2"
            />
          </span>
        </h1>
      </div>
  
      <!-- Konten Kiri dan Kanan -->
      <div class="relative mx-auto mt-12 flex justify-between items-center max-w-[1200px]">
        <!-- Icon dan Teks Kiri -->
        <div class="text-left flex flex-col items-start -translate-y-16">
          <img
            src="../assets/icon.png"
            alt="icon"
            class="w-[20px] h-[20px] mb-4"
          />
          <p class="text-gray-700 text-lg font-roboto">
            I love using modern minimalist design to<br />
            make nice things for people
          </p>
        </div>
  
        <!-- Foto dengan Background -->
        <div class="relative flex justify-center items-center -translate-x-24">
          <!-- Background Image -->
          <img
            src="../assets/bg.png"
            alt="Background"
            class="absolute w-[400px] h-[200px] bottom-0"
          />
          <!-- Foto Person -->
          <img
            src="../assets/person.png"
            alt="Person"
            class="relative w-[400px] h-[320px] object-cover z-10"
          />
        </div>
  
        <!-- Teks Pengalaman Kanan -->
        <div class="text-left flex flex-col items-end -translate-y-16">
          <h2 class="text-[28px] font-urbanist text-[#4C5AC2] font-bold">10 Years</h2>
          <p class="text-gray-600 text-[12px] font-roboto text-left">Experience</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  /* Tidak ada script tambahan */
  </script>
  