import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import './formacaoExp.css';

class Sobre extends Component{
 
    render(){
        const classeMoveEsquerda =  this.props.propsClassEsquerda;
        const classeMoveDireita =  this.props.propsClassDireita;
        return(
            
            <Container className="formacaoExpInteiro" id="formacaoExpInteiro">
                <Row className="formacaoExpRow">
                    <Col md={5} sm={5} xs={8} className={classeMoveEsquerda}>
                        <h1>Formação</h1>
                        <h3>O QUE APRENDI.</h3>
                        <div>
                            <h4>2020 - 2020</h4>
                            <p>Digital Innovation One</p>
                            <p>Desenvolvimento FullStack AngularJs / Java.</p>
                        </div>
                        <div>
                            <h4>2012 - 2016</h4>
                            <p>Centro Universitário do Norte Paulista - UNORP</p>
                            <p>Bacharel em Engenharia da computação.</p>
                        </div>
                    </Col>
                    <Col md={5} sm={5} xs={8} className={classeMoveDireita}>
                        <h1>Experiência</h1>
                        <h3>ONDE JÁ TRABALHEI.</h3>
                        <div>
                            <h4>2016 - 2020</h4>
                            <p>Miro Star Bordados,</p>
                            <p>Suporte tecnico ao cliente.</p>
                        </div>
                        <div>
                            <h4>2002 - 2015</h4>
                            <p>Conterra Construçoes Terraplenagem e pavimentação Ltda</p>
                            <p>Auxiliar administrativo.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        ); 
    }
}
export default Sobre;