import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import '../../sass/app.scss';
import MenuMobile from '../menuMobile'
import MiniCorpoClinicoMobile from './miniCorpoClinicoMobile'
import CardSectionMobile from '../cardsSectionMobile'
import PedidoMarcacaoMobile from '../pedidoMarcacaoRapidoMobile'
import EspecialidadesMobile from '../homepage/especialidadesMobile'
import Card from '../cardHeadTitleDetails'
import QuestoesMobile from '../questoesMobile'
import FooterMobile from '../footerMobile'

const SubpageMobile = ({ bgtop, bgbanner, especialidades, subpage, page, form, home, bgbottm, questoes, footer }) => {

    return (
        <>

            <div className="no-repeat" style={{ backgroundImage: `url(${bgtop})` }}>

                <div className="no-repeat" style={{ backgroundImage: `url(${bgbanner})` }}>

                    <MenuMobile footer={footer} />

                    <div className="pt-5 position-relative section-space-mobile ">
                        <div className="mt-5">
                            <Card
                                head={<div className="d-flex">
                                    <p className="head-x-small oBold" >
                                        <a href={subpage.headlink} className="text-decoration-none">{subpage.head}</a> </p >
                                    <p className="head-x-small oBold"> &nbsp;&nbsp; &#62; &nbsp;&nbsp;</p>
                                    <p className="head-x-small oBold">
                                        <a href={subpage.link} className="text-decoration-none">{subpage.title}</a>
                                    </p>
                                </div >
                                } title={subpage.title} details={subpage.details} btn={false} />
                        </div>


                        <div className="pt-5 mt-4">

                            <MiniCorpoClinicoMobile corpoclinico={subpage.corpoclinico} />

                        </div>

                    </div>

                    <div>
                                    
                        <CardSectionMobile data={especialidades} />

                    </div>

                    <div className="pt-5 mt-4 section-space-mobile">

                        <PedidoMarcacaoMobile img={false} alt={false} space={false} subpage={subpage} />

                    </div >

                </div>

            </div>

            <div className="no-repeat background-bottom" style={{ backgroundImage: `url(${bgbottm})` }}>

                <EspecialidadesMobile especialidades={home} />

                <QuestoesMobile data={questoes} />

            </div>

            <FooterMobile footer={footer} />

        </>
    )
}

export default SubpageMobile
