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
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    handleScroll() { 
        let state = this.state;
        let tamanhoTela = document.body.clientHeight;
        let telaAgora = document.documentElement.scrollTop;
        let porcents = (telaAgora / tamanhoTela)*100;
        

        console.log(porcents);
        console.log(telaAgora);

        if (porcents > 0 && porcents <= 10) {
           this.setState({
             corFundo: 'c79fd8'
           })
         } 
         else if (porcents > 10 && porcents <= 20){
            this.setState({
                corFundo: 'be94d8'
              })
        }
        else if (porcents > 20 && porcents <= 30){
            this.setState({
                corFundo: 'b589d5'
              })
        }
        else if (porcents > 30 && porcents <= 40){
            this.setState({
                corFundo: 'ab7ed2'
              })
        }
        else if (porcents > 40 && porcents <= 50){
            this.setState({
                corFundo: 'a174cf'
              })
        }
        else if (porcents > 50 && porcents <= 60){
            this.setState({
                corFundo: '9564c5'
              })
        }
        else if (porcents > 60 && porcents <= 70){
            this.setState({
                corFundo: '8953b8'
              })
        }
        else if (porcents > 70 && porcents <= 80){
            this.setState({
                corFundo: '7e43b1'
              })
        }
        else if (porcents > 80 && porcents <= 90){
            this.setState({
                corFundo: '7231a7'
              })
        }
        else if (porcents > 90 && porcents <= 100){
            this.setState({
                corFundo: '5c2994'
              })
        }

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
