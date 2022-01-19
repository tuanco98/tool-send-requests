import Web3 from "web3"
import { Contract } from "web3-eth-contract"

import { Box_ABI } from "./abi_contracts/box"
import { Fusion_ABI } from "./abi_contracts/fusion"
import { MarketPlace_ABI } from "./abi_contracts/market"
import { config_CONTRACT_BOX_ADDRESS, config_CONTRACT_FUSION_ADDRESS } from "./config"

export let web3: Web3
export let boxContract: Contract
export let fusionContract: Contract
export let marketContract: Contract

export const connectWeb3 = async (provider: string) => {
    try {
        web3 = new Web3(provider)

        //init smart contract
        boxContract = new web3.eth.Contract(Box_ABI, config_CONTRACT_BOX_ADDRESS)
        fusionContract = new web3.eth.Contract(Fusion_ABI, config_CONTRACT_FUSION_ADDRESS)
        marketContract = new web3.eth.Contract(MarketPlace_ABI, config_CONTRACT_FUSION_ADDRESS)

        console.log(`🚀 Web3: connected`)
    } catch (e) {
        throw e
    }
}
