import type { Endpoint } from "./endpoints/types"

const BASE_URL = "https://http.cat/";
const USE_MOCK = true;

function resolvePayload<T>(payload: any): T {
        if (payload?.data) {
                return payload.data as T
        }
        return payload as T
}

export async function fetcher<T = any>(
        endpoint: Endpoint,
        body?: any,
        params?: any
): Promise<T> {
        if (USE_MOCK) {
                if (!endpoint.mock) {
                        throw new Error("No mock defined")
                }
                const json = await endpoint.mock({ body, params }) as Promise<T>
                return resolvePayload<T>(json);
        }

        const url = BASE_URL + endpoint.path

        const response = await fetch(url, {
                method: endpoint.method,
                headers: { "Content-Type": "application/json" },
                body: body ? JSON.stringify(body) : undefined,
        });

        if (!response.ok) {
                throw new Error(`API call failed ${response.status}`);
        }

        const json = await response.json();
        return resolvePayload<T>(json);
}