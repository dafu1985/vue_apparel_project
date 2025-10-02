<template>
  <div class="cart-page">
    <h1>カート</h1>

    <!-- カートが空の場合 -->
    <p v-if="cart.length === 0">カートに商品が入っていません。</p>

    <!-- カート商品リスト -->
    <div v-else class="cart-items">
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <img :src="item.image" :alt="item.name" />
        <div class="item-info">
          <h2>{{ item.name }}</h2>
          <p>{{ item.price }}円</p>
          <button @click="removeFromCart(item.id)">削除</button>
        </div>
      </div>

      <!-- 合計金額 -->
      <p class="total">合計: {{ totalPrice }}円</p>
    </div>

    <!-- 商品一覧に戻るリンク -->
    <router-link to="/products" class="back-link">商品一覧に戻る</router-link>
  </div>
</template>

<script setup lang="ts">
// コンポーネント名
defineOptions({ name: 'CartPage' })

// PiniaストアとVueの機能をインポート
import { useCartStore } from '../stores/cart'
import { computed } from 'vue'

// カートストアを取得
const cartStore = useCartStore()

// カート内の商品一覧をリアクティブに取得
const cart = computed(() => cartStore.items)

// カートから商品を削除する関数
function removeFromCart(id: number) {
  cartStore.removeFromCart(id)
}

// 合計金額を計算
const totalPrice = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0),
)
</script>

<style scoped>
.cart-page {
  font-family: sans-serif;
  padding: 20px;
  text-align: center;
}

.cart-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.cart-item {
  width: 200px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 10px;
}

.cart-item img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin: 0 auto;
  border-radius: 10px;
}

.item-info h2 {
  margin: 10px 0 5px;
  font-size: 18px;
}

.item-info p {
  font-weight: bold;
  color: #4f46e5;
  margin-bottom: 5px;
}

.item-info button {
  padding: 6px 10px;
  background-color: #f43f5e;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.item-info button:hover {
  background-color: #be123c;
}

.total {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}

.back-link {
  display: inline-block;
  margin-top: 20px;
  text-decoration: underline;
  color: #4f46e5;
}
</style>
