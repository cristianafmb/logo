import React, { useRef } from "react"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import "bootstrap/dist/css/bootstrap.min.css"

import { graphql } from 'gatsby'

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Menu from '../components/menu'
import MenuMobile from '../components/menuMobile'
import Termos from "../components/termos-e-condicoes/termos-e-condicoes"

import PedidoMarcacaoRapidoMobile from '../components/pedidoMarcacaoRapidoMobile'
import PedidoMarcacaoRapido from '../components/pedidoMarcacaoRapido'
import Questoes from '../components/questoes'
import QuestoesMobile from '../components/questoesMobile'
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
            <Image src={data.homeJson.background.top} alt="bg-top" className="position-absolute z-index-minus-1 max-width bg-cover bg-position-bottom" />
            <Menu footer={data.footerJson.footer} location={location} marcacaoRef={marcacaoRef} xl={breakpoints.xl} />
            <Termos />
          </div>
          <div className="no-repeat position-relative bg-position-bottom">
            <Image src={data.homeJson.background.bottom} alt="bg-bottom" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

            <PedidoMarcacaoRapido img={data.marcacaoJson.img} alt={data.marcacaoJson.alt} space={true} marcacaoRef={marcacaoRef} xl={breakpoints.xl} />

            <Questoes data={data.questoesJson.questoes} xl={breakpoints.xl} />
          </div>
          <Footer data={data.footerJson.footer} xl={breakpoints.xl} />
        </>
      )
        :
        (
          <>
            <div className="no-repeat position-relative ">
              <Image src={data.homeJson.background.topmobile} alt="bg-top" className="position-absolute z-index-minus-1 max-width bg-cover bg-position-bottom" />
              <MenuMobile footer={data.footerJson.footer} location={location} marcacaoRef={marcacaoRef} />

              <Termos />
            </div>
            <div className="no-repeat position-relative bg-position-bottom" >

              <Image src={data.homeJson.background.bottommobile} alt="bg-bottom-mobile" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

              <PedidoMarcacaoRapidoMobile img={data.marcacaoJson.img} alt={data.marcacaoJson.alt} space={true} marcacaoRef={marcacaoRef} />

              <QuestoesMobile data={data.questoesJson.questoes} />
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
      logomobile
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