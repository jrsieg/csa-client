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
    FormLink,
    Text
} from './userAuthElements';

// import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const UserSignup = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/user/signup", {
            method: 'POST',
            body: JSON.stringify({firstName: firstName, lastName: lastName, email: email, password: password}),
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

                        <FormLabel htmlFor='for'>First Name</FormLabel>

                        <FormInput type='First Name' onChange={(e) => setFirstName(e.target.value)} name="firstName" value={firstName}/>

                        <FormLabel htmlFor='for'>Last Name</FormLabel>
                        <FormInput type='Last Name' onChange={(e) => setLastName(e.target.value)} name="lastName" value={lastName}/>

                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='Email' onChange={(e) => setEmail(e.target.value)} name="email" value={email} required/>

                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='Password' onChange={(e) => setPassword(e.target.value)} name="password" value={password} required />

                        <FormButton type='submit'>Continue</FormButton>
                        <FormLink to='/customerlogin'>Sign in</FormLink>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>

        // {/* <div>
        //     <h1>User Sign Up</h1>
        //     <Form onSubmit={handleSubmit}>
        //         <FormGroup>
        //             <Label htmlFor="firstName">First Name</Label>
        //             <Input onChange={(e) => setFirstName(e.target.value)} name="firstName" value={firstName}/>
        //         </FormGroup>
        //         <FormGroup>
        //             <Label htmlFor="lastName">Last Name</Label>
        //             <Input onChange={(e) => setLastName(e.target.value)} name="lastName" value={lastName}/>
        //         </FormGroup>
        //         <FormGroup>
        //             <Label htmlFor="email">Email</Label>
        //             <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
        //         </FormGroup>
        //         <FormGroup>
        //             <Label htmlFor="password">Password</Label>
        //             <Input onChange = {(e) => setPassword(e.target.value)} name="password" value={password}/>
        //         </FormGroup>
        //         <Button type="submit">Signup</Button>
        //     </Form>
        // </div> */}
    )
}

export default UserSignup;