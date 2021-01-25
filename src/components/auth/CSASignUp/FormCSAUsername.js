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





  
export class FormCSAUsername extends Component {


 
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
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
                          <FormH1>Create a new account</FormH1>


                          <FormLabel htmlFor='for'>Email</FormLabel>
                            
                          <FormInput 
                            onChange={handleChange('email')}
                            defaultValue={values.email}

                          />

                            <FormLabel htmlFor='for'>Password</FormLabel>
                            
                            <FormInput 
                              onChange={handleChange('password')}
                              defaultValue={values.password}
  
                            />

  
  
  
                          <FormButton type='submit'
                            label="Continue"
                            primary={true}
                            onClick={this.continue}

                          
                          >Continue</FormButton>
                          <FormLink to='/'>Sign in</FormLink>
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

export default FormCSAUsername
