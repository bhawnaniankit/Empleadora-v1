import Navbar from "@repo/ui/navbar"
import Footer from "@repo/ui/footer"
import { Outlet } from "react-router-dom"
const Layout = () => {
  return <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
}

export default Layout
