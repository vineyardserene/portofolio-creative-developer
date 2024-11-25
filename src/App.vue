<template>
  <div class="bg-gray-50 min-h-screen font-roboto"> <!-- Menambahkan class font-roboto di sini -->
    <Navbar />
    <HeroSection />
    <Stats />
    <Project />
       <contact />

    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/HeroSection.vue";
import Stats from "./components/Stats.vue";
import Footer from "./components/Footer.vue";
import contact from "./components/contact.vue";
import Project from "./components/Project.vue";
</script>
