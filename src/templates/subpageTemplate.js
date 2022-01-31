import React, {useRef} from "react"
import { graphql, Link } from 'gatsby'
import { Row, Col, Button } from 'react-bootstrap'

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Menu from '../components/menu'
import SubPage from '../components/subpage/subPage'
import SubPageMobile from '../components/subpage/subPageMobile'
import Especialidades from '../components/homepage/especialidades'
import Questoes from '../components/questoes'
import Footer from '../components/footer'


const Template = ({ data, pageContext, location }) => {

  const breakpoints = useBreakpoint()

  const marcacaoRef= useRef(null);

  var pathname = location.pathname;
  const pageName = pathname.split("/")[1]
  const subPageName = pathname.split("/")[2]

  const areas = pageContext['subpages']['simple']

  const allSubPages = pageContext['subpages']['details']

  const background = pageContext['backgrounds']
  console.log(background)
  var subPage

  allSubPages.map((value) => {
    if (value['alt'] === subPageName) {
      subPage = { ...value }
    }
  })
  
  const banner = "../images" + subPage.headhref

  return (

    <Layout home>
      <SEO title={subPage.title} />
      {!breakpoints.mobile ? (
        <>
          <div className="no-repeat heigth-banner center bg-cover" style={{ backgroundImage: `url(${subPage.img})` }}>

            <Menu footer={data.footerJson.footer} location={location} marcacaoRef={marcacaoRef}/>

          </div>

          <div className="no-repeat bg-position-bottom bg-cover" style={{ backgroundImage: `url(${background.backgroundtop})` }}>

            <SubPage subpage={subPage} page={pageName} areas={areas} location={location} marcacaoRef={marcacaoRef} />

            <Especialidades especialidades={data.homeJson.especialidades} location={location} marcacaoRef={marcacaoRef}/>

            <Questoes data={data.questoesJson.questoes} />

          </div>

          <Footer data={data.footerJson.footer} />
        </>
      )
        :
        (
          <>
            <SubPageMobile
              bgtop={background.backgroundtopmobile}
              bgbanner={banner + "/" + subPage.headhref + ".png"}
              areas={areas}
              subpage={subPage}
              home={data.homeJson.especialidades}
              bgbottm={background.backgroundfootermobile}
              questoes={data.questoesJson.questoes}
              footer={data.footerJson.footer}
              location={location}
            />
          </>
        )
      }
    </Layout>
  )
}

export default Template


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