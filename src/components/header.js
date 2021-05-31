import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import {Link} from "gatsby"

function Header() {
  const [isActive, toggleMenu] = useState(false)
  function toggle(){
    toggleMenu (prevState => !prevState)
  }
  return (
    <header className="">
      <nav className="container flex flex-col lg:flex-row lg:justify-around lg:flex-nowrap">
        <div className="flex items-center justify-between">
          <div className="">
            <StaticImage
              className="w-20"
              src="../images/union.png"
              placeholder="blurred"
              alt="logo"
            />
          </div>
          <div>
            <button
              className="focus:outline-none lg:hidden"
              onClick={toggle}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                {isActive ? (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        <div className={`container lg:flex lg:flex-grow lg:justify-between ${isActive ? 'block' :'hidden'}`}>
          <ul className="lg:flex lg:justify-center lg:items-center lg:flex-1">
            <li className="p-3 font-semibold"><Link to="/">Home</Link></li>
            <li className="p-3 font-semibold"><Link to="/tribe">Our Tribe</Link></li>
            <li className="p-3 font-semibold"><Link to="/covid">Covid Management</Link></li>
            <li className="p-3 font-semibold"><Link to="/blog">Blogs</Link></li>
          </ul>
          <div className="lg:flex lg:justify-center lg:items-center">
          <button className="p-2 font-bold border-2 border-black hover:border-transparent hover:bg-black hover:text-white">
            <Link to="/contact">Helpline</Link>
          </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
