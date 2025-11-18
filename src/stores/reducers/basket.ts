import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BasketItem {
        amount: number;
        name: string;
        id: string;
}

export interface BasketState {
        [id: string]: BasketItem
}

const initialState: BasketState = {};

interface UpdateBasket {
        name: string;
        id: string;
}

export const basketSlice = createSlice({
        name: "basket",
        initialState,
        reducers: {
                add: (state, action: PayloadAction<UpdateBasket>) => {
                        const id = action.payload.name;
                        if (state[id]) {
                                state[id].amount += 1;
                        } else {
                                state[id] = {
                                        amount: 1,
                                        id: action.payload.id,
                                        name: action.payload.name
                                };
                        }
                },
                remove: (state, action: PayloadAction<UpdateBasket>) => {
                        const id = action.payload.name;
                        if (state[id]?.amount > 1) {
                                state[id].amount -= 1;
                        } else {
                                delete state[id];
                        }
                }
        }
});

export const { add, remove } = basketSlice.actions;
export default basketSlice.reducer