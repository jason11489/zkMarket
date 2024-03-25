# zkMarket

Tool
====
1. react-native
2. express/node js
3. hardhat for smart contract
4. rust arkworks for circuit (order data, accept trade)
5. napi-rs [js-rust] for circuit

Run
===
react-native folder (zkwallet and zkmarket)
* npm run start
  
server
* npm run nodemon
  
smart contract
* npx hardhat node
* Compile contract
  * DIRECTORY_NAME=zkwallet npx hardhat compile
* Deploy
  * DIRECTORY_NAME=zkwallet npx hardhat run zkwallet/scripts/zkwallet --network localhost
 
ngrok
=====
ngrok을 사용하여 real device를 서버 및 블록체인 연결 가능하다.
server port = 10801
block chain port = 8545

ngrok를 열고 나서
* /zkWallet/src/assets/zk-wallet-networks.json       [port 8545]
* /zkWallet/src/zkMarket/http/http.js                [port 10801]
* /zk-Market/zkMarket/src/http/index.js              [port 10801]

의 EndPoints 변경해줘야 함


  
Image
=====
