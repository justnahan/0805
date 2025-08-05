import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import Link from 'next/link'
import { Search, Clock, Eye, Heart } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: '氛圍日誌 - 暮色 Dusk',
  description: '關於親密關係的溫柔思考，給那些無法說明的感受',
  keywords: '親密關係, 情感探討, 氛圍日誌, 溫柔思考',
}

// 日誌文章數據 - 增強版
const journalArticles = [
  {
    id: '001',
    title: '為什麼我們都曾經不敢走進這一區',
    excerpt: '那些躲在商店角落的商品，承載著太多不必要的羞恥感。但親密需求，本就是生而為人最自然的部分。',
    date: '2024-12-15',
    readTime: '5 分鐘',
    category: '心理探討',
    image: '/api/placeholder/400/280',
    views: 1240,
    likes: 89,
    isPopular: true,
    relatedProducts: ['PROD_UF001', 'PROD_UF002']
  },
  {
    id: '002',
    title: '關係裡的沉默時刻，反而最真實',
    excerpt: '有些話不需要說出口，有些需求不需要解釋。真正的親密，往往發生在那些無聲的理解之間。',
    date: '2024-12-10',
    readTime: '4 分鐘',
    category: '關係思考',
    image: '/api/placeholder/350/240',
    views: 892,
    likes: 64,
    isPopular: false,
    relatedProducts: ['PROD_UF002']
  },
  {
    id: '003',
    title: '那些說不出口的需求，其實是被包裝聽見的',
    excerpt: '當商品被賦予詩意的名字，當需求被溫柔地表達，購買的動作也變成了一種優雅的選擇。',
    date: '2024-12-05',
    readTime: '6 分鐘',
    category: '品牌思考',
    image: '/api/placeholder/420/300',
    views: 1580,
    likes: 127,
    isPopular: true,
    relatedProducts: ['PROD_UF001']
  },
  {
    id: '004',
    title: '親密不是表演，是回歸自然的狀態',
    excerpt: '最好的親密體驗，不是刻意營造的激情，而是讓彼此都能放鬆下來，做最真實的自己。',
    date: '2024-11-28',
    readTime: '5 分鐘',
    category: '關係思考',
    image: '/api/placeholder/380/260',
    views: 756,
    likes: 48,
    isPopular: false,
    relatedProducts: ['PROD_UF002']
  },
  {
    id: '005',
    title: '如何在關係中談論那些「難以啟齒」的話題',
    excerpt: '溝通的藝術不在於找到完美的詞彙，而在於創造一個安全的空間，讓真實的需求得以表達。',
    date: '2024-11-20',
    readTime: '7 分鐘',
    category: '溝通技巧',
    image: '/api/placeholder/360/280',
    views: 2140,
    likes: 183,
    isPopular: true,
    relatedProducts: ['PROD_UF001', 'PROD_UF002']
  },
  {
    id: '006',
    title: '選物的哲學：為什麼細節決定體驗',
    excerpt: '從包裝設計到使用體驗，每一個細節都在傳遞一種態度：你值得被溫柔對待。',
    date: '2024-11-15',
    readTime: '4 分鐘',
    category: '品牌思考',
    image: '/api/placeholder/320/220',
    views: 634,
    likes: 41,
    isPopular: false,
    relatedProducts: ['PROD_UF001']
  }
]

const categories = [
  { name: '全部', color: 'bg-[var(--rose-gold)]' },
  { name: '心理探討', color: 'bg-[var(--warm-orange)]' },
  { name: '關係思考', color: 'bg-[var(--deep-rose)]' },
  { name: '品牌思考', color: 'bg-[var(--dusk-blue)]' },
  { name: '溝通技巧', color: 'bg-[var(--gold-copper)]' }
]

