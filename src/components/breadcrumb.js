import React from "react"


const BreadCrumb = (props) => (
    <section className="bg-black ">
    <div className="container flex flex-col items-center justify-center py-10">
    <h1 className="text-xl font-semibold text-center text-white uppercase md:text-5xl">
    {props.name}
    </h1>
    </div>
  </section>
)
export default BreadCrumb
