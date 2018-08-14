import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';

import FormFields from '../../ui/form_fields';
import { validate } from '../../ui/misc';
import FormField from '../../ui/form_fields';

class AddEditMatch extends Component {

    state = {
        matchId: '',
        formType: '',
        formError: false,
        formSuccess: '',
        teams: [],
        formdata: {
            date: {
                element: 'input',
                value: '',
                config: {
                    label: 'Event date',
                    name: 'date_input',
                    type: 'date'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage: '',
                showLabel: true
            }
        }
    }





    render() {
        return (
            <AdminLayout>
                <FormField
                    id={'date'}
                    formdata={this.state.formdata.date}
                    change={(element) => this.updateForm(element, 'date')}
                />
            </AdminLayout>
        );
    }
}

export default AddEditMatch