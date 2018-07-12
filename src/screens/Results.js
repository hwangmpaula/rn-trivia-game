import React, { PureComponent as Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, ScrollView, Animated, Easing } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Entypo as Icon } from '@expo/vector-icons'
import { GradientBackground, Button } from '../components'

import styles from './ResultsStyles'

const ScoreSection = ({ score, totalQuestions }) => (
    <View style={[ styles.center, styles.score ]}>
        {
            score !== totalQuestions
            ?
            <React.Fragment>
                <Text style={ styles.scoreText }>
                    YOU NAILED
                </Text>
                <Text style={[ styles.scoreText, styles.scoreTextMin ]}>
                    { `${ score } OUT OF ${ totalQuestions }` }
                </Text>
                <Text style={ styles.scoreText }>
                    QUESTIONS
                </Text>
            </React.Fragment>
            :
            <React.Fragment>
                <Text style={ styles.scoreText }>YOU NAILED ALL THE QUESTIONS!</Text>
                <Text style={ styles.scoreText }>CONGRATS!!!</Text>
            </React.Fragment>
        }
    </View>
)

const ResultsSection = ({ results }) => (
    <View style={ styles.results }>
        <ScrollView
            contentContainerStyle={{ flexGrow : 1 }}
            showsVerticalScrollIndicator={ false }
        >
            {
                results.map(({ answer, didAnswerCorrectly, question }, i) => (
                    <View key={ i } style={ styles.resultItem }>
                        <View style={[ styles.center, styles.icon ] }>
                            <Icon
                                name={ answer === 'True' ? 'check' : 'cross' }
                                size={ 32 }
                                color={ didAnswerCorrectly ? '#4AE9C4' : '#ED6481' }
                            />
                        </View>
                        <View style={ styles.question }>
                            <Text style={[ styles.questionText, didAnswerCorrectly ? {} : styles.questionTextWrong ] }>
                                { question }
                            </Text>
                        </View>
                    </View>
                ))
            }
        </ScrollView>
    </View>
)

const TryAgainSection = () => (
    <View style={[ styles.center, styles.playAgain ] }>
        <Button
            onPress={ () => Actions.replace('questions') }
            style={ styles.playAgainButton }
            label="WANNA TRY AGAIN?"
            labelStyle={ styles.playAgainButtonText }
        />
    </View>
)

class Results extends Component{
    state = { opacity : new Animated.Value(0) }

    componentDidMount() {
        const { opacity } = this.state

        Animated.timing(opacity, {
            toValue : 1,
            duration : 500,
            easing : Easing.linear
        }).start()
    }

    render() {
        const { score, results } = this.props
        const { opacity } = this.state

        const total = results.length

        return (
            <GradientBackground>
                <Animated.View style={{ flex : 1, opacity }}>
                    <ScoreSection score={ score } totalQuestions={ total } />
                    <ResultsSection results={ results } />
                    <TryAgainSection />
                </Animated.View>
            </GradientBackground>
        )
    }
}

ScoreSection.propTypes = {
    score : PropTypes.number.isRequired,
    totalQuestions : PropTypes.number.isRequired
}

ResultsSection.propTypes = {
    results : PropTypes.arrayOf(PropTypes.object).isRequired
}

Results.propTypes = {
    score : PropTypes.number,
    results : PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Results
