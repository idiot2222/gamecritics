import React from 'react';
import {getGenres} from "./GenreGenerate";

const genres = getGenres();
const items = [
    { id: 0, title: "game01", genre: genres[0] },
    { id: 1, title: "game02", genre: genres[0] },
    { id: 2, title: "game03", genre: genres[0] },
    { id: 3, title: "game04", genre: genres[3] },
    { id: 4, title: "game05", genre: genres[2] },
    { id: 5, title: "game06", genre: genres[1] },
    { id: 6, title: "game07", genre: genres[0] },
    { id: 7, title: "game08", genre: genres[4] },
    { id: 8, title: "game09", genre: genres[0] },
    { id: 9, title: "game10", genre: genres[2] },
];

export function getItems() {
    return items;
}

