import * as React from "react"
import { graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Menu from '../components/menu'
import MenuMobile from '../components/menuMobile'
import InnerTopsection from '../components/innerTopsection'
import InnerTopsectionMobile from '../components/innerTopsectionMobile'
import CardsSection from '../components/cardsSection'
import CardsSectionMobile from '../components/cardsSectionMobile'
import CorpoClinico from '../components/sobrenos/corpoclinico'
import CorpoClinicoMobile from '../components/sobrenos/corpoclinicoMobile'
import Questoes from '../components/questoes'
import QuestoesMobile from '../components/questoesMobile'
import Footer from '../components/footer'
import FooterMobile from '../components/footerMobile'


const ExamesAnalises = ({ data }) => {

  const breakpoints = useBreakpoint();

  return (
    <Layout home mobile={useBreakpoint().mobile}>
      <SEO title="Exames & Análises" />
      {!breakpoints.mobile ? (
        <>
          <div className="no-repeat heigth-banner center bg-cover" style={{ backgroundImage: `url(${data.examesanalisesJson.banner})` }}>


            <Menu />
          </div>

          <div className="no-repeat bg-position-bottom bg-cover" style={{ backgroundImage: `url(${data.examesanalisesJson.backgroundtop})` }}>

            <InnerTopsection data={data.examesanalisesJson} />

            <CardsSection data={data.examesanalisesJson.cards} />

          </div>

          <div className="no-repeat  bg-cover" style={{ backgroundImage: `url(${data.examesanalisesJson.backgroundfooter})` }}>

            <CorpoClinico data={data.corpoclinicoJson.corpoclinico} />

            <Questoes data={data.questoesJson.questoes} />


          </div>

          <Footer data={data.footerJson.footer} />
        </>
      )
        :
        (
          <>
            <div className="no-repeat" style={{ backgroundImage: `url(${data.examesanalisesJson.backgroundtopmobile})` }}>


              <div className="no-repeat" style={{ backgroundImage: `url(${data.examesanalisesJson.bannermobile})` }}>

                <MenuMobile footer={data.footerJson.footer} />

                <InnerTopsectionMobile data={data.examesanalisesJson} />

              </div>

              <CardsSectionMobile data={data.examesanalisesJson} />

            </div>

            <div className="no-repeat background-bottom" style={{ backgroundImage: `url(${data.examesanalisesJson.backgroundfootermobile})` }}>

              <CorpoClinicoMobile data={data.corpoclinicoJson.corpoclinico} />

              <QuestoesMobile data={data.questoesJson.questoes} />

            </div>

            <FooterMobile footer={data.footerJson.footer} />
          </>
        )
      }

    </Layout>
  )
}

export default ExamesAnalises

export const Json = graphql`
query examesanalises {
    examesanalisesJson {
      banner
      bannermobile
      head
      title
      backgroundtop
      backgroundtopmobile
      backgroundfooter
      backgroundfootermobile
      areas {
        head
        areas {
          area
          link
        }
      }
      cards {
        btntext
        details
        link
        title
      }
      subpages{
        areas{
          area
          link
        }
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
          textmobile
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