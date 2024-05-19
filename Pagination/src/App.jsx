import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [getdata, setData] = useState([]);
  const [page, setNewPage] = useState(0);
  const [currPage, setCurPage] = useState(1);
  function changePage(event) {
    console.log("***********", event.target.textContent);
    if (
      event.target.id == "second" &&
      parseInt(event.target.textContent, 10) < 10
    ) {
      setNewPage(page + 10);
      setCurPage(page);
      setCurPage(currPage + 1);
    }
    if (event.target.id == "first" && parseInt(event.target.textContent) > 1) {
      setNewPage(page - 10);
      setCurPage(page);
      setCurPage(currPage - 1);
    }
  }
  useEffect(() => {
    const fetchdata = async () => {
      const getEntry = await axios.get(
        "https://dummyjson.com/products?limit=10&skip=" + page
      );
      setData(getEntry.data.products);
      console.log("*******", getEntry.data.products.length);
    };
    fetchdata();
  }, [page]);

  return (
    <>
      <div className="container">
        {getdata.map((item) => (
          <div key={item.id} className="itemEntry">
            <img src={item.thumbnail} alt={item.title} />
          </div>
        ))}
      </div>
      {currPage < 10 ? (
        <div className="linkPage">
          <div>
            <a href="#" onClick={changePage} id="first">
              {currPage}
            </a>
          </div>
          <div>
            <a href="#" onClick={changePage} id="second">
              {currPage + 1}
            </a>
          </div>
        </div>
      ) : (
        <div onClick={changePage} className="linkPage">
          <a href="#"> 10</a>
        </div>
      )}
    </>
  );
}

export default App;
