import BN from "bn.js"
import { marketContract, web3 } from "../../../web3"

interface CreateOrder {
    contractNft: string
    currency: string
    nftId: number
    timeEnd: number
    initPrice: number
    spotPrice: number
}
interface InputParam {
    private_key: string
    params: CreateOrder
}
export const pr_market_create_order = async (root: any, args: any, ctx: any) => {
    try {
        const { private_key, params } = args as InputParam
        const {contractNft, currency, nftId, timeEnd, initPrice, spotPrice} = params as CreateOrder

        if (!private_key) throw new Error("privateKey missing")

        web3.eth.accounts.wallet.add(private_key)

        const { address } = web3.eth.accounts.privateKeyToAccount(private_key)
        const [init_price, spot_price] = [web3.utils.toWei(initPrice.toString(),'ether'), web3.utils.toWei(spotPrice.toString(),'ether')]
        const result = await marketContract.methods
            .createOrder(contractNft, currency, nftId, timeEnd, init_price, spot_price)
            .send({ from: address, gas: 1000000 })
            .then((receipt) => {
                return receipt
            })
            .catch((error) => { throw error })

        return result
    } catch (e) {
        console.log(e)
        throw e
    }
}
