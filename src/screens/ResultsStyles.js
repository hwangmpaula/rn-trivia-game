import { StyleSheet } from 'react-native'

import config from '../config'

const { primaryTextColor, secondaryTextColor, shadows } = config
const fontSize = 25

const styles = StyleSheet.create({
    container : { flex : 1 },
    center : {
        alignItems : 'center',
        justifyContent : 'center'
    },
    score : {
        flex : 2,
    },
    scoreText : {
        margin : 10,
        fontSize : fontSize,
        fontWeight : '700',
        color : primaryTextColor,
        textAlign : 'center',
        ...shadows
    },
    scoreTextMin : {
        fontSize : fontSize * 0.75,
        fontWeight : '500'
    },
    results : {
        flex : 3,
    },
    resultItem : {
        flexDirection : 'row',
        minHeight : 60,
        marginTop : 4,
        marginBottom : 4,
        paddingRight : 10,
        paddingLeft : 10,
    },
    icon : {
        width : 36,
        ...shadows
    },
    question : {
        flex : 1,
        justifyContent : 'center',
    },
    questionText : {
        fontSize : 20,
        color : primaryTextColor,
    },
    questionTextWrong : {
        color : secondaryTextColor,
    },
    playAgain : {
        flex : 1,
    },
    playAgainButton : {
        alignSelf : 'center',
        ...shadows
    },
    playAgainButtonText : {
        fontSize : 24,
        fontWeight : '700',
        color : primaryTextColor
    }
})

export default styles
