import * as React from "react"
import { graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import Menu from '../../components/menu'
import SubPage from '../../components/especialidades/subPage'
import SubPageMobile from '../../components/especialidades/subPageMobile'
import Questoes from '../../components/questoes'
import Footer from '../../components/footer'

const Podologia = ({ data }) => {
  
  const breakpoints = useBreakpoint();
  
  
  return(
  <Layout home mobile={useBreakpoint().mobile}>
    
    <SEO title="Especialidades" />

    {!breakpoints.mobile ? (
        <>
    <div className="no-repeat heigth-banner center" style={{ backgroundImage: `url(${data.especialidadesJson.banner})` }}>
      
      <Menu />

    </div>

    <div className="no-repeat bg-position-bottom bg-cover" style={{ backgroundImage: `url(${data.especialidadesJson.backgroundtop})` }}>

      <SubPage data={data.especialidadesJson} subpage={data.especialidadesJson.subpages.podologia} page="especialidades" form={data.marcacaoJson} />

    </div>

    <div className="no-repeat bg-cover" style={{ backgroundImage: `url(${data.especialidadesJson.backgroundfooter})` }}>

      <Questoes data={data.questoesJson.questoes} />

    </div>

    <Footer data={data.footerJson.footer} />
    </>
      )
        :
        (
          <>
            <SubPageMobile
              bgtop={data.especialidadesJson.backgroundtopmobile}
              bgbanner={data.especialidadesJson.bannermobile}
              especialidades={data.especialidadesJson}
              subpage={data.especialidadesJson.subpages.podologia}
              page="especialidades"
              form={data.marcacaoJson} 
              home={data.homeJson.especialidades}
              bgbottm={data.especialidadesJson.backgroundfootermobile}
              questoes={data.questoesJson.questoes}
              footer={data.footerJson.footer}
            />
          </>
        )
      }
  </Layout>
)}

export default Podologia

export const Json = graphql`
query podologia {
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