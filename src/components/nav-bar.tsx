'use client'

import { FC } from 'react'
import {HomeIcon} from '@/assets/home-icon'
import {SearchIcon} from '@/assets/search-icon'
import {StarIcon} from '@/assets/star-icon' 
import {ConnectsIcon} from '@/assets/connects-icon'
import {AccountIcon} from '@/assets/account-icon'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", icon: <HomeIcon />, href: "/home", key: "home" },
  { label: "Search", icon: <SearchIcon />, href: "/", key: "search" },
  { label: "Favorites", icon: <StarIcon />, href: "/", key: "favorites" },
  { label: "My Connects", icon: <ConnectsIcon />, href: "/", key: "my_connects" },
  { label: "Account", icon: <AccountIcon />, href: "/", key: "account" },
]

export const NavBar: FC = () => {
  const currentPath = usePathname();
  return (
    <div className="fixed hidden h-[calc(100vh-64px)] w-[235px] bg-secondary-400 px-4 py-6 sm:block">
    <div className="flex h-full w-[203px] flex-grow flex-col justify-between">
      <ul className="flex w-full list-none flex-col gap-2">
        {links.map((item) => (
          <Link
            href={item.href}
            key={item.key}
            className={cn(
              "flex h-10 cursor-pointer gap-2 rounded-[6px] px-4 py-2 text-foreground-main hover:bg-secondary-600 hover:font-medium hover:text-foreground-600",
              currentPath.includes(item.href) &&
                "!bg-secondary-800 !text-foreground-main"
            )}
          >
            <div>{item.icon}</div>
            <span
              className={cn(
                "h-6 items-center text-base font-normal",
                currentPath.includes(item.href) && "font-medium"
              )}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </ul>
      <div className="flex h-14 items-end gap-2 border-t border-secondary-main px-4 pb-2 text-base font-normal">
        {/* <LogoutButton showIcon /> */}
      </div>
    </div>
  </div>
  )
}