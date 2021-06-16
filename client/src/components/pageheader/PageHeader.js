import React from 'react';
import { DingdingOutlined } from '@ant-design/icons';
import "./PageHeader.scss"
const PageHeader = ( {title="몬스터헌터 스토리즈 2 : 파멸의 날개"} ) =>{
  return (
    <div class="logoAndTitle">
      <span class="logo"><DingdingOutlined /></span>
      <span class="title">{ title }</span> 
    </div>
  );
};

export default PageHeader;