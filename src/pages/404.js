import React, { useRef } from "react"

import "bootstrap/dist/css/bootstrap.min.css"

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Menu from '../components/menu'
import MenuMobile from '../components/menuMobile'
import Questoes from '../components/questoes'
import QuestoesMobile from '../components/questoesMobile'
import Footer from '../components/footer'
import FooterMobile from '../components/footerMobile'
import Blocks from '../components/blog/blocks'
import top from '../images/background1.png'

import Image from '../components/Images'

import { graphql } from 'gatsby'

const NotFoundPage = ({ data, location }) => {

  const marcacaoRef = useRef(null);

  const breakpoints = useBreakpoint();

  return (
    <Layout home mobile={useBreakpoint().mobile}>
      <Seo title="Página não encontrada" />
      {!breakpoints.mobile ? (
        <>
          <div className="no-repeat bg-cover" style={{ backgroundImage: `url(${top})` }}>

            <Menu location={location} marcacaoRef={marcacaoRef} />

            <Blocks text="Página não encontrada." />

            <Questoes data={data.questoesJson.questoes} />

          </div>

          <Footer data={data.footerJson.footer} />
        </>
      )
        :
        (
          <>
            <div className="no-repeat " style={{ backgroundImage: `url(${data.homeJson.background.topmobile})` }}>

              <MenuMobile footer={data.footerJson.footer} location={location} />

              <Blocks text="Página não encontrada." />

              <QuestoesMobile data={data.questoesJson.questoes} />

            </ div>

            <FooterMobile footer={data.footerJson.footer} />
          </>
        )
      }

    </Layout>
  )
}


export default NotFoundPage

export const Json = graphql`
  query notfoundJson {
    homeJson {
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