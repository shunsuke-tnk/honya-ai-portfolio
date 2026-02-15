import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📚</span>
            <span className="font-bold text-lg">本屋さんのAI教室</span>
          </div>

          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              ホーム
            </Link>
            <Link
              href="/works"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              作品一覧
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              お問い合わせ
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} 本屋さんのAI教室. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Powered by Google AI Studio & Gemini
          </p>
        </div>
      </div>
    </footer>
  );
}
