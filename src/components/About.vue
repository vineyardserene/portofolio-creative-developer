<template>  
    <div class="relative mt-[5rem] mx-8"> 
      <div class="w-1/2">
        <h1 class="text-5xl font-bold mb-4">
          About
          <span class="text-[#016A98]">Me</span>
        </h1>
      </div>
      <div class="flex flex-col lg:flex-row">
        <!-- About Me Title-->
    
        <!-- Bagian Kiri: Gambar dan Deskripsi (digeser sedikit ke kiri) -->
        <div class="md:w-[60rem] w-1/3 md:ml-[2rem] ml-[-40rem] mt-[6rem] flex flex-row lg:flex-col items-center md:items-start md:order-1">
          <div class="relative mb-0">
            <img src="../assets/about.png" alt="" class="rounded-lg shadow-lg" />
            <div class="absolute -top-7 left-[-30px]">
              <img src="../assets/star-yellow.png" alt="" />
            </div>
          </div>

          <div class="mt-[2rem] md:mt-6 md:ml-[2rem]">
            <div class="absolute w-px bg-[#016A98] h-[3rem] mt-[0.4rem]"></div>
            <p class="text-lg ml-[1rem]">
              Hi, there.
              <br />
              <a class="text-[#016A98]" href="#">I'm Tina</a>
            </p>
            <p class="text-sm text-gray-600 mt-[2rem]">
              adipiscing elit. Sed do eiusmod tempor
              <br /> incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <!-- Bagian Kanan: Pengalaman, Pendidikan, dan Keahlian -->
        <div class="w-2/3 md:mt-0 md:w-1/1 ml-[20rem] md:order-2">
          <div class="space-y-3">
            <!-- Experience Section -->
            <div class="flex flex-col mt-[6rem] ml-[-15rem]">
              <h2 class="text-sm font-bold mb-[-1.50rem]">Experience</h2>
              <div v-for="(item, index) in experiences" :key="'experience-' + index" class="grid grid-cols-3 gap-4 mb-4 ml-[-6rem]"> <!-- Menggeser grid lebih ke kiri -->
                <div></div>
                <div>
                  <a class="text-[#016A98]" :href="item.link">{{ item.title }}</a>
                  <p class="text-sm text-gray-600">{{ item.company }}</p>
                </div>
                <div>
                  <p class="text-sm text-[#016A98] ml-[5rem]">{{ item.duration }}</p>
                </div>
              </div>
            </div>
    
            <!-- Separator Line -->
            <div class="border-b-2 border-gray-300 ml-[-9rem]"></div>
    
            <!-- Education Section -->
            <div class="flex flex-col ml-[-15rem]">
              <h2 class="text-sm font-semibold mb-[-1.50rem] mt-[1rem]">Education</h2>
              <div v-for="(item, index) in education" :key="'education-' + index" class="grid grid-cols-3 gap-4 mb-4 ml-[-6rem]"> 
                <div></div>
                <div>
                  <a class="text-[#016A98]" :href="item.link">{{ item.degree }}</a>
                  <p class="text-sm text-gray-600">{{ item.institution }}</p>
                  <p class="text-sm text-gray-600" v-if="item.gpa">{{ item.gpa }}</p>
                </div>
                <div>
                  <p class="text-sm text-[#016A98]  ml-[5rem]">{{ item.duration }}</p>
                </div>
              </div>
            </div>
    
            <!-- Separator Line -->
            <div class="border-b-2 border-gray-300 ml-[-9rem]"></div>
    
            <!-- Skills Section -->
            <div class="flex flex-col mt-[2rem] ml-[-15rem]">
              <h2 class="text-sm font-bold mb-[-1.50rem] mt-[1rem]">Skills</h2>
              <div v-for="(item, index) in skills" :key="'skills-' + index" class="grid grid-cols-3 gap-4 mb-4 ml-[-6rem]"> <!-- Menggeser grid lebih ke kiri -->
                <div></div>
                <div>
                  <a class="text-[#016A98]" :href="item.link">{{ item.name }}</a>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const experiences = ref([
    {
      title: "Junior Web Dev (intern)",
      company: "Pt. Elit Sed do eiusmod",
      duration: "Jul 2021 - Des 2022"
    },
    {
      title: "Product Designer (Freelance)",
      company: "Pt. Elit Sed do eiusmod",
      duration: "Mar 2023 - Agst 2023"
    },
    {
      title: "Junior UI/UX Designer",
      company: "Pt. Elit Sed do eiusmod",
      duration: "Nov 2024 - Present"
    }
  ]);
  
  const education = ref([
    {
      degree: "Bachelor degree in informatics engineering",
      institution: "Bandung Polytechnic",
      gpa: "GPA 3.22 / 4.0",
      duration: "2018 - 2022"
    },
    {
      degree: "Vocational High School",
      institution: "Software engineering",
      duration: "2016 - 2018"
    }
  ]);
  
  const skills = ref([
    { name: "Figma / Framer", link: "#" },
    { name: "Visual Studio Code", link: "#" }
  ]);
  </script>
  