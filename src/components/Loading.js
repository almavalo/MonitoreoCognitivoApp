import React from 'react'
import {useLoading} from '../hooks'
import Animated from 'react-native-reanimated'

const Loading = () => {
    const {loadingStyles} = useLoading({color: '#2E56A2'})

    return(
        <Animated.View style={loadingStyles} />
    )

}

export default Loading