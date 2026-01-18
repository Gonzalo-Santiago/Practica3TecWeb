<template>
  <div id="app">
    <h1>Tienda VueJS Simple</h1>
    
    <!-- Productos -->
    <div class="products">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>
    
    <!-- Carrito -->
    <ShoppingCart
      :items="cartItems"
      @remove-item="handleRemoveItem"
    />
    
    <!-- Contador (como en la práctica) -->
    <div class="contador">
      <h2>Contador: {{ count }}</h2>
      <button @click="increment">Incrementar</button>
      <button @click="decrement">Decrementar</button>
    </div>
  </div>
</template>

<script lang="ts">
import ProductCard from './components/ProductCard.vue'
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  name: 'App',
  components: {
    ProductCard,
    ShoppingCart
  },
  
  // Options API como en la práctica
  data() {
    return {
      count: 0,
      products: [
        { id: 1, name: 'Producto 1', price: 100 },
        { id: 2, name: 'Producto 2', price: 200 },
        { id: 3, name: 'Producto 3', price: 150 },
        { id: 4, name: 'Producto 4', price: 300 }
      ],
      cartItems: []
    }
  },
  
  methods: {
    increment() {
      this.count++
    },
    
    decrement() {
      this.count--
    },
    
    handleAddToCart(product: any) {
      // Verificar si ya está en el carrito
      const existingItem = this.cartItems.find((item: any) => item.product.id === product.id)
      
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.cartItems.push({
          product: product,
          quantity: 1
        })
      }
      
      alert(`✅ ${product.name} agregado al carrito`)
    },
    
    handleRemoveItem(itemToRemove: any) {
      this.cartItems = this.cartItems.filter((item: any) => item !== itemToRemove)
    }
  },
  
  mounted() {
    console.log('App montada')
  }
}
</script>
<style scoped>
#app {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #2c3e50;
  text-align: center;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
}

.contador {
  text-align: center;
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.contador button {
  margin: 0 5px;
  padding: 8px 15px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.contador button:hover {
  background: #2980b9;
}
</style>