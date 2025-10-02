<template>
  <!-- router-link で商品詳細ページへ遷移 -->
  <router-link :to="`/products/${id}`" class="product-card-link">
    <div class="product-card">
      <img :src="image" :alt="name" />
      <div class="product-info">
        <h2>{{ name }}</h2>
        <p class="category">{{ category }}</p>
        <p class="description">{{ description }}</p>
        <p class="price">{{ price }}円</p>
        <p class="stock" :class="{ 'out-of-stock': !inStock }">
          {{ inStock ? '在庫あり' : '在庫なし' }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  id: number
  name: string
  category: string
  description: string
  price: number
  image: string
  inStock: boolean
}>()
</script>

<style scoped>
.product-card-link {
  text-decoration: none; /* リンクの下線を消す */
}

.product-card {
  width: 220px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.product-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
}

.product-info {
  margin-top: 10px;
}

.category {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 5px;
}

.description {
  font-size: 0.85rem;
  color: #555;
  margin-bottom: 5px;
}

.price {
  font-weight: bold;
  color: #4f46e5;
  margin-bottom: 5px;
}

.stock {
  font-size: 0.85rem;
  color: green;
}

.stock.out-of-stock {
  color: red;
}
</style>
