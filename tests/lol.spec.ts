import { loadFixture, time } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract } from 'ethers';


describe('Helix deal', async () => {
    async function deployLendingProtocolFixture() {
        const [owner, player1, player2, dealWallet, investor, fstInvestor, secInvestor, tidInvestor] =
            await ethers.getSigners();

        const MyNFT = await ethers.getContractFactory('MyNFT');
        const myNFT = await MyNFT.deploy();

        const AmongUsNFT = await ethers.getContractFactory('AmongUsNFT');
        const amongUsNFT = await AmongUsNFT.deploy();

        const SourceMinter = await ethers.getContractFactory('SourceMinter');
        const sourceMinter = await SourceMinter.deploy(owner.address);

        const DestinationMinter = await ethers.getContractFactory('DestinationMinter');
        const destinationMinter = await DestinationMinter.deploy(owner.address, await myNFT.getAddress(), 1);

        return {
            player1,
            player2,
            amongUsNFT,
            myNFT,
            sourceMinter,
            destinationMinter
        }
    }

    describe("testing v2", async () => {
        it("test", async () => {
            const { player1, player2, myNFT, amongUsNFT, sourceMinter, destinationMinter } = await deployLendingProtocolFixture();

            await amongUsNFT.mint(player1.address);
            await amongUsNFT.mint(player2.address);

            await myNFT.setDestinationMinter(await destinationMinter.getAddress());

            const data = ethers.solidityPacked([
                "uint",
                "uint",
                "uint"
            ], [
                2,
                1,
                31000
            ])

            await expect(
                amongUsNFT.connect(player1)["safeTransferFrom(address,address,uint256,bytes)"](
                    player1.address,
                    await sourceMinter.getAddress(),
                    0,
                    data
                )
            ).to.be.emit(sourceMinter, "NFTBridgeInitiated").withArgs(
                player1.address,
                await amongUsNFT.getAddress(),
                0,
                "2",
                "1",
                31000
            );

            await destinationMinter.receiveNFT(player1.address, 0);

            await expect(
                myNFT.connect(player1)["safeTransferFrom(address,address,uint256,bytes)"](
                    player1.address,
                    await destinationMinter.getAddress(),
                    0,
                    "0x"
                )
            ).to.be.emit(destinationMinter, "NFTBridgeBackInitiated").withArgs(
                player1.address,
                await myNFT.getAddress(),
                0,
            );
        });
    })
});