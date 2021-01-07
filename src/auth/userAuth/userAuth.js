import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import UserSignup from './userSignup';
import UserLogin from './userLogin';

const UserAuth = (props) => {
    return(
        <Container className = "auth-container">
            <Row>
                <Col md="6">
                    <UserSignup updateToken={props.updateToken}/>
                </Col>
                <Col md="6" className="login-col">
                    <UserLogin updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
    )
}

export default UserAuth;