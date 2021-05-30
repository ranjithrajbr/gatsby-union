import React from "react"
import Layout from "../components/layout"
import background from "../images/about/about.jpg"
//import {StaticImage} from "gatsby-plugin-image"
//import Join from "../components/join"

const Covid  = () => (
    <Layout>
        <div
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition:'center' }}
      className="w-full h-32 md:h-96"
    >
      <div className="container h-full">
        <div className="flex items-center h-full">
          <div className="">
            <h1 className="text-xl font-semibold md:text-4xl lg:text-6xl">
              Covid Management
            </h1>
          </div>
          <div>{/* Add some image */}</div>
        </div>
      </div>
    </div>
    <section>
        
    </section>
    </Layout>
)
export default Covid