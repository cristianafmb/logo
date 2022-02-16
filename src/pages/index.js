import React, { useRef } from "react"

import "bootstrap/dist/css/bootstrap.min.css"

import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { parseBlogPosts } from '../utils/helpers'

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
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

import { graphql } from 'gatsby'

import Image from '../components/Images'



const IndexPage = ({ data, location }) => {

  const breakpoints = useBreakpoint();
  const posts = parseBlogPosts(data.allMarkdownRemark.edges)
  const marcacaoRef = useRef(null);
  return (
    <Layout home mobile={useBreakpoint().mobile} >
      <Seo title="Home" />
      {!breakpoints.mobile ? (
        <>
          <Image src="home/up.png" className="up" alt="up" />

          <div className="no-repeat position-relative ">
            <Image src={data.homeJson.background.top} alt="bg-top" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />
            <Menu footer={data.footerJson.footer} location={location} marcacaoRef={marcacaoRef} xl={breakpoints.xl}/>

            <IntroHome data={data.homeJson} btntext={data.homeJson.home.btntext} href={data.homeJson.home.href} xl={breakpoints.xl} />

            <SobreNos testimony={data.homeJson.testimony} sobreNos={data.homeJson.sobre_nos} xl={breakpoints.xl}/>
          </ div>

          <Especialidades especialidades={data.homeJson.especialidades} marcacaoRef={marcacaoRef} xl={breakpoints.xl}/>

          <div className="no-repeat position-relative bg-position-bottom">
            <Image src={data.homeJson.background.bottom} alt="bg-bottom" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />
            {/*<Invisalign data={data.homeJson.invisalign} medium={breakpoints.md} xl={breakpoints.xl}/> */}
            {(!posts || !Boolean(posts.length) || posts[0].path === "/noposts/") ? <> </> :
              <Noticias posts={posts} xl={breakpoints.xl}/>
            }

            <PedidoMarcacaoRapido img={data.marcacaoJson.img} alt={data.marcacaoJson.alt} space={true} marcacaoRef={marcacaoRef} xl={breakpoints.xl}/>

            <Questoes data={data.questoesJson.questoes} xl={breakpoints.xl}/>

          </div>
          <Footer data={data.footerJson.footer} xl={breakpoints.xl}/>
        </>
      )
        :
        (
          <>
            <Image src="home/up.png" className="up" alt="up" />
            <div className="no-repeat position-relative" >

              <Image src={data.homeJson.background.topmobile} alt="bg-top-mobile" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

              <MenuMobile footer={data.footerJson.footer} location={location} marcacaoRef={marcacaoRef} />

              <IntroHomeMobile data={data.homeJson} btntext={data.homeJson.home.btntext} href={data.homeJson.home.href} />

              <SobreNosMobile testimony={data.homeJson.testimony} sobreNos={data.homeJson.sobre_nos} />

            </ div>

            <EspecialidadesMobile especialidades={data.homeJson.especialidades} marcacaoRef={marcacaoRef} />

           {/** <InvisalignMobile data={data.homeJson.invisalign} /> */}

            {(!posts || !Boolean(posts.length) || posts[0].path === "/noposts/") ? <> </> :
              <NoticiasMobile posts={posts} blogIntro={data.homeJson.blog} />
            }


            <div className="no-repeat position-relative bg-position-bottom" >

              <Image src={data.homeJson.background.bottommobile} alt="bg-bottom-mobile"  className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

              <PedidoMarcacaoRapidoMobile img={data.marcacaoJson.img} alt={data.marcacaoJson.alt} space={true} marcacaoRef={marcacaoRef} />

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
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          data
          date
          details
          head
          id
          image
          path
          title
        }
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
      href
      btntext
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
      href
      btntext
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
      imgmobile
      alt
      head
      details
      button
      href
      textoverimg
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
            title
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
      logomobile
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