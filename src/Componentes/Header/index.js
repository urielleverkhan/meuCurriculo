import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import {HashLink as Link} from 'react-router-hash-link'
import { Email } from '../../estilos.js'
import './header.css';
import ImgEu from '../../img/eu.png';
import linkedin from '../../img/linkedin32.png';
import facebook from '../../img/facebook32.png';
import instagran from '../../img/instagram32.png';
import github from '../../img/github32.png';

        

class Header extends Component{
    constructor(props){
        super(props);
        this.state ={
            hora: '00:00:00',
            saudacao: "nada",
            classAbrirHamburguer: "headerHamburger",
            estado: 0,
            linha1: "",
            linha2: "",
            linha3: ""
        };
        this.abrirHamburger = this.abrirHamburger.bind(this);
     
    }
    abrirHamburger(){
        if(this.state.estado == 0){
            this.setState({classAbrirHamburguer: "headerHamburger hamburguerAberto"});
            this.setState({linha1: "hamburguerRoda1"});
            this.setState({linha2: "hamburguerRoda2"});
            this.setState({linha3: "harburguerRoda3"});
            
            this.setState({estado:1});
        }
        else if(this.state.estado ==1){
            this.setState({classAbrirHamburguer: "headerHamburger"});
            this.setState({linha1: "hamburguerVolta1"});
            this.setState({linha2: "hamburguerVolta2"});
            this.setState({linha3: "hamburguerVolta3"});
            this.setState({estado:0});
        }
    }
        

        componentDidMount(){
  
            if(new Date().toLocaleTimeString() >= '00:00:00' && new Date().toLocaleTimeString() <= '11:59:59'){
                this.setState({saudacao: "https://wa.me/5517981008468?text=Bom%20Dia"});
                }
            else if(new Date().toLocaleTimeString() >= '12:00:00' && new Date().toLocaleTimeString() <= '17:59:59'){
                this.setState({saudacao: "https://wa.me/5517981008468?text=Boa%20Tarde"});
                }
            else if(new Date().toLocaleTimeString() >= '18:00:00' && new Date().toLocaleTimeString() <= '23:59:59'){    
                this.setState({saudacao: "https://wa.me/5517981008468?text=Boa%20Noite"});
                }
           }
        

    render(){
    
        
        return(
            <Container fluid className="headerInteiro" id="headerInteiro">
                <Container fluid className="headerEsquerda">
                    <Container fluid className="header">
                        <Link smooth to="#sobreInteiro">Sobre</Link>
                        <Link smooth to="#formacaoExpInteiro">Formação e experiência</Link>
                        <Link smooth to="#habilidadesInteiro">Habilidades e idiomas</Link>
                        <Link smooth to="#certificadosInt">Certificados e interesses</Link>
                    </Container>
                    <Container fluid className="header480px" onClick={this.abrirHamburger} on >
                        <button className="hamburguer" >
                            <span className={this.state.linha1} id="linha1"/>
                            <span className={this.state.linha2} id="linha2"/>
                            <span className={this.state.linha3} id="linha3"/>
                        </button>
                    </Container>
                    <Container fluid className={this.state.classAbrirHamburguer}>
                        <Link smooth to="#sobreInteiro">Sobre</Link>
                        <Link smooth to="#formacaoExpInteiro">Formação e experiência</Link>
                        <Link smooth to="#habilidadesInteiro">Habilidades e idiomas</Link>
                        <Link smooth to="#certificadosInt">Certificados e interesses</Link>
                    </Container>
                    
                    <Container fluid className="imgEsquerda" />
                    <Container fluid className="headerTxtEsquerda">
                        <p>Olá eu sou</p>
                        <h1>Naira D. Magalhães</h1>
                        <h3>Engenheira da computação e programadora front-end.</h3>
                    </Container>

                </Container>
                <Container fluid className="headerDireita">
                    <Container fluid className="imgDireita">
                        <img src={ImgEu} />
                    </Container>
                    <Container fluid className="headerTextoDireita">
                        <h3>Naira D. Magalhães</h3>
                        <p>Bacharel em Engenharia da computação</p>
                        <p>São Paulo / Sp</p>
                        
                    </Container>
                    <Container fluid className="headerContato">
                        <Container fluid className="contato">
                            <Email href="mailto:nairadanile@gmail.com">nairadanile@gmail.com</Email>
                            <Email href={this.state.saudacao} target="_blanc">(11) 99221-0078</Email>
                            <Container fluid className="midias">
                                <a href="https://www.linkedin.com/in/naira-danile-magalh%C3%A3es-b3a35a33/" target="_blanc" ><img src={linkedin} /></a>
                                <a href="https://www.facebook.com/urielleverkhan" target="_blanc" ><img src={facebook} /></a>
                                <a href="https://www.instagram.com/urielleverkhan/?hl=pt-br" target="_blanc" ><img src={instagran} /></a>
                                <a href="https://github.com/urielleverkhan" target="_blanc" ><img src={github} /></a>
                            </Container>
                        </Container>
                        <button className="baixarCv"><p>Baixar CV</p></button>
                    </Container>
                    
                </Container>

            </Container>
        ); 
    }
}
export default Header;