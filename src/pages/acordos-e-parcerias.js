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
import Covid from '../components/covid/covid'

import Image from '../components/Images'

import { graphql } from 'gatsby'

const ParceirosPage = ({ data, location }) => {

  const marcacaoRef = useRef(null);
  const breakpoints = useBreakpoint();

  return (
    <Layout home mobile={useBreakpoint().mobile}>
      <Seo title="Covid-19" />
      {!breakpoints.mobile ? (
        <>

          <div className="no-repeat position-relative " >
            <Image src={data.homeJson.background.top} alt="bg-top" objectPosition="0% 60%" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />
            <Menu marcacaoRef={marcacaoRef} location={location} xl={breakpoints.xl} />

            
          </div>

          <div className="no-repeat position-relative " >
            <Image src={data.homeJson.background.bottom} alt="bg-bottom" objectPosition="0% 35%" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />
            <Questoes data={data.questoesJson.questoes} xl={breakpoints.xl} />
          </div>




          <Footer data={data.footerJson.footer} xl={breakpoints.xl} />
        </>
      )
        :
        (
          <>
            <div className="no-repeat position-relative">
              <Image src={data.homeJson.background.topmobile} alt="bg-top-mobile" className="position-absolute z-index-minus-1 max-width bg-cover height-max" />
              <MenuMobile footer={data.footerJson.footer} marcacaoRef={marcacaoRef} />

              

            </ div>

            <div className="no-repeat position-relative mt-5">
              <Image src={data.homeJson.background.bottommobile} alt="bg-bottom-mobile" className="position-absolute z-index-minus-1 max-width bg-cover height-max" />

              <PedidoMarcacaoRapidoMobile img={data.marcacaoJson.img} alt={data.marcacaoJson.alt} space={true} marcacaoRef={marcacaoRef} />

              <QuestoesMobile data={data.questoesJson.questoes} />


            </div>
            <FooterMobile footer={data.footerJson.footer} />
          </>
        )
      }

    </Layout>
  )
}


export default ParceirosPage

export const Json = graphql`
  query parceirosQueryJson {
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