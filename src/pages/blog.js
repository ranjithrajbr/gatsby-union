import React from "react"
import Layout from "../components/layout"
import background from "../images/about/about.jpg"
const Blog = () => (
  <Layout>
      <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-32 md:h-96"
    >
      <div className="container h-full">
        <div className="flex items-center h-full">
          <div className="">
            <h1 className="text-xl font-semibold md:text-4xl lg:text-6xl">
              Blogs
            </h1>
          </div>
          <div>{/* Add some image */}</div>
        </div>
      </div>
    </div>
    <section className="container">
      <div className="flex items-center justify-center w-full h-full">
        <h1 className="text-xl font-semibold text-center md:text-4xl">
          Coming Soon!!
        </h1>
      </div>
    </section>
  </Layout>
)

export default Blog
