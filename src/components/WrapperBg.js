import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { LinearGradient } from 'expo'

import config from '../config'
import styles from './stylesheet'

const { primaryColor, secondaryColor, tertiaryColor } = config

const Wrapper = ({ style = {}, children }) => (
    <LinearGradient
        style={ styles.wrapper }
        start={{ x : 0, y : 0 }}
        end={{ x : 1, y : 1 }}
        locations={[ 0, 0.7, 1]}
        colors={[ secondaryColor, primaryColor, tertiaryColor ]}
    >
        <View style={[].concat({ flex : 1 }, style)}>
            { children }
        </View>
    </LinearGradient>
)

Wrapper.propTypes = {
    style : PropTypes.oneOfType([ PropTypes.number, PropTypes.object ]),
    children : PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]).isRequired
}

export default Wrapper
