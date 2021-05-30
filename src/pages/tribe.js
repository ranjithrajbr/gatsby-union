import React from "react"
import Layout from "../components/layout"
import background from "../images/about/about.jpg"
import {StaticImage} from "gatsby-plugin-image"
import Join from "../components/join"
const Tribe = () =>(
   <Layout>
        <div
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition:'center' }}
      className="w-full h-32 md:h-96"
    >
      <div className="container h-full">
        <div className="flex items-center h-full">
          <div className="">
            <h1 className="text-xl font-semibold md:text-4xl lg:text-6xl">
              About Us
            </h1>
          </div>
          <div>{/* Add some image */}</div>
        </div>
      </div>
    </div>
    <section className="container">
      <div className="flex flex-col items-center justify-center">
      <div className="flex-1">
          <p className="text-center md:text-2xl">
          We are only as strong as our team! Each person in our tribe has a very important role to play & we believe that everyone can make a difference contributing to a better future.
          </p>
        </div>
        <StaticImage
          className="flex-1 w-16 h-auto md:w-full"
          src="../images/about/friends.jpg"
          alt="image"
        />
        
      </div>
    </section>
    <Join/>
   </Layout>
)

export default Tribe