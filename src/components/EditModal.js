import React, {useState} from 'react'
import {View, StyleSheet, Button, TextInput, Modal, Alert} from 'react-native'
import { THEME } from '../theme'
import { AppButton } from '../ui/AppButton'

export const EditModal = ({visible, value, onCancel, onSave}) => {
    const [title, setTitle] = useState(value)

    const saveHandler = () => {
        if(title.trim().length < 3) {
            Alert.alert('Error', `Mininmal title length 3 characters. You entered ${title.trim().length} characters`)
        } else {
            onSave(title)
        }
    }

    const cancelHandler = () => {
        setTitle(value)
        onCancel()
    }
    return(
        <Modal visible={visible} animationType='slide' transparent={false}>
            <View style={styles.wrap}>
                <TextInput style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder='Enter new title'
                autoCapitalize='none'
                maxLength={35}/>
                <View style={styles.buttons}>
                    <AppButton color={THEME.RED_COLOR} onPress={cancelHandler} style={styles.button}>Cancel</AppButton>
                    <AppButton onPress={saveHandler}>Save</AppButton>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
      },
      buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
})