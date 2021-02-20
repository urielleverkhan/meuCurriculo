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
                        me formei no curso de Engenharia da Computação, pela 
                        UNORP - Universidade do Norte Paulista.</p>
                    <p>Gosto muito de estudar, e muito do que aprendi de programação foi em
                         cursos online feitos antes ou após a faculdade. Tenho conta na Udemy 
                         e Digital Innovation com muitos certificados, dentre eles vários estão 
                         aqui neste currículo.</p>
                    <p>Após terminar a faculdade, caí de cabeça no estudo de desenvolvimento front-end.
                         Aprendi muito de css e html quando fiz estágio em uma empresa de desenvolvimento 
                         de sites na cidade de São José do Rio Preto, interior de São Paulo, onde morei 
                         durante minha vida toda. Agora estou me aprofundando em Javascript e React-Js.

                    </p>
                    <p>No final do ano de 2020, tive a oportunidade de participar de um bootcamp 
                        FullStack organizado pela Digital Innovation One. Aprendi muito neste 
                        bootcamp e dentre as coisas mais relevantes que aprendi foram AngularJs 
                        e o desenvolvimento de apis back-end na linguagem java Spring boot com jdbc/jpa.
                    </p>
                    <p>Agora estou morando na capital do estado de São Paulo, de mesmo nome, 
                        atrás de novas experiências e crescimento profissional.               </p>
                    </Container>
            </Container>
        ); 
    }
}
export default Sobre;