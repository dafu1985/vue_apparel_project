import { createRouter, createWebHistory } from 'vue-router';
// 各ページコンポーネントをインポート
import WelcomePage from '../views/WelcomePage.vue';
import Products from '../views/Products.vue';
import ProductDetail from '../views/ProductDetail.vue';
import Contact from '../views/Contact.vue';
import Cart from '../views/cart.vue'; // カート追加
// ルート定義
const routes = [
    {
        path: '/', // トップページ
        name: 'Welcome',
        component: WelcomePage,
    },
    {
        path: '/products', // 商品一覧ページ
        name: 'Products',
        component: Products,
    },
    {
        path: '/products/:id', // 商品詳細ページ（ID付き）
        name: 'ProductDetail',
        component: ProductDetail,
    },
    {
        path: '/contact', // お問い合わせページ
        name: 'Contact',
        component: Contact,
    },
    { path: '/cart', name: 'Cart', component: Cart }, // ここにカートページを追加
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
