import React from 'react';
import "../style/FilterArea.scss";
import {Select} from "antd";
const { Option } = Select;

const FilterArea = props => {

    const { title, items, onPageChange, onSelected } = props;

    return (
        <div className="filterArea">
            <span>{title}: </span>
            <Select style={{ width: "30%" }} defaultValue={-1} onChange={() => onPageChange(1)} onSelect={i => onSelected(i, title)}>
                <Option value={-1}>-</Option>
                {items.map(item => {
                    return (
                        <Option key={item.id} value={item.id}> {item.value} </Option>
                    );
                })}
            </Select>
        </div>
    );
};

export default FilterArea;
