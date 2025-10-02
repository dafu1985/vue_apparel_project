<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue'

// ボタン用の関数を直接定義
const goShop = () => {
  alert('Shopページへ遷移するイメージです')
}
</script>

<template>
  <div id="app">
    <!-- ヘッダー -->
    <AppNavbar />

    <!-- メインコンテンツ -->
    <main class="main">
      <router-view />
      <h1>Color of Us アパレル販売サイト</h1>
      <p>
        Visit
        <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a>
        to read the documentation
      </p>

      <!-- 仮トップページ用セクション -->
      <section>
        <h2>Welcome to Color of Us!</h2>
        <p>仮のトップページです。商品一覧やバナーをここに置けます。</p>
        <button @click="goShop">Go to Shop</button>
      </section>
    </main>
  </div>
</template>

<style scoped>
.main {
  padding: 2rem;
  text-align: center;
}

button {
  padding: 0.5rem 1rem;
  margin: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
