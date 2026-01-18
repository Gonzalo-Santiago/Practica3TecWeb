<template>
  <div class="card">
    <h3>{{ product.name }}</h3>
    <p>Precio: ${{ product.price }}</p>
    <button @click="addToCart">Agregar al carrito</button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product)
    }
  }
}
</script>
<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px;
  border-radius: 5px;
  width: 200px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card h3 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

.card p {
  margin: 8px 0;
  color: #666;
}

.card button {
  width: 100%;
  background: #42b983;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.95em;
}

.card button:hover {
  background: #3aa876;
}

.card button:active {
  transform: scale(0.98);
}
</style>