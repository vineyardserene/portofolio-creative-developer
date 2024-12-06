<template>
  <!-- Section 1: Creative dan Developer -->
  <div class="bg-white text-gray-800 justify-center left-[6rem]">
    <main class="text-center">
      <!-- Container untuk Creative dan Developer -->
      <div class="relative inline-block mb-20">
        <!-- Kata Creative -->
        <h1 class="absolute right-2 top-4 text-[100px] font-bold z-10">
          Creative
          <div class="absolute w-px bg-[#016A98] -mt-24 h-[4rem] left-[28.25rem]"></div>
          <div class="text-lg font-small text-[#016A98] -mt-24 relative z-10 left-[19.25rem]">
            <p>Developer</p>
            <p class="ml-11">UI/UX Designer</p>
          </div>
        </h1>

        <!-- Kata Developer dimulai dari huruf "a" di bawah Creative -->
        <h2 class="text-[100px] font-bold text-[#016A98] absolute mt-[11rem] transform -translate-x-1/2 -translate-y-1/2">
          Developer
        </h2>
      </div>
    </main>
  </div>

  <!-- Section 2: Creative for dan Arrow -->
  <div class="relative">
    <!-- Container Creative for dan Arrow -->
    <div class="absolute inset-x-0 z-10 flex justify-between px-16">
      <!-- Creative for (pindah ke kanan) -->
      <div class="lg:w-1/5 w-1/3 text-left bg-gray-50 mt-[10rem] p-8 rounded-[22px] ml-[5.50rem]">
        <h3 class="text-2xl font-bold">Creative for</h3>
        <p class="mt-4">using modern minimalist design to make nice things for people.</p>
        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <!-- Arrow -->
      <div class="md:w-1/5 w-1/4 mt-[12rem] text-left">
        <img src="../assets/arrow.png" class="rounded-full h-[157px] w-[156px]" />
      </div>
    </div>
  </div>

  <!-- Gambar background -->
  <div class="relative mt-[17rem] mx-16">
    <!-- Gambar Star dengan posisi lebih tinggi dan sejajar dengan Developer -->
    <img src="../assets/star-blue.png" class="absolute top-[-12rem]" alt="Star">
    
    <img src="../assets/bg.png" class="rounded-tl-[67px] rounded-tr-[67px] w-full h-[330px] object-cover" />
    <div class="absolute bottom-4 right-4 mb-4 mr-4"></div>
  </div>
</template>
