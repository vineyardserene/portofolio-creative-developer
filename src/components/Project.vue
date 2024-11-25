<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="container mx-auto px-2">
      <!-- Title -->
      <h1 class="text-5xl font-bold text-[#4C5AC2] mb-8 text-center">
        My Project
      </h1>

      <!-- Project Grid with gap and left-aligned -->
      <div class="max-w-5xl mx-auto rounded-lg mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-white rounded-2xl shadow-md overflow-hidden w-[320px] h-[420px] flex flex-col justify-between border-b-2 border-[#4C5AC2]"
        > <img src="../assets/project.png" class="w-full h-[200px] object-cover">

          <div class="p-4 text-center flex-grow flex flex-col justify-between">
            <h2 class="text-xl font-bold text-[#4C5AC2] mb-2 mt-4">
              {{ project.title }}
            </h2>
            <p class="text-gray-600 mb-4">
              {{ project.description }}
            </p>
            <a class="text-[#4C5AC2] font-bold" :href="project.link">
              view project
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Array of project data
const projects = [
  {
    title: 'Judul Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image:
      'https://storage.googleapis.com/a1aa/image/mnT1uINCNGIMNJlBhTn9Kt57FaLgKevFhmjgH0zqKyosXN6JA.jpg',
    link: '#',
  },
  {
    title: 'Judul Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image:
      'https://storage.googleapis.com/a1aa/image/mnT1uINCNGIMNJlBhTn9Kt57FaLgKevFhmjgH0zqKyosXN6JA.jpg',
    link: '#',
  },
  {
    title: 'Judul Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image:
      'https://storage.googleapis.com/a1aa/image/mnT1uINCNGIMNJlBhTn9Kt57FaLgKevFhmjgH0zqKyosXN6JA.jpg',
    link: '#',
  },
  {
    title: 'Judul Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image:
      'https://storage.googleapis.com/a1aa/image/mnT1uINCNGIMNJlBhTn9Kt57FaLgKevFhmjgH0zqKyosXN6JA.jpg',
    link: '#',
  },
  {
    title: 'Judul Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image:
      'https://storage.googleapis.com/a1aa/image/mnT1uINCNGIMNJlBhTn9Kt57FaLgKevFhmjgH0zqKyosXN6JA.jpg',
    link: '#',
  },
  {
    title: 'Judul Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image:
      'https://storage.googleapis.com/a1aa/image/mnT1uINCNGIMNJlBhTn9Kt57FaLgKevFhmjgH0zqKyosXN6JA.jpg',
    link: '#',
  },
];
</script>
