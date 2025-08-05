import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '氛圍日誌 - 氛圍',
  description: '關於親密關係的溫柔思考，給那些無法說明的感受',
  keywords: '親密關係, 情感探討, 氛圍日誌, 溫柔思考',
}

// 日誌文章數據
const journalArticles = [
  {
    id: '001',
    title: '為什麼我們都曾經不敢走進這一區',
    excerpt: '那些躲在商店角落的商品，承載著太多不必要的羞恥感。但親密需求，本就是生而為人最自然的部分。',
    date: '2024-12-15',
    readTime: '5 分鐘',
    category: '心理探討'
  },
  {
    id: '002',
    title: '關係裡的沉默時刻，反而最真實',
    excerpt: '有些話不需要說出口，有些需求不需要解釋。真正的親密，往往發生在那些無聲的理解之間。',
    date: '2024-12-10',
    readTime: '4 分鐘',
    category: '關係思考'
  },
  {
    id: '003',
    title: '那些說不出口的需求，其實是被包裝聽見的',
    excerpt: '當商品被賦予詩意的名字，當需求被溫柔地表達，購買的動作也變成了一種優雅的選擇。',
    date: '2024-12-05',
    readTime: '6 分鐘',
    category: '品牌思考'
  },
  {
    id: '004',
    title: '親密不是表演，是回歸自然的狀態',
    excerpt: '最好的親密體驗，不是刻意營造的激情，而是讓彼此都能放鬆下來，做最真實的自己。',
    date: '2024-11-28',
    readTime: '5 分鐘',
    category: '關係思考'
  },
  {
    id: '005',
    title: '如何在關係中談論那些「難以啟齒」的話題',
    excerpt: '溝通的藝術不在於找到完美的詞彙，而在於創造一個安全的空間，讓真實的需求得以表達。',
    date: '2024-11-20',
    readTime: '7 分鐘',
    category: '溝通技巧'
  },
  {
    id: '006',
    title: '選物的哲學：為什麼細節決定體驗',
    excerpt: '從包裝設計到使用體驗，每一個細節都在傳遞一種態度：你值得被溫柔對待。',
    date: '2024-11-15',
    readTime: '4 分鐘',
    category: '品牌思考'
  }
]

const categories = ['全部', '心理探討', '關係思考', '品牌思考', '溝通技巧']

export default function JournalPage() {
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

      {/* 分類標籤 */}
      <section className="py-8 px-4 border-b border-[var(--light-pink-brown)]/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-light-custom transition-colors duration-300 ${
                  category === '全部' 
                    ? 'bg-[var(--rose-gold)] text-white' 
                    : 'bg-[var(--soft-beige)] text-[var(--deep-brown-gray)] hover:bg-[var(--light-pink-brown)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 日誌文章列表 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {journalArticles.map((article, index) => (
              <article 
                key={article.id}
                className="atmosphere-card hover:scale-[1.02] transition-all duration-300 animate-atmosphere-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-[var(--warm-gray)] mb-3">
                    <span className="bg-[var(--soft-beige)] px-3 py-1 rounded-full font-light-custom">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-4">
                      <span>{article.date}</span>
                      <span>• {article.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl md:text-2xl font-medium-custom text-[var(--deep-brown-gray)] mb-4 leading-tight">
                    {article.title}
                  </h2>
                  
                  <p className="text-[var(--warm-gray)] leading-relaxed-custom mb-6">
                    {article.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <button className="text-[var(--rose-gold)] hover:text-[var(--deep-brown-gray)] transition-colors duration-300 font-medium-custom">
                    繼續閱讀
                  </button>
                  
                  <div className="flex items-center space-x-4 text-sm text-[var(--warm-gray)]">
                    <button className="hover:text-[var(--rose-gold)] transition-colors duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button className="hover:text-[var(--rose-gold)] transition-colors duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 訂閱區段 */}
      <section className="py-16 px-4 bg-[var(--soft-beige)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light-custom text-[var(--deep-brown-gray)] mb-6">
            訂閱氛圍日誌
          </h2>
          <p className="text-lg text-[var(--warm-gray)] leading-relaxed-custom mb-8">
            接收關於親密關係的溫柔思考，不定期更新，不打擾的頻率
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="輸入你的 email"
                className="flex-1 px-4 py-3 rounded-l-lg border border-[var(--light-pink-brown)] focus:outline-none focus:border-[var(--rose-gold)] bg-white text-[var(--deep-brown-gray)]"
              />
              <button className="atmosphere-btn rounded-l-none px-6">
                訂閱
              </button>
            </div>
            <p className="text-xs text-[var(--warm-gray)] mt-3 font-light-custom">
              我們尊重你的隱私，絕不濫發信件
            </p>
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