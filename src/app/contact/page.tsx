import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'お問い合わせ | 本屋さんのAI教室',
  description: 'AIアプリに関するお問い合わせ、ご質問、お仕事のご依頼はこちらから。',
};

export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-primary-50 to-secondary-50 py-20 px-4">
      <div className="max-w-xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">💬</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            お問い合わせ
          </h1>
          <p className="text-gray-600 leading-relaxed">
            AIアプリに関するご質問、お仕事のご依頼など、
            <br className="hidden sm:block" />
            お気軽にお問い合わせください。
          </p>
        </div>

        {/* フォーム */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <ContactForm />
        </div>

        {/* 補足情報 */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>通常2-3営業日以内にご返信いたします。</p>
        </div>
      </div>
    </div>
  );
}
