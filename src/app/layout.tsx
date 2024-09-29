import "./globals.css";
import { FC, ReactNode } from "react";
import { Header } from "@/components/header";
import { NavBar } from "@/components/nav-bar";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="sm:h-[100vh]">
          <Header />
          <div className="flex h-[calc(100%-64px)] flex-1 flex-col-reverse gap-4 sm:mx-0 sm:mt-0 sm:flex-row ">
            <NavBar />
            <main className="relative min-h-[calc(100vh-132px)] justify-center sm:mx-0 sm:ml-64 sm:mr-4 sm:mt-4 sm:w-[calc(100vw-291px)] sm:px-0">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
