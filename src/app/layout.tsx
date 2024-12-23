import "./globals.css"; // استيراد ملف CSS العام

export const metadata = {
  title: "تطبيق الوكالة",
  description: "نظام تسجيل الوكلاء",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
