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

const MedicinaDentaria = ({ data }) => {

  const breakpoints = useBreakpoint();

  return (
    <Layout home mobile={useBreakpoint().mobile}>
      <SEO title="Medicina Dentária" />
      {!breakpoints.mobile ? (
        <>
          <div className="no-repeat heigth-banner center bg-cover" style={{ backgroundImage: `url(${data.medicinadentariaJson.banner})` }}>

            <Menu />

          </div>

          <div className="no-repeat bg-position-bottom bg-cover" style={{ backgroundImage: `url(${data.medicinadentariaJson.backgroundtop})` }}>

            <InnerTopsection data={data.medicinadentariaJson} />

            <CardsSection data={data.medicinadentariaJson.cards} />

          </div>

          <div className="no-repeat bg-cover" style={{ backgroundImage: `url(${data.medicinadentariaJson.backgroundfooter})` }}>

            <CorpoClinico data={data.corpoclinicoJson.corpoclinico} />

            <Questoes data={data.questoesJson.questoes} />

          </div>

          <Footer data={data.footerJson.footer} />

        </>
      )
        :
        (
          <>
            <div className="no-repeat" style={{ backgroundImage: `url(${data.medicinadentariaJson.backgroundtopmobile})` }}>


              <div className="no-repeat heigth-banner" style={{ backgroundImage: `url(${data.medicinadentariaJson.bannermobile})` }}>

                <MenuMobile footer={data.footerJson.footer} />

              </div>

              <InnerTopsectionMobile data={data.medicinadentariaJson} />

              <CardsSectionMobile areas={data.medicinadentariaJson.cards} title="Medicina Dentária" />

            </div>

            <div className="no-repeat background-bottom" style={{ backgroundImage: `url(${data.medicinadentariaJson.backgroundfootermobile})` }}>

              <CorpoClinicoMobile data={data.corpoclinicoJson.corpoclinico} />

              <QuestoesMobile data={data.questoesJson.questoes} />

            </div>

            <FooterMobile footer={data.footerJson.footer} />
          </>
        )}
    </Layout >
  )
}

export default MedicinaDentaria

export const Json = graphql`
query medicinadentaria {
  medicinadentariaJson {
    bannermobile
    banner
    head
    title
    backgroundfooter
    backgroundtop
    backgroundfootermobile
    backgroundtopmobile
    areas {
      areas {
        area
        link
      }
      head
    }
    cards {
      btntext
      details
      title
      link
    }
    subpages {
      areas {
        area
        link
      }
    }
  }
  marcacaoJson {
    img
    alt
  }
  corpoclinicoJson {
    corpoclinico {
      title
      head
      details
      btn {
        link
        text
        textmobile
      }
      people {
        especiality
        img
        name
        occupation
      }
    }
  }
  questoesJson {
    questoes {
      texto
      titulo
      questoes {
        link
        texto
      }
    }
  }
  footerJson {
    footer {
      copyrightsmobile
      copyrigths
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