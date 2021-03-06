import React from "react"
import { withPrefix } from "gatsby"
import PropTypes from "prop-types"
import "./layout.css"
import Cookies from '../Cookies'
import "bootstrap/dist/css/bootstrap.min.css"
import { Helmet } from 'react-helmet'

const Layout = ({ children, home, mobile }) => {
  return (
    <>
      <main>
        {!home &&
          (mobile ?
            <div style={{ height: "calc(96px + 21 * (100vw - 320px) / 448)", maxHeight: "117px" }} /> :
            <div style={{ height: "calc(111px + 25 * (100vw - 769px) / 1151)", maxHeight: "136px" }} />)
        }
        {children}
      </main>
      <Helmet>
     
      </Helmet>
      <Cookies />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout