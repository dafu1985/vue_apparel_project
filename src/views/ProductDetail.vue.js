import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { getProductById } from '../lib/products';
const route = useRoute();
// URLパラメータから商品IDを取得して、共通モジュールから対応する商品を返す
const product = computed(() => getProductById(Number(route.params.id)));
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['image-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['image-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['stock']} */ ;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "product-detail" },
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({});
(__VLS_ctx.product?.name);
// @ts-ignore
[product,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "image-wrapper" },
});
__VLS_asFunctionalElement(__VLS_elements.img)({
    src: (__VLS_ctx.product?.image),
    alt: (__VLS_ctx.product?.name),
});
// @ts-ignore
[product, product,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "category" },
});
(__VLS_ctx.product?.category);
// @ts-ignore
[product,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "description" },
});
(__VLS_ctx.product?.description);
// @ts-ignore
[product,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "price" },
});
(__VLS_ctx.product?.price);
// @ts-ignore
[product,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "stock" },
    ...{ class: ({ 'out-of-stock': !__VLS_ctx.product?.inStock }) },
});
// @ts-ignore
[product,];
(__VLS_ctx.product?.inStock ? '在庫あり' : '在庫なし');
// @ts-ignore
[product,];
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
/** @type {__VLS_StyleScopedClasses['product-detail']} */ ;
/** @type {__VLS_StyleScopedClasses['image-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['category']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['price']} */ ;
/** @type {__VLS_StyleScopedClasses['stock']} */ ;
/** @type {__VLS_StyleScopedClasses['out-of-stock']} */ ;
/** @type {__VLS_StyleScopedClasses['back-link']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
