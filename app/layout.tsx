import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YUAN — 独立设计师",
  description: "YUAN 的个人作品网站：品牌、文化与数字体验。",
  openGraph: {
    title: "YUAN — 让想法留下痕迹。",
    description: "独立设计师，关注品牌、文化与数字体验。",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
