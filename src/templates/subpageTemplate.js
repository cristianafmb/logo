import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import { Row, Col, Button } from 'react-bootstrap'

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Menu from '../components/menu'
import SubPage from '../components/especialidades/subPage'
import SubPageMobile from '../components/especialidades/subPageMobile'
import Especialidades from '../components/homepage/especialidades'
import Questoes from '../components/questoes'
import Footer from '../components/footer'

import background from '../images/especialidades/background.svg'

const Template = ({ data, pageContext }) => {

  const breakpoints = useBreakpoint()
  const url = ""
  if (typeof window === 'undefined') {
    url = window.location.pathname
  }
  const pageName = url.split("/")[1]
  const subPageName = url.split("/")[2]

  const areas = pageContext['subpages']['simple']

  const allSubPages = pageContext['subpages']['details']

  const background = pageContext['backgrounds']

  var subPage

  allSubPages.map((value) => {
    if (value['alt'] === subPageName) {
      subPage = { ...value }
    }
  })

  const banner = "../images" + subPage.headlink

  return (

    <Layout home>
      <SEO title={subPage.title} />
      {!breakpoints.mobile ? (
        <>
          <div className="no-repeat heigth-banner center bg-cover" style={{ backgroundImage: `url(${subPage.img})` }}>

            <Menu footer={data.footerJson.footer} />

          </div>

          <div className="no-repeat bg-position-bottom bg-cover" style={{ backgroundImage: `url(${background.backgroundtop})` }}>

            <SubPage subpage={subPage} page={pageName} areas={areas} />

            <Especialidades especialidades={data.homeJson.especialidades} />

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
              bgbanner={banner + "/" + subPage.headlink + ".png"}
              areas={areas}
              subpage={subPage}
              home={data.homeJson.especialidades}
              bgbottm={background.backgroundfootermobile}
              questoes={data.questoesJson.questoes}
              footer={data.footerJson.footer}
            />
          </>
        )
      }
    </Layout>
  )
}

export default Template


export const Json = graphql`
      query cardilogia {
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