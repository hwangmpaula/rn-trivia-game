import { StyleSheet } from 'react-native'

import config from '../config'

const { primaryTextColor, shadows } = config

const styles = StyleSheet.create({
    container : { flex : 1 },
    center : {
        alignItems : 'center',
        justifyContent : 'center'
    },
    error : { flex : 1 },
    errorText : {
        fontSize : 16,
        color : primaryTextColor
    },
    errorButton : {
        marginTop : 40,
        alignSelf : 'center'
    },
    errorButtonText : {
        fontSize : 30,
        fontWeight : '600'
    },
    question : { flex : 1 },
    questionCategory : { flex : 3 },
    questionCategoryText : {
        fontSize : 32,
        paddingRight : 10,
        paddingLeft : 10,
        fontWeight : '700',
        textAlign : 'center',
        color : primaryTextColor,
        ...shadows
    },
    questionNext : { flex : 4 },
    questionNextText : {
        fontSize : 24,
        paddingRight : 10,
        paddingLeft : 10,
        textAlign : 'center',
        color : primaryTextColor
    },
    questionCounter : {
        flex : 1,
        alignItems : 'center'
    },
    questionCounterText : {
        fontSize : 16,
        color : primaryTextColor
    },
    questionAnswers : {
        flex : 2,
        flexDirection : 'row',
        alignItems : 'center'
    },
    questionAnswerText : {
        fontSize : 20,
        color : primaryTextColor
    },
    questionAnswersButton : {
        flex : 1,
        paddingTop : 20,
        paddingBottom : 20,
        alignItems : 'center',
        justifyContent : 'center',
        ...shadows
    },
    questionAnswersButtonText : {
        fontWeight : '700',
        fontSize : 34,
    }
})

export default styles
