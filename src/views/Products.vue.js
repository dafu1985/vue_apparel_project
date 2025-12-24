import { defineOptions, reactive } from 'vue';
// カート用の Pinia ストアをインポート
import { useCartStore } from '../stores/cart';
// 仮の商品画像をインポート
import { getProducts } from '../lib/products';
// コンポーネント名
defineOptions({ name: 'ProductsPage' });
// Pinia カートストアを取得
const cartStore = useCartStore();
// 商品ごとのメッセージ表示状態
const showMessageMap = reactive({});
// // メッセージ表示用
// const showMessage = ref(false)
// カートに追加しつつ、対象商品のみメッセージ表示
function handleAddToCart(product) {
    cartStore.addToCart(product);
    showMessageMap[product.id] = true;
    setTimeout(() => (showMessageMap[product.id] = false), 1500);
}
// カートに追加する関数
// function addToCart(product: { id: number; name: string; price: number; image: string }) {
//   cartStore.addToCart(product)
// }
// 仮の商品データ
const products = getProducts();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['product-card']} */ ;
/** @type {__VLS_StyleScopedClasses['product-card']} */ ;
/** @type {__VLS_StyleScopedClasses['product-card']} */ ;
/** @type {__VLS_StyleScopedClasses['product-card']} */ ;
/** @type {__VLS_StyleScopedClasses['add-to-cart']} */ ;
/** @type {__VLS_StyleScopedClasses['product-card']} */ ;
/** @type {__VLS_StyleScopedClasses['product-card']} */ ;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "products-page" },
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "products-container" },
});
for (const [product] of __VLS_getVForSourceType((__VLS_ctx.products))) {
    // @ts-ignore
    [products,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        key: (product.id),
        ...{ class: "product-card" },
    });
    const __VLS_0 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
    // @ts-ignore
    RouterLink;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        to: (`/products/${product.id}`),
    }));
    const __VLS_2 = __VLS_1({
        to: (`/products/${product.id}`),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const { default: __VLS_4 } = __VLS_3.slots;
    __VLS_asFunctionalElement(__VLS_elements.img)({
        src: (product.image),
        alt: (product.name),
    });
    __VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({});
    (product.name);
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "price" },
    });
    (product.price);
    var __VLS_3;
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleAddToCart(product);
                // @ts-ignore
                [handleAddToCart,];
            } },
        ...{ class: "add-to-cart" },
    });
    const __VLS_5 = {}.transition;
    /** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
    // @ts-ignore
    Transition;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
        name: "fade",
    }));
    const __VLS_7 = __VLS_6({
        name: "fade",
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    const { default: __VLS_9 } = __VLS_8.slots;
    if (__VLS_ctx.showMessageMap[product.id]) {
        // @ts-ignore
        [showMessageMap,];
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
            ...{ class: "add-message" },
        });
    }
    var __VLS_8;
}
/** @type {__VLS_StyleScopedClasses['products-page']} */ ;
/** @type {__VLS_StyleScopedClasses['products-container']} */ ;
/** @type {__VLS_StyleScopedClasses['product-card']} */ ;
/** @type {__VLS_StyleScopedClasses['price']} */ ;
/** @type {__VLS_StyleScopedClasses['add-to-cart']} */ ;
/** @type {__VLS_StyleScopedClasses['add-message']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
