import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Junyi Zheng｜AI 应用开发",
  description: "Junyi Zheng 的个人求职网站：AI 应用开发、科研与开源实践。",
  openGraph: {
    title: "Junyi Zheng｜AI 应用开发",
    description: "AI 应用开发 · 科研与开源实践",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
