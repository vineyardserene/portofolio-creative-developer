<template>
  <!-- Navbar -->
  <div class="navbar bg-base-100 px-4 sm:px-8 lg:px-30 py-2">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">ST</a>
    </div>

    <!-- Desktop Menu -->
    <div class="flex-none hidden lg:block">
      <ul class="text-lg menu menu-horizontal mx-16 px-1 space-x-6">
        <li v-for="(item, index) in menuItems" :key="index">
          <a href="#" class="text-items-center px-2">
            {{ item }}
          </a>
        </li>
      </ul>
    </div>

    <!-- Mobile Menu Button -->
    <div class="flex-none lg:hidden">
      <button @click="toggleMenu" class="btn btn-ghost text-xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile Menu Dropdown -->
  <div v-show="isMenuOpen" class="lg:hidden bg-base-100 absolute top-[4rem] left-0 right-0 p-4 shadow-lg px-0">
    <ul class="space-y-4">
      <li v-for="(item, index) in menuItems" :key="index">
        <a href="#" class="block px-2 py-1 text-lg">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Reactive state to track the menu visibility on mobile
const isMenuOpen = ref(false);

// Toggle the mobile menu visibility
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Reactive array of menu items
const menuItems = ref(["About", "Services", "Project", "Contact"]);
</script>

<style scoped>
/* Optional: Custom styles for mobile menu */
</style>
