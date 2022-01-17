import React from "react"
import { graphql } from "gatsby"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Navbar from "../components/menu"
import Politica from "../components/politica/politica"

const PoliticaPage = ({data}) => (
  <Layout>
    <SEO title="Política de Privacidade | Carreira Dental Clinic" />
    {useBreakpoint().mobile ? 
      <>
        <Politica/>
       
      </>
      :
      <>
        <Navbar/>
        <Politica/>
      </>
    }
  </Layout>
)

export default PoliticaPage
