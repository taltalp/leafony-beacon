# Leafony_beacon
Leafonyでビーコンデバイスを作るデモです。

## 環境

* Node.js v10.16.3
* [noble](https://github.com/noble/noble)

## Leafonyのセットアップ

下記の構成で組み立てて`leafony_beacon.ino`を書き込む

* 4-Sensorsリーフ
* AVR MCUリーフ
* USBリーフ
* BLEリーフ
* CR2032リーフ

## インストール

### Windows

windows10にnobleをインストールする方法はこちらをご覧ください。
https://qiita.com/s_nkg/items/3f27328e108d7fa8d076

    $ npm install
    $ node .\scan.js

### Ubuntu & Raspberry pi

    $ sudo apt update
    $ sudo apt upgrade
    $ node -v
    v10.15.2
    $ npm --version
    5.8.0
    $ sudo apt-get install bluetooth libbluetooth-dev libudev-dev
    $ git clone https://github.com/Leafony/Leafony_Beacon
    $ cd Leafony_Beacon
    $ npm install
    $ sudo node ./scan.js

## 実行結果

```
$ sudo node ./scan.js
2019/10/16,09:27:01,T24.18V3.07,-54
2019/10/16,09:27:02,T24.18V3.07,-62
2019/10/16,09:27:12,T24.26V3.09,-66
2019/10/16,09:27:13,T24.26V3.09,-65
2019/10/16,09:27:24,T24.29V3.07,-51
2019/10/16,09:27:25,T24.29V3.07,-59
2019/10/16,09:27:25,T24.29V3.07,-52
```