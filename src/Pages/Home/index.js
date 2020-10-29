import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import { FundoMudaScroll } from '../../estilos.js'
import Sobre from '../Sobre';
import './home.css';




class Home extends Component{
    constructor(props){
        super(props);
        this.state ={
            corFundo: 'fff',
            porcento: 0
        };
        this.porcentagem = this.porcentagem.bind(this);
    }
    handleScroll() { 
        if (document.documentElement.scrollTop > 1500) {
           this.setState({
             corFundo: '4c3c4a'
           })
           console.log(document.documentElement.scrollTop);
         } 
        else if (document.documentElement.scrollTop < 500){
            this.setState({
                corFundo: 'eae5e5'
              })
        }

       }
       porcentagem(){
        console.log(window.innerHeight);
        console.log(document.innerHeight);
       }
     
       componentDidMount() {
         window.onscroll = () => this.handleScroll();
         
       }

      
    
    render(){
        return(
            
            <FundoMudaScroll className="homeInteiro" corDeFundo={this.state.corFundo}>
                <Sobre/>
            </FundoMudaScroll>
        ); 
    }
}
export default Home;
