require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 // Replace this private key with your Ropsten account private key
 // To export your private key from Metamask, open Metamask and
 // go to Account Details > Export Private Key
 // Be aware of NEVER putting real Ether into testing accounts

 
 module.exports = {
   solidity: {
     version :"0.8.11",
     settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
   paths:{
    artifacts: "./src/artifacts"
    },
    networks: {
      goerli: {
          url: "https://goerli.infura.io/v3/8635e21fd68a478c945c55075edb204d",
          accounts: ['0x3f98cedfd32daf3ff3e443883e981d43a9fc5df7897418bc728dc99b7d492ddc'],
          gas: 12100000,
          gasPrice: 18000000000
      }
    },
    etherscan: {
      // Your API key for Etherscan
      // Obtain one at https://etherscan.io/
      apiKey: "6URR8WSYU87E1Q3XR3Z74MANGSHP1K3QTJ"
    }
 };