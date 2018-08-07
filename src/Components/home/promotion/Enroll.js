import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FormField from '../../ui/form_fields';

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

    updateForm(element, id) {
        const newFormdata = { ...this.state.formdata };
        const newElement = { ...newFormdata[id] };

        newElement.value = element.currentTarget.value;
        newFormdata[id] = newElement;

        this.setState({
            formdata: newFormdata
        })
    }

    submitForm() {

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
                        </div>
                    </form>
                </div>
            </Fade>

        );
    }
}

export default Enroll;