const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = 'stone solution dolphin turkey demise label special hard copper scrap lens render'; 
const diamanteRpcUrl = 'https://laboratory.diamcircle.io/'; 
const networkId = 'GDNCQ6KQLG34LUQYPZ36BX7ADSEL6EQJ6Q7SHHZSQC4QASTE77YV7J7H'; 

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    diamante: {
      provider: () => new HDWalletProvider(
        mnemonic,
        diamanteRpcUrl
      ),
      network_id: networkId,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
};