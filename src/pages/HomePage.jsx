import React from "react";
import mainBanner from "../assets/main-banner.png";
import leftBanner from "../assets/bone-banner.jpg";
import rightBanner from "../assets/toys-banner.png";

const HomePage = () => {
  const cardData = [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1511382686815-a9a670f0a512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
      title: "藍哥",
      age: "7",
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1554224311-beee415c201f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
      title: "小黑",
      age: "2",
    },
    {
      id: "3",
      src: "https://images.pexels.com/photos/2737393/pexels-photo-2737393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      title: "花花",
      age: "4",
    },
    {
      id: "4",
      src: "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      title: "皮克",
      age: "3",
    },
    {
      id: "5",
      src: "https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      title: "大小姐",
      age: "5",
    },
    {
      id: "6",
      src: "https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      title: "獨角獸",
      age: "2",
    },
    {
      id: "7",
      src: "https://images.unsplash.com/photo-1446231855385-1d4b0f025248?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      title: "阿獅",
      age: "3",
    },
    {
      id: "8",
      src: "https://images.unsplash.com/photo-1455526050980-d3e7b9b789a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80",
      title: "辛巴",
      age: "2",
    },
  ];
  return (
    <div className="container">
      <div className="banner-wrapper">
        <div
          className="main-banner"
          style={{
            backgroundImage: `url(${mainBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "25% 20%",
          }}
        >
          <div className="main-info">
            <h1 className="banner-title">帶毛小孩一起回家生活！</h1>
            <p className="banner-description">Happy Dog Happy Life</p>
            <i class="fa-solid fa-shield-dog"></i>
          </div>
        </div>
        <div
          className="sub-banner sub-banner-left"
          style={{
            backgroundImage: `url(${leftBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="banner-title">捐款送狗骨頭</h3>
          <p className="banner-description">NTD 100</p>
          <a
            href="https://www.ntpsa.org.tw/donations"
            className="action"
            target="_blank"
            rel="noreferrer"
          >
            捐款
          </a>
        </div>
        <div
          className="sub-banner sub-banner-right"
          style={{
            backgroundImage: `url(${rightBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="banner-title">捐款送玩偶</h3>
          <p className="banner-description">NTD 300</p>
          <a
            href="https://dogcat.org.tw/donate/"
            target="_blank"
            className="action"
            rel="noreferrer"
          >
            捐款
          </a>
        </div>
      </div>
      <h2>浪浪寶貝們</h2>
      <div className="cards-wrapper">
        {cardData.map((d) => {
          return (
            <div className="card">
              <img src={d.src} alt="" />
              <div className="card-text">
                <h3 className="card-title">{d.title}</h3>
                <p className="card-description">{d.age}歲</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="adoption-wrapper">
        <img
          src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80"
          alt=""
          className="adoption-image"
        />
        <div className="adoption-info">
          <h3 className="title">
            歡迎領養代替購買 <br />
            給浪浪一個家
          </h3>
          <a href="/adopt" className="action">
            領養去
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
