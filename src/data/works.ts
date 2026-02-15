import { Work, CategoryInfo, Category } from '@/types/work';

export const works: Work[] = [
  {
    id: 'app-001',
    title: '横スクロール型アクションゲーム',
    description: 'AIが生成したステージを駆け抜けるアクションゲーム',
    videoUrl: '/videos/792686293.246147.mp4',
    thumbnailUrl: '/thumbnails/792686293.246147.jpg',
    tags: ['ゲーム', 'アクション', 'AI生成'],
    category: 'entertainment',
    order: 1,
    featured: true,
  },
  {
    id: 'app-002',
    title: 'Doodle Drop',
    description: 'スイカゲーム風の落ちものパズル。同じフルーツを合体させよう！',
    videoUrl: '/videos/792686320.262103.mp4',
    thumbnailUrl: '/thumbnails/792686320.262103.jpg',
    tags: ['ゲーム', 'パズル', 'カジュアル'],
    category: 'entertainment',
    order: 2,
    featured: true,
  },
  {
    id: 'app-003',
    title: 'ふぁみりー将棋',
    description: 'どうぶつ将棋風の簡単ルールで家族みんなで楽しめる将棋ゲーム',
    videoUrl: '/videos/792686320.291030.mp4',
    thumbnailUrl: '/thumbnails/792686320.291030.jpg',
    tags: ['ゲーム', '将棋', 'ファミリー'],
    category: 'entertainment',
    order: 3,
    featured: true,
  },
  {
    id: 'app-004',
    title: 'フラッシュカード右脳トレーニング',
    description: '瞬間的に表示されるカードで右脳を鍛える記憶力トレーニング',
    videoUrl: '/videos/792686320.318020.mp4',
    thumbnailUrl: '/thumbnails/792686320.318020.jpg',
    tags: ['学習', '脳トレ', '記憶力'],
    category: 'learning',
    order: 4,
  },
  {
    id: 'app-005',
    title: 'AIお絵描きチャレンジ',
    description: 'お題に沿って絵を描くと、AIが判定してくれるお絵描きゲーム',
    videoUrl: '/videos/792686320.341551.mp4',
    thumbnailUrl: '/thumbnails/792686320.341551.jpg',
    tags: ['ゲーム', 'お絵描き', 'AI判定'],
    category: 'creative',
    order: 5,
  },
  {
    id: 'app-006',
    title: 'Neon Fall',
    description: 'テトリス風のネオンカラーな落ちものパズルゲーム',
    videoUrl: '/videos/792686320.364150.mp4',
    thumbnailUrl: '/thumbnails/792686320.364150.jpg',
    tags: ['ゲーム', 'パズル', 'テトリス風'],
    category: 'entertainment',
    order: 6,
  },
  {
    id: 'app-007',
    title: 'ワンクリック献立作成',
    description: 'ボタン一つで今日の献立をAIが提案。買い物リストも自動生成',
    videoUrl: '/videos/792686320.387105.mp4',
    thumbnailUrl: '/thumbnails/kondate.jpg',
    tags: ['実用', '料理', 'AI提案'],
    category: 'productivity',
    order: 7,
    featured: true,
  },
  {
    id: 'app-008',
    title: 'Study Lenz',
    description: '教科書を撮影するだけでAIがクイズを自動作成。効率的な学習をサポート',
    videoUrl: '/videos/792686320.411451.mp4',
    thumbnailUrl: '/thumbnails/792686320.411451.jpg',
    tags: ['学習', 'クイズ', '教育'],
    category: 'learning',
    order: 8,
  },
  {
    id: 'app-009',
    title: 'ものしりAI先生',
    description: '資料や写真をアップロードすると、わかりやすい解説ページを自動作成',
    videoUrl: '/videos/792686320.434473.mp4',
    thumbnailUrl: '/thumbnails/792686320.434473.jpg',
    tags: ['学習', '解説', 'AI生成'],
    category: 'learning',
    order: 9,
  },
  {
    id: 'app-010',
    title: 'NEON HORIZON 3D',
    description: 'ネオンの世界を舞台にした迫力の3Dシューティングゲーム',
    videoUrl: '/videos/792686320.467639.mp4',
    thumbnailUrl: '/thumbnails/neon-horizon-screenshot.jpg',
    tags: ['ゲーム', '3D', 'シューティング'],
    category: 'entertainment',
    order: 10,
  },
  {
    id: 'app-011',
    title: 'Magic Draw',
    description: '描いた落書きをAIが実写風に変換。想像が現実になる魔法のアプリ',
    videoUrl: '/videos/792686320.489064.mp4',
    thumbnailUrl: '/thumbnails/792686320.489064.jpg',
    tags: ['クリエイティブ', 'お絵描き', 'AI変換'],
    category: 'creative',
    order: 11,
  },
  {
    id: 'app-012',
    title: '手相占いアプリ',
    description: '手のひらを撮影するだけでAIが手相を診断。運勢をチェック',
    videoUrl: '/videos/792686320.515657.mp4',
    thumbnailUrl: '/thumbnails/tesou-screenshot.jpg',
    tags: ['占い', '手相', 'AI診断'],
    category: 'utility',
    order: 12,
  },
  {
    id: 'app-013',
    title: '英単語タイピングゲーム',
    description: 'タイピング練習しながら英単語を覚えられる一石二鳥の学習ゲーム',
    videoUrl: '/videos/タイピングゲーム.mov',
    thumbnailUrl: '/thumbnails/タイピングゲーム.jpg',
    tags: ['学習', '英語', 'タイピング'],
    category: 'learning',
    order: 13,
  },
  {
    id: 'app-014',
    title: 'お部屋模様替えシミュレーション',
    description: '部屋の写真を撮ると、AIが様々なインテリアスタイルを提案',
    videoUrl: '/videos/画面収録 2026-02-14 1.12.38.mov',
    thumbnailUrl: '/thumbnails/oheya-screenshot.jpg',
    tags: ['実用', 'インテリア', 'シミュレーション'],
    category: 'productivity',
    order: 14,
  },
];

export const categories: CategoryInfo[] = [
  { id: 'productivity', label: '実用・便利', color: 'bg-emerald-500' },
  { id: 'creative', label: 'クリエイティブ', color: 'bg-purple-500' },
  { id: 'learning', label: '学習・教育', color: 'bg-blue-500' },
  { id: 'entertainment', label: 'ゲーム・娯楽', color: 'bg-pink-500' },
  { id: 'utility', label: 'ユーティリティ', color: 'bg-orange-500' },
];

export function getCategoryInfo(categoryId: Category): CategoryInfo | undefined {
  return categories.find(cat => cat.id === categoryId);
}

export function getFeaturedWorks(): Work[] {
  return works.filter(work => work.featured).sort((a, b) => a.order - b.order);
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  works.forEach(work => work.tags.forEach(tag => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}
