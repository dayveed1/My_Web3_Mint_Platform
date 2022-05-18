const hre = require("hardhat");

async function main() {
 

  // We get the contract to deploy
  const BugaNFT = await hre.ethers.getContractFactory("BugaNFT");
  const bugaNFT = await BugaNFT.deploy();

  await bugaNFT.deployed();

  console.log("BugaNFT deployed to:", bugaNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
