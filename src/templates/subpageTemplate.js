import React, { useRef } from "react"
import { graphql } from 'gatsby'

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Menu from '../components/menu'
import SubPage from '../components/subpage/subPage'
import SubPageMobile from '../components/subpage/subPageMobile'
import Especialidades from '../components/homepage/especialidades'
import Questoes from '../components/questoes'
import Footer from '../components/footer'
import PedidoMarcacaoRapidoMobile from '../components/pedidoMarcacaoRapidoMobile'

import Image from '../components/Images'

const SubPageTemplate = ({ data, pageContext, location }) => {

  const breakpoints = useBreakpoint()

  const marcacaoRef = useRef(null);

  var pathname = location.pathname;
  const pageName = pathname.split("/")[1]

  const areas = pageContext['areas']

  const background = pageContext['backgrounds']
  const subPage = pageContext['subpages']

  
  return (

    <Layout home>
      <Seo title={subPage.title} />
      {!breakpoints.mobile ? (
        <>
          <div className="no-repeat heigth-banner center position-relative">

            <Image src={subPage.img} alt="bg-top" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

            <Menu footer={data.footerJson.footer} location={location} marcacaoRef={marcacaoRef} xl={true}/>

          </div>

          <div className="no-repeat bg-position-bottom position-relative" >

            <Image src={background.backgroundtop} alt="bg-bottom" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

            <SubPage subpage={subPage} page={pageName} areas={areas} location={location} marcacaoRef={marcacaoRef} />

            <Especialidades especialidades={data.homeJson.especialidades} location={location} marcacaoRef={marcacaoRef} xl={true}/>
          </div>

          <div className="no-repeat position-relative ">

            <Image src={data.homeJson.background.bottom} alt="bg-bottom" objectPosition="0% 35%" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

            <Questoes data={data.questoesJson.questoes} xl={true}/>

          </div>

          <Footer data={data.footerJson.footer} xl={true}/>
        </>
      )
        :
        (
          <>
            <SubPageMobile
              bgtop={background.backgroundtopmobile}
              bgbanner={subPage.img}
              areas={areas}
              subpage={subPage}
              home={data.homeJson.especialidades}
              bgbottm={background.backgroundfootermobile}
              questoes={data.questoesJson.questoes}
              footer={data.footerJson.footer}
              location={location}
              marcacaoRef={marcacaoRef}
            />
          </>
        )
      }
    </Layout >
  )
}

export default SubPageTemplate


export const Json = graphql`
  query subpageTemplate {
    homeJson {
      background{
        top
        bottom
        symbol
      }
      especialidades{
        title
      details
      button
      href
      img
      alt
      titlemobile
    }
  }
      marcacaoJson{
        img
      alt
    }
      corpoclinicoJson{
        corpoclinico {
        details
        btn {
        link
          text
        }
        head
        people {
          especiality
          img
          imgMobile
          name
          occupation
        }
        title
      }
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
      footerJson {
        footer {
        copyrigths
        copyrightsmobile
      links {
        link
          text
        }
      logo
      logomobile
      logowhite
      socialmedia {
        alt
          icon
      link
        }
      }
    }
}
      `