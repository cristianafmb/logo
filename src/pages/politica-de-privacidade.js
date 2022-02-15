import React, { useRef } from "react"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import "bootstrap/dist/css/bootstrap.min.css"

import { graphql } from 'gatsby'

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Menu from '../components/menu'
import MenuMobile from '../components/menuMobile'
import Politica from "../components/politica/politica"
import Footer from '../components/footer'
import FooterMobile from '../components/footerMobile'
import PedidoMarcacaoRapidoMobile from '../components/pedidoMarcacaoRapidoMobile'

import Image from '../components/Images'

const PoliticaPage = ({ data, location }) => {
  const breakpoints = useBreakpoint();

  const marcacaoRef = useRef(null);
  return (
    <Layout home>
      <Seo title="Política de Privacidade" />
      {!breakpoints.mobile ? (
        <>
          <div className="no-repeat position-relative ">
            <Image src="background-politica.png" alt="bg-top" className="position-absolute z-index-minus-1 max-width bg-cover height-max bg-position-bottom" />
            <Menu footer={data.footerJson.footer} location={location} marcacaoRef={marcacaoRef}  xl={true}/>
            <Politica />
          </div>
          <Footer data={data.footerJson.footer}  xl={true}/>
        </>
      )
        :
        (
          <>
            <div className="no-repeat position-relative ">
              <Image src="background-politica.png" alt="bg-top" className="position-absolute z-index-minus-1 max-width bg-cover height-max bg-position-bottom" />
              <MenuMobile footer={data.footerJson.footer} location={location} marcacaoRef={marcacaoRef}/>

              <Politica />
            </div>
            <FooterMobile footer={data.footerJson.footer} />
          </>
        )}
    </Layout>
  )
}

export default PoliticaPage


export const Json = graphql`
query politicaJson {
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