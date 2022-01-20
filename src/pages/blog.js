import React, { useState } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import { Link, graphql } from 'gatsby'

import { parseBlogPosts } from '../utils/helpers'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Menu from '../components/menu'
import MenuMobile from '../components/menuMobile'
import Questoes from '../components/questoes'
import QuestoesMobile from '../components/questoesMobile'
import Footer from '../components/footer'
import FooterMobile from '../components/footerMobile'
import top from '../images/background1.svg'
import up from '../images/home/up.svg'

import { Button, Row, Col } from 'react-bootstrap'

const BlogPage = ({ data }) => {

  const breakpoints = useBreakpoint();

  const [postsNumber, setPostsNumber] = useState(3)

  const posts = parseBlogPosts(data.allMarkdownRemark.edges)

  if (!posts || !Boolean(posts.length)) {
    return (
      <Layout>
        <SEO title="Blog" />
        <div>
          Errooo
        </div>
      </Layout>
    )
  }

  const seeMorePosts = () => setPostsNumber(postsNumber + 3)

  const visiblePosts = posts.slice(1, postsNumber)

  return (
    <Layout home >
      <SEO title="Blog" />
      {!breakpoints.mobile ? (
        <>
          <img src={up} className="up" />

          <div className="no-repeat bg-cover" style={{ backgroundImage: `url(${top})` }}>

            <Menu footer={data.footerJson.footer} />

            {/* HIGHLIGHT NEW */}
            <div className="section-intro-home mt-5 mb-5">
              <Row>
                <Col sm="12" md="4" lg="4" >

                  <div className="position-relative width-90">
                    <div className="mt-5 mb-2 ">
                      <p className="head-x-small oBold">{posts[0].head}</p>
                    </div>
                    <div>
                      <p className="title-large pExtraBold">{posts[0].title}</p>
                    </div>
                    <div className="mt-4 mb-2">
                      <p className="details-small oRegular">{posts[0].details}</p>
                    </div>
                    <div>
                      <Link to={posts[0].path}>
                        <Button variant="warning" size="sm" className="button-intro-home-saber-mais oMedium">Ler Tudo</Button>
                      </Link>
                    </div>
                  </div>

                </Col>

                <Col sm="12" md="8" lg="8">

                  <img src={posts[0].image} alt={posts[0].title} className="banner-intro-home max-width" />

                </Col>

              </Row>

            </div>

            {/* END - HIGHLIGHT NEW */}

            {/* ALL POSTS*/}
            <div className="mt-10">
              {visiblePosts.map((p, i) => (
                <a href={p.path} key={p.path}>

                  <div className="mt-5">
                    <div className="d-flex section-intro-home">
                      <div>
                        <img src={p.image} alt={p.title} className="img-blog" />
                      </div>
                      <div className="blog-right-text">
                        <div className="mt-5 mb-2 ">
                          <p className="head-x-small oBold">{p.head}</p>
                        </div>
                        <div>
                          <p className="title-large pExtraBold">{p.title}</p>
                        </div>
                        <div className="mt-4 mb-2">
                          <p className="details-small oRegular">{p.details}</p>
                        </div>
                        <Link to={p.path} className="calCell bottom-0 text-decoration-none">
                          <svg className="svg">
                            <defs>
                              <marker id="m" markerWidth="4" markerHeight="8"
                                refX="0" refY="1" viewBox="0 0 1 2">
                                <polygon points="0,0 1,1 0,2" fill="#8c6f2a" />
                              </marker>
                            </defs>
                            <line x1="0" y1="50%" x2="90%" y2="50%"
                              strokeWidth="1" markerEnd="url(#m)" stroke="#8c6f2a" />
                          </svg>
                          <p className="hover-to-show oOblique mt-5 details-small">ler</p>
                        </Link>
                      </div>
                      {console.log("i-" + i + " lenght-" + visiblePosts.length)}

                    </div>
                    {i !== (visiblePosts.length - 1) ? (
                      <div className="section-intro-home mt-5 mb-3">

                        <hr className="gold" style={{ height: "2px" }} />

                      </div>
                    ) : (<></>)}
                  </div>
                </a>
              ))}

              {posts.length > postsNumber && (
                <div className="max-width m-auto center">
                  <Button
                    onClick={() => seeMorePosts()}
                    className="btn-more-posts mt-10 details-x-small"
                  >Ver mais notícias
                  </Button>
                </div>
              )}

            </div>

            {/* END - ALL POSTS*/}

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

            </ div>

            <div className="no-repeat bg-position-bottom" style={{ backgroundImage: `url(${data.homeJson.background.bottommobile})` }}>

              <QuestoesMobile data={data.questoesJson.questoes} />

            </ div>

            <FooterMobile footer={data.footerJson.footer} />
          </>
        )}

    </Layout >

  )
}

export default BlogPage

export const Json = graphql`
query BlogPage {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          data
          date
          id
          image
          path
          head
          details
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