import { CartWidget } from "../CartWidget"
import { NavLink } from "./NavLink"


const NavBar = () => {
  return (
    <header className='bg-orange-300'>
      <div className='container m-auto flex justify-between items-center'>
        <div className="flex ">
          <img src='/vite.svg' alt='Logo'/>
          <h1 className="text-5xl text-white font-light m-4">GYJ</h1>
        </div>

        <div className="flex m-auto"/>

        <nav className='flex gap-4 px-5'>
          <NavLink href="#" text="Enlace 1"/>
          <NavLink href="#" text="Enlace 2"/>
          <NavLink href="#" text="Enlace 3"/>
        </nav>

        <CartWidget items={0}/>
      </div>
    </header>
  )
}

export default NavBar