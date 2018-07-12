import { StyleSheet } from 'react-native'

import config from '../config'

const { primaryTextColor, shadows } = config

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    center : {
        alignItems : 'center',
        justifyContent : 'center'
    },
    titleSection : {
        flex : 1,
    },
    titleSectionText : {
        fontSize : 46,
        textAlign : 'center',
        fontWeight : '600',
        color : primaryTextColor,
        ...shadows
    },
    descriptionSection : {
        flex : 1,
        paddingLeft : 20,
        paddingRight : 20,
    },
    descriptionSectionText : {
        marginTop : 10,
        color : primaryTextColor,
        fontSize : 24,
        textAlign : 'center'
    },
    startButtonSection : {
        flex : 1
    },
    startButton : {
        paddingRight : 10,
        paddingLeft : 10,
        paddingTop : 5,
        paddingBottom : 5,
        alignSelf : 'center'
    },
    startButtonText : {
        fontWeight : '600',
        fontSize : 26,
        ...shadows
    }
})

export default styles
