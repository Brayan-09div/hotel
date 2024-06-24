<template>
  <q-page class="home">
    <q-page-container>
      <!-- Sección Carátula -->
      <div class="caratula">
        <section class="hero">
          <video autoplay muted loop>
            <source src="../assets/CINEMATIC HOTEL B ROLL SEQUENCE - SONY A6000 _ Hotel Haus am Markt Wipperfürth.mp4" type="video/mp4" />
          </video>
          <div class="hero-text">
            <h1>Bienvenido a Hotel Qusar</h1>
            <p style="font-size: 25px;">Tu aventura comienza aquí.</p>
          </div>
        </section>
      </div>

      <!-- Sección de Información -->
      <section class="info-section">
        <div class="info-text">
          <h2>Nuestra Historia</h2>
          <p>
            Con una renovación fresca y una historia de sesenta años, Amigo Motor Lodge es una acomodación perfectamente nostálgica y, sin embargo, innegablemente moderna. Ya sea que elijas una habitación original o uno de nuestros trailers Airstream adicionales, toda la experiencia ha sido cuidadosamente considerada y hace un guiño a la historia de la propiedad y la zona.
          </p>
          <ul>
            <li @click="redireccion()">Espacios Comunes</li>
            <li @click="showMultiple">Ver Galería </li>
          </ul>
        </div>
        <q-img src="../assets/da39ceccbd966c17c74c016e311e1ec2.jpg" alt="Descripción de la Imagen" />
      </section>

      <!-- Componente para Lightbox -->
      <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>

      <!-- Sección de Servicios -->
      <section class="services-section">
        <h2>Nuestros Servicios</h2>
        <div class="services-grid">
          <q-card class="service-card" flat>
            <q-card-section>
              <h3 class="service-title">Piscina de Lujo</h3>
              <p class="service-description">Relájate en nuestra piscina estilo resort con vistas panorámicas.</p>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn label="Más Información" color="primary" @click="redireccionn()" />
            </q-card-actions>
          </q-card>
          <q-card class="service-card" flat>
            <q-card-section>
              <h3 class="service-title">Spa de Clase Mundial</h3>
              <p class="service-description">Deja que nuestros terapeutas te consientan con tratamientos exclusivos.</p>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn label="Más Información" color="primary" @click="redireccionn()" />
            </q-card-actions>
          </q-card>
          <q-card class="service-card" flat>
            <q-card-section>
              <h3 class="service-title">Cocina Gourmet</h3>
              <p class="service-description">Disfruta de deliciosos platos preparados por chefs reconocidos.</p>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn label="Más Información" color="primary" @click="redireccionn()" />
            </q-card-actions>
          </q-card>
        </div>
      </section>
    </q-page-container>
  </q-page>
</template>


<script setup>
import { useRouter } from "vue-router";
import { ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';

const router = useRouter();

const email = ref('');

function redireccion() {
  router.push('/habitaciones');
}

function redireccionn() {
  router.push('/servicios');
}

const visibleRef = ref(false);
const indexRef = ref(0); // default 0
const imgsRef = ref([]);

const showMultiple = () => {
  imgsRef.value = [
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1676321688630-9558e7d2be10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  ];
  indexRef.value = 0; // index of imgList
  onShow();
};

const onShow = () => {
  visibleRef.value = true;
};

const onHide = () => {
  visibleRef.value = false;
};
</script>

<style scoped>
.home {
  font-family: 'Arial, sans-serif';
  color: #333;
  background-color: #030303;
  padding: 0 20px 20px;

}

.q-page-container {
  padding: 0 20px; /* Añadir padding horizontal */
  background-color: #000;
}

/* Sección Hero */
.hero {
  position: relative;
  height: calc(100vh - 80px);
  background: #000;
  overflow: hidden;
  margin: 0 -20px; /* Ajustar el margen negativo para que el video cubra toda la pantalla */
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(4, 4, 4, 0.572);
  z-index: 2;
}

.hero video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  z-index: 2;
}

/* Sección de Información */
.info-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  background: #f9f9f9;
  color: #080808;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  margin: 40px 0;
}

.info-text {
  max-width: 600px;
}

.info-text h2 {
  font-size: 2.5rem;
  font-weight: bold;
}

.info-text p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.info-text ul {
  list-style: none;
  padding: 0;
}

.info-text li {
  font-size: 1.2rem;
  margin-bottom: 10px;
  cursor: pointer;
  color: #000;
}

.info-section q-img {
  width: 30%;
  height: 30vh;
}

/* Sección de Servicios */
.services-section {
  padding: 40px;
  background-color: #fff;
  color: #000;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}

.services-section h2 {
  font-size: 2.5rem;
  font-weight: bold;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.service-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  background-color: #6f6e6e;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.service-description {
  font-size: 1.2rem;
}
</style>
