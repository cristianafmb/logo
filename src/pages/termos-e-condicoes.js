import React, { useRef } from "react"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import "bootstrap/dist/css/bootstrap.min.css"

import { graphql } from 'gatsby'

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Menu from '../components/menu'
import MenuMobile from '../components/menuMobile'
import Termos from "../components/termos-e-condicoes/termos-e-condicoes"
import Footer from '../components/footer'
import FooterMobile from '../components/footerMobile'

import Image from '../components/Images'

const TermosPage = ({ data, location }) => {
  const breakpoints = useBreakpoint();

  const marcacaoRef = useRef(null);
  return (
    <Layout home>
      <Seo title="Política de Privacidade" />
      {!breakpoints.mobile ? (
        <>
          <div className="no-repeat position-relative ">
            <Image src="bg-termos.png" alt="bg-top" className="position-absolute z-index-minus-1 max-width bg-cover height-max bg-position-bottom" />
            <Menu footer={data.footerJson.footer} location={location} marcacaoRef={marcacaoRef} />
            <Termos />
          </div>
          <Footer data={data.footerJson.footer} />
        </>
      )
        :
        (
          <>
            <div className="no-repeat position-relative ">
              <Image src="bg-termos.png" alt="bg-top" className="position-absolute z-index-minus-1 max-width bg-cover height-max bg-position-bottom" />
              <MenuMobile footer={data.footerJson.footer} location={location} marcacaoRef={marcacaoRef}/>

              <Termos />
            </div>
            <FooterMobile footer={data.footerJson.footer} />
          </>
        )}
    </Layout>
  )
}

export default TermosPage


export const Json = graphql`
query termosJson {
  homeJson {
    background{
      top
      topmobile
      bottom
      bottommobile
      symbol
    }
  }
  footerJson{
    footer {
      logo
      logowhite
      socialmedia {
        link
        icon
        alt
      }
      links {
        link
        text
      }
      copyrigths
      copyrightsmobile
    }
  }
}
`