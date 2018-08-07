import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FormField from '../../ui/form_fields';
import { validate } from '../../ui/misc';

class Enroll extends Component {

    state = {
        formError: false,
        formSuccess: '',
        formdata: {
            email: {
                element:'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage: ''
            }
        }
    }

    resetFormSuccess(){
        const newFormdata = { ...this.state.formdata };

        for(let key in newFormdata){
            newFormdata[key].value = '';
            newFormdata[key].valid = false;
            newFormdata[key].validationMessage = '';
        }

        this.setState({
            formError:false,
            formdata: newFormdata,
            formSuccess: 'Congratulations'
        });
        this.successMessage();
    }

    successMessage(){
        setTimeout(()=>{
            this.setState({
                formSuccess: ''
            })
        },2000)
    }

    updateForm(element, id) {
        const newFormdata = { ...this.state.formdata };
        const newElement = { ...newFormdata[id] };

        newElement.value = element.currentTarget.value;

        let validData = validate(newElement);
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];
        
        newFormdata[id] = newElement;

        
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    submitForm(event) {
        event.preventDefault();

        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formdata) {
            dataToSubmit[key] = this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
            }

        if(formIsValid){
            console.log(dataToSubmit);
            this.resetFormSuccess();
        } else {
            this.setState({
                formError: true
            })
        }
    }

    render() {
        return (
            <Fade>
                <div>
                    <form onSubmit={(event) => this.submitForm(event)}>
                        <div className="enroll_title">Enter your email</div>
                        <div className="enroll_input">
                            <FormField
                                id={'email'}
                                formdata={this.state.formdata}
                                change={(element, id) => this.updateForm(element, id)}
                            />
                            { this.state.formError ? 
                            <div className="error_label">Something is wrong, try again.</div> 
                            :null }

                            <div className="success_label">
                                {this.state.formSuccess}
                            </div>
                            <button onClick={(event)=> this.submitForm(event)}>Enroll</button>
                        </div>
                    </form>
                </div>
            </Fade>

        );
    }
}

export default Enroll;