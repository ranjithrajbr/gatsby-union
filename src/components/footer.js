import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () =>(
    <footer className="bg-gray-100">
       <div className="container flex flex-col p-6 md:p-16 md:flex-row md:justify-around">
       <div className="flex items-center justify-center">
            <StaticImage className="w-20" placeholder="blurred" src="../images/union.png" alt="logo"/>
        </div>
        <div className="py-2 text-center">
            <h1 className="p-2 text-xl font-semibold uppercase md:text-2xl">Contact Us</h1>
           <ul>
                <li>795 Folsom Ave, Suite 600</li>
                <li>San Francisco, CA 94107</li>
                <li>P: (123) 456-7890</li>
            </ul>
        </div>
        <div className="text-center">
            <h1 className="p-2 text-xl font-semibold uppercase md:text-2xl">Follow Us</h1>
           <ul className="flex items-center justify-center">
                <li className="px-2"><StaticImage className="w-5" src="../images/instagram.png" placeholder="blurred" alt="instagram"/></li>
                <li className="px-2"><StaticImage className="w-5" src="../images/facebook.png" placeholder="blurred" alt="facebook"/></li>
            </ul>
        </div>
       </div>
    </footer>
)
export default Footer