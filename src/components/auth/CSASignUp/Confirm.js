import React, { Component } from 'react';
import { 
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    ConfirmLabelSecondary,
    FormInput,
    FormInputPara,
    FormButton,
    FormButtonSecondary,
    FormLink,
    ConfirmLabel,
    Text
  } from './CSAFormElements';

  import APIURL from '../../../helpers/environment'


export class Confirm extends Component {


    
    
    handleSubmit = (event) => {
        event.preventDefault();
        const { values: {email, password, firstName, lastName, csaName, bio, zipcode, produce }} = this.props;

        fetch(`${APIURL}/csa/signup`, {
            method: 'POST',
            body: JSON.stringify({csaName: csaName, password: password, email: email, firstName: firstName, lastName: lastName, produce: produce, bio: bio, zipcode: parseInt(zipcode)}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            ////////////// SETTING USER TYPE FOR TERNARY ON ACCOUNT PAGE//////////
            localStorage.setItem("userType", "csa")
            localStorage.setItem("csaId", data.csa.id)
            this.props.updateToken(data.sessionToken)
        }) .catch(
            err => console.log(err)
        )
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        const { values: {email, password, firstName, lastName, csaName, bio, zipcode, produce }} = this.props;

        return (

            <>
            <Container>
                <FormWrap>
                    <Icon to="/">myCSA</Icon>
                    <FormContent>
                        <Form>
                            <FormH1>Confirm CSA Details</FormH1>
  
                            <ConfirmLabel htmlFor='for'>CSA Name</ConfirmLabel>
    
                            <ConfirmLabelSecondary>
                                {csaName} 
                            </ConfirmLabelSecondary>

                            <ConfirmLabel htmlFor='for'>Password</ConfirmLabel>
    
                            <ConfirmLabelSecondary>
                                {password}
                            </ConfirmLabelSecondary>

                            <ConfirmLabel htmlFor='for'>First Name</ConfirmLabel>
    
                            <ConfirmLabelSecondary>
                                {firstName}
                            </ConfirmLabelSecondary>

                            <ConfirmLabel htmlFor='for'>Last Name</ConfirmLabel>
    
                            <ConfirmLabelSecondary>
                                {lastName}
                            </ConfirmLabelSecondary>

                            <ConfirmLabel htmlFor='for'>Email</ConfirmLabel>
    
                            <ConfirmLabelSecondary>
                                {email}
                            </ConfirmLabelSecondary>

                            <ConfirmLabel htmlFor='for'>Zipcode</ConfirmLabel>
    
                            <ConfirmLabelSecondary>
                                {zipcode}
                            </ConfirmLabelSecondary>

                            <ConfirmLabel htmlFor='for'>Produce</ConfirmLabel>
    
                            <ConfirmLabelSecondary>
                                {produce}
                            </ConfirmLabelSecondary>

                            <ConfirmLabel htmlFor='for'>Bio</ConfirmLabel>
    
                            <ConfirmLabelSecondary>
                                {bio}
                            </ConfirmLabelSecondary>

  
    
      
    
                            <FormButton type='submit'
                              label="Continue"
                              onClick={this.handleSubmit}
  
                            
                            >Create Account</FormButton>

                            <FormButtonSecondary type='submit'
                              label="Back"
                              onClick={this.back}
  
                            
                            >Back</FormButtonSecondary>

                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>

        )
    }
}


export default Confirm
