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

const Especialidades = ({ data }) => {

  const breakpoints = useBreakpoint();

  return (
    <Layout home mobile={useBreakpoint().mobile}>
      <SEO title="Especialidades" />
      {!breakpoints.mobile ? (
        <>
          <div className="no-repeat heigth-banner center bg-cover" style={{ backgroundImage: `url(${data.especialidadesJson.banner})` }}>
      
            <Menu />

          </div>

          <div className="no-repeat bg-position-bottom bg-cover" style={{ backgroundImage: `url(${data.especialidadesJson.backgroundtop})` }}>

            <InnerTopsection data={data.especialidadesJson} />

            <CardsSection data={data.especialidadesJson.cards} />
          </div>

          <CorpoClinico data={data.corpoclinicoJson.corpoclinico} />

          <div className="no-repeat bg-cover" style={{ backgroundImage: `url(${data.especialidadesJson.backgroundfooter})` }}>

            <CardsSection data={data.especialidadesJson.cardsparttwo} />

            <Questoes data={data.questoesJson.questoes} />

          </div>

          <Footer data={data.footerJson.footer} />

        </>
      )
        :
        (
          <>
          
            <div className="no-repeat" style={{ backgroundImage: `url(${data.especialidadesJson.backgroundtopmobile})` }}>

              <div className="no-repeat" style={{ backgroundImage: `url(${data.especialidadesJson.bannermobile})` }}>

                <MenuMobile footer={data.footerJson.footer} />

              <InnerTopsectionMobile data={data.especialidadesJson} />

              </div>

              <CardsSectionMobile areas={data.especialidadesJson.cards} title="Especialidades" />

            </div>

            <div className="no-repeat background-bottom" style={{ backgroundImage: `url(${data.especialidadesJson.backgroundfootermobile})` }}>

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

export default Especialidades

export const Json = graphql`
query especialidades {
    especialidadesJson {
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
      cardsparttwo {
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