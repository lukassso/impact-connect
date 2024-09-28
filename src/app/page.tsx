import { Header } from '@/components/header'
import { NavBar } from '@/components/nav-bar'
import { MainContainer } from '@/components/main-container'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <NavBar />
        <MainContainer>
          <h2 className="text-2xl font-semibold">Good evening, Jason!</h2>
          <p>Sunday, September 29</p>
          {/* Add your main content here */}
        </MainContainer>
      </div>
    </div>
  )
}
