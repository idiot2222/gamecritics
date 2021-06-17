import React, {useState} from "react";
import ItemList from "./ItemList";
import RemoteCon from "./RemoteCon";
import "../style/Main.scss";
import { Pagination } from "antd";
import {getItems} from "./ItemGenerator";
import {getGenres} from "./GenreGenerate";

const Main = () => {
  const items = getItems();
  const genres = getGenres();

  const [currentChecked, setCurrentChecked] = useState(-1); // 현재 check 된 장르
  const [itemCount, setItemCount] = useState(items.length);
  const [currentPage, setCurrentPage] = useState(1);

  function checkFunction(num) {
    setCurrentChecked(num);
  }
  function pageChange(page) {
    setCurrentPage(page);
  }
  function filtering(length) {
    setItemCount(length);
  }

  const pageSize = 4;

  return (
    <>
      <div className="main">
        <RemoteCon
            genres={genres}
            currentChecked={currentChecked}
            checkFunction={checkFunction}
            onChange={pageChange}
        />
        <ItemList
          items={items}
          pageSize={pageSize}
          currentPage={currentPage}
          currentChecked={currentChecked}
          onFilter={filtering}
        />
        <Pagination
          className="pagination"
          style={{ marginTop: "50px" }}
          current={currentPage}
          defaultPageSize={pageSize}
          total={itemCount}
          onChange={pageChange}
        />
      </div>
    </>
  );
};

export default Main;
