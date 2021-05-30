import * as React from  "react";
import Header from "./header"
import Footer from "./footer"

const Layout  = ({children}) => (
  <div className="flex flex-col flex-wrap justify-between min-h-screen ">
 <Header/>
 <main className="flex-grow">{children}</main>
 <Footer/>
 </div>
)
export default Layout