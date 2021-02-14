import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import { Link } from 'react-router-dom'
import _  from 'lodash'
import formFields from './formFields'
import validateEmails from '../../utils/validateEmails'


class SurveyForm extends Component {

    renderFields() {
        return (
            _.map(formFields, ({label, name}) => 
            <Field
                key={name}
                name={name}
                type="text"
                component={SurveyField}
                label={label}            
            ></Field>
        ))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
               
            </div>
        )
    }
}

function validate(values) {

    const errors = {}

    errors.recipients = validateEmails(values.recipients || '')
    _.forEach(formFields, ({name, error}) => {
        if (!values[name])
            errors[name] = error
    })

    return errors
}

export default reduxForm({
    validate,
    form : 'surveyForm',
    destroyOnUnmount : false
})(SurveyForm)