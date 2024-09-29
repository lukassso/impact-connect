import { MainContainer } from "@/components/main-container";
import { FC, ReactNode } from "react";


const HomePage: FC<{ children: ReactNode }> = ({ children }) => {
  return(<MainContainer>{children}</MainContainer>)
}

export default HomePage
