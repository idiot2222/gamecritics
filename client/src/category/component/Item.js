import React from 'react';
import "../style/Item.scss";
import {Card} from "antd";

const Item = props => {
    const { title, price } = props.content;

    return (
        <Card
            hoverable
            className="item"
            cover={<img alt={title+"의 이미지"} style={{ width: "368px", height: "207px" }}
                        src={process.env.PUBLIC_URL + "/img/" + title +"_01.png"}/>}
        >
            {title} {price}원
        </Card>
    );
}

export default Item;
