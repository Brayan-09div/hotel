<template>
  <q-layout view="hHh lpR fFf">

    <q-header
      reveal
      elevated
      class="bg-black text-white q-pt-md q-pb-md transition-header"
      :class="{ 'header-scrolled': isScrolled }"
    >
      <!-- Navegación de pestañas -->
      <q-tabs align="center" class="text-white" indicator-color="white">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/habitaciones" label="Habitaciones" />
        <q-route-tab to="/servicios" label="Servicios" />
        <q-route-tab to="/deportes" label="Deportes Extremos" />
        <q-route-tab to="/contacto" label="Contacto" />
      </q-tabs>
    </q-header>

    <!-- Contenido principal -->
    <q-page-container class="q-pt-lg">
      <router-view></router-view>
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.q-img-sq {
  max-width: 600px;
  border-radius: 8px;
}

.cta-button {
  margin: 0 10px;
}

.bg-black {
  background-color: #000000;
  /* Color de fondo negro */
}

.text-black {
  color: #000000;
  /* Color de texto negro */
}

.bg-white {
  background-color: #ffffff;
  /* Color de fondo blanco */
}

.text-white {
  color: #ffffff;
  /* Color de texto blanco */
}

.transition-header {
  transition: background-color 0.3s ease, padding 0.3s ease;
}

.header-scrolled {
  background-color: #333333;
  padding-top: 10px;
  padding-bottom: 10px;
}

.q-tabs .q-tab {
  transition: transform 0.3s ease;
}

.q-tabs .q-tab:hover {
  transform: scale(1.1);
}
</style>
