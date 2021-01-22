import React, { Component } from 'react'
import FormCSADetails from './FormCSADetails';


export class CSAForm extends Component {
    
    state = {

        step: 1,
        email: '',
        firstName: '',
        lastName: '',
        farmName: '',
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
        const { firstName, lastName, email, farmName, bio, zipcode, produce } = this.state;
        const values = { firstName, lastName, email, farmName, bio, zipcode, produce }
        switch(step) {
            case 1:
                return (
                    <FormCSADetails 
                        nextStep = {this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return <h1>FarmPersonalDetails</h1>

            case 3:
                return <h1>Confirm</h1>

            case 4:
                return <h1>Success</h1>

    
        }
        
        
        return (
            <div>
                
            </div>
        )
    }
}

export default CSAForm