/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.24",
   networks : {
     amoy : {
       url : "https://rpc-amoy.polygon.technology",
       accounts : ["e43aaf27ceca775696df63f33bd3113f5c5c338f5a6977e40b0346f6f60aee16"]
     },
   },
   etherscan: {
     apiKey : "BFG3AYIWMNNX3EZC6TRA2VMB8YAFSWV3Z9",
   },
 };
 