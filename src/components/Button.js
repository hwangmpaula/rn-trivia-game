import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Animated, View } from 'react-native'

import styles from './stylesheet'

const Button = ({
    label = "button",
    onPress = () => {},
    labelStyle = {},
    style = {},
    disabled = false
}) => (
    <TouchableOpacity
        disabled={ disabled }
        activeOpacity={ 0.7 }
        style={ [].concat( styles.button, style )}
        onPress={ onPress }
    >
        <View>
            <Animated.Text style={[].concat( styles.buttonText, labelStyle )}>
                { label }
            </Animated.Text>
        </View>
    </TouchableOpacity>
)

Button.propTypes = {
    label : PropTypes.string.isRequired,
    labelStyle : PropTypes.oneOfType([ PropTypes.number, PropTypes.array ]),
    style : PropTypes.oneOfType([ PropTypes.number, PropTypes.array ]),
    onPress : PropTypes.func.isRequired,
    disabled : PropTypes.bool,
}

export default Button
