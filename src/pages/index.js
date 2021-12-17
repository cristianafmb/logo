import * as React from "react"
import '../../gatsby-browser'

import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from '../components/menu'
import IntroHome from '../components/introHome'
import SobreNos from '../components/sobreNosHome'
import Especialidades from '../components/especialidades'
import Invisalgin from '../components/invisalgin'
import Noticias from '../components/noticias'
import PedidoMarcacaoRapido from '../components/pedidoMarcacaoRapido'

import { graphql } from 'gatsby'

const IndexPage = ({ data }) => (
  <div>
    <Menu />

    <IntroHome data={data.homeJson} />
   
    <SobreNos testimony={data.homeJson.testimony} sobreNos={data.homeJson.sobre_nos} />

    <Especialidades especialidades={data.homeJson.especialidades} />

    <Invisalgin data={data.homeJson.invisalign}/>

    <Noticias noticias={data.homeJson.noticias} blog={data.homeJson.blog}/>

    <PedidoMarcacaoRapido img={data.homeJson.marcacao_rapida}/>
   
  </div>

)

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
    marcacao_rapida{
      img
      alt
    }
  }
}
`