import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
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
                <h1>Pagina Home</h1>
            </Container>
        ); 
    }
}
export default Home;