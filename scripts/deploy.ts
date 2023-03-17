// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat")
require("dotenv")
async function main() {
    const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage")
    const simpleStorage = await SimpleStorage.deploy()

    await simpleStorage.deployed()

    console.log(`SimpleStorage deployed to ${simpleStorage.address}`)

    // await simpleStorage.deployTransaction.wait(6)

    console.log(`Current Value is: ${await simpleStorage.retrieve()}`)
    await simpleStorage.store("22")
    console.log(`Updated Value is: ${await simpleStorage.retrieve()}`)
    if (hre.network.name == "bsc") {
        console.log("Verifying...")
        await hre.run("verify:verify", {
            address: simpleStorage.address,
            constructorArguments: [],
        })
        console.log(
            `Contract (address: ${simpleStorage.address}) verified at www.bscscan.com`
        )
    }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
