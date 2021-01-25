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
    FormInputPara,
    FormButton,
    FormButtonSecondary,
    FormLink,
    Text
  } from './CSAFormElements';
  

export class FormProduceDetails extends Component {

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
                            <FormH1>CSA Details</FormH1>
  
                            <FormLabel htmlFor='for'>What produce do you sell?</FormLabel>
    
                              <FormInput 
                                onChange={handleChange('produce')}
                                defaultValue={values.produce}
  
                              />
  
    
                            <FormLabel htmlFor='for'>CSA Bio</FormLabel>
    
                            <FormInputPara 
                              onChange={handleChange('bio')}
                              defaultValue={values.bio}
  
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

export default FormProduceDetails
