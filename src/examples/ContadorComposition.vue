<template>
  <p>Hola soy la versión con Composition API</p>
  <h1>Contador: {{ contador }}</h1>
  <button @click="incrementar">Incrementar</button>
</template>
<template>
  <div>
    <h1>Contador: {{ count }}</h1>
    <button @click="increase">Incrementar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increase() {
      this.count++;
    }
  },
  mounted() {
    console.log('Componente Contador montado. Valor inicial:', this.count);
  }
});
</script>