<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close-btn" @click="$emit('close')">×</button>
      
      <div class="detail-container">
        <div class="detail-image">
          <img :src="product.image" :alt="product.name" />
        </div>
        
        <div class="detail-info">
          <h2>{{ product.name }}</h2>
          <div class="detail-meta">
            <span class="category">{{ product.category }}</span>
            <span class="stock">Stock: {{ product.stock }}</span>
          </div>
          
          <p class="full-description">{{ product.description }}</p>
          
          <div class="price-section">
            <div class="price">${{ product.price.toFixed(2) }}</div>
            <div class="rating">⭐ 4.8 (124 reseñas)</div>
          </div>
          
          <div class="quantity-control">
            <label>Cantidad:</label>
            <div class="quantity-buttons">
              <button 
                @click="decreaseQuantity"
                :disabled="quantity <= 1"
                class="qty-btn"
              >-</button>
              
              <input 
                v-model.number="quantity" 
                type="number" 
                min="1" 
                :max="product.stock"
                class="qty-input"
              />
              
              <button 
                @click="increaseQuantity"
                :disabled="quantity >= product.stock"
                class="qty-btn"
              >+</button>
            </div>
          </div>
          
          <div class="detail-actions">
            <button 
              @click="addToCart"
              :disabled="product.stock === 0"
              class="btn-add-to-cart"
            >
              🛒 Añadir {{ quantity }} al carrito - ${{ (product.price * quantity).toFixed(2) }}
            </button>
            
            <button class="btn-wishlist">
              ❤ Añadir a favoritos
            </button>
          </div>
          
          <div class="product-specs">
            <h4>Especificaciones:</h4>
            <ul>
              <li>Envío gratis en 24h</li>
              <li>Garantía de 2 años</li>
              <li>Devolución gratuita</li>
              <li>Soporte técnico 24/7</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType, ref, watch } from 'vue';
import type { Product } from '@/types/Product';

export default defineComponent({
  name: 'CardDetail',
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  },
  emits: ['close', 'add-to-cart'],
  
  setup(props, { emit }) {
    const quantity = ref(1);
    
    // Resetear cantidad cuando cambia el producto
    watch(() => props.product.id, () => {
      quantity.value = 1;
    });
    
    const increaseQuantity = () => {
      if (quantity.value < props.product.stock) {
        quantity.value++;
      }
    };
    
    const decreaseQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--;
      }
    };
    
    const addToCart = () => {
      if (props.product.stock > 0) {
        emit('add-to-cart', {
          product: props.product,
          quantity: quantity.value
        });
        emit('close');
      }
    };
    
    return {
      quantity,
      increaseQuantity,
      decreaseQuantity,
      addToCart
    };
  }
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: white;
  border-radius: 16px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #ff4757;
  color: white;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 1.5em;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background: #ff3742;
}

.detail-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 30px;
}

.detail-image img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.detail-info h2 {
  color: #2c3e50;
  margin: 0 0 10px 0;
  font-size: 1.8em;
}

.detail-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  color: #666;
}

.category {
  background: #f1f5f9;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.9em;
}

.stock {
  padding: 4px 12px;
  background: #d4edda;
  color: #155724;
  border-radius: 20px;
  font-size: 0.9em;
}

.full-description {
  line-height: 1.6;
  color: #555;
  margin-bottom: 25px;
  font-size: 1em;
}

.price-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.price {
  font-size: 2em;
  font-weight: bold;
  color: #2c3e50;
}

.rating {
  color: #f39c12;
  font-weight: 600;
}

.quantity-control {
  margin-bottom: 25px;
}

.quantity-control label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #2c3e50;
}

.quantity-buttons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.qty-btn {
  width: 40px;
  height: 40px;
  border: 2px solid #42b983;
  background: white;
  color: #42b983;
  font-size: 1.2em;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qty-btn:hover:not(:disabled) {
  background: #42b983;
  color: white;
}

.qty-btn:disabled {
  border-color: #ccc;
  color: #ccc;
  cursor: not-allowed;
}

.qty-input {
  width: 80px;
  height: 40px;
  text-align: center;
  border: 2px solid #e1e1e1;
  border-radius: 8px;
  font-size: 1.1em;
  font-weight: 600;
}

.detail-actions {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
}

.btn-add-to-cart, .btn-wishlist {
  flex: 1;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-add-to-cart {
  background: linear-gradient(135deg, #42b983, #379c6f);
  color: white;
}

.btn-add-to-cart:hover:not(:disabled) {
  background: linear-gradient(135deg, #379c6f, #2d8059);
  transform: translateY(-2px);
}

.btn-add-to-cart:disabled {
  background: #cbd5e1;
  cursor: not-allowed;
}

.btn-wishlist {
  background: white;
  border: 2px solid #64748b;
  color: #64748b;
}

.btn-wishlist:hover {
  background: #64748b;
  color: white;
}

.product-specs {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
}

.product-specs h4 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

.product-specs ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.product-specs li {
  padding: 5px 0;
  color: #666;
  position: relative;
  padding-left: 20px;
}

.product-specs li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #42b983;
  font-weight: bold;
}

@media (max-width: 768px) {
  .detail-container {
    grid-template-columns: 1fr;
  }
  
  .modal-content {
    max-height: 95vh;
  }
}
</style>