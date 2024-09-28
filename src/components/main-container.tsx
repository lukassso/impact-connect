import { FC, ReactNode } from 'react'

interface MainContainerProps {
  children: ReactNode
}

export const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return (
    <main className="p-4 flex-1">
      {children}
    </main>
  )
}