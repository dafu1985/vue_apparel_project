<template>
  <div class="products-page">
    <!-- ページタイトル -->
    <h1>商品一覧</h1>

    <!-- 商品カードのラッパー（横並び中央揃え） -->
    <div class="products-container">
      <!-- 各商品カード -->
      <div v-for="product in products" :key="product.id" class="product-card">
        <!-- 商品詳細ページへのリンク -->
        <router-link :to="`/products/${product.id}`">
          <img :src="product.image" :alt="product.name" />
          <h2>{{ product.name }}</h2>
          <p class="price">{{ product.price }}円</p>
        </router-link>

        <!-- カート追加ボタン -->
        <button class="add-to-cart" @click="handleAddToCart(product)">カートに追加</button>
        <!-- メッセージ -->
        <transition name="fade">
          <p v-if="showMessageMap[product.id]" class="add-message">カートに追加しました！</p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue 3 の Composition API を使用
import { defineOptions, reactive } from 'vue'

// カート用の Pinia ストアをインポート
import { useCartStore } from '../stores/cart'

// 仮の商品画像をインポート
import product1Img from '../assets/product1.jpg'
import no93parkaImg from '../assets/no.93.parka.png'
import parkagreenImg from '../assets/parka.green.png'
import parkaorangeImg from '../assets/parka.orange.png'

// コンポーネント名
defineOptions({ name: 'ProductsPage' })

// Pinia カートストアを取得
const cartStore = useCartStore()

// 商品ごとのメッセージ表示状態
const showMessageMap = reactive<{ [key: number]: boolean }>({})

// // メッセージ表示用
// const showMessage = ref(false)

// カートに追加しつつ、対象商品のみメッセージ表示
function handleAddToCart(product: { id: number; name: string; price: number; image: string }) {
  cartStore.addToCart(product)
  showMessageMap[product.id] = true
  setTimeout(() => (showMessageMap[product.id] = false), 1500)
}

// カートに追加する関数
// function addToCart(product: { id: number; name: string; price: number; image: string }) {
//   cartStore.addToCart(product)
// }

// 仮の商品データ
const products = [
  { id: 1, name: 'ロゴブラックパーカー', price: 2000, image: product1Img },
  { id: 2, name: 'No93パーカー', price: 3500, image: no93parkaImg },
  { id: 3, name: 'グリーンミリタリーパーカー', price: 1500, image: parkagreenImg },
  { id: 4, name: 'オレンジミリタリーパーカー', price: 4000, image: parkaorangeImg },
]
</script>

<style scoped>
/* ページ全体 */
.products-page {
  text-align: center;
  font-family: sans-serif;
  padding: 20px;
}

/* メッセージ */
.add-message {
  color: green;
  font-weight: bold;
  margin-top: 5px;
  font-size: 14px;
}

/* フェードアニメーション */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 商品カードのコンテナ（横並び中央揃え） */
.products-container {
  display: flex;
  justify-content: center; /* 横方向中央 */
  flex-wrap: wrap; /* 複数行に折り返す */
  gap: 20px; /* カード間の余白 */
  margin-top: 20px;
}

/* 商品カード */
.product-card {
  width: 200px; /* カード固定幅 */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  text-align: center; /* カード内テキスト中央揃え */
}

/* カードホバー時に少し拡大 */
.product-card:hover {
  transform: translateY(-5px) scale(1.03);
}

/* 商品画像 */
.product-card img {
  width: 180px; /* カード内で少し余白 */
  height: 180px;
  object-fit: cover;
  margin: 10px auto 0 auto; /* 中央配置 */
  border-radius: 10px;
}

/* 商品名・価格 */
.product-card h2 {
  margin: 10px 0 5px 0;
  font-size: 18px;
}

.product-card .price {
  color: #4f46e5;
  font-weight: bold;
  margin-bottom: 10px;
}

/* カート追加ボタン */
.add-to-cart {
  display: block;
  margin: 10px auto 15px auto;
  padding: 8px 12px;
  background-color: #4f46e5;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-to-cart:hover {
  background-color: #3730a3;
}

/* -------------------- */
/* レスポンシブ対応 */
/* -------------------- */
@media (max-width: 1024px) {
  .product-card {
    width: 45%; /* 2列表示 */
  }
}

@media (max-width: 600px) {
  .product-card {
    width: 90%; /* 1列表示で中央に */
  }
}
</style>
