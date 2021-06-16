import React from "react"
import Layout from "../components/layout"
import cogif from "../images/gifs/contact.gif"
//import { Link } from "gatsby"
const Contact = () => {
  return (
    <Layout>
      <section style={{backgroundColor:'#6ba5ca'}}>
        <div className="container flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white uppercase md:text-6xl">
            contact us
          </h1>
          <img className="w-20 h-20 md:w-44 md:h-44" src={cogif} alt="Otter dancing with a fish" />
        </div>
      </section>
      <section className="container">
        <div className="text-center">
          <p>
            Let’s beat Covid together! Call our helpline for any assistance. We
            promise to do our best to ensure you get the help you need.
          </p>
          <p>
            You have a role to play! Together we can build a world where
            everyone has access to the resources they need. Join us as a
            volunteer and help us grow our family
          </p>
        </div>
      </section>
      <section className="container">
          <div className="p-3 border shadow-md md:p-5">
            <form name="Contact Form" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="Contact Form" />
              <div className="flex flex-col md:flex-row md:justify-between">
                <div className="flex-1 px-1 py-5">
                  <label className="mb-3 text-xs text-black text-opacity-50">Name*</label>
                  <input className="block w-full py-3 border-b outline-none text-md md:w-9/12" type="text" name="name" placeholder="Name" />
                </div>
                <div className="flex-1 px-1 py-5">
                  <label className="mb-3 text-xs text-black text-opacity-50">Email*</label>
                  <input className="block w-full py-3 border-b outline-none text-md md:w-9/12" type="text" name="email" placeholder="Email" />
                </div>
              </div>
              <div className="py-5">
                <label className="mb-3 text-xs text-black text-opacity-50">Your Role: </label>
                <select className="block w-full py-3 border-b outline-none" name="role">
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select>
              </div>
              <div className="py-5">
                <label className="mb-3 text-xs text-black text-opacity-50">Message*</label>
                <textarea className="block w-full py-3 border-b outline-none" type="text" placeholder="Write your Message" name="message"></textarea>
              </div>
              <div>
                <button className="px-4 py-3 text-xs font-light tracking-widest text-white uppercase rounded-full bg-u-blue" type="submit">Send message</button>
              </div>

            </form>
          </div>
        
      </section>
      <section className="container">
        <div>
          <p className="text-center md:text-2xl">
            Your support saves lives! If you’re looking becoming one of our partners or collaborating with us in any other way then,
          </p>

          <a href="mailto:info@example.com"><h1 className="text-xl font-bold text-center text-gray-300 md:text-4xl">info@example.com</h1></a>
          <a href="tel:+917777777777"><h1 className="text-xl font-bold text-center text-gray-300 md:text-4xl">+91 7777777777</h1></a>
        </div>
      </section>
    </Layout>
  )
}
export default Contact
