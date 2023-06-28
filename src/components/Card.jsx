import React from "react";

const Card = ({ data }) => {
  return (
    <>
      <div className="card">
        <img src={data.album_file} alt="" />
        <div className="card-text">
          <h3 className="card-title">編號：{data.animal_id}</h3>
          <p className="card-description">
            地區：{data.shelter_address.slice(0, 6)}
          </p>
          <div className="card-buttons">
            <button className="details">詳細資訊</button>
            <button className="addFav">加入最愛</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
