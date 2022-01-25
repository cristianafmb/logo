import React, { useState } from "react";
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
import top from '../../images/background1.svg'
import up from '../../images/home/up.svg'

const NoPosts = ({ footerJson, questoesJson, homeJson }) => {
  const breakpoints = useBreakpoint();

  return (
    <Layout home>

      <SEO title="Blog" />

      {!breakpoints.mobile ? (

        <>

          <div className="no-repeat bg-cover" style={{ backgroundImage: `url(${top})` }}>

            <Menu footer={footerJson.footer} />

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

              <MenuMobile footer={footerJson.footer} />

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
