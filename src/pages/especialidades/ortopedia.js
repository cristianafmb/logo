import * as React from "react"
import { graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import Menu from '../../components/menu'
import SubPage from '../../components/especialidades/subPage'
import Questoes from '../../components/questoes'
import Footer from '../../components/footer'

const Ortopedia = ({ data }) => (
  <Layout home mobile={useBreakpoint().mobile}>
    <div className="no-repeat heigth-banner center" style={{ backgroundImage: `url(${data.especialidadesJson.banner})` }}>
      <SEO title="Especialidades" />

      <Menu />
    </div>

    <div className="no-repeat bg-position-bottom" style={{ backgroundImage: `url(${data.especialidadesJson.backgroundtop})` }}>

      <SubPage data={data.especialidadesJson} subpage={data.especialidadesJson.subpages.ortopedia} page="especialidades" form={data.marcacaoJson} />

    </div>


    <div className="no-repeat " style={{ backgroundImage: `url(${data.especialidadesJson.backgroundfooter})` }}>

   

      <Questoes data={data.questoesJson.questoes} />


    </div>

    <Footer data={data.footerJson.footer} />

  </Layout>
)

export default Ortopedia

export const Json = graphql`
query ortopedia {
    especialidadesJson {
      banner
      head
      title
      backgroundtop
      backgroundfooter
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
      subpages {
        ortopedia {
          headlink
          link
          alt
          corpoclinico {
            alt
            img
            name
            occupation
          }
          details
          head
          img
          title
        }
        areas {
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
    footerJson{
      footer {
        logo
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
      }
    }
}
`