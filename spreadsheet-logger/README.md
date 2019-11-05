# spreadsheet-logger
A data logger for Leafony beacons with Google SpreadSheet

## Prerequisites
Enable Google SpreadSheet API and download `credientials.json`

## Install

### Linux
#### Ubuntu/Debian

```
sudo apt-get install bluetooth libbluetooth-dev libudev-dev
git clone https://github.com/Leafony/beacon-logger-spreadsheet
cd beacon-logger-spreadsheet
npm install
```

#### Raspberry Pi (Raspbian)

Required node & npm versions

* Node.js 10.15.2
* npm 5.8.0

```
sudo apt update
sudo apt upgrade
sudo apt install bluetooth libbluetooth-dev libudev-dev
git clone https://github.com/Leafony/leafony-beacon
cd leafony-beacon/spreadsheet-logger
npm install
npm install "https://github.com/jrobeson/node-bluetooth-hci-socket/#fix-builds-for-node-10"
sudo node .
```

#### Fedra/ Other-RPM based

```
sudo yum install bluez bluez-libs bluez-libs-devel
git clone https://github.com/Leafony/beacon-logger-spreadsheet
cd beacon-logger-spreadsheet
npm install
```

## Usage

Change `spreadsheetID` and `sheetName` according to your sheet.

```Javascript
const spreadsheetId = '<YOUR SPREADSHEET ID HERE>';
const sheetName = 'Sheet1';
```

Put your `credentials.json` in this project directory and run this script.

``` 
sudo node .
``` 

Only the first run, authentication messages will appear. Please follow the steps and copy & paste your auth ID.

## License
MIT