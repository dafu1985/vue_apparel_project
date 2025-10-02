import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// カートストア
export const useCartStore = defineStore('cart', () => {
  // カート内の商品配列
  const items = ref<{ id: number; name: string; price: number; image: string; quantity: number }[]>(
    [],
  )

  // 商品数（バッジ用）
  const totalQuantity = computed(() => items.value.reduce((sum, item) => sum + item.quantity, 0))

  // 商品を追加
  const addToCart = (product: { id: number; name: string; price: number; image: string }) => {
    const existing = items.value.find((i) => i.id === product.id)
    if (existing) {
      existing.quantity += 1
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }

  // 商品を削除
  const removeFromCart = (id: number) => {
    items.value = items.value.filter((item) => item.id !== id)
  }

  return { items, totalQuantity, addToCart, removeFromCart }
})
