import React from 'react';

const FormField = ({ formdata, id, change }) => {

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