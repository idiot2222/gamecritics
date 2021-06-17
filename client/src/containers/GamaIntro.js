import React from "react";

export default function GameIntro(props) {
  return (
    <div>
      <h1>레시피상세보기:{props.match.params.no}</h1>
    </div>
  );
}
