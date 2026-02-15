import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "本屋さんのAI教室 | AIアプリポートフォリオ",
  description: "Google AI Studioで作成した10以上のAIアプリを紹介。音声文字起こし、画像認識、学習支援など、様々なAIアプリをご覧いただけます。",
  openGraph: {
    title: "本屋さんのAI教室",
    description: "Google AI Studioで作成したAIアプリポートフォリオ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
