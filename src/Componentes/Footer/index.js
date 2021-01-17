import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import {HashLink as Link} from 'react-router-hash-link'
import './footer.css';
import { Email } from '../../estilos.js'
import linkedin from '../../img/linkedin32p.png';
import facebook from '../../img/facebook32p.png';
import instagran from '../../img/instagram32p.png';
import github from '../../img/github32p.png';
import flecha from '../../img/flecha-curva.png';

class Footer extends Component{
    constructor(props){
        super(props);
        this.state ={

        };
    }
    render(){
        return(
            <Container fluid className="footerInteiro">
                <Container fluid className="footerContato">
                    <Container fluid className="footerOuvir">
                        <h3>Adoraria ouvir de você</h3>
                        <Container fluid className="footerMidias">
                            <a href="https://www.linkedin.com/in/naira-danile-magalh%C3%A3es-b3a35a33/" target="_blanc" ><img src={linkedin} /></a>
                            <a href="https://www.facebook.com/urielleverkhan" target="_blanc" ><img src={facebook} /></a>
                            <a href="https://www.instagram.com/urielleverkhan/?hl=pt-br" target="_blanc" ><img src={instagran} /></a>
                            <a href="https://github.com/urielleverkhan" target="_blanc" ><img src={github} /></a>
                        </Container>
                    </Container>
                    <Container fluid className="footerEmail">
                        <Container fluid className="email">
                            <Email href="mailto:nairadanile@gmail.com">nairadanile@gmail.com</Email>
                            <Email href={this.state.saudacao} target="_blanc">(17) 98100-8468</Email>

                            <button className="baixarCv"><p>Baixar CV</p></button>
                            
                        </Container>
                        <Container fluid className="imgFooter">
                            <Link smooth to="#headerInteiro"><img src={flecha} alt="Voltar ao topo"/></Link>
                        </Container>
                   </Container>
                   
                </Container>

                <Container fluid className="footerDireitos">
                    <h3>© 2020 orgulhosamente desenvolvido por Naira Magalhães. </h3>
                </Container>

            </Container>
        ); 
    }
}
export default Footer;