// @ts-nocheck
import { writable } from "svelte/store";

export const notes = writable([])
export const courses = writable([])


export async function FetchData(Api, store){
    let data;
    await fetch(Api)
    .then(response => response.json())
    .then(fetchedData => {
        data = fetchedData;
        store.set(data)})
    .catch(error => console.error("Error; ", error))
    return data;
}

FetchData("https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes", notes)
FetchData("https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses", courses)




