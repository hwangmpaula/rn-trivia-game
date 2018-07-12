import React from 'react'
import { Router, Stack, Scene, ActionConst } from 'react-native-router-flux'
import { View } from 'react-native'

import Home from './Home'
import Results from './Results'
import Questions from './Questions'

const Navigator = () => (
    <Router>
        <Stack key="root" panHandlers={ null } hideNavBar>
            <Scene key="home" component={ Home } type={ ActionConst.REPLACE } initial />
            <Scene key="questions" component={ Questions } type={ ActionConst.REPLACE } />
            <Scene key="results" component={ Results } type={ ActionConst.REPLACE } />
        </Stack>
    </Router>
)

const Landing = () => (
    <View style={{ flex : 1 }}>
        <Navigator />
    </View>
)

export default Landing
