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

const Podologia = ({ data }) => (
  <Layout home mobile={useBreakpoint().mobile}>
    <div className="no-repeat heigth-banner center" style={{ backgroundImage: `url(${data.especialidadesJson.banner})` }}>
      <SEO title="Especialidades" />

      <Menu />
    </div>

    <div className="no-repeat bg-position-bottom" style={{ backgroundImage: `url(${data.especialidadesJson.backgroundtop})` }}>

      <SubPage data={data.especialidadesJson} subpage={data.especialidadesJson.subpages.podologia} page="especialidades" form={data.marcacaoJson} />

    </div>


    <div className="no-repeat " style={{ backgroundImage: `url(${data.especialidadesJson.backgroundfooter})` }}>

   

      <Questoes data={data.questoesJson.questoes} />


    </div>

    <Footer data={data.footerJson.footer} />

  </Layout>
)

export default Podologia

export const Json = graphql`
query podologia {
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
        podologia {
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