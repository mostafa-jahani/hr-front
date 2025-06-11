'use client'

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm px-4 py-4 min-h-[64px] flex items-center justify-between md:justify-end relative z-30">
      <h1 className="text-lg font-semibold md:absolute md:right-20">داشبورد</h1>
      <div className="text-sm text-gray-600">خوش آمدید 👋</div>
    </header>
  )
}
