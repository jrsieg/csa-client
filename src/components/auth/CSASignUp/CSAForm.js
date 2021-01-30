import React, { Component } from 'react'
import FormCSAUsername from './FormCSAUsername'
import FormCSADetails from './FormCSADetails';
import FormProduceDetails from './FormProduceDetails'
import Confirm from './Confirm';
import Success from './Success'


export class CSAForm extends Component {
    
    state = {

        step: 1,
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        csaName: '',
        bio: '',
        zipcode: '',
        produce: ''
       }
    
       //Proceed to next step
       nextStep = () => {
           const { step } = this.state;
           this.setState({
               step: step + 1
           });
       }

       //Go back to prev step
       prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    //Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    


    render() {
        const { step } = this.state;
        const { firstName, lastName, email, password, csaName, bio, zipcode, produce } = this.state;
        const values = { firstName, lastName, email, csaName, password, bio, zipcode, produce }
        switch(step) {

            case 1:
                return (
                    <FormCSAUsername
                        nextStep = {this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormCSADetails 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <FormProduceDetails 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )

            case 4:
                return (
                    <Confirm
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        values={values}
                        updateToken = {this.props.updateToken}
                    />
                )

            case 5:
                return <Success/>

    
        }
        
        
        return (
            <div>
                
            </div>
        )
    }
}

export default CSAForm
