import MyHead from "../base/head";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout ({children}) {
  return (
    <>
      <MyHead />
      <Header />
      {children}
      <Footer />
    </>
  )
}