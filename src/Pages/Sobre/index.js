import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import './sobre.css';

class Sobre extends Component{
    constructor(props){
        super(props);
        this.state ={

        };
    }
    render(){
        return(
            <Container fluid className="sobreInteiro">
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
                <p>Hoje me mudei para a capitão do estado de São Paulo de memo nome atraz de novas
                    experiencias e crescimento profissional. 
                </p>
            </Container>
        ); 
    }
}
export default Sobre;