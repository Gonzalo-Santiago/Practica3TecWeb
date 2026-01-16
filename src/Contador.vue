<script lang="ts">
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    }
  },
  mounted() {
    console.log('Componente Contador montado ' + this.count);
  }
};
</script>

<template>
  <div class="contador">
    <h1>Contador: {{ count }}</h1>
    <div class="botones">
      <button @click="increase" class="btn-incrementar">Incrementar</button>
      <button @click="decrease" class="btn-decrementar">Decrementar</button>
    </div>
  </div>
</template>

<style scoped>
.contador {
  text-align: center;
  padding: 20px;
  border: 2px solid #42b983;
  border-radius: 10px;
  max-width: 300px;
  margin: 20px auto;
  background-color: #f8f9fa;
}

h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.botones {
  display: flex;
  gap: 15px;
  justify-content: center;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-incrementar {
  background-color: #42b983;
  color: white;
}

.btn-incrementar:hover {
  background-color: #379c6f;
  transform: translateY(-2px);
}

.btn-decrementar {
  background-color: #ff6b6b;
  color: white;
}

.btn-decrementar:hover {
  background-color: #ff5252;
  transform: translateY(-2px);
}

button:active {
  transform: translateY(1px);
}
</style>