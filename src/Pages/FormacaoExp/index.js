import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import './formacaoExp.css';

class FormacaoEExperiencia extends Component{
 
    render(){
        const classeMoveEsquerda =  this.props.propsClassEsquerda;
        const classeMoveDireita =  this.props.propsClassDireita;
        const classeAparecer = this.props.propsAparecer;
        return(
            
            <Container className="formacaoExpInteiro" id="formacaoExpInteiro">
                <Row className="formacaoExpRow">
                    <Col md={5} sm={5} xs={8} className={classeMoveEsquerda}>
                        <h1 className={`h1${classeAparecer}`}>Formação</h1>
                        <h3 className={`h3${classeAparecer}`}>O QUE APRENDI.</h3>
                        <div>
                            <h4 className={`h4${classeAparecer}`}>2020 - 2020</h4>
                            <p className={`p${classeAparecer}`}>Digital Innovation One</p>
                            <p className={`p${classeAparecer}`}>Desenvolvimento FullStack AngularJs / Java.</p>
                        </div>
                        <div>
                            <h4 className={`h4${classeAparecer}`}>2012 - 2016</h4>
                            <p className={`p${classeAparecer}`}>Centro Universitário do Norte Paulista - UNORP</p>
                            <p className={`p${classeAparecer}`}>Bacharel em Engenharia da computação.</p>
                        </div>
                    </Col>
                    <Col md={5} sm={5} xs={8} className={classeMoveDireita}>
                        <h1 className={`h1${classeAparecer}`}>Experiência</h1>
                        <h3 className={`h3${classeAparecer}`}>ONDE JÁ TRABALHEI.</h3>
                        <div>
                            <h4 className={`h4${classeAparecer}`}>2016 - 2020</h4>
                            <p className={`p${classeAparecer}`}>Miro Star Bordados,</p>
                            <p className={`p${classeAparecer}`}>Suporte tecnico ao cliente.</p>
                        </div>
                        <div>
                            <h4 className={`h4${classeAparecer}`}>2002 - 2015</h4>
                            <p className={`p${classeAparecer}`}>Conterra Construçoes Terraplenagem e pavimentação Ltda</p>
                            <p className={`p${classeAparecer}`}>Auxiliar administrativo.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        ); 
    }
}
export default FormacaoEExperiencia;