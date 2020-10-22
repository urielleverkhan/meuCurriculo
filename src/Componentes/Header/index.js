import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import './header.css';
import ImgComputador from '../../img/notebook.jpg';
import ImgEu from '../../img/eu.png';

class Header extends Component{
    constructor(props){
        super(props);
        this.state ={

        };
    }
    render(){
        return(
            <Container fluid className="headerInteiro">
                <Container fluid className="headerEsquerda">
                    <Container fluid className="header">
                        <p>Sobre</p>
                        <p>Formação e experiência</p>
                        <p>Habilidades e idiomas</p>
                        <p>Prêmios e interesses</p>
                    </Container>
                    <Container fluid className="imgEsquerda">
                        <img src={ImgComputador} />
                    </Container>
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
                        
                    <botton className="baixarCv"><p>Baixar CV</p></botton>
                    </Container>
                    
                </Container>

            </Container>
        ); 
    }
}
export default Header;