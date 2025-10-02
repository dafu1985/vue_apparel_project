<script setup lang="ts">
// ナビバー用コンポーネント
// 複数単語名にして Vue の警告を回避
import { computed } from 'vue'
import { useCartStore } from '../stores/cart' // カートストア

// カートストアを使用
const cartStore = useCartStore()

// バッジ用の合計数量を computed で取得
const totalQuantity = computed(() => cartStore.totalQuantity)
</script>

<template>
  <nav class="navbar">
    <!-- ロゴ -->
    <h2>Color of Us</h2>

    <!-- メニュー -->
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/products">Shop</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>

      <!-- カートリンク -->
      <li>
        <router-link to="/cart" class="cart-link">
          Cart
          <!-- 商品数バッジ -->
          <span v-if="totalQuantity > 0" class="badge">{{ totalQuantity }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.navbar a {
  color: white;
  text-decoration: none;
}

.navbar a:hover {
  text-decoration: underline;
}

/* カートバッジ */
.cart-link {
  position: relative;
}

.badge {
  position: absolute;
  top: -8px;
  right: -12px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
}
</style>
