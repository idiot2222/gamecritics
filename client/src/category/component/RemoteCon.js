import React from 'react';
import "../style/RemoteCon.scss";
import RemoteBtn from "./RemoteBtn";

const RemoteCon = props => {
    const { genres, currentChecked, checkFunction, onChange } = props;

    return (
        <div className="remoteCon">
            <div className="title">
                {currentChecked === -1 ? "장르별 선택": <i onClick={() => checkFunction(-1)} className="far fa-window-close cancelBtn"></i>}
            </div>
            {genres.map(genre => {
                return (
                    <RemoteBtn key={genre.id} genre={genre} currentChecked={currentChecked} checkFunction={checkFunction} onChange={onChange} />
                );
            })}
        </div>
    );
};

export default RemoteCon;
