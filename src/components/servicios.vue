<template>
  <q-page class="q-pa-md servicios">
    <div class="services-section">
      <h2>Servicios Destacados</h2>
      <div class="services-grid">
        <q-card
          v-for="(servicio, index) in serviciosPaginados"
          :key="index"
          class="service-card"
          flat
          bordered
          @click="showServiceDetails(servicio)"
        >
          <q-img :src="servicio.imagen" class="q-img--standard" cover />
          <q-card-section>
            <div class="service-title">{{ servicio.nombre }}</div>
            <div class="service-description">{{ servicio.descripcion }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Modal para detalles de servicio -->
    <q-dialog v-model="showModal" persistent>
      <q-card>
        <q-card-section>
          <div class="service-title-modal">{{ currentService.nombre }}</div>
          <div class="service-description-modal">
            {{ currentService.descripcion }}
          </div>
          <div class="service-details-modal">
            <div><strong>Características:</strong> {{ currentService.caracteristicas }}</div>
            <div><strong>Servicios:</strong> {{ currentService.servicios }}</div>
            <div><strong>Horario:</strong> {{ currentService.horario }}</div>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn color="primary" label="Cerrar" @click="showModal = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Paginación -->
    <div class="pagination-container">
      <q-pagination
        v-model="currentPage"
        color="black"
        :max="totalPages"
        :max-pages="6"
        :boundary-numbers="false"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';


const servicios = ref([
  {
    nombre: "Piscina",
    descripcion:
      "Disfruta de nuestra amplia piscina climatizada con vistas panorámicas y servicio de bar.",
    imagen:
      "https://phantom-elmundo.unidadeditorial.es/05c24885c352280a7bf68f0163e5a6b4/resize/1200/f/jpg/assets/multimedia/imagenes/2021/04/30/16197840339150.jpg",
    caracteristicas: "Piscina climatizada, vistas panorámicas",
    servicios: "Toallas, tumbonas, servicio de bar",
    horario: "9:00 - 20:00",
  },
  {
    nombre: "Spa",
    descripcion:
      "Relájate con nuestros tratamientos de spa exclusivos y masajes terapéuticos en un entorno tranquilo.",
    imagen:
      "https://image-tc.galaxy.tf/wijpeg-eqqm4t3tc40wh3y0wluxpletf/aqmv-fgmv-1800x1200_standard.jpg?crop=100%2C0%2C1600%2C1200&width=900",
    caracteristicas: "Tratamientos exclusivos, masajes terapéuticos",
    servicios: "Sauna, jacuzzi, sala de relajación",
    horario: "10:00 - 22:00",
  },
  {
    nombre: "Gimnasio",
    descripcion:
      "Mantente en forma con nuestro moderno gimnasio equipado con máquinas de última generación y entrenadores personales.",
    imagen:
      "https://equipoparagimnasioferbel.com/wp-content/uploads/2018/08/equipo-para-gimnasio2.jpg",
    caracteristicas: "Equipos de última generación, entrenadores personales",
    servicios: "Agua, toallas, clases grupales",
    horario: "6:00 - 21:00",
  },
  {
    nombre: "Restaurante",
    descripcion:
      "Saborea deliciosos platos en nuestro restaurante gourmet con vistas espectaculares y menú internacional.",
    imagen:
      "https://www.opentable.com.mx/blog/wp-content/uploads/sites/432/2022/12/screen-shot-2022-12-08-at-4-52-50-pm.png",
    caracteristicas: "Cocina gourmet, vistas espectaculares",
    servicios: "Desayuno, almuerzo, cena, servicio a la habitación",
    horario: "7:00 - 23:00",
  },
  {
    nombre: "WiFi",
    descripcion:
      "Conéctate con alta velocidad en todo el establecimiento, ideal para viajes de negocios y ocio.",
    imagen:
      "https://i0.wp.com/amberlair.com/wp-content/uploads/2016/02/amberlair-crowdsourced-crowdfunded-boutique-hotel-Blue-Karma-resort-wifi.jpg?ssl=1",
    caracteristicas: "Conexión WiFi rápida y segura",
    servicios: "Acceso gratuito, red segura",
    horario: "24 horas",
  },
  {
    nombre: "Centro de Negocios",
    descripcion:
      "Espacio equipado para reuniones y negocios, con servicios de impresión y asistencia técnica.",
    imagen:
      "https://www.cisebusiness.com/wp-content/uploads/2015/12/3-1024x500.jpg",
    caracteristicas: "Salas de reuniones, servicios de impresión",
    servicios: "Asistencia técnica, proyección multimedia",
    horario: "8:00 - 18:00",
  },
  {
    nombre: "Club Infantil",
    descripcion:
      "Área de entretenimiento dedicada a niños con actividades supervisadas y juegos educativos.",
    imagen:
      "https://saviaproyectos.com/wp-content/uploads/2016/06/savia-miniclub-2-1024x768.jpg",
    caracteristicas: "Actividades supervisadas, juegos educativos",
    servicios: "Cuidado infantil, meriendas saludables",
    horario: "9:00 - 18:00",
  },
  {
    nombre: "Bar de Playa",
    descripcion:
      "Disfruta de refrescos y cócteles en nuestro bar situado junto a la playa con vistas al mar.",
    imagen:
      "https://media-cdn.tripadvisor.com/media/photo-s/14/1f/36/c7/sushi-n-raw-bar.jpg",
    caracteristicas: "Bar junto a la playa, vistas al mar",
    servicios: "Cócteles, aperitivos ligeros",
    horario: "11:00 - 20:00",
  },
  {
    nombre: "Servicio de Conserjería",
    descripcion:
      "Asistencia personalizada para reservas, excursiones y recomendaciones locales.",
    imagen:
      "https://img.freepik.com/fotos-premium/retrato-conserje-hotel-vietnamita-alegre-haciendo-gesto-bienvenida-invitar-huespedes-vestibulo-hotel_274689-19148.jpg",
    caracteristicas: "Asistencia personalizada, reservas",
    servicios: "Excursiones, recomendaciones locales",
    horario: "8:00 - 22:00",
  },
  {
    nombre: "Salón de Eventos",
    descripcion:
      "Espacio versátil para conferencias, bodas y eventos sociales, con servicios de catering y decoración.",
    imagen:
      "https://images.adsttc.com/media/images/512a/443c/b3fc/4b11/a700/8d82/large_jpg/1302722261-03.jpg?1361724476",
    caracteristicas: "Salón para conferencias, eventos sociales",
    servicios: "Catering, decoración personalizada",
    horario: "Según reserva",
  },
  {
    nombre: "Servicio de Lavandería",
    descripcion:
      "Lavandería rápida y eficiente con servicio de planchado y limpieza en seco.",
    imagen: "https://grupojaktur.com/blog/portadas/3.png",
    caracteristicas: "Servicio de lavado y planchado, limpieza en seco",
    servicios: "Lavado rápido, planchado exprés",
    horario: "9:00 - 18:00",
  },
  {
    nombre: "Terraza Panorámica",
    descripcion:
      "Disfruta de vistas panorámicas desde nuestra terraza con cócteles y aperitivos gourmet.",
    imagen:
      "https://granatrio.com/assets/landings/terraza/hero-2874af90b209ec70254216b50f21d9f504dbaa8fbd81fbdf529c1be446021fe0.jpg",
    caracteristicas: "Vistas panorámicas, cócteles gourmet",
    servicios: "Aperitivos, cócteles especiales",
    horario: "17:00 - 23:00",
  },
]);

const currentPage = ref(1);
const perPage = 3;

const serviciosPaginados = computed(() => {
  const startIndex = (currentPage.value - 1) * perPage;
  return servicios.value.slice(startIndex, startIndex + perPage);
});

const totalPages = computed(() => Math.ceil(servicios.value.length / perPage));

const showModal = ref(false);
const currentService = ref(null);

function showServiceDetails(service) {
  currentService.value = service;
  showModal.value = true;
}
</script>

<style scoped>
.servicios {
  font-family: "Arial, sans-serif";
  color: #fff;
  background-color: #000;
}

.services-section {
  padding: 40px;
  background-color: #f5f5f5;
  color: #333;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}

.services-section h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.q-img--standard {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
}

.service-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.service-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.service-description {
  font-size: 1.2rem;
}

.q-dialog {
  width: 400px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
}

.q-card {
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  background-color: #fff;
}

.service-title-modal {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
}

.service-description-modal {
  font-size: 1.2rem;
}

.service-details-modal {
  margin-top: 20px;
  font-size: 1.1rem;
}

.service-details-modal div {
  margin-bottom: 8px;
}

.pagination-container {
  background-color: #fff;
  width: 10%;
  padding: 10px;
  border-radius: 8px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
