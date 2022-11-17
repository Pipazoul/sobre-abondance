import { Directus } from '@directus/sdk';
import type { Material } from "./models/materials";
import type { Event } from "./models/events";


const directus = new Directus("http://localhost:8055/");

export async function getItems(items: string) {
    const response = directus.items<string, Material | Event >(items).readByQuery({limit: -1});
    return (await response).data;
}

export async function getItem(items: string, id: number) {
    const response = directus.items<string, Material | Event>(items).readOne(id);
    return (await response);
}
