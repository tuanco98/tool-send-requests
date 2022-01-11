import { boxContract, web3 } from "../../../web3"

export const pr_user_unbox = async (root: any, args: any, ctx: any) => {
    try {
        const { tokenId, private_key } = args

        if(!tokenId) throw new Error('tokenId missing')
        if(!private_key) throw new Error('privateKey missing')

        web3.eth.accounts.wallet.add(private_key)
        const { address } = web3.eth.accounts.privateKeyToAccount(private_key)

        const result = await boxContract.methods.unbox(tokenId).send({from: address, gas: 200000})

        return result
    } catch (e) {
        throw e
    }
}