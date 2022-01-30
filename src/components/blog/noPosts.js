import React, {useRef} from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import '../../sass/app.scss';
import { Row, Col, Button } from 'react-bootstrap'
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import Menu from '../../components/menu'
import MenuMobile from '../../components/menuMobile'
import Blocks from '../../components/blog/blocks'
import Questoes from '../../components/questoes'
import QuestoesMobile from '../../components/questoesMobile'
import Footer from '../../components/footer'
import FooterMobile from '../../components/footerMobile'
import top from '../../images/background1.png'
import up from '../../images/home/up.png'

const NoPosts = ({ footerJson, questoesJson, homeJson, location }) => {
  const breakpoints = useBreakpoint();
  const marcacaoRef= useRef(null);
  return (
    <Layout home>

      <SEO title="Blog" />

      {!breakpoints.mobile ? (

        <>

          <div className="no-repeat bg-cover" style={{ backgroundImage: `url(${top})` }}>

            <Menu footer={footerJson.footer}  location={location} marcacaoRef={marcacaoRef}/>

            <Blocks />

            <Questoes data={questoesJson.questoes} />

          </div>

          <Footer data={footerJson.footer} />

        </>
      )
        :
        (
          <>
            <div className="no-repeat" style={{ backgroundImage: `url(${homeJson.background.topmobile})` }}>

              <MenuMobile footer={footerJson.footer}  location={location}/>

              <Blocks />

              <QuestoesMobile data={questoesJson.questoes} />

            </ div>

            <FooterMobile footer={footerJson.footer} />
          </>
        )}

    </Layout >

  )
}
export default NoPosts
