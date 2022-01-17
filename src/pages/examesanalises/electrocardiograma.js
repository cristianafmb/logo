import * as React from "react"
import { graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import Menu from '../../components/menu'
import SubPage from '../../components/especialidades/subPage'
import Especialidades from '../../components/homepage/especialidades'
import Questoes from '../../components/questoes'
import Footer from '../../components/footer'

import background from '../../images/especialidades/background.svg'

const Electrocardiograma = ({ data }) => (
  <Layout home mobile={useBreakpoint().mobile}>
    <div className="no-repeat heigth-banner center" style={{ backgroundImage: `url(${data.examesanalisesJson.banner})` }}>
      <SEO title="Especialidades" />

      <Menu />
    </div>

    <div className="no-repeat bg-position-bottom" style={{ backgroundImage: `url(${background})` }}>

      <SubPage data={data.examesanalisesJson} subpage={data.examesanalisesJson.subpages.electrocardiograma} page="examesanalises" form={data.marcacaoJson} />
      <Especialidades especialidades={data.homeJson.especialidades}  />   

      <Questoes data={data.questoesJson.questoes} />


    </div>

    <Footer data={data.footerJson.footer} />

  </Layout>
)

export default Electrocardiograma

export const Json = graphql`
query electrocardiograma {
  examesanalisesJson {
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
      
      subpages {
        electrocardiograma {
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
      }
      invisalign{
        img
        alt
        head
        details
        button
        href
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
      } 
      background{
        top
        bottom
        symbol
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