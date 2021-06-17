import React from 'react';
import "../style/RemoteCon.scss";
import FilterArea from "./FilterArea";

const RemoteCon = props => {
    const { genres, checkFunction, onChange } = props;
    const filter = [
        { id: 0, value: "가나다순"},
        { id: 1, value: "낮은 가격순"},
        { id: 2, value: "높은 가격순"},
    ]

    return (
        <div className="remoteCon">
            <FilterArea title={"장르별"} items={genres} onPageChange={onChange} onSelected={checkFunction} />
            <FilterArea title={"필터"} items={filter} onPageChange={onChange} onSelected={checkFunction} />
        </div>
    );
};

export default RemoteCon;
