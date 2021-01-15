import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import './sobre.css';

class Sobre extends Component{
 

    render(){
        const classeMove =  this.props.propsClass;
        return(
            <Container fluid className="sobreInteiro" id="sobreInteiro">
                <Container className={classeMove}>
                    <h1>Sobre</h1>
                    <h3>Minha historia</h3>
                    <p> Apaixonada desde muito pequena por computação e em especial programação, 
                        me formei no curso de Engenharia da computação
                        pela UNORP - Universidade do norte paulista. </p>
                    <p>Gosto muito de estudar, e muito do que aprendi de programação,
                        foi em cursos onlines feitos antes ou apos a faculdade, tenho conta na Udemy e Digital Innovation
                        com muitos certificados, dente eles muitos estão aqui neste curriculo. </p>
                    <p>Apos terminar a faculdade cai de cabeça no estudo de desenvolvimento front-end e, 
                        aprendi muito de css e html quando fiz estagio em uma empresa
                        de desenvolvimento de sites na cidade de São José do Rio preto interior de São paulo
                        onde morei minha vida toda, agora estou me aprofundando em Javascript e React-Js.
                    </p>
                    <p>No final do ano de 2020 tive a oportunidade de participar de um bootcamp FullStack organizado pela 
                        Digital Innovation One. Aprendi muito neste bootcamp e dentre as coisas mais relevantes que aprendi foi
                        AngularJs e o desenvolvimento de apis back-end na linguagem java Spring boot com jdbc/jpa.
                    </p>
                    <p>Hoje me mudei para a capital do estado de São Paulo de mesmo nome atraz de novas
                        experiencias e crescimento profissional. 
                    </p>
                    </Container>
            </Container>
        ); 
    }
}
export default Sobre;