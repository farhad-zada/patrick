const { task } = require("hardhat/config")

task("block-number", "Returns current block number").setAction(
    async (taskArgs, hre) => {
        const block_number = await hre.ethers.provider.getBlockNumber()
        console.log(`Current block number is ${block_number}`)
    }
)
module.exports = {}
