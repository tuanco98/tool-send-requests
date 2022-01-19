import { marketContract, web3 } from "../../../web3"

interface Bid {
    bid: number
    orderId: number
    amount: number
}
interface InputParam {
    private_key: string
    params: Bid
}
export const pr_market_bid = async (root: any, args: any, ctx: any) => {
    try {
        const { private_key, params } = args as InputParam
        const { bid, orderId, amount } = params as Bid 
        
        if (!private_key) throw new Error("privateKey missing")

        web3.eth.accounts.wallet.add(private_key)

        const { address } = web3.eth.accounts.privateKeyToAccount(private_key)

        const result = await marketContract.methods
            .bid(orderId, web3.utils.toWei(amount.toString()))
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
