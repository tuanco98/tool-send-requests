export enum CurrentBlockType {
    current_block_fusion = `current_block_fusion`,
}
export interface CurrentBlock {
    type: CurrentBlockType
    block: number
}