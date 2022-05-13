import { fusionContract, web3 } from "../../../web3"

interface Params {
    options: number[]
    times: number
    runeId: number
}
interface InputParam {
    private_keys: string[]
    quantity: number
    params: Params
}
export const pr_user_fusion = async (root: any, args: any, ctx: any) => {
    try {
        const { private_keys, quantity, params } = args as InputParam

        if (!private_keys) throw new Error("PrivateKey missing")
        if (quantity < 1) throw new Error("Invalid quantity")
        const accounts: string[] = []
        console.log("total address:", private_keys.length)
        for (let private_key of private_keys) {
            web3.eth.accounts.wallet.add(private_key)
            const { address } = web3.eth.accounts.privateKeyToAccount(private_key)
            intervalFusion(address, params, quantity)
        }
        return "done"
    } catch (e) {
        throw e
    }
}
const intervalFusion = async (address: string, params: Params, quantity: number) => {
    try {
        for (let index = 0; index < quantity; index++) {
            const { events: { Fusion } } = await sendTransaction(address, params)
            console.log(Fusion)
            sleep(1000)
        }
    } catch (e) {
        throw e
    }
}
const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
const sendTransaction = async (address: string, params: { runeId: number; options: number[]; times: number }) => {
    try {
        const { runeId, options, times } = params
        const result = await fusionContract.methods.fusion(runeId, times, options).send({ from: address, gas: 200000 })
        return result
    } catch (e) {
        throw e
    }
}
