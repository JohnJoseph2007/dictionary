import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Homescreen from './screen/homescreen'

export default class Main extends React.Component {
    render() {
        return(
            <SafeAreaProvider>
                <Homescreen/>
            </SafeAreaProvider>
        )
    }
}