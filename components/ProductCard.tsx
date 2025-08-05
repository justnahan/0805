import { Product, generateRefLink } from '@/lib/supabase'
import Image from 'next/image'

interface ProductCardProps {
  product: Product
  poeticName: string
  description: string
}

export function ProductCard({ product, poeticName, description }: ProductCardProps) {
  const refCode = process.env.REF_CODE || 'DEFAULT'
  const buyLink = generateRefLink(product, refCode)
  
  // 價格格式化（分轉元）
  const formatPrice = (priceInCents: number) => {
    return `NT$ ${(priceInCents / 100).toLocaleString()}`
  }

  return (
    <div className="atmosphere-product-card">
      {/* 商品圖片區域 */}
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-[var(--soft-beige)] to-[var(--light-pink-brown)] relative">
        {product.image_url ? (
          <Image 
            src={product.image_url} 
            alt={poeticName}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-[var(--warm-gray)] text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/50 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-sm font-light-custom opacity-70">呵護瞬間</p>
            </div>
          </div>
        )}
      </div>
      
      {/* 商品資訊區域 */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-medium-custom text-[var(--deep-brown-gray)] mb-2">
            {poeticName}
          </h3>
          <p className="text-sm text-[var(--warm-gray)] leading-relaxed-custom mb-3">
            {description}
          </p>
          <p className="text-xs text-[var(--warm-gray)] opacity-70 font-light-custom">
            {product.name}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium-custom text-[var(--deep-brown-gray)]">
            {formatPrice(product.price_in_cents)}
          </span>
          
          <a 
            href={buyLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="atmosphere-btn inline-block text-center"
          >
            靜靜帶走
          </a>
        </div>
      </div>
    </div>
  )
}