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
/// <reference types="C:/vue_workSpace/vue-apparel-project/node_modules/.vue-global-types/vue_3.5_0.d.ts" />

// コンポーネント名
defineOptions({ name: 'CartPage' });
// PiniaストアとVueの機能をインポート
import { useCartStore } from '../stores/cart';
import { computed } from 'vue';
// カートストアを取得
const cartStore = useCartStore();
// カート内の商品一覧をリアクティブに取得
const cart = computed(() => cartStore.items);
// カートから商品を削除する関数
function removeFromCart(id) {
    cartStore.removeFromCart(id);
}
// 合計金額を計算
const totalPrice = computed(() => cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0));
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['cart-item']} */ ;
/** @type {__VLS_StyleScopedClasses['item-info']} */ ;
/** @type {__VLS_StyleScopedClasses['item-info']} */ ;
/** @type {__VLS_StyleScopedClasses['item-info']} */ ;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "cart-page" },
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({});
if (__VLS_ctx.cart.length === 0) {
    // @ts-ignore
    [cart,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
}
else {
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "cart-items" },
    });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.cart))) {
        // @ts-ignore
        [cart,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            key: (item.id),
            ...{ class: "cart-item" },
        });
        __VLS_asFunctionalElement(__VLS_elements.img)({
            src: (item.image),
            alt: (item.name),
        });
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "item-info" },
        });
        __VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({});
        (item.name);
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
        (item.price);
        __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!!(__VLS_ctx.cart.length === 0))
                        return;
                    __VLS_ctx.removeFromCart(item.id);
                    // @ts-ignore
                    [removeFromCart,];
                } },
        });
    }
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "total" },
    });
    (__VLS_ctx.totalPrice);
    // @ts-ignore
    [totalPrice,];
}
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: "/products",
    ...{ class: "back-link" },
}));
const __VLS_2 = __VLS_1({
    to: "/products",
    ...{ class: "back-link" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['cart-page']} */ ;
/** @type {__VLS_StyleScopedClasses['cart-items']} */ ;
/** @type {__VLS_StyleScopedClasses['cart-item']} */ ;
/** @type {__VLS_StyleScopedClasses['item-info']} */ ;
/** @type {__VLS_StyleScopedClasses['total']} */ ;
/** @type {__VLS_StyleScopedClasses['back-link']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
