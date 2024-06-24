<template>
  <q-page class="q-pa-md habitacioness">
    <div class="habitaciones-container q-gutter-md">
      <q-card
        v-for="(habitacion, index) in habitaciones"
        :key="index"
        class="mi-tarjeta service-card"
        flat
        bordered
        @mouseover="hoverIndex = index"
        @mouseleave="hoverIndex = -1"
      >
        <q-img :src="habitacion.imagen" class="habitacion-imagen" />
        <q-card-section>
          <div class="text-overline text-orange-9">{{ habitacion.tipo }}</div>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ habitacion.nombre }}</div>
          <div class="text-caption text-grey">{{ habitacion.descripcion }}</div>
          <div v-if="hoverIndex === index" class="text-caption text-grey q-mt-sm">
            Precio por noche: ${{ habitacion.precio }}
          </div>
        </q-card-section>
        <q-card-actions>
          <q-btn flat color="primary" label="Ver Detalles" @click="showRoomDetails(habitacion)" />
          <q-btn flat color="secondary" label="Reservar" @click="redireccion()" />
        </q-card-actions>
      </q-card>
    </div>

    <!-- Modal para mostrar detalles de la habitación -->
    <q-dialog v-model="showModal" persistent>
      <q-card>
        <q-card-section>
          <q-img :src="currentRoom.imagen" class="habitacion-imagen" @click="showLightbox(currentRoom.imagen)" />
          <div class="text-overline text-orange-9">{{ currentRoom.tipo }}</div>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ currentRoom.nombre }}</div>
          <div class="text-caption text-grey">{{ currentRoom.descripcion }}</div>
          <div class="text-caption text-grey q-mt-sm">
            <p><strong>Área:</strong> {{ currentRoom.area }} metros cuadrados</p>
            <p><strong>Capacidad:</strong> {{ currentRoom.capacidad }} personas</p>
            <p><strong>Características:</strong> {{ currentRoom.caracteristicas }}</p>
            <p><strong>Servicios:</strong> {{ currentRoom.servicios }}</p>
            <p><strong>Vistas:</strong> {{ currentRoom.vistas }}</p>
          </div>
        </q-card-section>
        <q-card-actions>
          <q-btn flat color="primary" label="Cerrar" @click="showModal = false" />
          <q-btn flat color="secondary" label="Reservar" @click="redireccion()" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Lightbox para imagen ampliada -->
    <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import VueEasyLightbox from 'vue-easy-lightbox';

const router = useRouter();
function redireccion() {
  router.push('/contacto');
}

