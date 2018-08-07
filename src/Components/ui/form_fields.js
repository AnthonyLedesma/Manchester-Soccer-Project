import React from 'react';

const FormField = ({ formdata, id, change }) => {

    const showError = () => {
        let errorMessage = <div className="error_label">{formdata.email.validation && !formdata.email.valid ? formdata.email.validationMessage :null }</div>;
        return errorMessage;
    }

    const renderTemplate = () => {
        let formTemplate = null;
        
        switch (formdata.email.element) {
            case ('input'):
                formTemplate = (
                    <div>
                        <input {...formdata.config} 
                        value={formdata.value}
                        onChange={(event)=>change(event,id)}
                        />
                        { showError() }
                    </div>
                )
            break;
            default:
                formTemplate = null;
            break;
        }
        return formTemplate;
    }

    return (
        <div>
            {renderTemplate()}
        </div>
    );
};

export default FormField;