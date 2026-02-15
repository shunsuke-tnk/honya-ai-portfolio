import { Metadata } from 'next';
import WorksViewer from '@/components/swipe/WorksViewer';

export const metadata: Metadata = {
  title: '作品一覧 | 本屋さんのAI教室',
  description: 'Google AI Studioで作成したAIアプリのデモ動画をご覧いただけます。',
};

export default function WorksPage() {
  return <WorksViewer />;
}
