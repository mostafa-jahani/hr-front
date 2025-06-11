'use client'

import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import {
  Menu,
  ChevronDown,
  ChevronUp,
  Users,
  LayoutDashboard,
  FileText,
  Settings,
} from 'lucide-react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const isDesktop = useMediaQuery({ minWidth: 768 })

  useEffect(() => {
    if (isDesktop) setIsOpen(false)
  }, [isDesktop])

  const toggleSidebar = () => setIsOpen(!isOpen)
  const toggleMenu = (menu) => setOpenMenu(openMenu === menu ? null : menu)

  return (
    <>
      {/* دکمه منو فقط در موبایل */}
      {!isDesktop && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 right-4 z-50 p-2 bg-white shadow rounded-md md:hidden"
        >
          <Menu size={24} />
        </button>
      )}

      {/* پس‌زمینه شیشه‌ای هنگام باز بودن سایدبار در موبایل */}
      {isOpen && !isDesktop && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm transition duration-300"
        />
      )}

      {/* سایدبار */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-64 bg-slate-800 text-white z-50 shadow-lg
          transition-transform duration-300
          ${isDesktop ? '' : isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="p-4 font-bold text-lg border-b border-slate-700">
          پنل مدیریت
        </div>
        <nav className="p-4 space-y-2 text-sm">
          <SidebarLink icon={<LayoutDashboard size={18} />} label="داشبورد" href="#" />

          <div>
            <button
              onClick={() => toggleMenu('employees')}
              className="flex items-center justify-between w-full px-2 py-2 hover:bg-slate-700 rounded"
            >
              <div className="flex items-center gap-2">
                <Users size={18} />
                <span>کارمندان</span>
              </div>
              {openMenu === 'employees' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {openMenu === 'employees' && (
              <div className="pl-6 mt-1 space-y-1 text-gray-300 text-sm">
                <SidebarLink label="لیست کارمندان" href="#" />
                <SidebarLink label="افزودن کارمند" href="#" />
              </div>
            )}
          </div>

          <SidebarLink icon={<FileText size={18} />} label="گزارشات" href="#" />
          <SidebarLink icon={<Settings size={18} />} label="تنظیمات" href="#" />
        </nav>
      </aside>
    </>
  )
}

function SidebarLink({ icon, label, href }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 px-2 py-2 rounded hover:bg-slate-700 transition-colors"
    >
      {icon && icon}
      <span>{label}</span>
    </a>
  )
}
