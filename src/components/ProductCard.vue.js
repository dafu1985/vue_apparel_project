const __VLS_props = defineProps();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['product-card']} */ ;
/** @type {__VLS_StyleScopedClasses['product-card']} */ ;
/** @type {__VLS_StyleScopedClasses['stock']} */ ;
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: (`/products/${__VLS_ctx.id}`),
    ...{ class: "product-card-link" },
}));
const __VLS_2 = __VLS_1({
    to: (`/products/${__VLS_ctx.id}`),
    ...{ class: "product-card-link" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
// @ts-ignore
[id,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "product-card" },
});
__VLS_asFunctionalElement(__VLS_elements.img)({
    src: (__VLS_ctx.image),
    alt: (__VLS_ctx.name),
});
// @ts-ignore
[image, name,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "product-info" },
});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({});
(__VLS_ctx.name);
// @ts-ignore
[name,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "category" },
});
(__VLS_ctx.category);
// @ts-ignore
[category,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "description" },
});
(__VLS_ctx.description);
// @ts-ignore
[description,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "price" },
});
(__VLS_ctx.price);
// @ts-ignore
[price,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "stock" },
    ...{ class: ({ 'out-of-stock': !__VLS_ctx.inStock }) },
});
// @ts-ignore
[inStock,];
(__VLS_ctx.inStock ? '在庫あり' : '在庫なし');
// @ts-ignore
[inStock,];
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['product-card-link']} */ ;
/** @type {__VLS_StyleScopedClasses['product-card']} */ ;
/** @type {__VLS_StyleScopedClasses['product-info']} */ ;
/** @type {__VLS_StyleScopedClasses['category']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['price']} */ ;
/** @type {__VLS_StyleScopedClasses['stock']} */ ;
/** @type {__VLS_StyleScopedClasses['out-of-stock']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
