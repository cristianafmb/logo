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
import Invisalign from '../components/homepage/invisalign'
import InvisalignMobile from '../components/homepage/InvisalignMobile'
import Noticias from '../components/homepage/noticias'
import NoticiasMobile from '../components/homepage/noticiasMobile'
import PedidoMarcacaoRapido from '../components/pedidoMarcacaoRapido'
import PedidoMarcacaoRapidoMobile from '../components/pedidoMarcacaoRapidoMobile'
import Questoes from '../components/questoes'
import QuestoesMobile from '../components/questoesMobile'
import Footer from '../components/footer'
import FooterMobile from '../components/footerMobile'
import top from '../images/background1.svg'
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
          <div className="no-repeat bg-cover" style={{ backgroundImage: `url(${top})` }}>

            <Menu footer={data.footerJson.footer} />

            <IntroHome data={data.homeJson} />

            <SobreNos testimony={data.homeJson.testimony} sobreNos={data.homeJson.sobre_nos} />
          </ div>

          <Especialidades especialidades={data.homeJson.especialidades} />

          <div className="no-repeat bg-position-bottom  bg-cover" style={{ backgroundImage: `url(${bottom})` }}>

            <Invisalign data={data.homeJson.invisalign} />

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
            <div className="no-repeat" style={{ backgroundImage: `url(${data.homeJson.background.topmobile})` }}>

              <MenuMobile footer={data.footerJson.footer} />

              <IntroHomeMobile data={data.homeJson} />

              <SobreNosMobile testimony={data.homeJson.testimony} sobreNos={data.homeJson.sobre_nos} />

            </ div>

            <EspecialidadesMobile especialidades={data.homeJson.especialidades} />

            <InvisalignMobile data={data.homeJson.invisalign} />

            <NoticiasMobile noticias={data.homeJson.noticias} blog={data.homeJson.blog} />

            <div className="no-repeat bg-position-bottom" style={{ backgroundImage: `url(${data.homeJson.background.bottommobile})` }}>

              <PedidoMarcacaoRapidoMobile img={data.marcacaoJson.img} alt={data.marcacaoJson.alt} space={true} />

              <QuestoesMobile data={data.questoesJson.questoes} />

            </ div>

            <FooterMobile footer={data.footerJson.footer} />
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
      topmobile
      bottom
      bottommobile
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
      logowhite
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
      copyrightsmobile
    }
  }
}
`