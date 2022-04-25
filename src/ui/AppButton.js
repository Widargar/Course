import React from 'react'
import {StyleSheet, View, TouchableOpacity, TouchableNativeFeedback} from 'react-native'
import { Platform } from 'react-native'
import { THEME } from '../theme'
import { AppTextBold } from './AppTextBold'

export const AppButton = ({ children, onPress, color = THEME.MAIN_COLOR }) => {
    const Wrapepr = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

    return (
        <Wrapepr onPress={onPress} activeOpacity={0.7}>
            <View style={{...styles.button, backgroundColor: color}}>
                <AppTextBold style={styles.text}>{children}</AppTextBold>
            </View>
        </Wrapepr>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white'
    }
})