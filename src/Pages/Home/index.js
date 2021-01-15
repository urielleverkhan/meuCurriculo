import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Sobre from '../Sobre';
import FormacaoExp from '../FormacaoExp';
import './home.css';




class Home extends Component{
    constructor(props){
        super(props);
        this.state ={
            classeMove: "sobreConteudo",
            classeMoveEsquerda: "formacaoExpConteudoEsquerda",
            classeMoveDireita: "formacaoExpConteudoDireita"

        };
   
    }

  

    componentDidMount() {

        window.onscroll = () => {
            let telaAgora = document.documentElement.scrollTop;

            if(telaAgora >=300){
                this.setState({
                    classeMove:"sobreConteudo move"
                }); 
            }

            if(telaAgora >=700){
                this.setState({
                    classeMoveEsquerda:"formacaoExpConteudoEsquerda moveEsquerda",
                    classeMoveDireita:"formacaoExpConteudoDireita moveDireita"
                }); 
            }
        }
          
    }
    

      
    
    render(){
        return(
            
            <Container>
                <Sobre propsClass={this.state.classeMove} />
                <FormacaoExp propsClassEsquerda={this.state.classeMoveEsquerda} propsClassDireita={this.state.classeMoveDireita}/>
            </Container>
        ); 
    }
}
export default Home;
