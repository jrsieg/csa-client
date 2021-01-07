import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import CSASignup from './csaSignup';
import CSALogin from './csaLogin';

const CSAAuth = (props) => {
    return(
        <Container className = "auth-container">
            <Row>
                <Col md="6">
                    <CSASignup updateToken={props.updateToken}/>
                </Col>
                <Col md="6" className="login-col">
                    <CSALogin updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
    )
}

export default CSAAuth;