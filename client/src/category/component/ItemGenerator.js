import {getGenres} from "./GenreGenerate";

const genres = getGenres();
const items = [
    { id: 0, title: "rdr2", genre: genres[0], price: 10000, name: "레드 데드 리뎀션2", text: "레데리2는 정말 재밌어 보입니다." },
    { id: 1, title: "bag", genre: genres[0], price: 20000, name: "배틀 그라운드", text: "배그는 정말 어렵습니다." },
    { id: 2, title: "fifa", genre: genres[4], price: 30000, name: "피파", text: "피파는 정말 재밌습니다." },
    { id: 3, title: "monhun", genre: genres[3], price: 15000, name: "몬스터 헌터", text: "몬스터 헌터는 해본 적이 없습니다." },
    { id: 4, title: "tekken", genre: genres[2], price: 25000, name: "철권7", text: "철권7은 너무 어렵습니다." },
    { id: 5, title: "doom", genre: genres[0], price: 35000, name: "둠 이터널", text: "둠은 뭔지 모르겠습니다." },
    { id: 6, title: "endwar", genre: genres[0], price: 40000, name: "톰 클랜시의 엔드워", text: "tom clancy's endwar는 처음 들어봅니다." },
    { id: 7, title: "lol", genre: genres[1], price: 50000, name: "리그 오브 레전드", text: "롤은 정말 재밌습니다." },
    { id: 8, title: "fortnite", genre: genres[0], price: 60000, name: "포트나이트", text: "포트나이트는 재미 없어 보입니다." },
    { id: 9, title: "zelda", genre: genres[3], price: 70000, name: "젤다: 야생의 숨결", text: "젤다는 정말 재밌습니다." },
];

export function getItems() {
    return items;
}

