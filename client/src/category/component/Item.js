import React from 'react';
import "../style/Item.scss";
import {Card} from "antd";

const Item = props => {
    const item = props.content;

    return (
        <Card
            hoverable
            className="item"
            cover={<img alt={item.title+"의 이미지"} src={process.env.PUBLIC_URL + "/img/" + item.title +".png"}/>}
        >
            {item.title}
        </Card>
    );
}

export default Item;
