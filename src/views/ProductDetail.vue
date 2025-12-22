<template>
  <div class="product-detail">
    <h1>{{ product?.name }}</h1>

    <!-- 画像にズームアニメーション -->
    <div class="image-wrapper">
      <img :src="product?.image" :alt="product?.name" />
    </div>

    <p class="category">{{ product?.category }}</p>
    <p class="description">{{ product?.description }}</p>
    <p class="price">{{ product?.price }}円</p>
    <p class="stock" :class="{ 'out-of-stock': !product?.inStock }">
      {{ product?.inStock ? '在庫あり' : '在庫なし' }}
    </p>

    <!-- 戻るボタン -->
    <router-link to="/products" class="back-link">商品一覧に戻る</router-link>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

import product1Img from '../assets/product1.jpg'
import no93parkaImg from '../assets/no.93.parka.png'
import parkagreenImg from '../assets/parka.green.png'
import parkaorangeImg from '../assets/parka.orange.png'

// 仮の商品データ
const products = [
  {
    id: 1,
    name: 'ロゴパーカー',
    category: 'トップス',
    description: 'ロゴパーカー',
    price: 5500,
    image: product1Img,
    inStock: true,
  },
  {
    id: 2,
    name: 'No93パーカー',
    category: 'トップス',
    description: 'No93パーカー',
    price: 5500,
    image: no93parkaImg,
    inStock: false,
  },
  {
    id: 3,
    name: 'グリーンミリタリーパーカー',
    category: 'トップス',
    description: 'グリーンミリタリーパーカー',
    price: 6000,
    image: parkagreenImg,
    inStock: true,
  },
  {
    id: 4,
    name: 'オレンジミリタリーパーカー',
    category: 'トップス',
    description: 'オレンジミリタリーパーカー',
    price: 6000,
    image: parkaorangeImg,
    inStock: true,
  },
]

const route = useRoute()

// URLパラメータから商品IDを取得して、対応する商品を返す
const product = computed(() => products.find((p) => p.id === Number(route.params.id)))
</script>

<style scoped>
.product-detail {
  text-align: center;
  padding: 20px;
  font-family: sans-serif;
}

/* 画像ラッパーにホバー効果 */
.image-wrapper {
  width: 300px;
  height: 300px;
  margin: 10px auto;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

/* 画像自体のズーム */
.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

/* ホバー時にズーム */
.image-wrapper:hover img {
  transform: scale(1.05);
}

/* 商品情報 */
.category {
  color: #888;
  margin-bottom: 5px;
}
.description {
  color: #555;
  margin-bottom: 5px;
}
.price {
  color: #4f46e5;
  font-weight: bold;
  margin-bottom: 5px;
}
.stock {
  color: green;
  margin-bottom: 10px;
}
.stock.out-of-stock {
  color: red;
}

/* 戻るリンク */
.back-link {
  text-decoration: underline;
  color: #4f46e5;
}
</style>
