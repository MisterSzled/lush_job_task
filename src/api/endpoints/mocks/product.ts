import { MockHandler } from "../types";
import products_data from "../../../data/products.json";

const delay = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

export const product: MockHandler = async (req) => {
        await delay();

        const slug = req.params?.slug;
        if (!slug) {
                throw new Error("No slug");
        }

        const result_product = products_data.data.find(product => product.slug === slug);

        if (!result_product) {
                throw new Error(`Product with ${slug} not found`);
        }

        return { data: result_product }
}