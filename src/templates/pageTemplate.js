import React, { useRef } from "react"
import { graphql } from 'gatsby'

import "bootstrap/dist/css/bootstrap.min.css"

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Menu from '../components/menu'
import MenuMobile from '../components/menuMobile'
import InnerTopsection from '../components/innerTopsection'
import InnerTopsectionMobile from '../components/innerTopsectionMobile'
import CardsSection from '../components/cardsSection'
import CardsSectionMobile from '../components/cardsSectionMobile'
import CorpoClinico from '../components/sobrenos/corpoclinico'
import CorpoClinicoMobile from '../components/sobrenos/corpoclinicoMobile'
import Especialidades from '../components/homepage/especialidades'
import Questoes from '../components/questoes'
import QuestoesMobile from '../components/questoesMobile'
import Footer from '../components/footer'
import FooterMobile from '../components/footerMobile'

import Image from '../components/Images'

const Template = ({ data, pageContext, location }) => {

  const breakpoints = useBreakpoint()
  const areas = pageContext['areas']
  const backgrounds = pageContext['backgrounds']
  const cards = pageContext['infosimple']
  const page = pageContext['page']

  const marcacaoRef = useRef(null);

  var cards2 = null
  if (cards.length > 10) {
    cards2 = cards.slice(10, cards.length)
  }

  return (

    <Layout home>
      <Seo title={page.title} />
      {!breakpoints.mobile ? (
        <>
          <div className="no-repeat heigth-banner center position-relative">

            <Image src={page.banner} alt="bg-banner" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

            <Menu footer={data.footerJson.footer} location={location} marcacaoRef={marcacaoRef} />

          </div>

          <div className="no-repeat bg-position-bottom position-relative" >

            <Image src={backgrounds.backgroundtop} alt="bg-top" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

            <InnerTopsection areas={areas} page={page} location={location} />

            <CardsSection data={cards.slice(0, 10)} />

          </div>

          {cards2 !== null ?
            <CorpoClinico data={data.corpoclinicoJson.corpoclinico} />
            : <></>}

          <div className="no-repeat bg-position-bottom position-relative" >

            <Image src={backgrounds.backgroundfooter} alt="bg-bottom" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

            {cards2 === null ?
              <CorpoClinico data={data.corpoclinicoJson.corpoclinico} />
              : <CardsSection data={cards2} />}

            <Especialidades especialidades={data.homeJson.especialidades} location={location} marcacaoRef={marcacaoRef} />

            <Questoes data={data.questoesJson.questoes} />

          </div>

          <Footer data={data.footerJson.footer} />
        </>
      )
        :
        (
          <>
            <div className="no-repeat position-relative" >

              <Image src={backgrounds.backgroundtopmobile} alt="bg-top-mobile" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

              <div className="no-repeat position-relative" >

                <Image src={page.bannermobile} alt="bg-banner-mobile" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

                <MenuMobile footer={data.footerJson.footer} location={location} />

                <InnerTopsectionMobile areas={areas} page={page} location={location} />

              </div>

              <CardsSectionMobile page={page} cards={cards} location={location} />

            </div>

            <div className="no-repeat background-bottom position-relative" >

              <Image src={backgrounds.backgroundfootermobile} alt="bg-bottom-mobile" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

              <CorpoClinicoMobile data={data.corpoclinicoJson.corpoclinico} />

              <QuestoesMobile data={data.questoesJson.questoes} marcacaoRef={marcacaoRef} />

            </div>

            <FooterMobile footer={data.footerJson.footer} />
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