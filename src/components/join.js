import React from "react"
import {Link} from "gatsby"

const Join = () => (
    <section className="bg-black">
    <div className="container flex flex-col items-center justify-center">
      <h2 className="text-xl italic font-normal text-center text-white md:text-3xl">
        Make a difference and join as a volunteer today!{" "}
      </h2>
      <button className="p-2 mt-3 text-xs font-normal text-white uppercase border border-white md:p-3 md:text-xl hover:border-transparent hover:bg-white hover:text-black">
        <Link to="/contact">Join now</Link>
      </button>
    </div>
  </section>
)
export default Join