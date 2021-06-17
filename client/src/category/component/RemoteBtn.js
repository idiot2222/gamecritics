import React from 'react';
import "../style/RemoteBtn.scss"

const RemoteBtn = props => {
    const genre = props.genre;
    const currentChecked = props.currentChecked;
    const checked = props.checkFunction;
    const onChange = props.onChange;

    return (
        <div className="remoteBtn" onClick={() => {
            checked(genre.id)
            onChange(1)
        }}>
            {genre.genre} {genre.id === currentChecked ? <i className="far fa-check-square"></i> : <i className="far fa-square"></i>}
        </div>
    );
};

export default RemoteBtn;