export default function JournalPage() {
  // 靜態版本 - 顯示所有文章
  const filteredArticles = journalArticles
  const selectedCategory = '全部'

  return (
    <div className="min-h-screen bg-[var(--warm-white)]">
      <Navigation />
      
      {/* Hero 區段 */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-[var(--warm-white)] to-[var(--soft-beige)]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light-custom text-[var(--deep-brown-gray)] mb-8 leading-tight">
            氛圍日誌
          </h1>
          <p className="text-xl md:text-2xl text-[var(--warm-gray)] leading-relaxed-custom mb-6">
            給那些無法說明的感受
          </p>
          <p className="text-lg text-[var(--warm-gray)] leading-relaxed-custom max-w-2xl mx-auto">
            關於親密關係的溫柔思考，關於那些說不出口卻真實存在的感受，
            關於如何讓愛變得更自然、更舒適。
          </p>
        </div>
      </section>

      {/* 搜尋與篩選區 */}
      <section className="py-8 px-4 border-b border-[var(--light-pink-brown)]/20 bg-[var(--soft-beige)]/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-6">
            {/* 搜尋框 */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[var(--warm-gray)]" />
              <input
                type="text"
                placeholder="尋找那些難以說明的感受..."
                className="pl-10 pr-4 py-3 rounded-full border border-[var(--light-pink-brown)] focus:outline-none focus:border-[var(--rose-gold)] focus:ring-2 focus:ring-[var(--rose-gold)]/20 bg-white/90 backdrop-blur-sm w-full text-[var(--deep-brown-gray)]"
              />
            </div>
            
            {/* 結果統計 */}
            <div className="text-sm text-[var(--warm-gray)] font-light-custom">
              共找到 {filteredArticles.length} 篇文章
            </div>
          </div>
          
          {/* 分類標籤 - 彩色化 */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-6 py-3 rounded-full text-sm font-medium-custom transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.name
                    ? `${category.color} text-white shadow-lg`
                    : 'bg-white/80 text-[var(--deep-brown-gray)] hover:bg-white border border-[var(--light-pink-brown)]/30'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 日誌文章列表 - 瀑布流佈局 */}
      <section className="py-16 px-4 relative">
        {/* 背景裝飾 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[var(--sunset-pink)]/10 to-transparent rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[var(--dusk-blue)]/8 to-transparent rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* 佈局提示 */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light-custom text-[var(--deep-brown-gray)] mb-4">
              每一篇都是一個溫柔的思考
            </h2>
            <p className="text-[var(--warm-gray)] leading-relaxed-custom">
              不同的意思，不同的視角，同樣的理解
            </p>
          </div>
          
          {/* 瀑布流網格 */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredArticles.map((article, index) => {
              const categoryConfig = categories.find(cat => cat.name === article.category) || categories[0]
              
              return (
                <article 
                  key={article.id}
                  className={`break-inside-avoid mb-6 atmosphere-card hover:scale-[1.02] transition-all duration-500 animate-atmosphere-slide-up relative group overflow-hidden ${
                    article.isPopular ? 'ring-2 ring-[var(--warm-orange)]/20' : ''
                  }`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* 熱門文章標識 */}
                  {article.isPopular && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-[var(--warm-orange)] text-white border-0 text-xs px-2 py-1 font-medium">
                        🔥 熱門
                      </Badge>
                    </div>
                  )}
                  
                  {/* 情境圖片 */}
                  <div className={`aspect-[4/3] overflow-hidden rounded-t-2xl bg-gradient-to-br from-[var(--misty-lavender)] via-[var(--sunset-pink)] to-[var(--dusk-blue)] relative ${
                    article.isPopular ? 'aspect-[3/2]' : ''
                  }`}>
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    {/* 分類與統計 */}
                    <div className="flex items-center justify-between text-sm mb-4">
                      <Badge 
                        className={`${categoryConfig.color} text-white border-0 text-xs px-3 py-1`}
                      >
                        {article.category}
                      </Badge>
                      <div className="flex items-center gap-3 text-[var(--warm-gray)]">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span className="text-xs">{article.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span className="text-xs">{article.likes}</span>
                        </div>
                      </div>
                    </div>
                    
                    <h2 className={`font-medium-custom text-[var(--deep-brown-gray)] mb-3 leading-tight hover:text-[var(--rose-gold)] transition-colors cursor-pointer ${
                      article.isPopular ? 'text-xl' : 'text-lg'
                    }`}>
                      {article.title}
                    </h2>
                    
                    <p className="text-[var(--warm-gray)] leading-relaxed-custom mb-4 text-sm">
                      {article.excerpt}
                    </p>
                    
                    {/* 時間資訊 */}
                    <div className="flex items-center justify-between text-xs text-[var(--warm-gray)] mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                      <span>{article.date}</span>
                    </div>
                    
                    {/* 操作按鈕 */}
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/journal/${article.id}`}
                        className="text-[var(--rose-gold)] hover:text-[var(--deep-brown-gray)] transition-colors duration-300 font-medium-custom text-sm"
                      >
                        繼續閱讀 →
                      </Link>
                      
                      <div className="flex items-center gap-2">
                        <button className="w-8 h-8 rounded-full hover:bg-[var(--soft-beige)] transition-colors flex items-center justify-center">
                          <Heart className="w-3 h-3 text-[var(--warm-gray)] hover:text-[var(--rose-gold)]" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* 相關商品推薦 */}
                  {article.relatedProducts && article.relatedProducts.length > 0 && (
                    <div className="border-t border-[var(--light-pink-brown)]/20 p-4 bg-[var(--soft-beige)]/30">
                      <h4 className="text-sm font-medium-custom text-[var(--deep-brown-gray)] mb-3">
                        相關選物推薦
                      </h4>
                      <div className="text-sm text-[var(--warm-gray)]">
                        查看文章詳情了解相關商品
                      </div>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* 訂閱區段 - 重新設計 */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* 背景漸層與裝飾 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--soft-beige)] via-[var(--light-purple-gray)]/30 to-[var(--warm-white)]"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-28 h-28 bg-gradient-to-br from-[var(--sunset-pink)]/20 to-transparent rounded-full blur-2xl animate-atmosphere-pulse"></div>
          <div className="absolute bottom-10 left-20 w-36 h-36 bg-gradient-to-br from-[var(--dusk-blue)]/15 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-[var(--gold-copper)]/10 to-transparent rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl font-light-custom text-[var(--deep-brown-gray)] mb-6">
              讓溫柔的思考，悄然而來
            </h2>
            <p className="text-xl text-[var(--warm-gray)] leading-relaxed-custom mb-4">
              接收關於親密關係的溫柔思考
            </p>
            <p className="text-lg text-[var(--warm-gray)] leading-relaxed-custom opacity-80">
              不定期更新，不打擾的頻率，只在你需要的時候
            </p>
          </div>
          
          <div className="max-w-lg mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[var(--light-pink-brown)]/30 shadow-xl">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--warm-orange)] to-[var(--deep-rose)] flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium-custom text-[var(--deep-brown-gray)] mb-2">
                氛圍日誌訂閱
              </h3>
              <p className="text-sm text-[var(--warm-gray)]">
                一封信，一份理解，一個需要時的陪伴
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="輸入你的 email 信箱"
                  className="w-full px-6 py-4 rounded-xl border border-[var(--light-pink-brown)]/40 focus:outline-none focus:border-[var(--rose-gold)] focus:ring-2 focus:ring-[var(--rose-gold)]/20 bg-white/90 text-[var(--deep-brown-gray)] placeholder-[var(--warm-gray)]/60 transition-all duration-300"
                />
              </div>
              
              <button className="w-full atmosphere-btn py-4 text-lg font-medium-custom tracking-wide-custom transform hover:scale-[1.02] transition-all duration-300">
                開始訂閱
              </button>
            </div>
            
            <div className="mt-6 space-y-2">
              <p className="text-xs text-[var(--warm-gray)] font-light-custom">
                ✓ 我們尊重你的隱私，絕不濫發信件
              </p>
              <p className="text-xs text-[var(--warm-gray)] font-light-custom">
                ✓ 隨時可以取消訂閱，不留任何痕跡
              </p>
              <p className="text-xs text-[var(--warm-gray)] font-light-custom">
                ✓ 只有有意義的內容，不會浪費你的時間
              </p>
            </div>
          </div>
          
          {/* 訂閱優勢 */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[var(--warm-orange)]/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-[var(--warm-orange)]" />
              </div>
              <h4 className="text-sm font-medium-custom text-[var(--deep-brown-gray)] mb-2">
                不擾人的頻率
              </h4>
              <p className="text-xs text-[var(--warm-gray)]">
                每週最多一封，不會成為信箱的負擔
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[var(--deep-rose)]/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-[var(--deep-rose)]" />
              </div>
              <h4 className="text-sm font-medium-custom text-[var(--deep-brown-gray)] mb-2">
                溫柔的內容
              </h4>
              <p className="text-xs text-[var(--warm-gray)]">
                沒有教條，只有理解與陪伴
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[var(--dusk-blue)]/20 flex items-center justify-center">
                <Search className="w-6 h-6 text-[var(--dusk-blue)]" />
              </div>
              <h4 className="text-sm font-medium-custom text-[var(--deep-brown-gray)] mb-2">
                個人化推薦
              </h4>
              <p className="text-xs text-[var(--warm-gray)]">
                根據你的關注，推薦相關內容
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 區段 */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light-custom text-[var(--deep-brown-gray)] mb-6">
            從思考到行動
          </h2>
          <p className="text-lg text-[var(--warm-gray)] leading-relaxed-custom mb-8">
            當理解了自己的需求，就是選擇的時刻
          </p>
          
          <Link 
            href="/products"
            className="atmosphere-btn inline-block text-center px-8 py-4"
          >
            開始選物
          </Link>
        </div>
      </section>
    </div>
  )
}