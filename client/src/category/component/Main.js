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
  const [sorting, setSorting] = useState(-1); // sorting 기준
  const [itemCount, setItemCount] = useState(items.length);
  const [currentPage, setCurrentPage] = useState(1);

  function checkFunction(num, filter) {
    if(filter === "장르별") {
      setCurrentChecked(num);
    }
    else {
      setSorting(num);
    }
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
          sorting={sorting}
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
