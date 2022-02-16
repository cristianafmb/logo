import React, { useRef } from "react"

import "bootstrap/dist/css/bootstrap.min.css"

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Menu from '../components/menu'
import MenuMobile from '../components/menuMobile'
import PedidoMarcacaoRapidoMobile from '../components/pedidoMarcacaoRapidoMobile'
import Questoes from '../components/questoes'
import QuestoesMobile from '../components/questoesMobile'
import Footer from '../components/footer'
import FooterMobile from '../components/footerMobile'
import Blocks from '../components/blog/blocks'

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

          <div className="no-repeat position-relative " >
            <Image src={data.homeJson.background.top} alt="bg-top" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />
            <Menu marcacaoRef={marcacaoRef} location={location} xl={breakpoints.xl}/>

            <Blocks text="Página não encontrada." xl={breakpoints.xl}/>

            <Questoes data={data.questoesJson.questoes} xl={breakpoints.xl}/>

          </div>

          <Footer data={data.footerJson.footer} xl={breakpoints.xl}/>
        </>
      )
        :
        (
          <>
            <div className="no-repeat position-relative">
              <Image src={data.homeJson.background.topmobile} alt="bg-top-mobile" className="position-absolute z-index-minus-1 max-width bg-cover height-max" />
              <MenuMobile footer={data.footerJson.footer}  marcacaoRef={marcacaoRef}/>

              <Blocks text="Página não encontrada." />

              <PedidoMarcacaoRapidoMobile img={data.marcacaoJson.img} alt={data.marcacaoJson.alt} space={true} marcacaoRef={marcacaoRef}/>
              
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