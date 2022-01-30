import React, {useRef} from "react"
import { graphql } from 'gatsby'
import "bootstrap/dist/css/bootstrap.min.css"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Menu from '../components/menu'
import MenuMobile from '../components/menuMobile'
import Contacts from '../components/contactos/contacts'
import ContactsMobile from '../components/contactos/contactsMobile'
import Map from '../components/contactos/map'
import PedidoMarcacaoRapido from '../components/pedidoMarcacaoRapido'
import PedidoMarcacaoRapidoMobile from '../components/pedidoMarcacaoRapidoMobile'
import Questoes from '../components/questoes'
import QuestoesMobile from '../components/questoesMobile'
import Footer from '../components/footer'
import FooterMobile from '../components/footerMobile'

const Contactos = ({ data, location }) => {

  const breakpoints = useBreakpoint();

  const marcacaoRef= useRef(null);

  return (
    <Layout home mobile={useBreakpoint().mobile}>

      <SEO title="Contactos" />
      {!breakpoints.mobile ? (
        <>
          <div className="no-repeat  bg-cover" style={{ backgroundImage: `url(${data.contactosJson.backgroundtop})` }}>

            <Menu location={location} marcacaoRef={marcacaoRef}/>

            <Contacts data={data.contactosJson} />

            <Map />

          </div>

          <div className="no-repeat " style={{ backgroundImage: `url(${data.contactosJson.backgroundfooter})` }}>

            <PedidoMarcacaoRapido img={data.marcacaoJson.img} alt={data.marcacaoJson.alt} space={false} marcacaoRef={marcacaoRef}/>

            <Questoes data={data.questoesJson.questoes} />

          </div>

          <Footer data={data.footerJson.footer} />
        </>
      )
        :
        (
          <>
      
            <div className="no-repeat" style={{ backgroundImage: `url(${data.homeJson.background.topmobile})` }}>

              <MenuMobile footer={data.footerJson.footer} location={location}/>

              <ContactsMobile data={data.contactosJson} />

            </ div>

            <div className="no-repeat bg-position-bottom" style={{ backgroundImage: `url(${data.homeJson.background.bottommobile})` }}>

              <PedidoMarcacaoRapidoMobile img={data.marcacaoJson.img} alt={data.marcacaoJson.alt} space={true} />

              <QuestoesMobile data={data.questoesJson.questoes} />

            </ div>

            <FooterMobile footer={data.footerJson.footer} />
          </>
        )}
    </Layout>
  )
}
export default Contactos


export const Json = graphql`
query ContactoJson {
  homeJson {
    background{
      top
      topmobile
      bottom
      bottommobile
      symbol
    }
  }
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