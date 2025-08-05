import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '關於我們 - 氛圍',
  description: '氛圍 - 為現代都市情侶與女性量身打造的親密選物空間。不說性，但讓人感受到親密的邀請。',
  keywords: '氛圍品牌, 親密關係, 女性友善, 情侶用品',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--warm-white)]">
      <Navigation />
      
      {/* Hero 區段 */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-[var(--warm-white)] to-[var(--soft-beige)]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light-custom text-[var(--deep-brown-gray)] mb-8 leading-tight">
            關於氛圍
          </h1>
          <p className="text-xl md:text-2xl text-[var(--warm-gray)] leading-relaxed-custom">
            「不說性，但讓人感受到親密的邀請」
          </p>
        </div>
      </section>

      {/* 品牌理念 */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-light-custom text-[var(--deep-brown-gray)] mb-8">
                我們的理念
              </h2>
              <div className="space-y-8 text-lg text-[var(--warm-gray)] leading-relaxed-custom">
                <p>
                  我們相信親密關係中的需求不需要被過度包裝，也無需刻意隱藏，
                  而是以一種自然、優雅、不造成心理負擔的方式呈現。
                </p>
                <p>
                  這裡不是傳統的「情趣用品店」，而是一個理解現代都市生活節奏，
                  懂得情感細膩度的選物空間。
                </p>
                <p className="text-xl font-medium-custom text-[var(--deep-brown-gray)]">
                  「輕輕放進生活裡」
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 目標客群 */}
      <section className="py-16 px-4 bg-[var(--soft-beige)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light-custom text-[var(--deep-brown-gray)] text-center mb-12">
            為誰而存在
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="atmosphere-card text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--rose-gold)] to-[var(--light-pink-brown)] flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium-custom text-[var(--deep-brown-gray)] mb-4">
                現代都市女性
              </h3>
              <p className="text-[var(--warm-gray)] leading-relaxed-custom">
                25-40歲，追求生活品質與情感深度，
                希望購買過程不尷尬的消費者
              </p>
            </div>

            <div className="atmosphere-card text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--rose-gold)] to-[var(--light-pink-brown)] flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium-custom text-[var(--deep-brown-gray)] mb-4">
                穩定關係情侶
              </h3>
              <p className="text-[var(--warm-gray)] leading-relaxed-custom">
                希望提升親密體驗，
                重視彼此感受和情感連結的伴侶
              </p>
            </div>

            <div className="atmosphere-card text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--rose-gold)] to-[var(--light-pink-brown)] flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium-custom text-[var(--deep-brown-gray)] mb-4">
                品質重視者
              </h3>
              <p className="text-[var(--warm-gray)] leading-relaxed-custom">
                注重產品品質與體驗，
                希望選擇安全可靠商品的消費者
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 品牌承諾 */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light-custom text-[var(--deep-brown-gray)] text-center mb-12">
            我們的承諾
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full bg-[var(--soft-beige)] flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--rose-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium-custom text-[var(--deep-brown-gray)] mb-3">
                  品質保證
                </h3>
                <p className="text-[var(--warm-gray)] leading-relaxed-custom">
                  所有選物都經過嚴格篩選，確保品質與安全性，讓您安心選擇。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full bg-[var(--soft-beige)] flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--rose-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium-custom text-[var(--deep-brown-gray)] mb-3">
                  隱私保護
                </h3>
                <p className="text-[var(--warm-gray)] leading-relaxed-custom">
                  包裝不會讓人臉紅心跳，配送過程完全保護您的隱私。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full bg-[var(--soft-beige)] flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--rose-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium-custom text-[var(--deep-brown-gray)] mb-3">
                  貼心服務
                </h3>
                <p className="text-[var(--warm-gray)] leading-relaxed-custom">
                  專業與理解，是我們與您溝通的方式。任何問題都能得到溫柔的回應。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 區段 */}
      <section className="py-16 px-4 bg-[var(--soft-beige)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light-custom text-[var(--deep-brown-gray)] mb-6">
            開始你的選物之旅
          </h2>
          <p className="text-lg text-[var(--warm-gray)] leading-relaxed-custom mb-8">
            每一種感受，都值得被溫柔對待
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products"
              className="atmosphere-btn inline-block text-center px-8 py-4"
            >
              探索選物
            </Link>
            <Link 
              href="/"
              className="atmosphere-btn-secondary inline-block text-center px-8 py-4"
            >
              回到首頁
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}