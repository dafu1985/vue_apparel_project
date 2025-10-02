<template>
  <div class="welcome-page">
    <!-- 背景 -->
    <div class="background-overlay"></div>

    <!-- メインコンテンツ -->
    <div class="content">
      <h1>Color of Us アパレル販売サイトへようこそ！</h1>
      <p>仮トップページです。こちらから各ページへ移動できます。</p>

      <!-- カード風スライダー -->
      <div class="slider">
        <button class="nav prev" @click="prevSlide">&#10094;</button>
        <button class="nav next" @click="nextSlide">&#10095;</button>

        <div
          v-for="(product, index) in products"
          :key="index"
          class="card"
          :class="{ active: current === index }"
        >
          <img :src="product.image" :alt="product.name" />
          <div class="card-info">
            <h2>{{ product.name }}</h2>
            <p>{{ product.price }}円</p>
          </div>
        </div>
      </div>

      <div class="links">
        <router-link to="/products" class="card-link">商品一覧へ</router-link>
        <router-link to="/contact" class="card-link">お問い合わせ</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import product1 from '../assets/product1.jpg'
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.jpg'

// 商品情報
const products = [
  { image: product1, name: 'Tシャツ', price: 2500 },
  { image: product2, name: 'デニムパンツ', price: 4800 },
  { image: product3, name: 'スニーカー', price: 6800 },
]

const current = ref(0)

// 自動スライド
let intervalId: number
onMounted(() => {
  startAutoSlide()
})

function startAutoSlide() {
  intervalId = setInterval(nextSlide, 3000)
}

function stopAutoSlide() {
  clearInterval(intervalId)
}

// 左右ボタン
function prevSlide() {
  stopAutoSlide()
  current.value = (current.value - 1 + products.length) % products.length
  startAutoSlide()
}

function nextSlide() {
  stopAutoSlide()
  current.value = (current.value + 1) % products.length
  startAutoSlide()
}
</script>

<style scoped>
/* ページ全体 */
.welcome-page {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: sans-serif;
  overflow: hidden;
}

/* 背景オーバーレイ */
.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #4f46e5, #f43f5e);
  z-index: -1;
  animation: backgroundShift 10s ease-in-out infinite alternate;
}

@keyframes backgroundShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* メインコンテンツ */
.content {
  text-align: center;
  z-index: 1;
}

/* カード風フェードスライダー */
.slider {
  position: relative;
  width: 90%;
  max-width: 320px;
  height: 380px;
  margin: 20px auto;
}

.card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card.active {
  opacity: 1;
}

.card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.card-info {
  padding: 8px 0;
}

.card-info h2 {
  margin: 0;
  font-size: 1.1rem;
}

.card-info p {
  margin: 4px 0 0 0;
  font-weight: bold;
}

/* ナビボタン */
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3);
  border: none;
  color: white;
  font-size: 1.5rem;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 2;
  transition: background 0.3s ease;
}

.nav:hover {
  background: rgba(0, 0, 0, 0.6);
}

.prev {
  left: 5px;
}
.next {
  right: 5px;
}

/* リンクカード */
.links {
  margin-top: 20px;
}

.card-link {
  display: inline-block;
  margin: 0 10px;
  padding: 12px 24px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
}

.card-link:hover {
  background-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-5px);
}

/* レスポンシブ */
@media (max-width: 480px) {
  .slider {
    max-width: 90%;
    height: 300px;
  }

  .card img {
    height: 220px;
  }
}
</style>
