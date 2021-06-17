import {getGenres} from "./GenreGenerate";

const genres = getGenres();
const items = [
    { id: 0, title: "game01", genre: genres[0], price: 10000 },
    { id: 1, title: "game02", genre: genres[0], price: 20000 },
    { id: 2, title: "game03", genre: genres[0], price: 30000 },
    { id: 3, title: "game04", genre: genres[3], price: 15000 },
    { id: 4, title: "game05", genre: genres[2], price: 25000 },
    { id: 5, title: "game06", genre: genres[1], price: 35000 },
    { id: 6, title: "game07", genre: genres[0], price: 40000 },
    { id: 7, title: "game08", genre: genres[4], price: 50000 },
    { id: 8, title: "game09", genre: genres[0], price: 60000 },
    { id: 9, title: "game10", genre: genres[2], price: 70000 },
];

export function getItems() {
    return items;
}

