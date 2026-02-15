export type Category =
  | 'productivity'   // 生産性向上
  | 'creative'       // クリエイティブ
  | 'learning'       // 学習・教育
  | 'entertainment'  // エンターテインメント
  | 'utility';       // ユーティリティ

export interface Work {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl?: string;
  tags: string[];
  category: Category;
  order: number;
  featured?: boolean;
  externalUrl?: string;
}

export interface CategoryInfo {
  id: Category;
  label: string;
  color: string;
}
