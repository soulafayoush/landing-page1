"use client";
import React from "react";
import { CustomTypography as Typography } from "@/components/CustomTypography";
import {
  HomeIcon,
  AcademicCapIcon,
  UserGroupIcon,
  PhoneIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "الرئيسية",
    icon: HomeIcon,
    href: "/",
  },
  {
    name: "خدماتي",
    icon: AcademicCapIcon,
    href: "#services",
  },
  {
    name: "آراء الطلاب",
    icon: UserGroupIcon,
    href: "#feedback",
  },
  {
    name: "تواصل معنا",
    icon: PhoneIcon,
    href: "#contact",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  const handleScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <li>
      {href?.startsWith('#') ? (
        <a
          href={href}
          onClick={(e) => handleScroll(e, href.substring(1))}
          className="flex items-center gap-2 font-medium text-gray-900 cursor-pointer transition-colors hover:text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          {children}
        </a>
      ) : (
        <a
          href={href || "#"}
          className="flex items-center gap-2 font-medium text-gray-900 cursor-pointer transition-colors hover:text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          {children}
        </a>
      )}
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <div className="px-10 sticky top-4 z-50">
      <div className="mx-auto container">
        <nav className="z-50 mt-6 relative bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg py-4 px-6">
          <div className="flex items-center justify-between">
            <a href="/">
              <Typography 
                color="blue-gray" 
                className="text-xl font-bold cursor-pointer text-right"
              >
             التداول
              </Typography>
            </a>
            
            <ul className="ml-10 hidden items-center gap-4 lg:flex" dir="rtl">
              {NAV_MENU.map(({ name, icon: Icon, href }) => (
                <NavItem key={name} href={href}>
                  <Icon className="h-5 w-5" />
                  {name}
                </NavItem>
              ))}
            </ul>

            
            <button
              onClick={handleOpen}
              className="ml-auto inline-block lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* القائمة المنسدلة للجوال */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96 mt-4' : 'max-h-0'}`}>
            <div className="border-t border-gray-200 pt-4">
              <ul className="flex flex-col gap-2" dir="rtl">
                {NAV_MENU.map(({ name, icon: Icon, href }) => (
                  <NavItem key={name} href={href}>
                    <Icon className="h-5 w-5" />
                    {name}
                  </NavItem>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;