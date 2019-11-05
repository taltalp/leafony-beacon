# simple-scanner
A BLE Beacon Thermometer on Leafony and A BLE Beacon Scanner.

## Requirement

* [Leafony Basic Kit](https://leafony.com/)
* Arduino IDE
* Node.js
* [noble](https://github.com/noble/noble)

## Setup Leafony

Stack listed 5 leaves and write `leafony_beacon.ino` to AVR MCU leaf.

* 4-Sensors Leaf
* AVR MCU Leaf
* USB Leaf
* BLE Leaf
* CR2032 Leaf

## Install and Run BLE Beacon Scanner

### Windows

See [set up guide of Noble on Windows](https://github.com/noble/noble#windows).

    $ npm install
    $ node .\scan.js

### Raspberry pi

    $ sudo apt update
    $ sudo apt upgrade
    $ sudo apt-get -y install bluetooth libbluetooth-dev libudev-dev git
    $ git clone https://github.com/Leafony/Leafony_Beacon
    $ cd Leafony_Beacon/simple-scanner
    $ npm install
    $ sudo node ./scan.js

## Usage 

    $ sudo node ./scan.js
    2019/10/16,09:27:01,T24.18V3.07,-54
    2019/10/16,09:27:12,T24.26V3.09,-66
    2019/10/16,09:27:24,T24.29V3.07,-51

## License
MIT