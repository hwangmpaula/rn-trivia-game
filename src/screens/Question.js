import React, { PureComponent as Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Animated, Easing } from 'react-native'
import he from 'he'

import { Button } from '../components'

import styles from './QuestionsStyles'

const AnswerButtons = ({
    disableBtns = false,
    onPress = () => {},
    btn1Style = {},
    btn2Style = {}
}) => (
    <View style={ styles.questionAnswers }>
        <Button
            disabled={ disableBtns }
            onPress={ () => onPress("True") }
            label="TRUE"
            style={ styles.questionAnswersButton }
            labelStyle={[ styles.questionAnswersButtonText, btn1Style ]}
        />
        <Text style={ styles.questionAnswerText }>or</Text>
        <Button
            disabled={ disableBtns }
            onPress={ () => onPress("False") }
            label="FALSE"
            style={ styles.questionAnswersButton }
            labelStyle={[ styles.questionAnswersButtonText, btn2Style ]}
        />
    </View>
)

const QuestionSection = ({
    question = {},
    index = 0,
    totalQuestions = 0
}) => (
    <React.Fragment>
        <View style={[ styles.questionCategory, styles.center ]}>
            <Text style={ styles.questionCategoryText }>
                { question.category }
            </Text>
        </View>
        <View style={[ styles.questionNext, styles.center ]}>
            <Text style={ styles.questionNextText }>
                { he.decode(question.question) }
            </Text>
        </View>
        <View style={[ styles.questionCounter, styles.center ]}>
            <Text style={ styles.questionCounterText }>
                { `${ index + 1 } of ${ totalQuestions }` }
            </Text>
        </View>
    </React.Fragment>
)

class Question extends Component{
    state = {
        btn1Color : new Animated.Value(0),
        btn2Color : new Animated.Value(0),
        disableBtns : false
    }

    constructor(props) {
        super(props)

        this._onAnswerButtonPress = this._onAnswerButtonPress.bind(this)
    }

    _onAnswerButtonPress(answer) {
        const { onAnswer, question } = this.props
        const { correct_answer } = question
        const { btn1Color, btn2Color } = this.state

        const animatedElement = answer === 'True' ? btn1Color : btn2Color

        Animated.sequence([
            Animated.timing(animatedElement, {
                toValue : correct_answer === answer ? 1 : -1,
                duration : 150,
                easing : Easing.linear,
            }),
            Animated.timing(animatedElement, {
                toValue : 0,
                delay : 300,
                duration : 50,
                easing : Easing.linear,
            })
        ]).start(() => this.setState({ disableBtns : false }, () => onAnswer(answer)))

        // Disable buttons to avoid double pressing to answer
        // After animation ends, it goes back to enabled
        return this.setState({ disableBtns : true })
    }

    render() {
        const { question = {}, index = 0, totalQuestions } = this.props
        const { btn1Color : color1, btn2Color : color2, disableBtns } = this.state

        const btn1Color = color1.interpolate({
            inputRange : [ -1, 0, 1 ],
            outputRange : [ '#ED6481' ,'white', '#4AE9C4' ]
        })

        const btn2Color = color2.interpolate({
            inputRange : [ -1, 0, 1 ],
            outputRange : [ '#ED6481' ,'white', '#4AE9C4' ]
        })

        return (
            <View style={ styles.question }>
                <QuestionSection {...{ question, index, totalQuestions }} />
                <AnswerButtons
                    disableBtns={ disableBtns }
                    onPress={ this._onAnswerButtonPress }
                    btn1Style={{ color : btn1Color }}
                    btn2Style={{ color : btn2Color }}
                />
            </View>
        )
    }
}

AnswerButtons.propTypes = {
    disableBtns : PropTypes.bool,
    onPress : PropTypes.func.isRequired,
    styleBtn1 : PropTypes.object,
    styleBtn2 : PropTypes.object,
}

QuestionSection.propTypes = {
    question : PropTypes.object.isRequired,
    index : PropTypes.number.isRequired,
    totalQuestions : PropTypes.number.isRequired
}

Question.propTypes = {
    question : PropTypes.object.isRequired,
    index : PropTypes.number.isRequired,
    totalQuestions : PropTypes.number.isRequired
}

export default Question
