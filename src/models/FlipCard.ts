import { IndexDescription } from "mongodb";

export interface FlipCard {
    address: string
    flip_card_number: number
    potion_amount: number 
    createdAt: number
}
export const FlipCardIndexes: IndexDescription[] = [
    { key: { address: 1 }, unique: true },
    { key: { createdAt: 1 } },
    { key: { flip_card_number: 1 } },
    { key: { potion_amount: 1 } },
    { key: { isUser: 1 } },
]