const { ethers } = require("hardhat")
const { assert, expect } = require("chai")

describe("SimpleStorage", async function () {
  let simpleStorageFactory, simpleStorage
  beforeEach(async () => {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await simpleStorageFactory.deploy()
  })

  it('Should be returning the number 0 from retrieve', async () => {
    const initialNumber = await simpleStorage.retrieve()
    const expectedNumber = "0"
    assert(initialNumber.toString() == expectedNumber)
  })

  it("Should be equal to the number given to store", async () => {
    await simpleStorage.store("5")
    const storedNumber = "5"
    const updatedNumber = await simpleStorage.retrieve()

    assert.equal(storedNumber, updatedNumber.toString(), `Not equal: stored -> ${storedNumber} vs retrieved -> ${updatedNumber}`)
  })
})