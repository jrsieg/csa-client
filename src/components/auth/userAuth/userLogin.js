import React, {useState} from 'react';
// import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { 
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './userAuthElements';

const UserLogin = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
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
            props.updateToken(data.sessionToken)
        })
    }


    return(

        <>
            <Container>
                <FormWrap>
                    <Icon to="/">myCSA</Icon>
                    <FormContent>
                        <Form onSubmit={handleSubmit}>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='Email' onChange={(e) => setEmail(e.target.value)} name="email" value={email} required/>

                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='Password' onChange={(e) => setPassword(e.target.value)} name="password" value={password} required />

                            <FormButton onClick={handleSubmit} type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default UserLogin;