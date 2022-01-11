import { fusionContract, web3 } from "../../../web3"

export const pr_user_fusion = async (root: any, args: any, ctx: any) => {
    try {
        const { runeId, option, private_key } = args
        if(!private_key) throw new Error('privateKey missing')

        web3.eth.accounts.wallet.add(private_key)
        const { address } = web3.eth.accounts.privateKeyToAccount(private_key)
        console.log({runeId,option})
        const result = await fusionContract.methods.fusion(runeId, option).send({from: address, gas: 200000})
        return result
    } catch (e) {
        console.log(e)
        throw e
    }
}