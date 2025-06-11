// components/Header.js
export default function Header({ title = 'داشبورد' }) {
  return (
    <header className="w-full bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold pr-12 md:pr-0">داشبورد</h1>      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">👤 مدیر سیستم</span>
        {/* در آینده: آیکون یا دکمه خروج */}
      </div>
    </header>
  )
}
