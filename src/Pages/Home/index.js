import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Sobre from '../Sobre';
import './home.css';

class Home extends Component{
    constructor(props){
        super(props);
        this.state ={

        };
    }
    render(){
        return(
            <Container fluid className="homeInteiro">
                <Sobre/>
            </Container>
        ); 
    }
}
export default Home;