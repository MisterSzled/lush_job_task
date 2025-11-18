export type MockRequest = {
        method?: string;
        params?: Record<string, string>,
        query?: Record<string, string>
        body?: unknown
}

export type MockHandler = (req: MockRequest) => Promise<any> | any

export type Endpoint = {
        key: string,
        path: string,
        method: "GET" | "POST" | "PUT" | "DELETE",
        mock?: MockHandler
}