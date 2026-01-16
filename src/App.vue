<template>
  <div class="app">
    <h1>Práctica VueJS - Contador Completo</h1>
    <p>Este componente incluye incremento, decremento y hook mounted</p>
    
    <Contador />
    
    <div class="info">
      <p>✨ Abre la consola del navegador (F12) para ver el mensaje del hook mounted</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Contador from './Contador.vue';
</script>

<style>
.app {
  text-align: center;
  padding: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  color: #2c3e50;
  margin-bottom: 10px;
}

p {
  color: #666;
  margin-bottom: 30px;
}

.info {
  margin-top: 40px;
  padding: 15px;
  background-color: #e8f4fc;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.info p {
  color: #2c3e50;
  margin: 0;
}
</style>