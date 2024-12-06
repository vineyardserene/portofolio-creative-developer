<template>
  <div class="max-w-7xl py-12 mt-[2rem] mx-16">
    <!-- Section 1: Creative dan Developer -->
    <div class="flex flex-col md:flex-row justify-center items-center mb-12">
      <div>
        <h1 class="text-4xl font-bold">
          Providing the  
          <span class="text-[#016A98]">best service</span> for you
        </h1>
      </div>
    </div>

    <!-- Section 2: Scrollable Carousel with Tailwind -->
    <div class="overflow-x-auto pb-6">
      <div class="flex scroll-smooth">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="relative w-[300px] h-[450px] flex-shrink-0 overflow-hidden"
        >
          <!-- Project Image -->
          <img
            :src="project.image"
            alt="Project Image"
            class="object-cover"
          />

          <!-- Project Title and Description -->
          <div class="absolute m-3 left-0 right-0 bg-white bg-opacity-80 p-4">
            <!-- Flex container for Title and Number -->
            <div class="flex justify-between items-center">
              <h3 class="text-xl font-normal">{{ project.title }}</h3>
              <p class="text-lg font-normal">{{ project.number }}</p>
            </div>

            <p class="text-xs text-gray-500 mt-3">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Define projects array with reactive data
const projects = ref([
  {
    title: 'UI/UX Design',
    number: '01',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: '../src/assets/services.png',
    overlay: true,
  },
  {
    title: 'App UI/UX',
    number: '02',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: '../src/assets/services.png',
    overlay: false,
  },
  {
    title: 'Web Development',
    number: '03',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '../src/assets/services.png',
    overlay: false,
  },
  {
    title: 'Social Media Design',
    number: '04',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '../src/assets/services.png',
    overlay: true,
  },
]);
</script>

