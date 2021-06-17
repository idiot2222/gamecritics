import React, {useState} from "react";
import ItemList from "./ItemList";
import RemoteCon from "./RemoteCon";
import "../style/Main.scss";
import { Pagination } from "antd";

const Main = () => {
  const genres = [
    { id: 0, genre: "genre01" },
    { id: 1, genre: "genre02" },
    { id: 2, genre: "genre03" },
    { id: 3, genre: "genre04" },
    { id: 4, genre: "genre05" },
  ];
  const items = [
    { id: 0, title: "game01", genre: genres[0] },
    { id: 1, title: "game02", genre: genres[0] },
    { id: 2, title: "game03", genre: genres[0] },
    { id: 3, title: "game04", genre: genres[3] },
    { id: 4, title: "game05", genre: genres[2] },
    { id: 5, title: "game06", genre: genres[1] },
    { id: 6, title: "game07", genre: genres[0] },
    { id: 7, title: "game08", genre: genres[4] },
    { id: 8, title: "game09", genre: genres[0] },
    { id: 9, title: "game10", genre: genres[2] },
  ];

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
        <RemoteCon
          genres={genres}
          currentChecked={currentChecked}
          checkFunction={checkFunction}
          onChange={pageChange}
        />
      </div>
    </>
  );
};

export default Main;