const habitaciones = ref([
  {
    nombre: 'Suite Ejecutiva',
    tipo: 'Habitación Estándar',
    descripcion: 'Habitación amplia con vistas panorámicas. Incluye cama King, baño privado y acceso a servicios exclusivos.',
    imagen: 'https://www.semelihotel.com.cy/images/com_droppics/31/large/815x500Suite-3081.jpg?1568374765',
    precio: 200,
    area: 60,
    capacidad: 2,
    caracteristicas: 'WiFi, TV de pantalla plana, minibar',
    servicios: 'Desayuno incluido, servicio a la habitación',
    vistas: 'Vistas panorámicas a la ciudad'
  },
  {
    nombre: 'Suite Presidencial',
    tipo: 'Suite de Lujo',
    descripcion: 'Espacio exclusivo con jacuzzi privado, sala de estar y servicio de mayordomo las 24 horas.',
    imagen: 'https://www.sofitelbarucalablanca.com/wp-content/uploads/sites/19/2023/04/DUF_7068-v-ok-1170x780.jpg',
    precio: 500,
    area: 120,
    capacidad: 4,
    caracteristicas: 'WiFi, jacuzzi, minibar',
    servicios: 'Mayordomo las 24 horas, servicio de lavandería',
    vistas: 'Vistas panorámicas al mar'
  },
  {
    nombre: 'Habitación Doble Deluxe',
    tipo: 'Habitación Estándar',
    descripcion: 'Elegante habitación con dos camas individuales, ideal para familias o amigos.',
    imagen: 'https://www.villaantilla.com/wp-content/uploads/2016/11/2021T_15830-1024x684.jpg',
    precio: 180,
    area: 45,
    capacidad: 2,
    caracteristicas: 'WiFi, TV de pantalla plana, escritorio',
    servicios: 'Servicio de despertador, gimnasio',
    vistas: 'Vistas al jardín'
  },
  {
    nombre: 'Suite Familiar',
    tipo: 'Suite Familiar',
    descripcion: 'Amplia suite con dos habitaciones conectadas, perfecta para familias grandes.',
    imagen: 'https://hotelgrandpark.com.co/wp-content/uploads/2023/08/suite-familiar-4-scaled.jpg',
    precio: 350,
    area: 100,
    capacidad: 6,
    caracteristicas: 'WiFi, TV en ambas habitaciones, cocina completa',
    servicios: 'Servicio de limpieza diario, cuna disponible',
    vistas: 'Vistas al campo'
  },
  {
    nombre: 'Habitación Superior',
    tipo: 'Habitación Estándar',
    descripcion: 'Confortable habitación con vista al jardín y todas las comodidades modernas.',
    imagen: 'https://www.windsortower.com/wp-content/uploads/2015/04/2-SUPERIOR.jpg',
    precio: 150,
    area: 55,
    capacidad: 2,
    caracteristicas: 'WiFi, minibar, caja fuerte',
    servicios: 'Piscina climatizada, spa',
    vistas: 'Vistas al jardín y a la piscina'
  },
  {
    nombre: 'Suite Ejecutiva Plus',
    tipo: 'Suite Ejecutiva',
    descripcion: 'Incluye espacio adicional para reuniones, perfecta para viajes de negocios.',
    imagen: 'https://images.trvl-media.com/lodging/2000000/1380000/1376500/1376474/5448eeab.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
    precio: 300,
    area: 70,
    capacidad: 4,
    caracteristicas: 'WiFi, sala de reuniones, minibar',
    servicios: 'Impresora disponible, servicio de catering',
    vistas: 'Vistas a la ciudad'
  },
  {
    nombre: 'Suite de Luna de Miel',
    tipo: 'Suite de Lujo',
    descripcion: 'Romántica suite con decoración especial y vistas al mar, ideal para parejas en luna de miel.',
    imagen: 'https://static1.squarespace.com/static/642c1d5a227d62555176db53/64300241b660bf378185f0f8/642eb7a70f706e676907a81a/1713444182239/Pasion+de+Amor++-+Paquete+Decoracion+-+Luna+Floreria+-+Banos+Ecuador.jpeg?format=1500w',
    precio: 400,
    area: 80,
    capacidad: 2,
    caracteristicas: 'WiFi, cama king size, decoración romántica',
    servicios: 'Jacuzzi privado, cena romántica en la habitación',
    vistas: 'Vistas al mar'
  },
  {
    nombre: 'Habitación Premium con Terraza',
    tipo: 'Habitación Estándar',
    descripcion: 'Espaciosa habitación con terraza privada y vistas espectaculares de la ciudad.',
    imagen: 'https://e9c3aa9d33ed68ad5563-53656e37320f5eb0ad9175f5f21a9949.ssl.cf1.rackcdn.com/u/zemi-beach/new-photography/two-bedroom-premium_04.jpg',
    precio: 250,
    area: 65,
    capacidad: 3,
    caracteristicas: 'WiFi, terraza privada con muebles de exterior',
    servicios: 'Servicio de habitaciones las 24 horas, minibar',
    vistas: 'Vistas panorámicas a la ciudad'
  },
  {
    nombre: 'Suite VIP',
    tipo: 'Suite de Lujo',
    descripcion: 'Exclusiva suite con servicios VIP, piscina privada y acceso directo a la playa.',
    imagen: 'https://www.orussey1.com/userfiles/thumbs/6u7b2128_29_30_tonemapped(1).jpg',
    precio: 600,
    area: 150,
    capacidad: 6,
    caracteristicas: 'WiFi, piscina privada, acceso directo a la playa',
    servicios: 'Conserje personalizado, spa privado en la habitación',
    vistas: 'Vistas al mar'
  },
  {
  nombre: 'Cabaña en el Bosque',
  tipo: 'Cabaña Rústica',
  descripcion: 'Cabaña acogedora en medio del bosque, ideal para los amantes de la naturaleza y la tranquilidad.',
  imagen: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/553574536.jpg?k=280f3cf3f6d25b4ce5eb22dc34209dae14cabe1bece0aa0941e7e89b3af72584&o=&hp=1',
  precio: 200,
  area: 80,
  capacidad: 4,
  caracteristicas: 'Ambiente natural, tranquilidad',
  servicios: 'Chimenea, cocina equipada',
  vistas: 'Vistas al bosque'
}
]);

const hoverIndex = ref(-1);
const showModal = ref(false);
const currentRoom = ref(null);

function showRoomDetails(room) {
  currentRoom.value = room;
  showModal.value = true;
}

// Variables para el lightbox
const visibleRef = ref(false);
const imgsRef = ref([]);
const indexRef = ref(0);

function showLightbox(image) {
  imgsRef.value = [image];
  indexRef.value = 0;
  visibleRef.value = true;
}

function onHide() {
  visibleRef.value = false;
}
</script>
<style scoped>
.habitacioness {
  font-family: 'Arial, sans-serif';
  color: #fff;
  background-color: #120707; /* Fondo negro */
  padding: 0 20px 20px; /* Padding en los lados y abajo, pero no en la parte superior */
}

.habitaciones-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.mi-tarjeta {
  background-color: #333;
  color: #fff;
  transition: box-shadow 0.3s ease;
  overflow: hidden; /* Ocultar el overflow para evitar que la sombra se vea cortada */
}

.habitacion-imagen {
  height: 200px; /* Altura fija para las imágenes */
  object-fit: cover; /* Ajuste de la imagen para cubrir el contenedor */
  cursor: pointer; /* Cambiar cursor a puntero para indicar que se puede hacer clic */
  transition: transform 0.3s ease; /* Transición para el efecto de zoom */
}

.text-overline {
  font-size: 12px;
  margin-bottom: 5px;
  color: #a58e0b; /* Color naranja */
}

.text-h5 {
  font-size: 18px;
  font-weight: bold;
}

.text-caption {
  font-size: 14px;
}

.q-btn {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.q-btn:hover {
  background-color: #eee;
  color: #333;
}

.service-card {
  background-color: #333;
  color: #fff;
  border: 1px solid #fff;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

/* Animación de zoom al pasar el ratón sobre la imagen */
.habitacion-imagen:hover {
  transform: scale(1.1);
}

/* Estilo para el modal de detalles */
.q-card {
  max-width: 600px;
}

.q-card-section {
  padding: 20px;
}

.q-card-actions {
  justify-content: flex-end;
}

/* Estilo para los botones dentro del modal */
.q-btn.primary {
  margin-right: 10px;
}

.q-btn.secondary {
  color: #777; /* Color de texto secundario */
}
</style>
