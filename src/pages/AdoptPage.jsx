import React, { useEffect, useState } from "react";

import axios from "axios";
import Card from "../components/Card";

const AdoptPage = () => {
  //animal's data
  let [data, setData] = useState(null);

  const initialURL = `https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=16`;

  const getCard = async (URL) => {
    let result = await axios.get(URL);
    setData(result.data);
  };
  useEffect(() => {
    getCard(initialURL);
  }, []);

  const moreCard = async () => {
    let lastId = data.length;
    // console.log(lastId);
    let newURL = `https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$skip=${lastId}&$top=16`;
    let result = await axios.get(newURL);
    setData(data.concat(result.data));
  };

  const filteredData = data
    ? data.filter((item) => item.album_file !== "")
    : null;

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="cards-wrapper">
        {filteredData &&
          filteredData.map((data) => {
            return <Card data={data} />;
          })}
      </div>
      <div className="moreCard">
        <button className="more" onClick={moreCard}>
          更多浪浪們
        </button>
      </div>
    </div>
  );
};

export default AdoptPage;
