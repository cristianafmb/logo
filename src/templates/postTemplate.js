import React, { useRef } from "react"
import { graphql, Link } from 'gatsby'
import { Row, Col, Button } from 'react-bootstrap'

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import "bootstrap/dist/css/bootstrap.min.css"

import NoPosts from "../components/blog/noPosts"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Menu from '../components/menu'
import MenuMobile from '../components/menuMobile'
import HighlightNew from '../components/blog/highlightNew'
import HighlightNewMobile from '../components/blog/highlightNewMobile'
import Questoes from '../components/questoes'
import QuestoesMobile from '../components/questoesMobile'
import Footer from '../components/footer'
import FooterMobile from '../components/footerMobile'

import top from '../images/background1.png'

import Image from '../components/Images'


const PostTemplate = ({ data, location }) => {

  const breakpoints = useBreakpoint()
  const frontmatter = data.markdownRemark.frontmatter // data.markdownRemark holds your post data
  const homeJson = data.homeJson
  const questoesJson = data.questoesJson
  const footerJson = data.footerJson

  const marcacaoRef = useRef(null);

  const html = data.markdownRemark.html
  
  if(frontmatter.path === "/noposts/"){
    return (
      <NoPosts footerJson={data.footerJson} questoesJson={data.questoesJson} homeJson={data.homeJson} location={location} />
    )
  }

  return (

    <Layout home>
      <Seo title={frontmatter.title} />
      {!breakpoints.mobile ? (
        <>

          <div className="no-repeat position-relative " >

            <Image src={homeJson.background.top} alt="bg-top" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

            <Menu footer={footerJson.footer} location={location} marcacaoRef={marcacaoRef} post={true}/>

            <div>
              <HighlightNew head={frontmatter.head} title={frontmatter.title} details={frontmatter.details} path={frontmatter.path} btn={false} image={frontmatter.image} />
            </div>

            <div className='section-intro-home'>
              <Row className='max-wdith'>
                <Col sm="12" md="4" lg="4" >

                </Col>

                <Col sm="12" md="6" lg="6" className='width-80'>

                  <div
                    className="details-small oRegular blog-html"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />

                  <div className='mt-4'>
                    <Link to="/blog">
                      <Button variant="warning" size="sm" className="button-intro-home-saber-mais oMedium">Voltar</Button>
                    </Link>
                  </div>

                </Col>

              </Row>
            </div>

          </div>

          <Questoes data={questoesJson.questoes} />

          <Footer data={footerJson.footer} />
        </>
      )
        :
        (
          <>
            <div className="no-repeat bg-position-bottom position-relative" >

              <Image src={homeJson.background.topmobile} alt="bg-top" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

              <MenuMobile footer={footerJson.footer} className="mt-2" location={location} />

              <HighlightNewMobile head={frontmatter.head} title={frontmatter.title} details={frontmatter.details} path={frontmatter.path} btn={false} image={frontmatter.image} />

            </ div>

            <div className="no-repeat bg-position-bottom position-relative" >

              <Image src={homeJson.background.bottommobile} alt="bg-top" className="position-absolute z-index-minus-1 max-width bg-cover  bottom-0" />

              <div
                className="details-small oRegular blog-html section-intro-home"
                dangerouslySetInnerHTML={{ __html: html }}
              />

              <div className='mt-4 section-intro-home center'>
                <Link to="/blog">
                  <Button variant="warning" size="sm" className="button-intro-home-saber-mais oMedium">Voltar</Button>
                </Link>
              </div>



              <QuestoesMobile data={questoesJson.questoes} />

            </ div>

            <FooterMobile footer={footerJson.footer} />
          </>
        )}
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  
  query ($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
      data
      id
      image
      path
      head
      details
      title
      }
    }
      homeJson {
        background{
        top
        topmobile
      bottom
      bottommobile
      symbol
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
