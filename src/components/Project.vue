<template>
  <div class="max-w-7xl py-12 mt-[-3rem] mx-16">
    <!-- Section 1: Creative dan Developer -->
    <div class="flex flex-col md:flex-row justify-between items-center mb-8">
      <div>
        <h1 class="text-4xl font-bold">
          See my
          <span class="text-[#016A98]">project</span>
        </h1>
      </div>
      <div class="ml-[6rem]">
        <p class="text-[17px] mt-[1rem] font-normal text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a class="text-[#016A98] mt-2 inline-block" href="#">
          View more
          <img src="../assets/Arrow-blue.png" class="mt-[-1rem] ml-[6rem]" />
        </a>
      </div>
    </div>

    <!-- Section 2: Grid of Projects -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="relative w-[300px] h-[450px]"
      >
        <!-- Project Image -->
        <img
          :src="project.image"
          alt="Project Image"
          class="rounded-[26px] w-full h-full object-cover"
        />

        <!-- Vector Image (absolute, rounded circle, white bg) -->
        <div
          v-if="project.overlay"
          class="absolute z-20 w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-lg mt-[-6rem] ml-[14rem]"
        >
          <img src="../assets/Arrow-black.png" class="w-[20px] h-[20px]" />
        </div>

        <!-- Overlay (for projects with overlay) -->
        <div
          v-if="project.overlay"
          class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-5 rounded-b-[26px] flex justify-between items-center"
        >
          <span>{{ project.title }}</span>
          <i class="fas fa-arrow-up-right-from-square"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Reactive projects data
const projects = ref([
  {
    title: 'Landing Page',
    image: '../src/assets/project-1.png',
    overlay: true,
  },
  {
    title: 'Infographic',
    image: '../src/assets/project-2.png',
    overlay: false,
  },
  {
    title: 'UX/UI Design Bootcamp',
    image: '../src/assets/project-3.png',
    overlay: false,
  },
  {
    title: 'Project 4',
    image: '../src/assets/project-1.png',
    overlay: false,
  },
]);
</script>