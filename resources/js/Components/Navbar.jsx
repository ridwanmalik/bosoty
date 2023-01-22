import { Link } from "@inertiajs/inertia-react"
import { useEffect, useRef } from "react"
import { Icon } from "./Icon"
const Navbar = () => {
  const navbarRef = useRef(null)

  const handleScroll = () => navbarRef.current.classList.toggle("bg-white", window.scrollY > 0)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed z-50 w-screen" ref={navbarRef}>
      <div className="container flex items-center justify-between">
        <div className="logo">
          <Link href={route("home")}>
            {/* <img src="/images/logo.png" alt="logo" /> */}
            <h1 className="text-2xl font-bold text-heading py-8">BOSOTY</h1>
          </Link>
        </div>
        <div className="menu">
          <ul className="flex font-bold">
            <li>
              <Link href={route("home")} className="inline-flex p-4">
                Home
              </Link>
            </li>
            <li>
              <Link href={route("home")} className="inline-flex p-4">
                About
              </Link>
            </li>
            <li>
              <Link href={route("home")} className="inline-flex p-4">
                Services
              </Link>
            </li>
            <li>
              <Link href={route("home")} className="inline-flex p-4">
                Contact
              </Link>
            </li>
            <li>
              <Link href={route("home")} className="inline-flex items-center gap-2 p-4">
                <Icon name="phone" />
                01755-532407
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
