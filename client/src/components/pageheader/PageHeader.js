import React from 'react';
import { DingdingOutlined } from '@ant-design/icons';
import "./PageHeader.scss"
const PageHeader = ( {title="안녕"} ) =>{
  return (
    <div className="logoAndTitle">
      <span className="logo"><DingdingOutlined /></span>
      <span className="title">{ title }</span>
    </div>
  );
};

export default PageHeader;
