
import React, {useRef, useEffect, useCallback, useState} from 'react';
import {useSpring, animated} from 'react-spring';
import { Background, ModalWrapper, ModalImg, ModalContent, CloseModalButton, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './LoginModalElements';


const LoginModal = ({showModal, setShowModal}) => {

    
    const modalRef = useRef();

    const animation = useSpring ({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal){
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sessionToken, setSessionToken] = useState('');


    const handleUserSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/user/signin", {
            method: 'POST',
            body: JSON.stringify({email: email, password: password}),
            headers: ({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            localStorage.setItem("sessionToken", data.sessionToken)
            ////////////// SETTING USER TYPE FOR TERNARY ON ACCOUNT PAGE//////////
            localStorage.setItem("userType", "user")
            updateToken(data.sessionToken)
        })
    }

    const handleCSASubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/csa/signin", {
            method: 'POST',
            body: JSON.stringify({email: email, password: password}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            localStorage.setItem("csaId", data.csa.id)
            localStorage.setItem("sessionToken", data.sessionToken)
            ////////////// SETTING USER TYPE FOR TERNARY ON ACCOUNT PAGE//////////
            localStorage.setItem("userType", "csa")

            updateToken(data.sessionToken)
        })
    }


    const updateToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setSessionToken(newToken);
        console.log(sessionToken)
      }
    


    return (
        <>

            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                    <ModalWrapper showModal={showModal}>
                        {/* <ModalImg src= '/images/Login_modal.jpg' alt='nature png' /> */}
                        <ModalContent>

                        <Form onSubmit={handleUserSubmit}>
                            <FormH1>Customer Login</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='Email' onChange={(e) => setEmail(e.target.value)} name="email" value={email} required/>

                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='Password' onChange={(e) => setPassword(e.target.value)} name="password" value={password} required />

                            <FormButton onClick={handleUserSubmit} type='submit'>Customer Login</FormButton>
                        </Form>

                        
                        </ModalContent>

                        <ModalContent>

                        <Form onSubmit={handleCSASubmit}>
                            <FormH1>CSA Login</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='Email' onChange={(e) => setEmail(e.target.value)} name="email" value={email} required/>

                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='Password' onChange={(e) => setPassword(e.target.value)} name="password" value={password} required />

                            <FormButton onClick={handleCSASubmit} type='submit'>CSA Login</FormButton>
                        </Form>

                        
                        </ModalContent>

                        <CloseModalButton aria-label='Close' onClick={() => setShowModal (prev => !prev)} />
                    </ModalWrapper>
                    </animated.div>
                </Background>
            ): null}


        </>
    )
}

export default LoginModal