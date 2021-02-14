import React from 'react'
import { connect } from 'react-redux'
import _  from 'lodash'
import formFields from './formFields'
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions'

const SurveyFormReview = ({onCancel, values, submitSurvey, history})  => {

    const renderFieldsValues = _.map(formFields, ({name, label}) => {
            return (    
                <div key={name} style={{ marginBottom : '20px'}}>
                    <label>{label}</label>
                    <div style={{ marginTop : '5px'}}>
                        {values[name]}
                    </div>
                </div> 
            )                  
        })      

    
    return (
        <div>
            <h5>Please confirm your entries</h5>
                {renderFieldsValues}
            <button style={{ marginTop : '20px'}} className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
                Back
            </button>
            <button
                style={{ marginTop : '20px'}} 
                onClick={() => submitSurvey(values, history)}
                className="green btn-flat right white-text">
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
    
}

const mapStateToProps = (state) => {
    return {values : state.form.surveyForm.values}
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))