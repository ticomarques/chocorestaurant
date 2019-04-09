import React from "react"
import PropTypes from "prop-types"
import Navbar from '../components/Globals/Navbar'
import Footer from '../components/Globals/Footer'

import "./bootstrap.min.css"
// import "./layout.css"

const Layout = ({children}) => {
  return (
    <React.Fragment>
        <Navbar />
        {children}
        <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
