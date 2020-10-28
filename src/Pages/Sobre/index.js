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
            <Container fluid className="homeInteiro">
                <h1>Sobre</h1>
            </Container>
        ); 
    }
}
export default Sobre;