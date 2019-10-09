'use strict';

const noble = require('noble');

const textEncoding = require('text-encoding');
const TextDecoder = textEncoding.TextDecoder;

require('date-utils');

//discovered BLE device
const discovered = (peripheral) => {
    const device = {
        name: peripheral.advertisement.localName,
        uuid: peripheral.uuid,
        rssi: peripheral.rssi,
        data: peripheral.advertisement.manufacturerData
    };
    // console.log(`${device.name}(${device.uuid}) RSSI${device.rssi}`);
    if (device.name == 'Leaf_A') {
        let dt = new Date();
        let dt_s = dt.toFormat('YYYY/MM/DD,HH24:MI:SS');
        let data_s = (new TextDecoder('utf-8')).decode(device.data);
        console.log(`${dt_s},${data_s}`);
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