import React from 'react';
import { Container, Button } from './LoginModalElements'

const LoginModal = ({showModal, setShowModal}) => {
    return (
        <>

            {showModal ? <div>Modal</div> : null}


        </>
    )
}

export default LoginModal