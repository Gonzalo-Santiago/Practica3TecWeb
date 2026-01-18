<template>
  <div class="shopping-cart">
    <h2>🛒 Carrito de compras</h2>
    
    <div v-if="items.length === 0" class="empty">
      El carrito está vacío
    </div>
    
    <div v-else>
      <div v-for="item in items" :key="item.product.id" class="cart-item">
        <div>
          <strong>{{ item.product.name }}</strong> - ${{ item.product.price }}
          <br>
          <small>Cantidad: {{ item.quantity }}</small>
        </div>
        <button @click="removeItem(item)" class="remove-btn">×</button>
      </div>
      
      <hr>
      <p class="total">Total: ${{ getTotal() }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    items: {
      type: Array as any,
      required: true
    }
  },
  methods: {
    removeItem(item: any) {
      this.$emit('remove-item', item)
    },
    getTotal() {
      return (this.items as any[]).reduce((total: number, item: any) => {
        return total + (item.product.price * item.quantity)
      }, 0)
    }
  }
}
</script>
<style scoped>
.shopping-cart {
  border: 2px solid #42b983;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
  background: #f0f8f5;
}

.shopping-cart h2 {
  color: #42b983;
  margin-top: 0;
  margin-bottom: 15px;
}

.empty {
  text-align: center;
  color: #999;
  padding: 20px;
  font-style: italic;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.cart-item div {
  flex: 1;
}

.cart-item strong {
  color: #2c3e50;
}

.cart-item small {
  color: #666;
  display: block;
  margin-top: 5px;
}

.remove-btn {
  background: #e74c3c;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  margin-left: 10px;
  transition: background 0.3s ease;
}

.remove-btn:hover {
  background: #c0392b;
}

.total {
  font-size: 1.2em;
  font-weight: bold;
  color: #42b983;
  text-align: right;
  margin: 10px 0;
}

.shopping-cart hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 10px 0;
}
</style>