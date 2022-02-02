import React, { useRef } from "react"
import '../sass/app.scss';

import "bootstrap/dist/css/bootstrap.min.css"
import { graphql } from 'gatsby'
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

import Menu from '../components/menu'
import MenuMobile from '../components/menuMobile'
import Sobrenos from '../components/sobrenos/sobrenos'
import SobrenosMobile from '../components/sobrenos/sobrenosMobile'
import CorpoClinico from '../components/sobrenos/corpoclinico'
import CorpoClinicoMobile from '../components/sobrenos/corpoclinicoMobile'
import Especialidades from '../components/sobrenos/especialidades'
import EspecialidadesMobile from '../components/sobrenos/especialidadesMobile'
import Opinioes from '../components/sobrenos/opinioes'
import PedidoMarcacaoRapido from '../components/pedidoMarcacaoRapido'
import PedidoMarcacaoRapidoMobile from '../components/pedidoMarcacaoRapidoMobile'
import Questoes from '../components/questoes'
import QuestoesMobile from '../components/questoesMobile'
import Footer from '../components/footer'
import FooterMobile from '../components/footerMobile'

import Image from '../components/Images'

const SobreNos = ({ data, location }) => {

  const breakpoints = useBreakpoint();

  const marcacaoRef = useRef(null);

  return (
    <Layout home mobile={useBreakpoint().mobile}>
      {!breakpoints.mobile ? (
        <>

          <div className="background-sobrenos position-relative" >
            <Image src={data.sobrenosJson.sobrenos.backgroundtop} alt="bg-top" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />
            <Seo title="Sobre Nós" />

            <Menu location={location} marcacaoRef={marcacaoRef} />

            <Sobrenos data={data.sobrenosJson.sobrenos} />
          </ div>

          <CorpoClinico data={data.corpoclinicoJson.corpoclinico} />

          <div className="no-repeat background-bottom position-relative" >
            <Image src={data.sobrenosJson.sobrenos.backgroundfooter} alt="bg-bottom" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />
            <div className="margin-sections ">
              {data.sobrenosJson.sectionswithbanners.content.map((array, k) => (
                <Especialidades data={array} key={"especialidade" + k} />
              ))}
            </div>
            <Image src="home/up.png" className="up" alt="up" />

            <PedidoMarcacaoRapido img={data.marcacaoJson.img} alt={data.marcacaoJson.alt} space={true} marcacaoRef={marcacaoRef} />

            <Opinioes data={data.sobrenosJson.opiniao} />

            <Questoes data={data.questoesJson.questoes} />
          </div>


          <Footer data={data.footerJson.footer} />

        </>
      )
        :
        (
          <>
            <Image src="home/up.png" className="up" alt="up" />
            <div className="no-repeat bg-cover height-100vh position-relative" >
              <Image src={data.sobrenosJson.sobrenos.backgroundtopmobile} alt="bg-top-mobile" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

              <MenuMobile footer={data.footerJson.footer} location={location} />

              <SobrenosMobile data={data.sobrenosJson.sobrenos} />

            </ div>

            <CorpoClinicoMobile data={data.corpoclinicoJson.corpoclinico} />

            <div className="margin-sections">
              {data.sobrenosJson.sectionswithbanners.content.map((array, k) => (
                <EspecialidadesMobile data={array} key={"especialidadeMobile" + k} />
              ))}
            </div>

            <div className="no-repeat bg-position-bottom position-relative" >
              <Image src={data.sobrenosJson.sobrenos.backgroundfootermobile} alt="bg-bottom-mobile" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

              <PedidoMarcacaoRapidoMobile img={data.marcacaoJson.img} alt={data.marcacaoJson.alt} space={true} />

              <QuestoesMobile data={data.questoesJson.questoes} />

            </div>

            <FooterMobile footer={data.footerJson.footer} />
          </>
        )}

    </Layout>

  )
}

export default SobreNos


export const Json = graphql`
query SobreNos {
  sobrenosJson {
    sobrenos {
      backgroundfootermobile
      backgroundfooter
      backgroundtop
      backgroundtopmobile
      details
      head
      title
    }
    sectionswithbanners {
      content {
        background
        backgroundmobile
        details
        especs {
            href
            title
        }
        img
        title
      }
    }
    opiniao {
      opinioes {
        details
        head
      }
      title
    }
  }
  corpoclinicoJson{
    corpoclinico {
      details
      btn {
        link
        text
        textmobile
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
  marcacaoJson{
    img
    alt
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
  footerJson {
    footer {
      copyrigths
      copyrightsmobile
      links {
        link
        text
      }
      logo
      logowhite
      socialmedia {
        alt
        icon
        link
      }
    }
  }
}

`