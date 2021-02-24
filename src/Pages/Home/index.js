import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Sobre from '../Sobre';
import FormacaoExp from '../FormacaoExp';
import HabilidadesIdiomas from '../habilidadesIdiomas';
import './home.css';




class Home extends Component{
    constructor(props){
        super(props);
        this.state ={
            classeMove: "sobreConteudo",
            classeMoveEsquerda: "formacaoExpConteudoEsquerda",
            classeMoveDireita: "formacaoExpConteudoDireita",
            classeAparecer: "FormacaoExpConteudo",
            barraExp: "paused "

        };
   
    }

  

    componentDidMount() {

        window.onscroll = () => {
            //let tamanhoTela = document.body.clientHeight;
            let telaAgora = document.documentElement.scrollTop;
            let valorFinal = telaAgora + 450;
            console.log(valorFinal);
            console.log(telaAgora);


            if(telaAgora >= 300 || valorFinal >= 450){
                this.setState({
                    classeMove:"sobreConteudo move"
                }); 
            }

            if(telaAgora >=700 || valorFinal >= 1250){
                this.setState({
                    classeMoveEsquerda:"formacaoExpConteudoEsquerda moveEsquerda",
                    classeMoveDireita:"formacaoExpConteudoDireita moveDireita",
                    classeAparecer:"FormacaoExpConteudo aparecer"
                }); 
            }
            if(telaAgora >=1200 || valorFinal >= 1650){
                this.setState({
                    barraExp:"running",
                   
                }); 
            }
        }
          
    }
    

      
    
    render(){
        return(
            
            <Container>
                <Sobre propsClass={this.state.classeMove} />
                <FormacaoExp propsClassEsquerda={this.state.classeMoveEsquerda} propsClassDireita={this.state.classeMoveDireita} propsAparecer={this.state.classeAparecer} />
                <HabilidadesIdiomas propsClassLinhaGrossa={this.state.barraExp} />
            </Container>
        ); 
    }
}
export default Home;
