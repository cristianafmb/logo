import * as React from "react"
import '../sass/app.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql } from 'gatsby'
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import Menu from '../components/menu'

import Questoes from '../components/questoes'
import Footer from '../components/footer'
import Sobrenos from '../components/sobrenos/sobrenos'
import CorpoClinico from '../components/sobrenos/corpoclinico'
import Especialidades from '../components/sobrenos/especialidades'
import Opinioes from '../components/sobrenos/opinioes'

import PedidoMarcacaoRapido from '../components/pedidoMarcacaoRapido'
import top from '../images/sobrenos/backgroundtop.png'
import bottom from '../images/sobrenos/background.svg'
import up from '../images/home/up.svg'

const SobreNos = ({ data }) => (
  <Layout home mobile={useBreakpoint().mobile}>
   
    <div className="background-sobrenos" style={{ backgroundImage: `url(${top})` }}>
      <SEO title="Sobre Nós" />

      <Menu />

      <Sobrenos data={data.sobrenosJson.sobrenos} />
    </ div>
    


    <CorpoClinico data={data.corpoclinicoJson.corpoclinico} />


    <div className="no-repeat background-bottom" style={{ backgroundImage: `url(${bottom})` }}>
      <div className="margin-sections ">
        {data.sobrenosJson.sectionswithbanners.content.map((array, k) => (
          <Especialidades data={array} key={"especialidade" + k} />
        ))}
      </div>
      <img src={up} className="up-sobrenos" />

      <PedidoMarcacaoRapido img={data.marcacaoJson.img} alt={data.marcacaoJson.alt} space={true} />

      <Opinioes data={data.sobrenosJson.opiniao} />

      <Questoes data={data.questoesJson.questoes} />
    </div>


    <Footer data={data.footerJson.footer} />



  </Layout>

)

export default SobreNos


export const Json = graphql`
query SobreNos {
  footerJson {
    footer {
      copyrigths
      links {
        link
        text
      }
      logo
      socialmedia {
        alt
        icon
        link
      }
    }
  }
  questoesJson {
    questoes {
      questoes {
        link
        texto
      }
      texto
      titulo
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
            href
          }
          second {
            title
            href
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
  corpoclinicoJson{
    corpoclinico {
      details
      btn {
        link
        text
      }
      head
      people {
        especiality
        img
        name
        occupation
      }
      title
    }
  }
}

`