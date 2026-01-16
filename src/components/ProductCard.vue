<template>
  <div class="cart">
    <h2>Carrito de compras</h2>
    <p v-if="cartItems.length === 0">Tu carrito está vacío</p>
    
    <div v-else>
      <div v-for="item in cartItems" :key="item.product.id" class="cart-item">
        <img :src="item.product.image" :alt="item.product.name" class="cart-image" />
        <div class="cart-info">
          <h4>{{ item.product.name }}</h4>
          <p>${{ item.product.price }} × {{ item.quantity }}</p>
        </div>
        <div class="cart-actions">
          <button @click="decreaseQuantity(item)">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="increaseQuantity(item)">+</button>
          <button @click="removeItem(item)" class="remove-btn">×</button>
        </div>
      </div>
      
      <div class="cart-total">
        <strong>Total: ${{ totalPrice }}</strong>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { Product } from './ProductCard.vue';

interface CartItem {
  product: Product;
  quantity: number;
}

export default {
  data() {
    return {
      cartItems: [] as CartItem[]
    };
  },
  computed: {
    totalPrice(): number {
      return this.cartItems.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
      }, 0);
    }
  },
  methods: {
    addProduct(product: Product) {
      const existingItem = this.cartItems.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cartItems.push({ product, quantity: 1 });
      }
    },
    increaseQuantity(item: CartItem) {
      item.quantity++;
    },
    decreaseQuantity(item: CartItem) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeItem(item);
      }
    },
    removeItem(item: CartItem) {
      this.cartItems = this.cartItems.filter(i => i !== item);
    }
  }
}
</script>

<style scoped>
.cart {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-top: 40px;
}
.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}
.cart-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 15px;
}
.cart-info {
  flex: 1;
}
.cart-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}
.cart-actions button {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}
.remove-btn {
  background: #ff4757 !important;
  color: white;
  border: none !important;
  margin-left: 10px;
}
.cart-total {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #333;
  text-align: right;
  font-size: 1.2em;
}
</style>