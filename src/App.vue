<template> 
    <Navbar />
    <HeroSection />
    <Stats />
    <About />
    <services />
    <Project />
    <contact />

    <Footer /> 
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import About from "./components/About.vue";
import HeroSection from "./components/HeroSection.vue";
import Stats from "./components/Stats.vue";
import services from "./components/services.vue";
import Footer from "./components/Footer.vue";
import contact from "./components/contact.vue";
import Project from "./components/Project.vue";
</script>
