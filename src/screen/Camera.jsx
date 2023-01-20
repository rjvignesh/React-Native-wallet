import React from "react";
import {Text, View} from "react-native"
import {useCameraDevices, Camera} from 'react-native-vision-camera';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
import {RNHoleView} from 'react-native-hole-view';

const devices = useCameraDevices();
const device = devices.back;

const [frameProcessor, barcodes] = useScanBarcodes([
    BarcodeFormat.ALL_FORMATS, // You can only specify a particular format
  ]);


const CameraScreen = () => {
    return <Camera
    style={{flex:1}}></Camera>
}
export default CameraScreen