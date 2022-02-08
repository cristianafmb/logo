import React, { useRef } from "react"

import "bootstrap/dist/css/bootstrap.min.css"

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import { graphql } from 'gatsby'

import { parseBlogPosts } from '../utils/helpers'

import Image from '../components/Images'

import NoPosts from "../components/blog/noPosts"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Menu from '../components/menu'
import MenuMobile from '../components/menuMobile'
import HighlightNew from '../components/blog/highlightNew'
import HighlightNewMobile from '../components/blog/highlightNewMobile'
import AllPosts from '../components/blog/allPosts'
import AllPostsMobile from '../components/blog/allPostsMobile'
import Questoes from '../components/questoes'
import QuestoesMobile from '../components/questoesMobile'
import Footer from '../components/footer'
import FooterMobile from '../components/footerMobile'

const BlogPage = ({ data, location }) => {

  const breakpoints = useBreakpoint();

  const posts = parseBlogPosts(data.allMarkdownRemark.edges)

  const marcacaoRef = useRef(null);

  if (!posts || !Boolean(posts.length)) {
    return (
      <NoPosts footerJson={data.footerJson} questoesJson={data.questoesJson} homeJson={data.homeJson} location={location}/>
    )
  }

  return (
    <Layout home>

      <Seo title="Blog" />

      {!breakpoints.mobile ? (

        <>

          <Image src="home/up.png" className="up" alt="up" />

          <div className="no-repeat bg-cover position-relative">

            <Image src={data.homeJson.background.top} alt="bg-top" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

            <Menu footer={data.footerJson.footer} location={location} marcacaoRef={marcacaoRef} />

            <HighlightNew head={posts[0].head} title={posts[0].title} details={posts[0].details} path={posts[0].path} btn="Ler Tudo" image={posts[0].image} />

            <AllPosts posts={posts} />

            <Questoes data={data.questoesJson.questoes} />

          </div>

          <Footer data={data.footerJson.footer} />

        </>
      )
        :
        (
          <>
            <div className="no-repeat position-relative">

              <Image src={data.homeJson.background.topmobile} alt="bg-top-mobile" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

              <MenuMobile footer={data.footerJson.footer} location={location} />

              <HighlightNewMobile head={posts[0].head} title={posts[0].title} details={posts[0].details} path={posts[0].path} btn="Ler Tudo" image={posts[0].image} />

              <AllPostsMobile posts={posts} />

            </ div>

            <div className="no-repeat bg-position-bottom position-relative" >

              <Image src={data.homeJson.background.bottommobile} alt="bg-bottom-mobile" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

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