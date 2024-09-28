import { FC } from 'react'
import Link from 'next/link'

export const Header: FC = () => {
  return (
    <header
      className={`sticky top-0 z-50 flex h-[64px] w-full bg-white px-3 lg:flex-row lg:justify-between xl:px-6`}
    >
      <div className="flex items-center space-x-4">
        <img src="/assets/Serdeczna-Fundacja-Hearty-logo-svg-1.svg" alt="Logo" className="h-8" />
        <h1 className="text-xl font-semibold">Serdeczna Fundacja Hearty</h1>
      </div>
      <Link href="/invite" className="bg-red-500 text-white px-4 py-2 rounded-md">
        Invite
      </Link>
    </header>
  )
}