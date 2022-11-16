import type { Materials } from "./models/materials";

export const apiUrl = "http://localhost:8055/"

export async function getItems(items: string): Promise<Materials> {
    const res = await fetch(apiUrl + 'items/' + items);
    const response = await res.json();
    return response.data;
}