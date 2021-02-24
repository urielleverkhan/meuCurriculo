import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import './barraExp.css';
import { LinhaGrossa } from '../../estilos.js'




class barraDeExperiencia extends Component{
    constructor(props){
        super(props);
        this.state ={
            
        };
    }
    render(){
     
        return(
            <Container fluid className="barraDeExperiencia">
               <span className="linhaFina"/>
               {/* <span className={this.props.propsLinhaGrossa} /> */}
               <LinhaGrossa porcents={this.props.propsPorcentagem} pausado={this.props.propsLinhaGrossa}/>
              
            </Container>
        ); 
    }
}
export default barraDeExperiencia;


