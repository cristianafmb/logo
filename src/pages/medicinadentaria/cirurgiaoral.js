import * as React from "react"
import { graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import Menu from '../../components/menu'
import SubPage from '../../components/especialidades/subPage'
import SubPageMobile from '../../components/especialidades/subPageMobile'
import Especialidades from '../../components/homepage/especialidades'
import Questoes from '../../components/questoes'
import Footer from '../../components/footer'

import background from '../../images/especialidades/background.svg'

const CirurgiaOral = ({ data }) => {

  const breakpoints = useBreakpoint();

  return (
    <Layout home mobile={useBreakpoint().mobile}>

      <SEO title="Especialidades" />
      {!breakpoints.mobile ? (
        <>
          <div className="no-repeat heigth-banner center bg-cover" style={{ backgroundImage: `url(${data.medicinadentariaJson.banner})` }}>

            <Menu />

          </div>

          <div className="no-repeat bg-position-bottom bg-cover" style={{ backgroundImage: `url(${background})` }}>

            <SubPage data={data.medicinadentariaJson} subpage={data.medicinadentariaJson.subpages.cirurgiaoral} page="especialidades" form={data.marcacaoJson} />

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
              bgtop={data.medicinadentariaJson.backgroundtopmobile}
              bgbanner={data.medicinadentariaJson.bannermobile}
              especialidades={data.medicinadentariaJson}
              subpage={data.medicinadentariaJson.subpages.cirurgiaoral}
              page="especialidades"
              form={data.marcacaoJson}
              home={data.homeJson.especialidades}
              bgbottm={data.medicinadentariaJson.backgroundfootermobile}
              questoes={data.questoesJson.questoes}
              footer={data.footerJson.footer}
            />
          </>
        )
      }
    </Layout>
  )
}

export default CirurgiaOral

export const Json = graphql`
query cirurgiaoral {
  homeJson {
    home {
      head
      subject
      details
      img
      alt
    }
    testimony {
      function
      person
      quote
      img
      alt
    }
    sobre_nos {
      details
      subject
      head
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
    invisalign{
      img
      alt
      head
      details
      button
      href
      textoverimg
    }
    noticias{
      title
      synopsis
      date
      img
      alt
    }
    blog{
      title
      head
      details
      btntxtmobile
      btnhref
    } 
    background{
      top
      bottom
      symbol
    }
  }
    medicinadentariaJson {
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
      subpages {
        cirurgiaoral {
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