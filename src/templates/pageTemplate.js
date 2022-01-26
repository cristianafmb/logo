import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import { Row, Col, Button } from 'react-bootstrap'

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Menu from '../components/menu'
import SubPage from '../components/especialidades/subPage'
import SubPageMobile from '../components/especialidades/subPageMobile'
import InnerTopsection from '../components/innerTopsection copy'
import InnerTopsectionMobile from '../components/innerTopsectionMobile'
import CardsSection from '../components/cardsSection'
import CardsSectionMobile from '../components/cardsSectionMobile'
import CorpoClinico from '../components/sobrenos/corpoclinico'
import CorpoClinicoMobile from '../components/sobrenos/corpoclinicoMobile'
import Especialidades from '../components/homepage/especialidades'
import Questoes from '../components/questoes'
import Footer from '../components/footer'

import background from '../images/especialidades/background.svg'

const Template = ({ data, pageContext }) => {

  const breakpoints = useBreakpoint()
  const areas = pageContext['areas']
  const backgrounds = pageContext['backgrounds']
  const infosubpage = pageContext['infodetails']
  const cards = pageContext['infosimple']
  const page = pageContext['page']

  var cards2 = null
  if (cards.length > 10) {
    cards2 = cards.slice(10, cards.length)
  }
console.log(cards2 !== null)
  return (

    <Layout home>
      <SEO title={page.title} />
      {!breakpoints.mobile ? (
        <>
          <div className="no-repeat heigth-banner center bg-cover" style={{ backgroundImage: `url(${page.banner})` }}>

            <Menu footer={data.footerJson.footer} />

          </div>

          <div className="no-repeat bg-position-bottom bg-cover" style={{ backgroundImage: `url(${backgrounds.backgroundtop})` }}>

            <InnerTopsection data={data.medicinadentariaJson} areas={areas} page={page} />

            <CardsSection data={cards.slice(0, 10)} />

          </div>

          {cards2 !== null ?
            <CorpoClinico data={data.corpoclinicoJson.corpoclinico} />
            : <></>}

          <div className="no-repeat bg-position-bottom " style={{ backgroundImage: `url(${backgrounds.backgroundfooter})` }}>

            {cards2 === null ?
              <CorpoClinico data={data.corpoclinicoJson.corpoclinico} />
              :  <CardsSection data={cards2} />}

            <Especialidades especialidades={data.homeJson.especialidades} />

            <Questoes data={data.questoesJson.questoes} />

          </div>

          <Footer data={data.footerJson.footer} />
        </>
      )
        :
        (
          <>

          </>
        )
      }
    </Layout>
  )
}

export default Template


export const Json = graphql`
  query pageTemplate {
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