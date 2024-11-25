<template>
  <nav class="bg-perano-300 rounded-full p-4 shadow-lg mt-8 mx-auto w-11/12">
    <div class="container mx-auto flex items-center">
      <!-- Home Button -->
      <a
        href="#"
        class="bg-white text-black font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-200"
      >
        Home
      </a>

      <!-- Menu Items -->
      <ul class="flex ml-auto space-x-8 text-white font-medium pr-4">
        <li v-for="(item, index) in menuItems" :key="index">
          <a
            href="#"
            class="hover:text-perano-100 transition duration-200"
          >
            {{ item }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

// Reactive array of menu items
const menuItems = ref(["About", "Services", "Project", "Contact"]);
</script>
