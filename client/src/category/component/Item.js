import React from 'react';
import "../style/Item.scss";
import {Card} from "antd";

const Item = props => {
    const { title, price, name } = props.content;

    return (
        <Card
            hoverable
            className="item"
            cover={<img alt={name+"의 이미지"} style={{ width: "368px", height: "207px" }}
                        src={process.env.PUBLIC_URL + "/img/" + title +"_01.png"}/>}
        >
            <div>{name}</div><div>{price}원</div>
        </Card>
    );
}

export default Item;
