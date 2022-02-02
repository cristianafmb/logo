import React, { useRef } from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import '../../sass/app.scss';
import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import Menu from '../../components/menu'
import MenuMobile from '../../components/menuMobile'
import Blocks from '../../components/blog/blocks'
import Questoes from '../../components/questoes'
import QuestoesMobile from '../../components/questoesMobile'
import Footer from '../../components/footer'
import FooterMobile from '../../components/footerMobile'
import top from '../../images/background1.png'

import Image from '../Images'

const NoPosts = ({ footerJson, questoesJson, homeJson, location }) => {
  const breakpoints = useBreakpoint();
  const marcacaoRef = useRef(null);
  return (
    <Layout home>

      <Seo title="Blog" />

      {!breakpoints.mobile ? (

        <>

          <div className="no-repeat bg-cover position-relative" >

            <Image src={homeJson.background.top} alt="bg-top" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

            <Menu footer={footerJson.footer} location={location} marcacaoRef={marcacaoRef} />

            <Blocks text="De momento não existem notícias para mostrar." />

            <Questoes data={questoesJson.questoes} />

          </div>

          <Footer data={footerJson.footer} />

        </>
      )
        :
        (
          <>
            <div className="no-repeat position-relative" >

              <Image src={homeJson.background.topmobile} alt="bg-top" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

              <MenuMobile footer={footerJson.footer} location={location} />

              <Blocks text="De momento não existem notícias para mostrar." />

              <QuestoesMobile data={questoesJson.questoes} />

            </ div>

            <FooterMobile footer={footerJson.footer} />
          </>
        )}

    </Layout >

  )
}
export default NoPosts
