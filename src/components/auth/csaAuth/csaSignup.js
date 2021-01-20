import React, {useState} from 'react';
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
    Text,
    FormLink
} from './CSAAuthElements';


const CSASignup = (props) => {
    const [farmName, setFarmName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/csa/signup", {
            method: 'POST',
            body: JSON.stringify({farmName: farmName, firstName: firstName, lastName: lastName, email: email, password: password}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
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
                        <FormH1>Create a new account</FormH1>

                        <FormLabel htmlFor='for'>Farm Name</FormLabel>
                        <FormInput type='Farm Name' onChange={(e) => setFirstName(e.target.value)} name="farmName" value={farmName}/>


                        <FormLabel htmlFor='for'>First Name</FormLabel>
                        <FormInput type='First Name' onChange={(e) => setFirstName(e.target.value)} name="firstName" value={firstName}/>

                        <FormLabel htmlFor='for'>Last Name</FormLabel>
                        <FormInput type='Last Name' onChange={(e) => setLastName(e.target.value)} name="lastName" value={lastName}/>

                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='Email' onChange={(e) => setEmail(e.target.value)} name="email" value={email} required/>

                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='Password' onChange={(e) => setPassword(e.target.value)} name="password" value={password} required />

                        <FormButton type='submit'>Continue</FormButton>
                        <FormLink to='/csalogin'>Sign in</FormLink>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>

    )
}

export default CSASignup;