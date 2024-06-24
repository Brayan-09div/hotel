<template>
  <q-page class="q-pa-md contacto">
    <div class="contact-section">
      <h2>Reserva tu Estadía</h2>
      <p>Completa el formulario para reservar tu estadía con nosotros.</p>
      <q-card class="contact-card">
        <q-card-section>
          <q-form @submit.prevent="submitForm">
            <q-input
              outlined
              v-model="formData.nombre"
              label="Nombre completo"
              dense
              required
              outlined-square
              square
              color="white"
            />
            <q-input
              outlined
              v-model="formData.email"
              label="Correo electrónico"
              dense
              type="email"
              required
              outlined-square
              square
              color="white"
            />
            <q-input
              outlined
              v-model="formData.telefono"
              label="Teléfono"
              dense
              outlined-square
              square
              color="white"
            />
            <q-input
              outlined
              v-model="formData.fechaInicio"
              label="Fecha de llegada"
              dense
              type="date"
              required
              outlined-square
              square
              color="white"
            />
            <q-input
              outlined
              v-model="formData.fechaFin"
              label="Fecha de salida"
              dense
              type="date"
              required
              outlined-square
              square
              color="white"
            />
            <q-textarea
              outlined
              v-model="formData.mensaje"
              label="Mensaje adicional"
              dense
              outlined-square
              square
              color="white"
            />
            <q-btn
              type="submit"
              label="Enviar Reserva"
              color="primary"
              class="q-mt-md"
              rounded
              push
              :loading="formLoading"
            />
          </q-form>
          <div v-if="formSent" class="form-sent">
            <q-space />
            <q-badge color="green" label="¡Formulario enviado!" />
            <q-space />
          </div>
        </q-card-section>
      </q-card>
    </div>

    <!-- Sección de redes sociales y contacto adicional -->
    <div class="social-section">
      <h3>Síguenos en nuestras redes sociales:</h3>
      <div class="social-links">
        <q-icon name="mdi-instagram" size="2em" class="social-icon" />
        <q-icon name="mdi-facebook" size="2em" class="social-icon" />
      </div>
      <p>Contacto adicional:</p>
      <p>Correo electrónico: hotel.com</p>
      <p>Teléfono: +123456789</p>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  nombre: '',
  email: '',
  telefono: '',
  fechaInicio: '',
  fechaFin: '',
  mensaje: ''
});

const formLoading = ref(false);
const formSent = ref(false);

function submitForm() {
  if (validateForm()) {
    formLoading.value = true;
    // Simulación de envío de formulario (aquí iría la lógica real para enviarlo)
    setTimeout(() => {
      console.log('Reserva enviada:', formData.value);
      formLoading.value = false;
      formSent.value = true;
      // Limpia el formulario después del envío si es necesario
      formData.value = {
        nombre: '',
        email: '',
        telefono: '',
        fechaInicio: '',
        fechaFin: '',
        mensaje: ''
      };
      setTimeout(() => {
        formSent.value = false;
      }, 3000); // Después de 3 segundos, ocultar el mensaje de envío
    }, 1500); // Simula un tiempo de envío de 1.5 segundos
  }
}

function validateForm() {
  const { fechaInicio, fechaFin } = formData.value;
  if (!fechaInicio || !fechaFin) {
    alert('Por favor completa las fechas de llegada y salida.');
    return false;
  }
  
  const dateInicio = new Date(fechaInicio);
  const dateFin = new Date(fechaFin);

  if (dateInicio >= dateFin) {
    alert('La fecha de salida debe ser posterior a la fecha de llegada.');
    return false;
  }

  return true;
}
</script>

<style scoped>
.contacto {
  font-family: 'Arial, sans-serif';
  color: #fff; /* Texto blanco */
  background-color: #110505; /* Fondo oscuro */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.contact-section {
  width: 100%;
  max-width: 600px;
  padding: 40px;
  text-align: center;
}

.contact-section h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.contact-section p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.contact-card {
  background-color: rgba(56, 56, 56, 0.593); /* Fondo semitransparente */
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.1); /* Sombra blanca suave */
}

.q-form {
  padding: 20px;
}

.q-input,
.q-textarea {
  background-color: rgba(255, 255, 255, 0.1); /* Fondo semitransparente */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Borde semitransparente */
  border-radius: 8px;
  color: #fff; /* Texto blanco */
}

.q-input {
  margin-bottom: 20px;
}

.q-textarea {
  min-height: 100px;
}

.q-btn {
  width: 100%;
}

.form-sent {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.social-section {
  margin-top: 40px;
  text-align: center;
}

.social-section h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.social-icon {
  margin: 0 10px;
  cursor: pointer;
}
</style>


