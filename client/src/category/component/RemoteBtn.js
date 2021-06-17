import React from 'react';
import "../style/RemoteBtn.scss"

const RemoteBtn = props => {
    const genre = props.genre;
    const currentChecked = props.currentChecked;
    const checked = props.checkFunction;

    return (
        <div className="remoteBtn" onClick={() => checked(genre.id)}>
            {genre.genre} {genre.id === currentChecked ? <i className="far fa-check-square"></i> : <i className="far fa-square"></i>}
        </div>
    );
};

export default RemoteBtn;
