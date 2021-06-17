import React from 'react';
import Item from "./Item";
import "../style/ItemList.scss";
import {Link} from "react-router-dom";

const ItemList = props => {
    const { items, pageSize, currentPage, currentChecked, sorting, onFilter } = props;

    function process(items, currentPage, currentChecked, sorting) {
        let copy = items.slice();

        if(currentChecked !== -1) {
            copy = copy.filter(item => item.genre.id === currentChecked);
        }
        if(sorting === 0) {
            copy = copy.sort();
        }
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
        }
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

    const pagedItems = process(items, currentPage, currentChecked, sorting);




    return (
        <div className="itemList">
            {pagedItems.map(item => {
                const content = {
                    title: item.title,
                    price: item.price
                }
                return (
                    <Link to={"/info/" + item.title} key={item.id}><Item key={item.id} content={content} /></Link>
                );
            })}
        </div>
    );
}

export default ItemList;
