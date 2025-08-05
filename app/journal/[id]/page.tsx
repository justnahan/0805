import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { ProductCard } from '@/components/ProductCard'
import { supabase, Product, generateRefLink } from '@/lib/supabase'
import Link from 'next/link'
import { ArrowLeft, Clock, Eye, Heart, Share2, BookmarkPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { notFound } from 'next/navigation'

// 文章詳細內容數據
const articleDetails: { [key: string]: any } = {
  '001': {
    id: '001',
    title: '為什麼我們都曾經不敢走進這一區',
    excerpt: '那些躲在商店角落的商品，承載著太多不必要的羞恥感。但親密需求，本就是生而為人最自然的部分。',
    content: `
    <div class="prose prose-lg max-w-none">
      <p class="text-xl text-[var(--warm-gray)] leading-relaxed mb-8">記得第一次走進那一區時的心情嗎？那種既好奇又緊張的感覺，彷彿做了什麼見不得人的事情。</p>
      
      <h3 class="text-2xl font-medium-custom text-[var(--deep-brown-gray)] mb-6">被污名化的需求</h3>
      <p class="mb-6">社會給了我們太多不必要的羞恥感。從小到大，我們被教導要對身體保持「適當」的距離，對性慾保持「合理」的克制。但什麼是適當？什麼又是合理？</p>
      
      <p class="mb-6">這些標準往往來自於他人的價值觀，而非我們自己的需求。當我們開始質疑這些既定印象時，才能真正理解——親密需求，其實是人類最自然的部分。</p>
      
      <h3 class="text-2xl font-medium-custom text-[var(--deep-brown-gray)] mb-6">重新定義「正常」</h3>
      <p class="mb-6">什麼是正常的親密關係？什麼是健康的性慾表達？答案不在教科書上，不在他人的經驗裡，而在於你和伴侶之間的真實感受。</p>
      
      <p class="mb-6">當我們開始用自己的標準來定義「正常」時，那些原本令人緊張的商品，就變成了支持我們需求的工具。它們不再是羞恥的象徵，而是關愛的延伸。</p>
      
      <h3 class="text-2xl font-medium-custom text-[var(--deep-brown-gray)] mb-6">溫柔的勇氣</h3>
      <p class="mb-6">走進那一區，需要的不是放縱，而是溫柔的勇氣——對自己誠實的勇氣，對需求坦然的勇氣，對親密關係負責任的勇氣。</p>
      
      <p class="mb-8">當我們能夠溫柔地面對自己的需求時，我們也就能更溫柔地對待彼此。這種溫柔，比任何商品都更能增進親密關係的品質。</p>
    </div>
    `,
    date: '2024-12-15',
    readTime: '5 分鐘',
    category: '心理探討',
    image: '/api/placeholder/800/400',
    views: 1240,
    likes: 89,
    isPopular: true,
    relatedProducts: ['PROD_UF001', 'PROD_UF002'],
    tags: ['心理建設', '社會觀念', '自我接納', '親密關係']
  },
  '002': {
    id: '002',
    title: '關係裡的沉默時刻，反而最真實',
    excerpt: '有些話不需要說出口，有些需求不需要解釋。真正的親密，往往發生在那些無聲的理解之間。',
    content: `
    <div class="prose prose-lg max-w-none">
      <p class="text-xl text-[var(--warm-gray)] leading-relaxed mb-8">真正的親密，不在於說了多少話，而在於多少時候不用說話就能理解彼此。</p>
      
      <h3 class="text-2xl font-medium-custom text-[var(--deep-brown-gray)] mb-6">無聲勝有聲</h3>
      <p class="mb-6">在親密關係中，最深刻的溝通往往發生在沉默的時刻。一個眼神，一個觸碰，一個微笑，都能傳達比言語更豐富的訊息。</p>
      
      <p class="mb-6">當我們學會珍惜這些沉默的時刻時，我們也學會了真正的聆聽——不只是聽見對方說的話，更是感受對方沒說出口的需求。</p>
      
      <h3 class="text-2xl font-medium-custom text-[var(--deep-brown-gray)] mb-6">身體的語言</h3>
      <p class="mb-6">身體有自己的語言，它比言語更誠實，也更直接。在親密的時刻，我們透過身體的語言交流，透過觸碰的深度理解彼此。</p>
      
      <p class="mb-8">學會閱讀身體的語言，也就學會了真正的親密。這種親密不需要言語的修飾，只需要心與心的連結。</p>
    </div>
    `,
    date: '2024-12-10',
    readTime: '4 分鐘',
    category: '關係思考',
    image: '/api/placeholder/800/400',
    views: 892,
    likes: 64,
    isPopular: false,
    relatedProducts: ['PROD_UF002'],
    tags: ['非語言溝通', '身體語言', '深度連結', '理解']
  },
  '003': {
    id: '003',
    title: '那些說不出口的需求，其實是被包裝聽見的',
    excerpt: '當商品被賦予詩意的名字，當需求被溫柔地表達，購買的動作也變成了一種優雅的選擇。',
    content: `
    <div class="prose prose-lg max-w-none">
      <p class="text-xl text-[var(--warm-gray)] leading-relaxed mb-8">語言的力量在於，它能將最原始的需求包裝成最優雅的表達。</p>
      
      <h3 class="text-2xl font-medium-custom text-[var(--deep-brown-gray)] mb-6">詩意的包裝</h3>
      <p class="mb-6">當一個商品被稱為「久一點的夜」而非「延時噴霧」時，它所承載的不再只是功能，而是一種氛圍，一種對美好時光的渴望。</p>
      
      <p class="mb-6">這種詩意的包裝，讓我們能夠優雅地表達需求，讓購買的行為變成一種品味的展現，而非羞恥的隱藏。</p>
      
      <h3 class="text-2xl font-medium-custom text-[var(--deep-brown-gray)] mb-6">溫柔的表達</h3>
      <p class="mb-6">真正的溫柔，不在於避而不談，而在於用最美的方式談論最真實的需求。當我們能夠溫柔地表達時，我們也在為彼此創造一個安全的空間。</p>
      
      <p class="mb-8">在這個空間裡，需求不再是負担，而是關愛的延伸；購買不再是羞恥，而是對彼此負責任的表現。</p>
    </div>
    `,
    date: '2024-12-05',
    readTime: '6 分鐘',
    category: '品牌思考',
    image: '/api/placeholder/800/400',
    views: 1580,
    likes: 127,
    isPopular: true,
    relatedProducts: ['PROD_UF001'],
    tags: ['品牌理念', '詩意表達', '溫柔溝通', '需求表達']
  },
  '004': {
    id: '004',
    title: '親密不是表演，是回歸自然的狀態',
    excerpt: '最好的親密體驗，不是刻意營造的激情，而是讓彼此都能放鬆下來，做最真實的自己。',
    content: `
    <div class="prose prose-lg max-w-none">
      <p class="text-xl text-[var(--warm-gray)] leading-relaxed mb-8">真正的親密，是當所有的偽裝都卸下後，依然能夠彼此吸引的狀態。</p>
      
      <h3 class="text-2xl font-medium-custom text-[var(--deep-brown-gray)] mb-6">卸下表演的面具</h3>
      <p class="mb-6">我們常常以為親密需要表演，需要完美的身材、完美的技巧、完美的激情。但真正的親密，恰恰相反，它需要的是真實。</p>
      
      <p class="mb-6">當我們能夠在彼此面前做最真實的自己時，當我們能夠接納彼此的不完美時，那種連結才是最深刻的。</p>
      
      <h3 class="text-2xl font-medium-custom text-[var(--deep-brown-gray)] mb-6">自然的節奏</h3>
      <p class="mb-6">每對伴侶都有自己的節奏，自己的方式，自己的語言。最好的親密體驗，是找到屬於你們的節奏，而不是模仿他人的方式。</p>
      
      <p class="mb-8">當我們能夠回歸到最自然的狀態時，親密關係也就回歸到了它最美好的本質——兩個靈魂的真誠相遇。</p>
    </div>
    `,
    date: '2024-11-28',
    readTime: '5 分鐘',
    category: '關係思考',
    image: '/api/placeholder/800/400',
    views: 756,
    likes: 48,
    isPopular: false,
    relatedProducts: ['PROD_UF002'],
    tags: ['真實自然', '個人節奏', '深度連結', '自我接納']
  },
  '005': {
    id: '005',
    title: '如何在關係中談論那些「難以啟齒」的話題',
    excerpt: '溝通的藝術不在於找到完美的詞彙，而在於創造一個安全的空間，讓真實的需求得以表達。',
    content: `
    <div class="prose prose-lg max-w-none">
      <p class="text-xl text-[var(--warm-gray)] leading-relaxed mb-8">最難的對話，往往是最重要的對話。而最重要的對話，需要最溫柔的方式。</p>
      
      <h3 class="text-2xl font-medium-custom text-[var(--deep-brown-gray)] mb-6">創造安全的空間</h3>
      <p class="mb-6">在開始任何敏感話題之前，我們需要先創造一個安全的空間——一個不會被判斷、不會被嘲笑、不會被忽視的空間。</p>
      
      <p class="mb-6">這個空間不是物理的，而是心理的。它建立在彼此的信任、尊重和理解之上。</p>
      
      <h3 class="text-2xl font-medium-custom text-[var(--deep-brown-gray)] mb-6">從好奇開始</h3>
      <p class="mb-6">與其直接表達需求，不如從好奇開始。「我想知道你的感受」比「我需要什麼」更容易開啟對話。</p>
      
      <p class="mb-6">當我們帶著好奇而非要求的態度時，對方更容易打開心扉，分享真實的想法。</p>
      
      <h3 class="text-2xl font-medium-custom text-[var(--deep-brown-gray)] mb-6">用「我」的語言</h3>
      <p class="mb-6">「我覺得」比「你應該」更有效；「我希望」比「你必須」更溫柔。用「我」的語言表達，既能傳達需求，又不會讓對方感到被指責。</p>
      
      <p class="mb-8">記住，溝通的目的不是說服對方，而是讓彼此更加理解。當理解加深時，解決方案往往會自然浮現。</p>
    </div>
    `,
    date: '2024-11-20',
    readTime: '7 分鐘',
    category: '溝通技巧',
    image: '/api/placeholder/800/400',
    views: 2140,
    likes: 183,
    isPopular: true,
    relatedProducts: ['PROD_UF001', 'PROD_UF002'],
    tags: ['溝通技巧', '安全空間', '有效表達', '關係經營']
  },
  '006': {
    id: '006',
    title: '選物的哲學：為什麼細節決定體驗',
    excerpt: '從包裝設計到使用體驗，每一個細節都在傳遞一種態度：你值得被溫柔對待。',
    content: `
    <div class="prose prose-lg max-w-none">
      <p class="text-xl text-[var(--warm-gray)] leading-relaxed mb-8">真正的品質，藏在那些看不見的細節裡。而真正的關愛，也體現在對細節的用心。</p>
      
      <h3 class="text-2xl font-medium-custom text-[var(--deep-brown-gray)] mb-6">細節即態度</h3>
      <p class="mb-6">一個商品的包裝設計、材質選擇、使用說明，都在無聲地傳遞一種態度。它告訴你，製作者如何看待使用者，如何理解這份需求。</p>
      
      <p class="mb-6">當每一個細節都被用心考量時，使用者感受到的不只是產品的功能，更是一份被理解、被尊重的溫暖。</p>
      
      <h3 class="text-2xl font-medium-custom text-[var(--deep-brown-gray)] mb-6">體驗的層次</h3>
      <p class="mb-6">好的選物體驗，是有層次的。從第一眼的視覺印象，到拆封時的驚喜，再到使用時的舒適感，每一個層次都在傳遞關愛。</p>
      
      <p class="mb-6">這種層次感，讓購買不再只是交易，而成為一種儀式——一種對自己、對伴侶的關愛儀式。</p>
      
      <h3 class="text-2xl font-medium-custom text-[var(--deep-brown-gray)] mb-6">溫柔的堅持</h3>
      <p class="mb-8">堅持每一個細節的完美，是一種溫柔的堅持。它告訴使用者：你值得最好的，你的需求值得被認真對待，你的體驗值得被用心呵護。</p>
    </div>
    `,
    date: '2024-11-15',
    readTime: '4 分鐘',
    category: '品牌思考',
    image: '/api/placeholder/800/400',
    views: 634,
    likes: 41,
    isPopular: false,
    relatedProducts: ['PROD_UF001'],
    tags: ['品質細節', '使用體驗', '品牌態度', '用心設計']
  }
}

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

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const article = articleDetails[id]
  
  if (!article) {
    return {
      title: '文章不存在 - 暮色 Dusk',
      description: '抱歉，您查找的文章不存在。'
    }
  }

  return {
    title: `${article.title} - 氛圍日誌`,
    description: article.excerpt,
    keywords: article.tags?.join(', '),
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      images: article.image ? [article.image] : undefined,
    }
  }
}

