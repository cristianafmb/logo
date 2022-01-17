import * as React from "react"
import { graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Menu from '../components/menu'
import Contacts from '../components/contactos/contacts'
import Map from '../components/contactos/map'
import PedidoMarcacaoRapido from '../components/pedidoMarcacaoRapido'
import Questoes from '../components/questoes'
import Footer from '../components/footer'

const Contactos = ({ data }) => (
    <Layout home mobile={useBreakpoint().mobile}>
        <div className="no-repeat  center" style={{ backgroundImage: `url(${data.contactosJson.backgroundtop})` }}>
            <SEO  title="Contactos" />
          

            <Menu />

            <Contacts data={data.contactosJson}/>

            <Map/>

        </div>


        <div className="no-repeat " style={{ backgroundImage: `url(${data.contactosJson.backgroundfooter})` }}>

            <PedidoMarcacaoRapido img={data.marcacaoJson.img}  alt={data.marcacaoJson.alt} space={false}/>

            <Questoes data={data.questoesJson.questoes} />


        </div>

        <Footer data={data.footerJson.footer} />

    </Layout>
)

export default Contactos


export const Json = graphql`
query ContactoJson {
  contactosJson {
    backgroundtop
    backgroundfooter
    contactos {
        M
        Mlink
        T
        Tlink
        title
      }
      email {
        email
        title
      }
      horario {
        sabado
        semana
        title
      }
      morada {
        cpostal
        rua
        title
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
    }
  }
}
`