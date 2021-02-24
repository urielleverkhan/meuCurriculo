import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import './habilidadesIdiomas.css';
import BarraDeExperiencia from '../../Componentes/BarraExperiencia';

class habilidadesIdiomas extends Component{
 
    constructor(props){
        super(props);
        this.state ={
            
        };
    }

    render(){
      
        return(
            <Container fluid className="habilidadesInteiro">
                <BarraDeExperiencia propsLinhaGrossa={this.props.propsClassLinhaGrossa} propsPorcentagem="99%"/>
                <BarraDeExperiencia propsLinhaGrossa={this.props.propsClassLinhaGrossa} propsPorcentagem="40%"/>
                <BarraDeExperiencia propsLinhaGrossa={this.props.propsClassLinhaGrossa} propsPorcentagem="10%"/>
              
            </Container>
        ); 
    }
}
export default habilidadesIdiomas;