async function getProducts(productIds: string[]): Promise<Product[]> {
  if (!supabase || !productIds.length) {
    return []
  }

  const { data: products } = await supabase
    .from('products')
    .select('*, merchant:merchants(*)')
    .in('id', productIds)

  return products || []
}

export default async function ArticlePage({ params }: PageProps) {
  const { id } = await params
  const article = articleDetails[id]
  
  if (!article) {
    notFound()
  }

  const products = await getProducts(article.relatedProducts || [])

  return (
    <div className="min-h-screen bg-[var(--warm-white)]">
      <Navigation />
      
      {/* 文章 Header */}
      <header className="pt-24 pb-12 px-4 bg-gradient-to-br from-[var(--warm-white)] to-[var(--soft-beige)] relative overflow-hidden">
        {/* 背景裝飾 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-br from-[var(--sunset-pink)]/10 to-transparent rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-20 w-40 h-40 bg-gradient-to-br from-[var(--dusk-blue)]/8 to-transparent rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* 返回按鈕 */}
          <Link 
            href="/journal"
            className="inline-flex items-center gap-2 text-[var(--warm-gray)] hover:text-[var(--deep-brown-gray)] transition-colors mb-8 font-medium-custom"
          >
            <ArrowLeft className="w-4 h-4" />
            返回日誌列表
          </Link>
          
          {/* 文章資訊 */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-[var(--warm-orange)] text-white border-0 px-3 py-1">
                {article.category}
              </Badge>
              {article.isPopular && (
                <Badge className="bg-[var(--rose-gold)] text-white border-0 px-3 py-1">
                  🔥 熱門
                </Badge>
              )}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-light-custom text-[var(--deep-brown-gray)] mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-[var(--warm-gray)] leading-relaxed-custom mb-6">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm text-[var(--warm-gray)]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{article.views} 次閱讀</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  <span>{article.likes} 個喜歡</span>
                </div>
                <span>{article.date}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="rounded-full">
                  <BookmarkPlus className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 文章主圖 */}
        <div className="mb-12 rounded-2xl overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-96 object-cover"
          />
        </div>
        
        {/* 文章內容 */}
        <article 
          className="prose prose-lg max-w-none mb-16"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        {/* 標籤 */}
        {article.tags && article.tags.length > 0 && (
          <div className="mb-12">
            <h3 className="text-lg font-medium-custom text-[var(--deep-brown-gray)] mb-4">相關標籤</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag: string, index: number) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="text-[var(--warm-gray)] border-[var(--light-pink-brown)] hover:bg-[var(--soft-beige)] transition-colors"
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 相關商品推薦 */}
      {products.length > 0 && (
        <section className="py-16 px-4 bg-[var(--soft-beige)]/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light-custom text-[var(--deep-brown-gray)] mb-4">
                相關選物推薦
              </h2>
              <p className="text-lg text-[var(--warm-gray)] leading-relaxed-custom">
                那些能夠支持你思考的溫柔選物
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product) => {
                const config = productConfig[product.id as keyof typeof productConfig]
                if (!config) return null
                
                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    poeticName={config.poeticName}
                    description={config.description}
                    atmosphereDescription={config.atmosphereDescription}
                    isLimitedTime={false}
                  />
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* 其他推薦文章 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light-custom text-[var(--deep-brown-gray)] mb-4">
              繼續探索
            </h2>
            <p className="text-lg text-[var(--warm-gray)] leading-relaxed-custom">
              更多關於親密關係的溫柔思考
            </p>
          </div>
          
          <div className="text-center">
            <Link 
              href="/journal"
              className="atmosphere-btn inline-block px-8 py-4"
            >
              瀏覽更多文章
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}