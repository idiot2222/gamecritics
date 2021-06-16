import React from 'react';
import "../style/RemoteBtn.scss"
import CheckSquareOutlined from "@ant-design/icons";

const RemoteBtn = props => {
    const genre = props.genre;
    const currentChecked = props.currentChecked;
    const checked = props.checkFunction;
    const nowChecked = false;

    return (
        <div className="remoteBtn" onClick={() => checked(genre.id)}>
            {genre.genre} {genre.id === currentChecked ? <i className="far fa-check-square"></i> : <i className="far fa-square"></i>}
        </div>
    );
};

export default RemoteBtn;
