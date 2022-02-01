import React, { useRef } from "react"

import "bootstrap/dist/css/bootstrap.min.css"

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Menu from '../components/menu'
import MenuMobile from '../components/menuMobile'
import Questoes from '../components/questoes'
import QuestoesMobile from '../components/questoesMobile'
import Footer from '../components/footer'
import FooterMobile from '../components/footerMobile'

import { Row, Col } from 'react-bootstrap';

import Image from '../components/Images'

import { graphql } from 'gatsby'

const NotFoundPage = ({ data, location }) => {

  const marcacaoRef = useRef(null);

  const breakpoints = useBreakpoint();

  return (
    <Layout home mobile={useBreakpoint().mobile}>
      <Seo title="Página não encontrada" />
      {!breakpoints.mobile ? (
        <>
          <div className="no-repeat bg-position-bottom" style={{ backgroundImage: `url(${data.homeJson.background.top})` }}>

            <Menu location={location} marcacaoRef={marcacaoRef} />

            <Row className="mt-10 max-width ">
              <Col className="right">
                <div className="padding-5-3 right">
                  <div>
                    <span className=" title-x-large">404</span>
                  </div>
                  <div className="mt-4 right m-auto">
                    <span className=" details-large ">
                      Página não encontrada
                    </span>
                  </div>
                </div>
              </Col>
              <Col className="left">
                <Image src="404/image5.png" alt="404" width="200" className="not-found m-auto"/>
              </Col>
            </Row>

            <Questoes data={data.questoesJson.questoes} />

          </div>
          
          <Footer data={data.footerJson.footer} />
        </>
      )
        :
        (
          <>
            <div className="no-repeat bg-position-bottom" style={{ backgroundImage: `url(${data.homeJson.background.topmobile})` }}>

              <MenuMobile footer={data.footerJson.footer} location={location} />

              <div className="center mt-5">
                <span className=" title-x-large">404</span>
              </div>
              <div className="mt-1 mb-5 center m-auto">
                <span className=" details-large ">
                  Página não encontrada
                </span>
              </div>
              <Image src="404/image5.png" alt="404" width="100" className="not-found m-auto"/>

            </div>

            <div className="no-repeat bg-position-top" style={{ backgroundImage: `url(${data.homeJson.background.bottommobile})` }}>

              <QuestoesMobile data={data.questoesJson.questoes} />

            </ div>

            <FooterMobile footer={data.footerJson.footer} />
          </>
        )
      }

    </Layout>
  )
}


export default NotFoundPage

export const Json = graphql`
  query notfoundJson {
    homeJson {
      background{
        top
        topmobile
        bottom
        bottommobile
        symbol
      }
    }
    marcacaoJson{
      img
      alt
    }
    questoesJson{
      questoes{
      titulo
      texto
      questoes{
        link
        texto
      }
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