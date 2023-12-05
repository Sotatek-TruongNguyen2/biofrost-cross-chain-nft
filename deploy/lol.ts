import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const deployDeal: DeployFunction = async (
    hre: HardhatRuntimeEnvironment,
) => {
    const { deployments, getNamedAccount, ethers } = hre;
    const { deploy, execute } = deployments;
    const { deployer } = await getNamedAccounts();

    console.log(deployer);

    // const { address: amongUsNFT } = await deploy('AmongUsNFT', {
    //     from: deployer,
    //     args: [],
    //     log: true,
    //     deterministicDeployment: false
    // });

    // const { address: sourceMinter } = await deploy('SourceMinter', {
    //     from: deployer,
    //     args: [deployer],
    //     log: true,
    //     deterministicDeployment: false
    // });

    // await new Promise((res, rej) => {
    //     setTimeout(() => {
    //         res(true);
    //     }, 5000);
    // });

    // await hre.run("verify:verify", {
    //     address: sourceMinter,
    //     constructorArguments: [
    //         deployer
    //     ],
    // });

    // await hre.run("verify:verify", {
    //     address: amongUsNFT,
    //     constructorArguments: [
    //     ],
    // });

    // await execute("AmongUsNFT", {
    //     from: deployer,
    //     log: true
    // }, "mint", deployer)

    // await execute("AmongUsNFT", {
    //     from: deployer,
    //     log: true
    // }, "mint", deployer)

    // await execute("AmongUsNFT", {
    //     from: deployer,
    //     log: true
    // }, "mint", deployer)

    // const data = ethers.solidityPacked([
    //     "uint",
    //     "uint",
    //     "uint"
    // ], [
    //     1,
    //     2,
    //     43113
    // ])

    // await execute("AmongUsNFT", {
    //     from: deployer,
    //     log: true
    // }, "safeTransferFrom(address,address,uint256,bytes)",
    //     deployer,
    //     sourceMinter,
    //     0,
    //     data
    // )

    // await execute("AmongUsNFT", {
    //     from: deployer,
    //     log: true
    // }, "safeTransferFrom(address,address,uint256,bytes)",
    //     deployer,
    //     sourceMinter,
    //     1,
    //     data
    // )

    const { address: myNFTAddress } = await deploy('MyNFT', {
        from: deployer,
        args: [],
        log: true,
        deterministicDeployment: false
    });


    const { address: destinationAddress } = await deploy('DestinationMinter', {
        from: deployer,
        args: [deployer, myNFTAddress, 1],
        log: true,
        deterministicDeployment: false
    });

    await hre.run("verify:verify", {
        address: myNFTAddress,
        constructorArguments: [
        ],
    });

    await hre.run("verify:verify", {
        address: destinationAddress,
        constructorArguments: [
            deployer, myNFTAddress, 1
        ],
    });


    // await execute("MyNFT", {
    //     from: deployer,
    //     log: true
    // }, "setDestinationMinter",
    //     destinationAddress
    // )

    // await execute("DestinationMinter", {
    //     from: deployer,
    //     log: true
    // }, "receiveNFT",
    //     deployer,
    //     0
    // )

    // await execute("DestinationMinter", {
    //     from: deployer,
    //     log: true
    // }, "receiveNFT",
    //     deployer,
    //     1
    // )
};

deployDeal.tags = ['DEAL'];

export default deployDeal;