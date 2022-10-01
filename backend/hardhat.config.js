require("@nomicfoundation/hardhat-toolbox");


const QUICKNODE_HTTP_URL = 'https://special-wiser-rain.ethereum-goerli.discover.quiknode.pro/9d036f484b9670e552489709e4499af621aaa87c/';
const PRIVATE_KEY = 'b2e22fd0a87dcf0632b7d602e7d033a2dd1f9beb5361e218def9886d1243b1c6';

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};