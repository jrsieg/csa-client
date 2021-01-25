import React, { Component } from 'react';
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
  Text
} from './CSAFormElements';





  
export class FormCSADetails extends Component {


 
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
      e.preventDefault();
      this.props.prevStep();
  }


    render() {
        const { values, handleChange } = this.props;
        return (

          <>
          <Container>
              <FormWrap>
                  <Icon to="/">myCSA</Icon>
                  <FormContent>
                      <Form>
                          <FormH1>Account Details</FormH1>

                          <FormLabel htmlFor='for'>CSA Name</FormLabel>
  
                            <FormInput 
                              onChange={handleChange('csaName')}
                              defaultValue={values.csaName}

                            />

  
                          <FormLabel htmlFor='for'>First Name</FormLabel>
  
                          <FormInput 
                            onChange={handleChange('firstName')}
                            defaultValue={values.firstName}

                          />

                          <FormLabel htmlFor='for'>Last Name</FormLabel>
                            
                          <FormInput 
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}

                          />

                          <FormLabel htmlFor='for'>Zip Code</FormLabel>
                            
                          <FormInput 
                            onChange={handleChange('zipcode')}
                            defaultValue={values.zipcode}

                          />
  
  
  
                          <FormButton type='submit'
                            label="Continue"
                            primary={true}
                            onClick={this.continue}

                          
                          >Continue</FormButton>

                          <FormButtonSecondary type='submit'
                              label="Back"
                              primary={true}
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

const styles = {
    button: {
        margin: 15
    }
}

export default FormCSADetails
