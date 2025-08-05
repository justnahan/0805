import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { ProductCard } from '@/components/ProductCard'
import { supabase, Product } from '@/lib/supabase'

export const metadata: Metadata = {
  title: '暮色 Dusk - 今天，想靠近哪一種感覺？',
  description: '為現代都市情侶與女性量身打造的親密選物空間。不說性，但讓人感受到親密的邀請。溫柔、詩意、不造成心理負擔的親密體驗。',
  keywords: '親密關係, 情侶用品, 女性友善, 溫柔選物',
  openGraph: {
    title: '暮色 Dusk - 今天，想靠近哪一種感覺？',
    description: '為現代都市情侶與女性量身打造的親密選物空間',
    type: 'website',
  }
}

// 商品映射配置
const productConfig = {
  'PROD_UF002': {
    poeticName: '久一點的夜',
    description: '有些時刻，不該太快結束',
    atmosphereDescription: '留得住的時間'
  },
  'PROD_UF001': {
    poeticName: '安靜的靠近',
    description: '每一分觸碰都值得被等候',
    atmosphereDescription: '靠近不突兀'
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

export default async function Home() {
  const products = await getProducts()

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="atmosphere-hero flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-atmosphere-fade-in">
            <h1 className="text-4xl md:text-6xl font-light-custom text-[var(--deep-brown-gray)] mb-8 leading-tight">
              今天，想靠近哪一種感覺？
            </h1>
            
            <div className="space-y-6 text-lg md:text-xl text-[var(--warm-gray)] leading-relaxed-custom max-w-2xl mx-auto mb-12">
              <p className="animate-atmosphere-slide-up" style={{animationDelay: '0.3s'}}>
                有時候，靠近是無聲的對話<br />
                有時候，溫柔是一種節奏感
              </p>
              
              <p className="animate-atmosphere-slide-up" style={{animationDelay: '0.6s'}}>
                今晚，想讓時間久一點？<br />
                還是，讓觸感再輕一些？
              </p>
              
              <p className="animate-atmosphere-slide-up" style={{animationDelay: '0.9s'}}>
                我們為這些時刻，準備了一些選物<br />
                <span className="font-medium-custom text-[var(--deep-brown-gray)]">無需說明，一看就懂的那種。</span>
              </p>
            </div>
            
            <a 
              href="#atmosphere"
              className="atmosphere-btn text-lg px-8 py-4 animate-atmosphere-slide-up inline-block" 
              style={{animationDelay: '1.2s'}}
            >
              探索那一種感覺
            </a>
          </div>
        </div>
      </section>

      {/* 情境導覽區 */}
      <section id="atmosphere" className="py-20 px-4 bg-[var(--soft-beige)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light-custom text-[var(--deep-brown-gray)] mb-6">
              選一種氛圍，不用說出口
            </h2>
            <p className="text-lg text-[var(--warm-gray)] leading-relaxed-custom">
              每一種感受，都值得被溫柔對待
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {Object.entries(productConfig).map(([productId, config], index) => {
              const product = products.find(p => p.id === productId)
              if (!product) return null

              // 為不同卡片定義不同的視覺風格
              const cardStyles = productId === 'PROD_UF002' 
                ? {
                    background: 'linear-gradient(135deg, var(--warm-white) 0%, var(--sunset-pink) 15%, var(--warm-white) 100%)',
                    iconGradient: 'from-[var(--warm-orange)] to-[var(--deep-rose)]',
                    glowColor: 'rgba(244, 162, 97, 0.15)'
                  }
                : {
                    background: 'linear-gradient(135deg, var(--warm-white) 0%, var(--misty-lavender) 15%, var(--warm-white) 100%)',
                    iconGradient: 'from-[var(--dusk-blue)] to-[var(--gold-copper)]',
                    glowColor: 'rgba(139, 157, 195, 0.15)'
                  }

              return (
                <div 
                  key={productId}
                  className="relative text-center animate-atmosphere-slide-up rounded-2xl p-8 border border-[var(--light-pink-brown)]/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    background: cardStyles.background
                  }}
                >
                  {/* 懸停光暈效果 */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${cardStyles.glowColor} 0%, transparent 70%)`
                    }}
                  ></div>
                  
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${cardStyles.iconGradient} flex items-center justify-center animate-atmosphere-pulse relative z-10 shadow-lg`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {productId === 'PROD_UF002' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      )}
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-medium-custom text-[var(--deep-brown-gray)] mb-4 relative z-10">
                    {config.atmosphereDescription}
                  </h3>
                  
                  <p className="text-[var(--warm-gray)] leading-relaxed-custom mb-6 relative z-10">
                    {config.description}
                  </p>
                  
                  <p className="text-sm text-[var(--deep-brown-gray)] font-medium-custom relative z-10">
                    對應選物：<span className="text-[var(--copper-glow)]">{config.poeticName}</span>
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 商品展示區 */}
      <section id="selection" className="py-20 px-4 relative overflow-hidden">
        {/* 背景裝飾 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[var(--sunset-pink)]/10 to-transparent rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[var(--dusk-blue)]/8 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-[var(--misty-lavender)]/5 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light-custom text-[var(--deep-brown-gray)] mb-6">
              給那些無法說明的感受
            </h2>
            <p className="text-lg text-[var(--warm-gray)] leading-relaxed-custom max-w-2xl mx-auto">
              這不是你第一次看這類東西，但也許，這是你第一次不感到緊張。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {products.map((product, index) => {
              const config = productConfig[product.id as keyof typeof productConfig]
              if (!config) return null

              return (
                <div 
                  key={product.id}
                  className="animate-atmosphere-slide-up"
                  style={{animationDelay: `${index * 0.3}s`}}
                >
                  <ProductCard
                    product={product}
                    poeticName={config.poeticName}
                    description={config.description}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 關於我們區 */}
      <section id="about" className="py-20 px-4 relative overflow-hidden">
        {/* 背景裝飾與漸層 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--warm-white)] via-[var(--soft-beige)] to-[var(--light-purple-gray)]/30"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-24 h-24 bg-gradient-to-br from-[var(--sunset-pink)]/15 to-transparent rounded-full blur-xl animate-atmosphere-pulse"></div>
          <div className="absolute bottom-10 left-20 w-32 h-32 bg-gradient-to-br from-[var(--dusk-blue)]/10 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-gradient-to-br from-[var(--gold-copper)]/8 to-transparent rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light-custom text-[var(--deep-brown-gray)] mb-8">
            關於暮色
          </h2>
          
          <div className="space-y-8 text-lg text-[var(--warm-gray)] leading-relaxed-custom">
            <p className="animate-atmosphere-slide-up" style={{animationDelay: '0.2s'}}>
              當夜色漸濃，城市的喧囂慢慢沉澱，<br />
              那些無法在白日裡說出口的渴望，開始悄悄甦醒。
            </p>
            
            <p className="animate-atmosphere-slide-up" style={{animationDelay: '0.4s'}}>
              我們相信，親密不需要被過度包裝或刻意隱藏，<br />
              而是以一種自然、優雅、毫無心理負擔的方式，<br />
              <span className="text-[var(--deep-brown-gray)] font-medium-custom">輕柔地融入生活的每個角落。</span>
            </p>
            
            <p className="animate-atmosphere-slide-up" style={{animationDelay: '0.6s'}}>
              為都市中那些懂得品味生活的女性，<br />
              和珍惜彼此的情侶們，<br />
              我們創造了這個溫柔、詩意、充滿美感的選物空間。
            </p>
            
            <div className="mt-12 p-8 bg-gradient-to-r from-[var(--warm-white)]/80 via-[var(--light-pink-brown)]/20 to-[var(--warm-white)]/80 rounded-2xl border border-[var(--light-pink-brown)]/30 animate-atmosphere-slide-up" style={{animationDelay: '0.8s'}}>
              <p className="text-xl font-medium-custom text-[var(--deep-brown-gray)] mb-4">
                「在暮色中，找到屬於自己的溫柔」
              </p>
              <p className="text-base text-[var(--warm-gray)]">
                不慌張、不羞澀，只是很自然地，讓美好輕輕放進生活裡。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 relative overflow-hidden">
        {/* 背景漸層協調 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--light-purple-gray)]/40 via-[var(--soft-beige)]/60 to-[var(--warm-white)]"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--light-pink-brown)]/30 to-transparent"></div>
          <div className="absolute top-10 right-10 w-28 h-28 bg-gradient-to-br from-[var(--misty-lavender)]/20 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-20 h-20 bg-gradient-to-br from-[var(--copper-glow)]/15 to-transparent rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="animate-atmosphere-slide-up" style={{animationDelay: '0.1s'}}>
              <h3 className="text-xl font-medium-custom text-[var(--deep-brown-gray)] mb-4">品牌理念</h3>
              <p className="text-[var(--warm-gray)] leading-relaxed-custom">
                溫柔、詩意、不造成心理負擔的親密體驗
              </p>
            </div>
            
            <div className="animate-atmosphere-slide-up" style={{animationDelay: '0.2s'}}>
              <h3 className="text-xl font-medium-custom text-[var(--deep-brown-gray)] mb-4">隱私保護</h3>
              <p className="text-[var(--warm-gray)] leading-relaxed-custom">
                包裝不會讓人臉紅心跳，但內容可能會
              </p>
            </div>
            
            <div className="animate-atmosphere-slide-up" style={{animationDelay: '0.3s'}}>
              <h3 className="text-xl font-medium-custom text-[var(--deep-brown-gray)] mb-4">貼心服務</h3>
              <p className="text-[var(--warm-gray)] leading-relaxed-custom">
                專業與理解，是我們與您溝通的方式
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-[var(--light-pink-brown)]/30 text-center animate-atmosphere-slide-up" style={{animationDelay: '0.4s'}}>
            <p className="text-[var(--warm-gray)] font-light-custom">
              © 2024 暮色 Dusk - 在暮色中，找到屬於自己的溫柔
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
