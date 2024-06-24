<template>
  <q-page class="q-pa-md deportes">
    <div class="banner">
      <h1>¡Aventuras Extremas Te Esperan!</h1>
      <p>
        Explora nuestros emocionantes deportes extremos y vive la adrenalina al
        máximo.
      </p>
    </div>
    <div class="sports-section">
      <div class="sports-grid">
        <q-card
          v-for="(deporte, index) in deportes"
          :key="index"
          class="sport-card"
          flat
          bordered
          @click="showSportDetails(deporte)"
        >
          <q-img :src="deporte.imagen" class="sport-image" />
          <q-card-section class="card-content">
            <div class="sport-title">{{ deporte.nombre }}</div>
            <q-btn
              flat
              label="Ver más"
              @click.stop="showSportDetails(deporte)"
              class="details-button"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Modal para detalles de deporte -->
    <q-dialog v-model="showModal" persistent>
      <q-card class="details-card">
        <q-card-section>
          <div class="sport-title">{{ currentSport.nombre }}</div>
          <div class="sport-description">{{ currentSport.descripcion }}</div>
          <div class="sport-details">
            <div>
              <strong>Características:</strong>
              {{ currentSport.caracteristicas }}
            </div>
            <div><strong>Servicios:</strong> {{ currentSport.servicios }}</div>
            <div><strong>Horario:</strong> {{ currentSport.horario }}</div>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn color="primary" label="Cerrar" @click="showModal = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const deportes = ref([
  {
    nombre: "Parapente",
    descripcion:
      "Experimenta la adrenalina del vuelo libre con vistas impresionantes desde las alturas.",
    imagen:
      "https://www.iatisegurosvida.com/wp-content/uploads/2020/03/parapente-modalidades-cursos-1.jpg",
    caracteristicas: "Vuelo libre, vistas panorámicas, seguro incluido",
    servicios: "Equipo completo, instrucción profesional",
    horario: "8:00 - 18:00",
  },
  {
    nombre: "Rafting",
    descripcion:
      "Disfruta de la emoción del descenso de ríos rápidos en un entorno natural espectacular.",
    imagen: "https://alua.es/wp-content/uploads/2022/09/Que-es-el-Rafting.webp",
    caracteristicas: "Descenso de ríos, guías experimentados",
    servicios: "Equipo completo, transporte incluido",
    horario: "9:00 - 17:00",
  },
  {
    nombre: "Escalada",
    descripcion:
      "Desafía tus límites escalando las paredes naturales más impresionantes.",
    imagen:
      "https://justnorth.co/wp-content/uploads/2019/01/Climb-Colombia-1.jpg",
    caracteristicas: "Escalada en roca, seguridad garantizada",
    servicios: "Equipo completo, instrucción profesional",
    horario: "7:00 - 19:00",
  },
 {
  nombre: "Cable Vuelo",
  descripcion: "Disfruta de la emoción del Cable Vuelo sobre las aguas cristalinas.",
  imagen: "https://parquesdesantander.com/wp-content/uploads/2021/10/WEB-DSC_0912-cable-1024x683.jpg",
  caracteristicas: "Adrenalina, velocidad sobre el agua",
  servicios: "Equipo completo proporcionado, instrucción profesional",
  horario: "Horario de operación: 8:00 - 16:00"
}
]);

const showModal = ref(false);
const currentSport = ref(null);

function showSportDetails(sport) {
  currentSport.value = sport;
  showModal.value = true;
}
</script>

<style scoped>
.deportes {
  font-family: "Arial, sans-serif";
  color: #fff;
  background-color: #141414; /* Fondo negro */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.banner {
  text-align: center;
  padding: 40px;
  background: linear-gradient(
    to right,
    #ff5f6d,
    #ffc371
  ); /* Fondo degradado vibrante */
  color: #fff;
}

.banner h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.banner p {
  font-size: 1.5rem;
  margin-top: 0;
}

.sports-section {
  width: 100%;
  max-width: 1200px;
  padding: 40px 20px;
}

.sports-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.sport-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  background-color: rgba(255, 255, 255, 0.1); /* Fondo semitransparente */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Borde semitransparente */
}

.sport-card:hover {
  transform: scale(1.05); /* Efecto de zoom al pasar el ratón */
  cursor: pointer;
}

.sport-image {
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
  text-align: center;
}

.sport-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.details-button {
  margin-top: 10px;
}

.q-dialog {
  width: 400px;
  background-color: rgba(
    0,
    0,
    0,
    0.8
  ); /* Fondo negro semitransparente para el modal */
  color: #fff; /* Texto blanco */
}

.details-card {
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.2); /* Sombra más pronunciada */
  background-color: #000000; /* Fondo blanco para la tarjeta dentro del modal */
  color: #ffffff;
}

.q-card-section {
  padding: 20px;
}

.sport-title-modal {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.sport-description-modal {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #333;
}

.sport-details-modal {
  margin-top: 20px;
  font-size: 1.1rem;
  color: #070707;
}

.sport-details-modal div {
  margin-bottom: 8px;
}
</style>
