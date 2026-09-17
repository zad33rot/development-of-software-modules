import axios from "axios";

const API_URL = "http://localhost:3000/api/emojis";

export async function getEmojis(query?: string) {
    try {
        const params = query ? { q: query } : undefined;

        const response = await axios.get(API_URL, {params});

        return response.data
    } catch(error) {
        console.log(error);
        throw Error("Ошибка: " + error);
    }
}