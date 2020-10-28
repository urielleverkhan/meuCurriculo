import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import './footer.css';

class Footer extends Component{
    constructor(props){
        super(props);
        this.state ={

        };
    }
    render(){
        return(
            <Container fluid>
                <Container fluid>
                    <Container fluid>
                    
                    </Container>
                    <Container fluid>
                    
                    </Container>
                </Container>

                <Container fluid className="footerDireitos">
                    <h3>© 2020 orgulhosamente desenvolvido por Naira Magalhães. </h3>
                </Container>

            </Container>
        ); 
    }
}
export default Footer;