require("@nomiclabs/hardhat-etherscan")
require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("./tasks/block-number")
require("solidity-coverage")

const P_KEY = process.env.PRIVATE_KEY
const BSC_URL = process.env.BSC_RPC_URL
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        bsc: {
            url: BSC_URL,
            accounts: [P_KEY],
            chainId: 97,
        },
        localhost: {
            url: process.env.LOCAL_RPC_URL,
        },
    },
    solidity: "0.8.18",
    etherscan: {
        apiKey: process.env.BSCSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        outputFile: "gast-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: process.env.COINMARKET_API,
        token: 'BNB'

    }
}
