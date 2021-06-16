import React from "react"
import Layout from "../components/layout"
import cogif from "../images/gifs/contact.gif"
//import { Link } from "gatsby"
const Contact = () => {
  return (
    <Layout>
      <section style={{ backgroundColor: '#6ba5ca' }}>
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
            Let’s beat Covid together! Call our HOPE helpline on <span className="font-bold md:text-xl">080-47186868</span> for any assistance. We promise to do our best to ensure you get the help you need.
          </p>
          <p className="md:text-2xl">
            You have a role to play! Together we can build a world where everyone has access to the resources they need. Join us as a volunteer and help us grow our family today!
          </p>
        </div>
      </section>
      <section className="container">
        <div className="p-3 border shadow-md md:p-5">
          <form name="Contact Form" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="Contact Form" />
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="flex-1 px-1 py-5">
                <label className="mb-3 text-xs text-black text-opacity-50">What do we call you?*</label>
                <input className="block w-full py-3 border-b outline-none text-md md:w-9/12" type="text" name="name" placeholder="Full Name" />
              </div>
              <div className="flex-1 px-1 py-5">
                <label className="mb-3 text-xs text-black text-opacity-50">Where can we reach you? *</label>
                <input className="block w-full py-3 border-b outline-none text-md md:w-9/12" type="text" name="email/number" placeholder="Contact Number or Email ID" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="flex-1 px-1 py-5">
                <label className="block mb-5 text-xs text-black text-opacity-50">Are you a resident of Bengaluru?*</label>
                <input type="radio" name="resident" value="yes" />
                <label className="inline px-2">Yes</label>
                <input type="radio" name="resident" value="no" />
                <label className="inline px-2">No</label>
              </div>
              <div className="flex-1 px-1 py-5">
                <label className="mb-3 text-xs text-black text-opacity-50">Where do you reside? *</label>
                <input className="block w-full py-3 border-b outline-none text-md md:w-9/12" type="text" name="pincode" placeholder="Pincode" />
              </div>
            </div>
            <div className="py-5">
              <label className="mb-3 text-xs text-black text-opacity-50">What do you do?*</label>
              <select className="block w-full py-3 border-b outline-none" name="role">
                <option value="Iam a student">I am a student</option>
                <option value="Iam an entrepreneur">I am an entrepreneur</option>
                <option value="Iam a working individual"> I am a working individual</option>
                <option value="Iam exploring my options">I am exploring my options</option>
              </select>
            </div>
            <div className="py-5">
              <label className="mb-3 text-xs text-black text-opacity-50">Who are you associated with?*</label>
              <input className="block w-full py-3 border-b outline-none text-md" type="text" name="associated with" placeholder="School, College or Organisation Name" />
            </div>
            <div className="py-5">
              <label className="mb-3 text-xs text-black text-opacity-50">What would you like to do with us?*</label>
              <select className="block w-full py-3 border-b outline-none" name="role">
                <option value="Volunteer with The Union">Volunteer with The Union</option>
                <option value="Collaborate with The Union">Collaborate with The Union</option>
                <option value="Get Assistance from The Union"> Get Assistance from The Union</option>
              </select>
            </div>
            <div>
              <button className="px-4 py-3 text-xs font-light tracking-widest text-white uppercase rounded-full bg-u-blue" type="submit">Send message</button>
            </div>

          </form>
        </div>

      </section>
      <section className="container">
        <div>
          <p className="text-center">
            Write to us on
          </p>

          <a href="mailto:info@theunion.world"><h1 className="text-xl font-bold text-center md:text-4xl">info@theunion.world</h1></a>
        </div>
      </section>
    </Layout>
  )
}
export default Contact
