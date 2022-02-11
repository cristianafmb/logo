import React, { useRef, useEffect } from "react"
import { graphql } from 'gatsby'

import "bootstrap/dist/css/bootstrap.min.css"

import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Menu from '../components/menu'
import MenuMobile from '../components/menuMobile'
import InnerTopsection from '../components/innerTopsection'
import InnerTopsectionMobile from '../components/innerTopsectionMobile'
import CardsSection from '../components/cardsSection'
import CardsSectionMobile from '../components/cardsSectionMobile'
import CorpoClinico from '../components/sobrenos/corpoclinico'
import CorpoClinicoMobile from '../components/sobrenos/corpoclinicoMobile'
import Especialidades from '../components/homepage/especialidades'
import Questoes from '../components/questoes'
import QuestoesMobile from '../components/questoesMobile'
import Footer from '../components/footer'
import FooterMobile from '../components/footerMobile'

import Image from '../components/Images'

import $ from 'jquery' // important: case sensitive.
const PageTemplate = ({ data, pageContext, location }) => {

  const breakpoints = useBreakpoint()
  const areas = pageContext['areas']
  const backgrounds = pageContext['backgrounds']
  var cards = pageContext['infosimple']
  const page = pageContext['page']

  const marcacaoRef = useRef(null);


  var cards2 = null
  if (cards.length > 10) {
    cards2 = cards.slice(10, cards.length)
  }
  const people = data.corpoclinicoJson.corpoclinico.people

  var number_per_cols, first_col, second_col, third_col, fourth_col, currentFirst, currentSecond, currentThird, currentFourth,
  timer_first, timer_second, timer_third, timer_fourth, class_first_top, class_second_top, class_third_top, class_fourth_top

  currentFirst = currentSecond = currentThird = currentFourth = 0

  timer_first = timer_second = timer_third = timer_fourth = class_first_top = class_second_top = class_third_top = class_fourth_top = null
 

  if (!breakpoints.mobile) {
    number_per_cols = Math.floor(people.length / 3);

    first_col = people.slice(0, number_per_cols)
    second_col = people.slice(number_per_cols, number_per_cols * 2)
    third_col = people.slice(number_per_cols * 2, people.length)

    timer_first = 5000
    timer_second = 9000
    timer_third = 6000

    class_first_top = "top"
    class_second_top = "top-second"
    class_third_top = "top-third"

  }
  else {
    number_per_cols = Math.floor(people.length / 4);
    var i = 0;

    first_col = people.slice(0, i + number_per_cols)
    i = i + number_per_cols
    second_col = people.slice(i, i + number_per_cols)
    i = i + number_per_cols
    third_col = people.slice(i, i + number_per_cols)
    i = i + number_per_cols
    fourth_col = people.slice(i, i + number_per_cols)

    timer_first = 5000
    timer_second = 7000
    timer_third = 9000
    timer_fourth = 6000

    class_first_top = "top-first-mobile"
    class_second_top = "top-second-mobile"
    class_third_top = "top-third-mobile"
    class_fourth_top = "top-fourth-mobile"
  }
  useEffect(() => {

    $('#first0').addClass(class_first_top)
    $('#nameFirst0').addClass(class_first_top)
    $('#occupationFirst0').addClass(class_first_top)
    $('#especialityFirst0').addClass(class_first_top)

    $('#second0').addClass(class_second_top)
    $('#nameSecond0').addClass(class_second_top)
    $('#occupationSecond0').addClass(class_second_top)
    $('#especialitySecond0').addClass(class_second_top)

    $('#third0').addClass(class_third_top)
    $('#nameThird0').addClass(class_third_top)
    $('#occupationThird0').addClass(class_third_top)
    $('#especialityThird0').addClass(class_third_top)

    if (class_fourth_top !== null) {
      $('#fourth0').addClass(class_fourth_top)
      $('#nameFourth0').addClass(class_fourth_top)
      $('#occupationFourth0').addClass(class_fourth_top)
      $('#especialityFourth0').addClass(class_fourth_top)

      setTimeout(nextBackgroundFourth, timer_fourth);
    }

    setTimeout(nextBackgroundFirst, timer_first);
    setTimeout(nextBackgroundSecond, timer_second);
    setTimeout(nextBackgroundThird, timer_third);

    function nextBackgroundFirst() {
      $('#first' + currentFirst).removeClass(class_first_top)
      $('#nameFirst' + currentFirst).removeClass(class_first_top)
      $('#occupationFirst' + currentFirst).removeClass(class_first_top)
      $('#especialityFirst' + currentFirst).removeClass(class_first_top)
      currentFirst = ++currentFirst % first_col.length
      $('#first' + currentFirst).addClass(class_first_top)
      $('#nameFirst' + currentFirst).addClass(class_first_top)
      $('#occupationFirst' + currentFirst).addClass(class_first_top)
      $('#especialityFirst' + currentFirst).addClass(class_first_top)
      setTimeout(nextBackgroundFirst, timer_first);
    }

    function nextBackgroundSecond() {
      $('#second' + currentSecond).removeClass(class_second_top)
      $('#nameSecond' + currentSecond).removeClass(class_second_top)
      $('#occupationSecond' + currentSecond).removeClass(class_second_top)
      $('#especialitySecond' + currentSecond).removeClass(class_second_top)
      currentSecond = ++currentSecond % second_col.length
      $('#second' + currentSecond).addClass(class_second_top)
      $('#nameSecond' + currentSecond).addClass(class_second_top)
      $('#occupationSecond' + currentSecond).addClass(class_second_top)
      $('#especialitySecond' + currentSecond).addClass(class_second_top)
      setTimeout(nextBackgroundSecond, timer_second);
    }

    function nextBackgroundThird() {
      $('#third' + currentThird).removeClass(class_third_top)
      $('#nameThird' + currentThird).removeClass(class_third_top)
      $('#occupationThird' + currentThird).removeClass(class_third_top)
      $('#especialityThird' + currentThird).removeClass(class_third_top)
      currentThird = ++currentThird % second_col.length
      $('#third' + currentThird).addClass(class_third_top)
      $('#nameThird' + currentThird).addClass(class_third_top)
      $('#occupationThird' + currentThird).addClass(class_third_top)
      $('#especialityThird' + currentThird).addClass(class_third_top)
      setTimeout(nextBackgroundThird, timer_third);
    }

    function nextBackgroundFourth() {
      $('#fourth' + currentFourth).removeClass(class_fourth_top)
      $('#nameFourth' + currentFourth).removeClass(class_fourth_top)
      $('#occupationFourth' + currentFourth).removeClass(class_fourth_top)
      $('#especialityFourth' + currentFourth).removeClass(class_fourth_top)
      currentFourth = ++currentFourth % second_col.length
      $('#fourth' + currentFourth).addClass(class_fourth_top)
      $('#nameFourth' + currentFourth).addClass(class_fourth_top)
      $('#occupationFourth' + currentFourth).addClass(class_fourth_top)
      $('#especialityFourth' + currentFourth).addClass(class_fourth_top)
      setTimeout(nextBackgroundFourth, timer_fourth);
    }
  })
  return (

    <Layout home>
      <Seo title={page.title} />
      {!breakpoints.mobile ? (
        <>
          <div className="no-repeat heigth-banner center position-relative">

            <Image src={page.banner} alt="bg-banner" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

            <Menu footer={data.footerJson.footer} location={location} marcacaoRef={marcacaoRef} />

          </div>

          <div className="no-repeat bg-position-bottom position-relative" >

            <Image src={backgrounds.backgroundtop} alt="bg-top" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

            <InnerTopsection areas={areas} page={page} location={location} />

            <CardsSection data={cards.slice(0, 10)} />

          </div>

          {cards2 !== null ?
            <CorpoClinico data={data.corpoclinicoJson.corpoclinico} marcacaoRef={marcacaoRef} first_col={first_col} second_col={second_col} third_col={third_col} />
            : <></>}

          <div className="no-repeat bg-position-bottom position-relative" >

            <Image src={backgrounds.backgroundfooter} alt="bg-bottom" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

            {cards2 === null ?
              <CorpoClinico data={data.corpoclinicoJson.corpoclinico} marcacaoRef={marcacaoRef} first_col={first_col} second_col={second_col} third_col={third_col} />
              : <CardsSection data={cards2} />}

            <Especialidades especialidades={data.homeJson.especialidades} location={location} marcacaoRef={marcacaoRef} />

            <Questoes data={data.questoesJson.questoes} />

          </div>

          <Footer data={data.footerJson.footer} />
        </>
      )
        :
        (
          <>
            <div className="no-repeat position-relative" >

              <Image src={backgrounds.backgroundtopmobile} alt="bg-top-mobile" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

              <div className="no-repeat position-relative" >

                <Image src={page.bannermobile} alt="bg-banner-mobile" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

                <MenuMobile footer={data.footerJson.footer} location={location} />

                <InnerTopsectionMobile areas={areas} page={page} location={location} />

              </div>

              <CardsSectionMobile page={page} cards={cards} location={location} />

            </div>

            <div className="no-repeat background-bottom position-relative" >

              <Image src={backgrounds.backgroundfootermobile} alt="bg-bottom-mobile" className="position-absolute z-index-minus-1 max-width bg-cover  height-max" />

              <CorpoClinicoMobile data={data.corpoclinicoJson.corpoclinico} first_col={first_col} second_col={second_col} third_col={third_col} fourth_col={fourth_col} />

              <QuestoesMobile data={data.questoesJson.questoes} marcacaoRef={marcacaoRef} />

            </div>

            <FooterMobile footer={data.footerJson.footer} />
          </>
        )
      }
    </Layout>
  )
}

export default PageTemplate


export const Json = graphql`
  query pageTemplate {
    homeJson {
      background{
        top
        bottom
        symbol
      }
      especialidades{
        title
      details
      button
      href
      img
      alt
      titlemobile
    }
  }
      marcacaoJson{
        img
      alt
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