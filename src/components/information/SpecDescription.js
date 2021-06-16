import React from "react";
import "./SpecDescription.css";

const SpecDescription = () => {
  return (
    <div id="computerSpec">
      <table>
        <th>구분</th>
        <th>최소사양</th>
        <th>권장사양</th>
        <tr>
          <td>운영체제</td>
          <td colSpan="2">Windows 7, 8, 10</td>
        </tr>
        <tr>
          <td>CPU</td>
          <td>3 GHz<br></br>SSE2 이상의 명령어 지원</td>
          <td>3 GHz 듀얼 코어</td>
        </tr>
        <tr>
          <td>RAM</td>
          <td>2 GB</td>
          <td>4 GB</td>
        </tr>
        <tr>
          <td>HDD</td>
          <td>12 GB</td>
          <td>16 GB</td>
        </tr>
        <tr>
          <td>그래픽카드</td>
          <td>Shader 버전 2.0b</td>
          <td>NVIDIA GeForce 8800<br/>AMD Radeon HD 5670</td>
        </tr>
        <tr>
          <td>DirectX</td>
          <td colSpan="2">DirectX 9.0c 지원</td>
          {/* <td>DirectX 9.0c 지원</td> */}
        </tr>
      </table>
    </div>
  );
};


export default SpecDescription;
