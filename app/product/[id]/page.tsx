import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { supabase, Product, generateRefLink } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

// 商品映射配置
const productConfig = {
  'PROD_UF002': {
    poeticName: '久一點的夜',
    description: '有些時刻，不該太快結束',
    atmosphereDescription: '留得住的時間',
    detailedDescription: '當時間成為最珍貴的禮物，讓每一刻的親近都值得被延長。溫和而有效的配方，為那些不願太快結束的美好時光而準備。',
    features: ['溫和配方', '持久體驗', '自然感受', '安心選擇']
  },
  'PROD_UF001': {
    poeticName: '安靜的靠近',
    description: '每一分觸碰都值得被等候',
    atmosphereDescription: '靠近不突兀',
    detailedDescription: '最接近無感的保護，讓親密回歸最自然的狀態。超薄材質與貼心設計，呵護每一次的靠近與觸碰。',
    features: ['超薄設計', '自然觸感', '安全保護', '溫柔體驗']
  }
}

type ProductConfigKey = keyof typeof productConfig

interface PageProps {
  params: Promise<{ id: string }>
}

async function getProduct(id: string): Promise<Product | null> {
  if (!supabase) {
    console.warn('Supabase not available')
    return null
  }

  const { data: product } = await supabase
    .from('products')
    .select('*, merchant:merchants(*)')
    .eq('id', id)
    .single()

  return product || null
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const product = await getProduct(id)
  const config = productConfig[id as ProductConfigKey]

  if (!product || !config) {
    return {
      title: '商品不存在 - 氛圍',
      description: '很抱歉，您尋找的商品不存在'
    }
  }

  return {
    title: `${config.poeticName} - 氛圍`,
    description: config.detailedDescription,
    keywords: `${config.poeticName}, 親密用品, 情侶選物`,
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params
  const product = await getProduct(id)
  const config = productConfig[id as ProductConfigKey]

  if (!product || !config) {
    notFound()
  }

  const refCode = process.env.REF_CODE || 'DEFAULT'
  const buyLink = generateRefLink(product, refCode)
  
  // 價格格式化（分轉元）
  const formatPrice = (priceInCents: number) => {
    return `NT$ ${(priceInCents / 100).toLocaleString()}`
  }

  return (
    <div className="min-h-screen bg-[var(--warm-white)]">
      <Navigation />
      
      {/* 商品詳情區 */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* 返回連結 */}
          <div className="mb-8">
            <Link 
              href="/products"
              className="inline-flex items-center text-[var(--warm-gray)] hover:text-[var(--rose-gold)] transition-colors duration-300 font-light-custom"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              回到選物
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* 商品圖片 */}
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--soft-beige)] to-[var(--light-pink-brown)] relative">
              {product.image_url ? (
                <Image 
                  src={product.image_url} 
                  alt={config.poeticName}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-[var(--warm-gray)] text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/50 flex items-center justify-center">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <p className="text-lg font-light-custom opacity-70">呵護瞬間</p>
                  </div>
                </div>
              )}
            </div>

            {/* 商品資訊 */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-light-custom text-[var(--deep-brown-gray)] mb-4 leading-tight">
                  {config.poeticName}
                </h1>
                <p className="text-lg text-[var(--warm-gray)] leading-relaxed-custom mb-4">
                  {config.description}
                </p>
                <p className="text-sm text-[var(--warm-gray)] opacity-70 font-light-custom">
                  {product.name}
                </p>
              </div>

              <div className="py-6 border-y border-[var(--light-pink-brown)]/30">
                <p className="text-2xl font-medium-custom text-[var(--deep-brown-gray)]">
                  {formatPrice(product.price_in_cents)}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium-custom text-[var(--deep-brown-gray)] mb-4">
                  關於這個選擇
                </h3>
                <p className="text-[var(--warm-gray)] leading-relaxed-custom mb-6">
                  {config.detailedDescription}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {config.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-3 bg-[var(--soft-beige)] rounded-lg"
                    >
                      <div className="w-2 h-2 bg-[var(--rose-gold)] rounded-full mr-3"></div>
                      <span className="text-sm font-light-custom text-[var(--deep-brown-gray)]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <a 
                  href={buyLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full atmosphere-btn block text-center py-4 text-lg"
                >
                  靜靜帶走
                </a>
                
                <div className="text-center">
                  <p className="text-sm text-[var(--warm-gray)] font-light-custom">
                    包裝不會讓人臉紅心跳，但內容可能會
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 相關商品推薦 */}
      <section className="py-16 px-4 bg-[var(--soft-beige)]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light-custom text-[var(--deep-brown-gray)] mb-6">
            你可能也喜歡
          </h2>
          <p className="text-lg text-[var(--warm-gray)] leading-relaxed-custom mb-8">
            每一種感受，都值得被溫柔對待
          </p>
          
          <Link 
            href="/products"
            className="atmosphere-btn-secondary inline-block"
          >
            探索更多選物
          </Link>
        </div>
      </section>
    </div>
  )
}