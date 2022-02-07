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
        <script src={withPrefix('../../scripts/jquery.min.js')} type="text/javascript" />
        <script src={withPrefix('../../scripts/jquery.scrollex.min.js')} type="text/javascript" />
        <script src={withPrefix('../../scripts/jquery.scrolly.min.js')} type="text/javascript" />
        <script src={withPrefix('../../scripts/browser.min.js')} type="text/javascript" />
        <script src={withPrefix('../../scripts/breakpoints.min.js')} type="text/javascript" />
        <script src={withPrefix('../../scripts/util.js')} type="text/javascript" />
        <script src={withPrefix('../../scripts/main.js')} type="text/javascript" />
      </Helmet>
      <Cookies />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout