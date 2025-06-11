// app/layout.js
import '../styles/globals.css'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export const metadata = {
  title: 'پنل مدیریت منابع انسانی',
  description: 'سامانه مدیریت نیروی انسانی',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-100 text-gray-900">
        <div className="flex min-h-screen">
          {/* سایدبار ثابت */}
          <Sidebar />

          {/* ناحیه محتوای اصلی */}
          <div className="flex-1 md:mr-64 flex flex-col">
            {/* هدر */}
            <Header />

            {/* محتوای صفحات */}
            <main className="flex-1 p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
