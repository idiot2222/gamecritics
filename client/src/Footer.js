import React, { useState } from 'react';
import './Footer.scss';

const Footer = () => {
  const [color1, setColor1] = useState('#ecf0f1');
  const [color2, setColor2] = useState('#ecf0f1');
  const [color3, setColor3] = useState('#ecf0f1');
  const [color4, setColor4] = useState('#ecf0f1');
  const [idx, setIdx] = useState(0);
  const items = ['Gamecritics', '김민정', '박현근', '최현진', '한선우'];

  return (
    <div className="botbody">
      <div className="footer">
        <div>
          <div
            className="icons"
            onMouseLeave={() => {
              setIdx(0);
            }}
          >
            <i
              className="fas fa-cat"
              style={{ color: color1 }}
              onMouseOver={() => {
                setColor1('#9b59b6');
                setIdx(1);
              }}
              onMouseLeave={() => {
                setColor1('#ecf0f1');
              }}
            ></i>
            <i
              className="fas fa-hippo"
              style={{ color: color2 }}
              onMouseOver={() => {
                setColor2('#2ecc71');
                setIdx(2);
              }}
              onMouseLeave={() => {
                setColor2('#ecf0f1');
              }}
            ></i>
            <i
              className="fas fa-otter"
              style={{ color: color3 }}
              onMouseOver={() => {
                setColor3('#f1c40f');
                setIdx(3);
              }}
              onMouseLeave={() => {
                setColor3('#ecf0f1');
              }}
            ></i>
            <i
              className="fas fa-dog"
              style={{ color: color4 }}
              onMouseOver={() => {
                setColor4('#3498db');
                setIdx(4);
              }}
              onMouseLeave={() => {
                setColor4('#ecf0f1');
              }}
            ></i>
          </div>
        </div>
        <div className="textArea">{items[idx]}</div>
        <div className="topBtn" onClick={() => window.scrollTo(0, 0)}>
          <i className="fas fa-chevron-up"></i>
        </div>
      </div>
      <hr className="mobile-border-color"></hr>
      <div className="row copyright">
        <div className="copyright-paragraph">
          <span className="text-color-nonactive">
            © 2021, 3조. All Rights Reserved. GC, Gamecritics, Gamecritics
            로고의 모든 저작권은 Epic Games, Inc.에 있으며, 이는 3조 및 관계자에
            모두 해당됩니다. 기타 브랜드 또는 제품 이름은 해당 소유자의
            상표입니다.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
