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
                    <Container fluid className="itens">
                        <h1>Front-end</h1>
                        <Container fluid className="item"><p className="itemDescricao">HTML: </p><BarraDeExperiencia propsLinhaGrossa={this.props.propsClassLinhaGrossa} propsPorcentagem="95%"/></Container>
                        <Container fluid className="item"><p className="itemDescricao">CSS: </p><BarraDeExperiencia propsLinhaGrossa={this.props.propsClassLinhaGrossa} propsPorcentagem="90%"/></Container>
                        <Container fluid className="item"><p className="itemDescricao">JavaScript: </p><BarraDeExperiencia propsLinhaGrossa={this.props.propsClassLinhaGrossa} propsPorcentagem="70%"/></Container>
                        <Container fluid className="item"><p className="itemDescricao">React: </p><BarraDeExperiencia propsLinhaGrossa={this.props.propsClassLinhaGrossa} propsPorcentagem="70%"/></Container>
                        <Container fluid className="item"><p className="itemDescricao">Angular: </p><BarraDeExperiencia propsLinhaGrossa={this.props.propsClassLinhaGrossa} propsPorcentagem="40%"/></Container>
                        <h1>Back-End</h1>
                        <Container fluid className="item"><p className="itemDescricao">Bando de Dados: </p><BarraDeExperiencia propsLinhaGrossa={this.props.propsClassLinhaGrossa} propsPorcentagem="60%"/></Container>
                        <Container fluid className="item"><p className="itemDescricao">Java: </p><BarraDeExperiencia propsLinhaGrossa={this.props.propsClassLinhaGrossa} propsPorcentagem="40%"/></Container>
                        <h1>Linguas estrangeiras</h1>
                        <Container fluid className="item"><p className="itemDescricao">Ingles: </p><BarraDeExperiencia propsLinhaGrossa={this.props.propsClassLinhaGrossa} propsPorcentagem="50%"/></Container>
                    </Container>
            </Container>
        ); 
    }
}
export default habilidadesIdiomas;