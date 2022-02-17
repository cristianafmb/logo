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
import PedidoMarcacaoRapido from '../components/pedidoMarcacaoRapido'
import Questoes from '../components/questoes'
import QuestoesMobile from '../components/questoesMobile'

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
            <Image src={data.homeJson.background.top} alt="bg-top" className="position-absolute z-index-minus-1 max-width bg-cover bg-position-bottom" />
            <Menu footer={data.footerJson.footer} location={location} marcacaoRef={marcacaoRef} xl={breakpoints.xl} />
            <Politica />

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

              <Politica />

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