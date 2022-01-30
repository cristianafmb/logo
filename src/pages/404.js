import * as React from "react"

import "bootstrap/dist/css/bootstrap.min.css"

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Menu from '../components/menu'
import PedidoMarcacaoRapido from '../components/pedidoMarcacaoRapido'
import Questoes from '../components/questoes'
import Footer from '../components/footer'
import top from '../images/background1.png'

import lost from "../images/404/image5.png"
import { Row, Col } from 'react-bootstrap';

import { graphql } from 'gatsby'

const NotFoundPage = ({ data, location }) => (
  <Layout home mobile={useBreakpoint().mobile}>
    <div className="no-repeat" style={{ backgroundImage: `url(${top})` }}>
      <SEO title="404: Not found" />
      <Menu  location={location}/>

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
          <img src={lost} alt="404" width="200" />
        </Col>
      </Row>

      <PedidoMarcacaoRapido img={data.marcacaoJson.img} alt={data.marcacaoJson.alt} space={true}  />
      <Questoes data={data.questoesJson.questoes} />

    </div>
    <Footer data={data.footerJson.footer} />
  </Layout>

)

export default NotFoundPage

export const Json = graphql`
query notfoundJson {
  
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
    }
  }
}
`