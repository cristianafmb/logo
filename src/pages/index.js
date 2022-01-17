import * as React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Menu from '../components/menu'
import MenuMobile from '../components/menuMobile'
import IntroHome from '../components/homepage/introHome'
import IntroHomeMobile from '../components/homepage/introHomeMobile'
import SobreNos from '../components/homepage/sobreNosHome'
import SobreNosMobile from '../components/homepage/sobreNosHomeMobile'
import Especialidades from '../components/homepage/especialidades'
import EspecialidadesMobile from '../components/homepage/especialidadesMobile'
import Invisalgin from '../components/homepage/invisalgin'
import Noticias from '../components/homepage/noticias'
import PedidoMarcacaoRapido from '../components/pedidoMarcacaoRapido'
import Questoes from '../components/questoes'
import Footer from '../components/footer'
import top from '../images/background2.svg'
import bottom from '../images/bottom.svg'
import up from '../images/home/up.svg'

import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {

  const breakpoints = useBreakpoint();

  return (
    <Layout home mobile={useBreakpoint().mobile} >
      <SEO title="Home" />
      {!breakpoints.mobile ? (
        <>
          <img src={up} className="up" />
          <div className="no-repeat" style={{ backgroundImage: `url(${top})` }}>

            <Menu footer={data.footerJson.footer} />

            <IntroHome data={data.homeJson} />

            <SobreNos testimony={data.homeJson.testimony} sobreNos={data.homeJson.sobre_nos} />
          </ div>

          <Especialidades especialidades={data.homeJson.especialidades} />

          <div className="no-repeat bg-position-bottom " style={{ backgroundImage: `url(${bottom})` }}>

            <Invisalgin data={data.homeJson.invisalign} />

            <Noticias noticias={data.homeJson.noticias} blog={data.homeJson.blog} />

            <PedidoMarcacaoRapido img={data.marcacaoJson.img} alt={data.marcacaoJson.alt} space={true} />

            <Questoes data={data.questoesJson.questoes} />

          </div>
          <Footer data={data.footerJson.footer} />
        </>
      )
        :
        (
          <>
            <img src={up} className="up" />
            <div className="no-repeat" style={{ backgroundImage: `url(${top})` }}>

              <MenuMobile footer={data.footerJson.footer} />

              <IntroHomeMobile data={data.homeJson} />

              <SobreNosMobile testimony={data.homeJson.testimony} sobreNos={data.homeJson.sobre_nos} />

              <EspecialidadesMobile especialidades={data.homeJson.especialidades} />
            </ div>
          </>
        )}

    </Layout >

  )
}

export default IndexPage

export const Json = graphql`
query IntroHome {
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
  sobrenosJson {
    opiniao {
      opinioes {
        details
        head
      }
      title
    }
    sectionswithbanners {
      content {
        background
        details
        especs {
          first {
            title
          }
          second {
            title
          }
        }
        img
        title
      }
    }
    sobrenos {
      details
      head
      title
    }
  }
  marcacaoJson{
    img
    alt
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