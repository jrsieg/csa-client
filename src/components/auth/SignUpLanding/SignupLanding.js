import React from 'react';
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
  FormButtonSecondary,
  FormLink,
  Text,
  BtnLink,
  BtnLinkSecondary
} from './SignUpLandingElements';
import { NavBtnLink } from '../../Navbar/NavbarElements';





function SignupLanding() {

  return (
    <>
    <Container>
        <FormWrap>
            <Icon to="/">myCSA</Icon>
            <FormContent>
                <Form>
                    <FormH1>Sign in as a...</FormH1>


                    <BtnLink
                      label="Continue"
                      to="/customersignup"

                    
                    >Customer</BtnLink>

                    <BtnLinkSecondary
                        label="Back"
                        to="/csasignup"


                      
                      >CSA</BtnLinkSecondary>

                </Form>
            </FormContent>
        </FormWrap>
    </Container>
</>
  );
}

export default SignupLanding
