import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


const Footer = () => (
    <footer className="bg-u-dgray">
        <div className="grid lg:grid-cols-5 xl:grid-cols-4 xl:gap-4 lg:px-2">
            <div className="flex items-center justify-center">
                <StaticImage className="w-28 lg:w-32" placeholder="blurred" src="../images/logow.png" alt="logo" />
            </div>
            <div className="flex justify-center py-4 lg:items-center lg:col-span-3 xl:col-span-2 lg:py-10">
               <div className="flex flex-col items-center justify-center md:block">
               <p className="inline-block italic text-center text-white md:py-0 md:text-left">Make a difference and join us as a volunteer today!  </p>
                <button className="p-2 mx-3 text-sm font-normal text-white uppercase border border-white rounded-lg md:p-1 md:text-sm hover:border-transparent hover:bg-white hover:text-black">
                    <Link to="/contact">Join now</Link>
                </button>
               </div>
            </div>
            <div className="flex items-center justify-center py-4 lg:justify-start lg:py-10">
                <div>
                <ul className="flex">
                    <li className="px-2"><a href="https://www.instagram.com/theunion_bengaluru/"><StaticImage className="w-6" src="../images/instagram.png" placeholder="blurred" alt="instagram"/></a></li>
                    <li className="px-2"><a href="https://www.facebook.com/theunion.blr/"><StaticImage className="w-6" src="../images/facebook.png" placeholder="blurred" alt="facebook" /></a></li>
                    <li className="px-2"><a href="https://www.linkedin.com/company/the-union-bengaluru/"><StaticImage className="w-6" src="../images/twitter.png" placeholder="blurred" alt="twitter" /></a></li>
                    <li className="px-2"><a href="https://twitter.com/union_bengaluru"><StaticImage className="w-6" src="../images/linkedin.png" placeholder="blurred" alt="linkedin" /></a></li>
                    <li className="px-2"><a href="https://www.clubhouse.com/club/the-union-world"><StaticImage className="w-6" src="../images/clubhouse.png" placeholder="blurred" alt="linkedin" /></a></li>
                </ul>
                </div>
            </div>
        </div>
    </footer>
)
export default Footer