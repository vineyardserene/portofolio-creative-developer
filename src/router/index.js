import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue'; // Import komponen App.vue

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App, // Set App.vue sebagai komponen untuk route '/'
  },
];

const router = createRouter({
  history: createWebHistory(), // Gunakan mode history untuk navigasi
  routes,
});

export default router;
