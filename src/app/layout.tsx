import "./globals.css";
import { Header } from "@/components/header";
import { NavBar } from "@/components/nav-bar";

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="sm:h-[100vh]">
          <Header />
          <div className="flex h-[calc(100%-64px)] flex-1 flex-col-reverse gap-4 sm:mx-0 sm:mt-0 sm:flex-row bg-gray-100 ">
            <NavBar />
            <main className="relative min-h-[calc(100vh-132px)] w-full sm:mx-0 sm:ml-64">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
