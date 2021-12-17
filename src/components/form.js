import * as React from "react"
import { useState } from "react"
import '../../gatsby-browser'

import 'bootstrap/dist/css/bootstrap.min.css';

import '../sass/app.scss';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const Formulario = () => {
    constructor = (props) => {
        super(props);
        this.state = {
            name: '',
            email: ''
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName = (e) => {
        this.setState({ name: e.target.value })
    }
    handleChangeEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    $.ajax({
        url: process.env.NODE_ENV !== "production" ? '/getMail' : "http://www.fransbernhard.se/magden/php/mailer.php",
        type: 'POST',
        data: {
            'form_email': this.state.mail,
            'form_name': this.state.name
        },
        cache: false,
        success: function (data) {
            // Success..
            this.setState({
                contactEmail: 'success',
                contactMessage: '<h1>Obrigada pelo seu contacto!</h1><p>entraram em contacto consigo.</p>'
            });
            $('#formContact').slideUp();
            $('#formContact').after(this.state.name);
            console.log('success', data);
        }.bind(this),
        // Fail..
        error: function (xhr, status, err) {
            console.log(xhr, status);
            console.log(err);
            this.setState({
                contactEmail: 'danger',
                contactMessage: '<h1>Ocorreu um erro!</h1><p>Pedimos que volte a tentar ou que envie email para xxx@yyy.pt</p>'
            });
            console.log(this.state.contactEmail + this.state.contactMessage + 'fail');
        }.bind(this)
    });


    const [isCheckedTerms, setIsCheckedTerms] = useState(false);

    const handleOnChange = () => {
        setIsCheckedTerms(!isCheckedTerms);
    };




    return (
        <div>
            <form className="form" onSubmit={this._handleSubmit} id="formContact">
                <div className="col-marcacao-rapida">
                    <p className="title-medium">Pedido de Marcação Rápido</p>
                    <p className="details-x-small"> Preencha o formulário e aguarde o nosso contacto. Todos os campos são de preenchimento obrigatório</p>
                    <Row className="width-max">
                        <Col sm="12" md="6" lg="6">
                            <p className="details-medium">Dados Pessoais</p>
                        </Col>
                        <Col sm="12" md="6" lg="6">
                            <p className="details-medium">Dados da Consulta</p>
                        </Col>
                    </Row>

                    <Row className="width-max">
                        <Col sm="12" md="6" lg="6" >
                            <input className="input-form"
                                type="text"
                                required
                                placeholder="Nome"
                                id="name"
                                value={this.state.name}
                                onChange={this._handleChange}
                            />
                        </Col>
                        <Col sm="12" md="6" lg="6" >
                            <select className="input-form"
                                type="text"
                                required
                                placeholder="Especialidade"
                                id="especiality"
                            >
                                <option value="" disabled selected hidden>Especialidade</option>
                                <option value="cardiologia">Cardiologia</option>
                                <option value="fisioterapia">Fisioterapia</option>
                            </select>
                        </Col>
                    </Row>
                    <Row className="width-max mt-2">
                        <Col sm="12" md="6" lg="6" >
                            <input className="input-form"
                                type="text"
                                required
                                placeholder="Telemóvel"
                                id="telephone"
                            />
                        </Col>
                        <Col sm="12" md="6" lg="6" >
                            <input className="input-form"
                                type="text"
                                required
                                placeholder="Data"
                                id="date"
                            />
                        </Col>
                    </Row>
                    <Row className="width-max mt-2">
                        <Col sm="12" md="6" lg="6" >
                            <input className="input-form"
                                type="text"
                                required
                                placeholder="E-mail"
                                id="email"
                                value={this.state.email} onChange={this._handleChange}
                            />
                        </Col>
                        <Col sm="12" md="6" lg="6" >
                            <select className="input-form"
                                type="text"
                                required
                                placeholder="Horário"
                                id="hours"
                            >
                                <option value="" disabled selected hidden>Horário</option>
                                <option value="9h">9H - 10H</option>
                                <option value="10h">10H - 11H</option>
                            </select>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col sm="12" md="12" lg="12">
                            <input
                                type="checkbox"
                                id="termos"
                                name="termos"
                                value="agree"
                                checked={isCheckedTerms}
                                onChange={handleOnChange}
                            />
                            Concorda com os dados
                        </Col>

                    </Row>

                    <br />
                    <br />
                    <br />
                    <button type="submit" value="Submit" className="btn--cta" id="btn-submit">
                        Enviar Mensagem
                    </button>
                </div>
                <div className="result mt-5">
                    Above checkbox is {isCheckedTerms ? "checked" : "un-checked"}.
                </div>
            </form>
        </div>
    )
}

export default Formulario