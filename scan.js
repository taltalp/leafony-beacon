'use strict';

const noble = require('noble');
const knownDevices = [];

//discovered BLE device
const discovered = (peripheral) => {
    const device = {
        name: peripheral.advertisement.localName,
        uuid: peripheral.uuid,
        rssi: peripheral.rssi
    };
    knownDevices.push(device);
    // console.log(`${knownDevices.length}:${device.name}(${device.uuid}) RSSI${device.rssi}`);
    if (device.name == 'Leaf_A') {
        // console.log(peripheral);
        // console.log(device.uuid);
        console.log(peripheral.advertisement.manufacturerData);
    }
}

//BLE scan start
const scanStart = () => {
    noble.startScanning([], true);
    noble.on('discover', discovered);
}

if(noble.state === 'poweredOn'){
    scanStart();
}else{
    noble.on('stateChange', scanStart);
}