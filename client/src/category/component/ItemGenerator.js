import {getGenres} from "./GenreGenerate";

const genres = getGenres();
const items = [
    { id: 0, title: "rdr2", genre: genres[0], price: 10000, text: "레데리2는 정말 재밌어 보입니다." },
    { id: 1, title: "bag", genre: genres[0], price: 20000, text: "배그는 정말 어렵습니다." },
    { id: 2, title: "fifa", genre: genres[4], price: 30000, text: "피파는 정말 재밌습니다." },
    { id: 3, title: "monhun", genre: genres[3], price: 15000, text: "몬스터 헌터는 해본 적이 없습니다." },
    { id: 4, title: "tekken", genre: genres[2], price: 25000, text: "철권7은 너무 어렵습니다." },
    { id: 5, title: "doom", genre: genres[0], price: 35000, text: "둠은 뭔지 모르겠습니다." },
    { id: 6, title: "endwar", genre: genres[0], price: 40000, text: "tom clancy's endwar는 처음 들어봅니다." },
    { id: 7, title: "lol", genre: genres[1], price: 50000, text: "롤은 정말 재밌습니다." },
    { id: 8, title: "fortnite", genre: genres[0], price: 60000, text: "포트나이트는 재미 없어 보입니다." },
    { id: 9, title: "zelda", genre: genres[3], price: 70000, text: "젤다는 정말 재밌습니다." },
];

export function getItems() {
    return items;
}

