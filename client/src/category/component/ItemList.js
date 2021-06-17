import React from 'react';
import Item from "./Item";
import "../style/ItemList.scss";
import {Link} from "react-router-dom";

const ItemList = props => {
    const { items, pageSize, currentPage, currentChecked, onFilter } = props;

    function process(items, currentPage, currentChecked) {
        let copy = items.slice();

        if(currentChecked !== -1) {
            copy = copy.filter(item => item.genre.id === currentChecked);
        }
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

    const pagedItems = process(items, currentPage, currentChecked);




    return (
        <div className="itemList">
            {pagedItems.map(item => {
                const content = {
                    title: item.title,
                    genre: item.genre
                }
                return (
                    <Link to={"/info/" + item.title}><Item key={item.id} content={content} /></Link>
                );
            })}
        </div>
    );
}

export default ItemList;
