'use client'

import { Product, generateRefLink } from '@/lib/supabase'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Heart, Star, Eye, ShoppingCart, Clock } from 'lucide-react'

interface ProductCardProps {
  product: Product
  poeticName: string
  description: string
  atmosphereDescription?: string
  tags?: string[]
  rating?: number
  isLimitedTime?: boolean
}

export function ProductCard({ 
  product, 
  poeticName, 
  description, 
  atmosphereDescription,
  tags = [],
  rating = 4.8,
  isLimitedTime = false
}: ProductCardProps) {
  const [isFavorited, setIsFavorited] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  
  const refCode = process.env.REF_CODE || 'DEFAULT'
  const buyLink = generateRefLink(product, refCode)
  
  // 價格格式化（分轉元）
  const formatPrice = (priceInCents: number) => {
    return `NT$ ${(priceInCents / 100).toLocaleString()}`
  }
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorited(!isFavorited)
  }
  
  const openPreview = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowPreview(true)
  }

  return (
    <>
      <div 
        className="atmosphere-product-card group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 商品圖片區域 - 增強版 */}
        <div className="aspect-square overflow-hidden relative">
          {/* 情境化背景漸層 */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--misty-lavender)] via-[var(--sunset-pink)] to-[var(--dusk-blue)] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30" />
          
          {/* 限時標籤 */}
          {isLimitedTime && (
            <div className="absolute top-3 left-3 z-10">
              <Badge className="bg-[var(--warm-orange)] text-white border-0 flex items-center gap-1 text-xs px-2 py-1">
                <Clock className="w-3 h-3" />
                限時優惠
              </Badge>
            </div>
          )}
          
          {/* 收藏按鈕 */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleFavorite}
            className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full backdrop-blur-sm transition-all duration-300 ${
              isFavorited 
                ? 'bg-red-50/90 text-red-500 hover:bg-red-100/90' 
                : 'bg-white/70 text-gray-600 hover:bg-white/90'
            }`}
          >
            <Heart 
              className={`w-4 h-4 transition-transform duration-200 ${
                isFavorited ? 'fill-current scale-110' : 'hover:scale-110'
              }`} 
            />
          </Button>
          
          {product.image_url ? (
            <>
              <Image 
                src={product.image_url} 
                alt={poeticName}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* 懸停遮罩與快速預覽 */}
              <div className={`absolute inset-0 bg-black/20 transition-all duration-300 flex items-center justify-center gap-2 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={openPreview}
                  className="backdrop-blur-sm bg-white/90 text-gray-700 hover:bg-white border-0 transition-all duration-200 hover:scale-105"
                >
                  <Eye className="w-4 h-4 mr-1" />
                  快速預覽
                </Button>
              </div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center relative">
              <div className="text-[var(--warm-gray)] text-center z-10">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center">
                  <Heart className="w-10 h-10 text-[var(--rose-gold)]" />
                </div>
                <p className="text-sm font-light-custom opacity-80">溫柔呵護</p>
                <p className="text-xs font-light-custom opacity-60 mt-1">即將呈現</p>
              </div>
            </div>
          )}
        </div>
        
        {/* 商品資訊區域 - 增強版 */}
        <div className="p-6">
          {/* 商品標題與氛圍描述 */}
          <div className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-medium-custom text-[var(--deep-brown-gray)] leading-tight">
                {poeticName}
              </h3>
              <div className="flex items-center gap-1 text-xs text-[var(--warm-gray)]">
                <Star className="w-3 h-3 fill-[var(--warm-orange)] text-[var(--warm-orange)]" />
                <span className="font-medium">{rating}</span>
              </div>
            </div>
            
            <p className="text-sm text-[var(--warm-gray)] leading-relaxed-custom mb-3">
              {description}
            </p>
            
            {atmosphereDescription && (
              <div className="mb-3">
                <Badge variant="outline" className="text-xs text-[var(--deep-brown-gray)] border-[var(--light-pink-brown)] bg-[var(--light-pink-brown)]/20">
                  {atmosphereDescription}
                </Badge>
              </div>
            )}
            
            {/* 適合時機標籤 */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-3">
                {tags.map((tag, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="text-xs bg-[var(--soft-beige)] text-[var(--warm-gray)] border-0"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            
            <p className="text-xs text-[var(--warm-gray)] opacity-70 font-light-custom">
              {product.name}
            </p>
          </div>
          
          {/* 價格與操作區 */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-lg font-medium-custom text-[var(--deep-brown-gray)]">
                {formatPrice(product.price_in_cents)}
              </span>
              {isLimitedTime && (
                <span className="text-xs text-[var(--warm-orange)] font-medium">
                  限時優惠中
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              {/* 限時庫存提示 */}
              {isLimitedTime && (
                <div className="stock-indicator text-xs">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  僅剩少量
                </div>
              )}
              
              <a 
                href={buyLink}
                target="_blank" 
                rel="noopener noreferrer"
                className={`atmosphere-btn inline-flex items-center gap-1 text-center transition-all duration-300 hover:gap-2 ${
                  isLimitedTime ? 'urgency-pulse' : ''
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
                靜靜帶走
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* 快速預覽彈窗 */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[80vh] overflow-hidden animate-atmosphere-slide-up">
            <div className="relative">
              <button
                onClick={() => setShowPreview(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="aspect-square bg-gradient-to-br from-[var(--misty-lavender)] via-[var(--sunset-pink)] to-[var(--dusk-blue)] relative">
                {product.image_url ? (
                  <Image 
                    src={product.image_url} 
                    alt={poeticName}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Heart className="w-16 h-16 text-white/60" />
                  </div>
                )}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-medium-custom text-[var(--deep-brown-gray)] mb-3">
                {poeticName}
              </h3>
              <p className="text-[var(--warm-gray)] leading-relaxed-custom mb-4">
                {description}
              </p>
              <p className="text-sm text-[var(--warm-gray)] opacity-70 mb-6">
                {product.name}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xl font-medium-custom text-[var(--deep-brown-gray)]">
                  {formatPrice(product.price_in_cents)}
                </span>
                <a 
                  href={buyLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="atmosphere-btn inline-flex items-center gap-1"
                  onClick={() => setShowPreview(false)}
                >
                  <ShoppingCart className="w-4 h-4" />
                  立即選購
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}