import React from 'react';
import Item from "./Item";
import "../style/ItemList.scss";
import {Link} from "react-router-dom";

const ItemList = props => {
    const { items, pageSize, currentPage, currentChecked, sorting, onFilter } = props;

    // ItemList.js
    // items 배열에서 정렬과 필터를 적용한 배열을 return
    function process(items, currentPage, currentChecked, sorting) {
        let copy = items.slice();

        if(currentChecked !== -1) {
            copy = copy.filter(item => item.genre.id === currentChecked);
        } // 선택된 장르만 filter

        if(sorting === 0) {
            copy = copy.sort((x, y) => {
                if(x.name > y.name) {
                    return 1;
                }
                else if(x.name < y.name) {
                    return -1;
                }
                return 0;
            });
        }         // 가나다 순 정렬
        else if(sorting === 1) {
            copy = copy.sort((x, y) => {
                if(parseInt(x.price) > parseInt(y.price)) {
                    return 1;
                }
                else if(parseInt(x.price) < parseInt(y.price)) {
                    return -1;
                }
                return 0;
            });
        }    // 가격 내림차순
        else if(sorting === 2) {
            copy = copy.sort((x, y) => {
                if(parseInt(x.price) > parseInt(y.price)) {
                    return -1;
                }
                else if(parseInt(x.price) < parseInt(y.price)) {
                    return 1;
                }
                return 0;
            });
        }    // 가격 오름차순

        onFilter(copy.length);

        const startIdx = (currentPage-1) * pageSize;
        let endIdx = startIdx + pageSize;
        if(copy.length < endIdx) {
            endIdx = copy.length;
        }

        const arr = [];
        let idx = 0;

        for(let i = startIdx ; i < endIdx ; i++) {
            arr[idx++] = copy[i];
        }

        return arr;
    }

    const pagedItems = process(items, currentPage, currentChecked, sorting);


    return (
        <div className="itemList">
            {pagedItems.map(item => {
                return (
                    <Link to={"/info/" + item.title} key={item.id}>
                        <Item key={item.id} item={item} />
                    </Link>
                );
            })}
        </div>
    );
}

export default ItemList;
