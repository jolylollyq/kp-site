import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Коммерческое предложение — Разработка сайта для ветеринарной клиники",
  description:
    "Профессиональная разработка сайта для ветеринарной клиники на Next.js. Онлайн-запись, каталог услуг, карточки врачей, SEO-оптимизация.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
