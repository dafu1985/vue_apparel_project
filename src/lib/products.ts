import product1Img from '../assets/product1.jpg'
import no93parkaImg from '../assets/no.93.parka.png'
import parkagreenImg from '../assets/parka.green.png'
import parkaorangeImg from '../assets/parka.orange.png'

export type Product = {
  id: number
  name: string
  category?: string
  description?: string
  price: number
  image: string
  inStock?: boolean
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'ロゴブラックパーカー',
    category: 'トップス',
    description: 'ロゴブラックパーカー',
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

export function getProducts(): Product[] {
  return PRODUCTS
}

export function getProductById(id: number): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}
