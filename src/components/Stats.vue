<template>
  <section class="bg-[#BBC2E7] py-12">
    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
      <div
        v-for="(item, index) in stats"
        :key="index"
        class="rounded-lg shadow-md p-6 text-center bg-custom-gradient w-full sm:w-card-width h-auto flex flex-col justify-center items-center"
      >
        <h2 class="text-primary-blue text-3xl font-bold">{{ item.value }}</h2>
        <p class="text-gray-text text-sm mt-2">{{ item.label }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: "50+", label: "project" },
  { value: "36+", label: "client" },
  { value: "21+", label: "countries" },
];
</script>
