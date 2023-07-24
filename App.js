import React from 'react'
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native'
import { Camera, useCameraDevices } from 'react-native-vision-camera'
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
const cameraPermission = Camera.getCameraPermissionStatus()
const microphonePermission = Camera.getMicrophonePermissionStatus()
const newCameraPermission = Camera.requestCameraPermission()
const newMicrophonePermission = Camera.requestMicrophonePermission()

export default props => {

    const pegarPermissao = async () => {

    }

    const devices = useCameraDevices()
    const device = devices.back
    if (device == null) {
        return <ActivityIndicator size={20} color={'red'} />;
    }

    return (
        <View style={{flex:1}}>
            
            <Text>Ola mundo</Text>
            <Camera
                style={{flex:1}}
                device={device}
                isActive={true}
            />
        </View>
    )
}