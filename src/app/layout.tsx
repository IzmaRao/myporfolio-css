
import Navbar from "../../components/navbar/page";
import "./globals.css";

import React from 'react'

function CommonLayout({children}:any) {
  return (
    <html>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

export default CommonLayout;