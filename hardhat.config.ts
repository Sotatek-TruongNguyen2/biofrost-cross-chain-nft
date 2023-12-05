import * as dotenvenc from '@chainlink/env-enc'
dotenvenc.config();

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import './tasks'

const PRIVATE_KEY = "2487fd9a7179959ddde6a27b7e53a4d9e24c6171004a870980d0e5481af838ac";
const ETHEREUM_SEPOLIA_RPC_URL = process.env.ETHEREUM_SEPOLIA_RPC_URL;
const POLYGON_MUMBAI_RPC_URL = process.env.POLYGON_MUMBAI_RPC_URL;
const OPTIMISM_GOERLI_RPC_URL = process.env.OPTIMISM_GOERLI_RPC_URL;
const ARBITRUM_TESTNET_RPC_URL = process.env.ARBITRUM_TESTNET_RPC_URL;
const AVALANCHE_FUJI_RPC_URL = process.env.AVALANCHE_FUJI_RPC_URL;

console.log(PRIVATE_KEY);

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.20',
        settings: {
          evmVersion: 'paris'
        }
      }
    ]
  },
  etherscan: {
    // apiKey: process.env.ARBITRUM_API_KEY || ''
    apiKey: {
      goerli: "3ZNHRDR6QH525BWBKS4E3S7E3N8HP6DSZE",
      mainnet: process.env.ETHERSCAN_KEY || '',
      sepolia: process.env.ETHERSCAN_KEY || '',
      arbitrumGoerli: "DWHEB3FWB16Y2P75IW4X5F9B6W4HUEXPMA",
      arbitrum: "DWHEB3FWB16Y2P75IW4X5F9B6W4HUEXPMA",
      snowtrace: "snowtrace", // apiKey is not required, just set a placeholder,
      avalancheFujiTestnet: "snowtrace"
    } as any,
    customChains: [
      {
        network: "snowtrace",
        chainId: 43114,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/mainnet/evm/43114/etherscan",
          browserURL: "https://avalanche.routescan.io"
        }
      }
    ]
  },
  networks: {
    hardhat: {
      chainId: 31337
    },
    ethereumSepolia: {
      url: ETHEREUM_SEPOLIA_RPC_URL !== undefined ? ETHEREUM_SEPOLIA_RPC_URL : '',
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 11155111
    },
    polygonMumbai: {
      url: POLYGON_MUMBAI_RPC_URL !== undefined ? POLYGON_MUMBAI_RPC_URL : '',
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 80001
    },
    optimismGoerli: {
      url: OPTIMISM_GOERLI_RPC_URL !== undefined ? OPTIMISM_GOERLI_RPC_URL : '',
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 420,
    },
    arbitrumGoerli: {
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      url: 'https://arbitrum-goerli.publicnode.com',
      chainId: 421613,
      live: true,
      saveDeployments: true
    },
    snowtrace: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 43113,
      live: true,
      saveDeployments: true
    },
    goerli: {
      url: `https://goerli.infura.io/v3/521064ae8d384c8fa6ddcf47f8ffc0fd`,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 5,
      live: true,
      saveDeployments: true,
      tags: ['staging'],
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  }
};

export default config;
