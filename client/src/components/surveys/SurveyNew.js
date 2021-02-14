import React, { Component } from 'react'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'
import { reduxForm } from 'redux-form'


class SurveyNew extends Component {

    state = { showFormReview : false }

    renderContent() {

        if (this.state.showFormReview) {
            return (
                <SurveyFormReview
                    onCancel={ () => this.setState({ showFormReview : false })}

                ></SurveyFormReview>
            )
        }

        return (
            <SurveyForm
                onSurveySubmit={ () => this.setState({ showFormReview : true })}
            >
            </SurveyForm>
        )
       
    }

    render() {
        return (
            <div>
                { this.renderContent() }
            </div>
        )
    }
}

export default reduxForm({
    form : 'surveyForm'
})(SurveyNew)