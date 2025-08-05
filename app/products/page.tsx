import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { ProductCard } from '@/components/ProductCard'
import { supabase, Product } from '@/lib/supabase'

export const metadata: Metadata = {
  title: '選物 - 氛圍',
  description: '溫柔詩意的親密選物空間，為現代都市情侶精心挑選的品質商品',
  keywords: '親密用品, 情侶選物, 延時噴霧, 超薄避孕套',
}

// 商品映射配置 - 增強版
const productConfig = {
  'PROD_UF002': {
    poeticName: '久一點的夜',
    description: '有些時刻，不該太快結束',
    atmosphereDescription: '留得住的時間',
    tags: ['週末夜晚', '特別時刻', '延長體驗'],
    rating: 4.9,
    isLimitedTime: true
  },
  'PROD_UF001': {
    poeticName: '安靜的靠近',
    description: '每一分觸碰都值得被等候',
    atmosphereDescription: '靠近不突兀',
    tags: ['親密時光', '溫柔呵護', '自然感受'],
    rating: 4.8,
    isLimitedTime: false
  }
}

async function getProducts(): Promise<Product[]> {
  if (!supabase) {
    console.warn('Supabase not available, returning empty array')
    return []
  }

  const { data: products } = await supabase
    .from('products')
    .select('*, merchant:merchants(*)')
    .in('id', ['PROD_UF002', 'PROD_UF001'])

  return products || []
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* 頁面標題區 */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-[var(--warm-white)] to-[var(--soft-beige)]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light-custom text-[var(--deep-brown-gray)] mb-6 leading-tight">
            溫柔的選物
          </h1>
          <p className="text-lg md:text-xl text-[var(--warm-gray)] leading-relaxed-custom max-w-2xl mx-auto">
            每一件選物，都承載著對親密關係的理解與呵護
          </p>
        </div>
      </section>

      {/* 商品展示區 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {products.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
              {products.map((product, index) => {
                const config = productConfig[product.id as keyof typeof productConfig]
                if (!config) return null

                return (
                  <div 
                    key={product.id}
                    className="animate-atmosphere-slide-up"
                    style={{animationDelay: `${index * 0.2}s`}}
                  >
                    <ProductCard
                      product={product}
                      poeticName={config.poeticName}
                      description={config.description}
                      atmosphereDescription={config.atmosphereDescription}
                      tags={config.tags}
                      rating={config.rating}
                      isLimitedTime={config.isLimitedTime}
                    />
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--soft-beige)] flex items-center justify-center">
                <svg className="w-10 h-10 text-[var(--warm-gray)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium-custom text-[var(--deep-brown-gray)] mb-3">
                選物準備中
              </h3>
              <p className="text-[var(--warm-gray)] leading-relaxed-custom">
                我們正在為您精心挑選更多溫柔的選物
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 其他人也在看 - 推薦區塊 */}
      <section className="py-16 px-4 bg-gradient-to-br from-[var(--warm-white)] to-[var(--soft-beige)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light-custom text-[var(--deep-brown-gray)] mb-4">
              其他人也在關注
            </h2>
            <p className="text-[var(--warm-gray)] leading-relaxed-custom">
              發現更多溫柔的選擇，每一件都承載著對親密關係的理解
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* 推薦商品卡片 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[var(--light-pink-brown)]/20 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--sunset-pink)] to-[var(--misty-lavender)] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium-custom text-[var(--deep-brown-gray)] mb-2">
                留在枕邊的氣味
              </h3>
              <p className="text-sm text-[var(--warm-gray)] leading-relaxed-custom mb-3">
                溫柔的芳香，讓每個靠近都帶著記憶
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--warm-gray)] opacity-70">即將推出</span>
                <button className="text-sm text-[var(--warm-orange)] hover:text-[var(--deep-rose)] transition-colors">
                  了解更多
                </button>
              </div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[var(--light-pink-brown)]/20 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--dusk-blue)] to-[var(--copper-glow)] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium-custom text-[var(--deep-brown-gray)] mb-2">
                燭光裡的秘密
              </h3>
              <p className="text-sm text-[var(--warm-gray)] leading-relaxed-custom mb-3">
                讓光影成為無聲的邀請
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--warm-gray)] opacity-70">即將推出</span>
                <button className="text-sm text-[var(--warm-orange)] hover:text-[var(--deep-rose)] transition-colors">
                  了解更多
                </button>
              </div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[var(--light-pink-brown)]/20 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--rose-gold)] to-[var(--warm-orange)] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium-custom text-[var(--deep-brown-gray)] mb-2">
                觸感的詩
              </h3>
              <p className="text-sm text-[var(--warm-gray)] leading-relaxed-custom mb-3">
                絲綢般的溫柔，值得被珍藏的每個瞬間
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--warm-gray)] opacity-70">即將推出</span>
                <button className="text-sm text-[var(--warm-orange)] hover:text-[var(--deep-rose)] transition-colors">
                  了解更多
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 購物引導區 */}
      <section className="py-16 px-4 bg-[var(--soft-beige)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light-custom text-[var(--deep-brown-gray)] mb-6">
            關於我們的選物理念
          </h2>
          <div className="space-y-6 text-lg text-[var(--warm-gray)] leading-relaxed-custom">
            <p>
              我們相信每一段親密關係都值得被溫柔對待。
              在這裡，不需要尷尬，不需要解釋，只需要選擇最適合的那一種感覺。
            </p>
            <p>
              所有選物都經過精心篩選，注重品質與體驗，
              讓親密成為一種自然而優雅的表達。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}