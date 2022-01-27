import React from "react"
import { graphql } from "gatsby"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Navbar from "../components/menu"
import Politica from "../components/politica/politica"

const PoliticaPage = ({location }) => (
  <Layout>
    <SEO title="Política de Privacidade | Carreira Dental Clinic" />
    {useBreakpoint().mobile ? 
      <>
        <Politica/>
       
      </>
      :
      <>
        <Navbar  location={location}/>
        <Politica/>
      </>
    }
  </Layout>
)

export default PoliticaPage
