import { MockHandler } from "../types";
import products_data from "../../../data/products.json";

const delay = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

export const products: MockHandler = async (req) => {
        await delay();
        return products_data
}