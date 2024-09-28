import { FC } from 'react'
import { HomeIcon, SearchIcon, StarIcon, ConnectsIcon, AccountIcon, MailIcon } from '@/components/icons'
import Link from 'next/link'

const links = [
  { label: "Home", icon: <HomeIcon />, href: "/home", key: "home" },
  { label: "Search", icon: <SearchIcon size={24} />, href: "/search", key: "search" },
  { label: "Favorites", icon: <StarIcon />, href: "/favorites", key: "favorites" },
  { label: "My Connects", icon: <ConnectsIcon />, href: "/connects", key: "my_connects" },
  { label: "Account", icon: <AccountIcon />, href: "/account", key: "account" },
  { label: "Messaging", icon: <MailIcon />, href: "/messaging", key: "messaging" },
]

export const NavBar: FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <ul className="flex flex-col space-y-4 p-4">
        {links.map(link => (
          <li key={link.key}>
            <Link href={link.href} className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
              {link.icon}
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}