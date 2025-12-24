import { ref, onMounted } from 'vue';
import { getProducts } from '../lib/products';
// 商品情報（共通モジュールから取得）
const products = getProducts();
const current = ref(0);
// 自動スライド
let intervalId;
onMounted(() => {
    startAutoSlide();
});
function startAutoSlide() {
    intervalId = setInterval(nextSlide, 3000);
}
function stopAutoSlide() {
    clearInterval(intervalId);
}
// 左右ボタン
function prevSlide() {
    stopAutoSlide();
    current.value = (current.value - 1 + products.length) % products.length;
    startAutoSlide();
}
function nextSlide() {
    stopAutoSlide();
    current.value = (current.value + 1) % products.length;
    startAutoSlide();
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['card-info']} */ ;
/** @type {__VLS_StyleScopedClasses['card-info']} */ ;
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['card-link']} */ ;
/** @type {__VLS_StyleScopedClasses['slider']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "welcome-page" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "background-overlay" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "content" },
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "slider" },
});
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.prevSlide) },
    ...{ class: "nav prev" },
});
// @ts-ignore
[prevSlide,];
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.nextSlide) },
    ...{ class: "nav next" },
});
// @ts-ignore
[nextSlide,];
for (const [product, index] of __VLS_getVForSourceType((__VLS_ctx.products))) {
    // @ts-ignore
    [products,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        key: (index),
        ...{ class: "card" },
        ...{ class: ({ active: __VLS_ctx.current === index }) },
    });
    // @ts-ignore
    [current,];
    __VLS_asFunctionalElement(__VLS_elements.img)({
        src: (product.image),
        alt: (product.name),
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "card-info" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({});
    (product.name);
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    (product.price);
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "links" },
});
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: "/products",
    ...{ class: "card-link" },
}));
const __VLS_2 = __VLS_1({
    to: "/products",
    ...{ class: "card-link" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
var __VLS_3;
const __VLS_5 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    to: "/contact",
    ...{ class: "card-link" },
}));
const __VLS_7 = __VLS_6({
    to: "/contact",
    ...{ class: "card-link" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const { default: __VLS_9 } = __VLS_8.slots;
var __VLS_8;
/** @type {__VLS_StyleScopedClasses['welcome-page']} */ ;
/** @type {__VLS_StyleScopedClasses['background-overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['content']} */ ;
/** @type {__VLS_StyleScopedClasses['slider']} */ ;
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['prev']} */ ;
/** @type {__VLS_StyleScopedClasses['nav']} */ ;
/** @type {__VLS_StyleScopedClasses['next']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['card-info']} */ ;
/** @type {__VLS_StyleScopedClasses['links']} */ ;
/** @type {__VLS_StyleScopedClasses['card-link']} */ ;
/** @type {__VLS_StyleScopedClasses['card-link']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
