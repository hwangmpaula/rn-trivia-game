import React from 'react'
import { Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { Button, GradientBackground } from '../components'

import styles from './HomeStyles'

const Title = () => (
    <View style={[ styles.center, styles.titleSection ]}>
        <Text style={ styles.titleSectionText }>
            Trivia Challenge
        </Text>
    </View>
)

const Description = () => (
    <View style={[ styles.center, styles.descriptionSection ]}>
        <Text style={ styles.descriptionSectionText }>10 Random Questions</Text>
        <Text style={ styles.descriptionSectionText }>10 Possible Answers</Text>
        <Text style={[ styles.descriptionSectionText, { marginTop : 40 } ]}>Are You Down For The Challenge?</Text>
    </View>
)

const StartButton = () => (
    <View style={[ styles.center, styles.startButtonSection ]}>
        <Button
            label="LET'S BEGIN!!"
            labelStyle={ styles.startButtonText }
            style={ styles.startButton }
            onPress={ () => Actions.replace('questions') }
        />
    </View>
)

const Home = () => (
    <GradientBackground>
        <Title />
        <Description />
        <StartButton />
    </GradientBackground>
)

export default Home
