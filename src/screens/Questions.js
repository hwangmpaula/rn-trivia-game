import React, { PureComponent as Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import he from 'he'

import { GradientBackground, Button } from '../components'
import Question from './Question'

import styles from './QuestionsStyles'

const TOTAL_QUESTIONS = 10

const Loader = () => (
    <GradientBackground style={ styles.center }>
        <ActivityIndicator size="large" color="white" />
    </GradientBackground>
)

const Error = ({ onRestart }) => (
    <View style={[ styles.center, styles.error ]}>
        <Text style={ styles.errorText }>There was an error in the application</Text>
        <Button
            label="Try Again"
            labelStyle={ styles.errorButtonText }
            style={ styles.errorButton }
            onPress={ onRestart }
        />
    </View>
)

const defaultState = {
    questions : [],
    results : [],
    currentQuestionIndex : 0,
    score : 0,

    isLoading : true,
    isError : false
}

class Questions extends Component{
    state = { ...defaultState }

    constructor(props) {
        super(props)

        this._onRetry = this._onRetry.bind(this)
        this._onAnswer = this._onAnswer.bind(this)
        this._fetchQuestionsAPI = this._fetchQuestionsAPI.bind(this)
    }

    _onRetry() {
        return this.setState({ isError : false, isLoading : true }, this._fetchQuestionsAPI)
    }

    _onAnswer(answer) {
        const { currentQuestionIndex : index, questions, score : answeredQuestions, results : qResults } = this.state
        let score = answeredQuestions

        const { question, correct_answer } = questions[ index ]
        const didAnswerCorrectly = answer === correct_answer

        // Object for answer to evaluate later on Results screen
        const resultsToQuestion = { answer, question : he.decode(question), didAnswerCorrectly }

        const results = [].concat(qResults, resultsToQuestion)

        if(didAnswerCorrectly) score += 1

        const currentQuestionIndex = index + 1

        if(currentQuestionIndex === TOTAL_QUESTIONS) return Actions.replace('results', { results, score })

        return this.setState({ currentQuestionIndex, score, results })
    }

    async _fetchQuestionsAPI() {
        const API_URL = `https://opentdb.com/api.php?amount=${ TOTAL_QUESTIONS }&difficulty=hard&type=boolean`

        try {
            const response = await fetch(API_URL)
            const { results : questions } = await response.json()

            return this.setState({ isLoading : false, questions })
        } catch (err) {
            console.log(err)
        }

        return this.setState({ isLoading : false, isError : true })
    }

    componentDidMount() {
        return this._fetchQuestionsAPI()
    }

    render() {
        const { questions, currentQuestionIndex, isError, isLoading } = this.state

        if(isLoading) return <Loader />

        const currentQuestion = questions[ currentQuestionIndex ]
        const totalQuestions = questions.length

        return (
            <GradientBackground>
                {
                    isError
                    ? <Error onRestart={ this._onRetry } />
                    : (
                        <Question
                            question={ currentQuestion }
                            totalQuestions={ totalQuestions }
                            index={ currentQuestionIndex }
                            onAnswer={ this._onAnswer }
                        />
                    )
                }
            </GradientBackground>
        )
    }
}

Error.propTypes = {
    onRestart : PropTypes.func
}

export default Questions
