import React from "react";
import "./Chats.css";
import Chat from "../Chat/Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Ellen"
        message="YO Whats up"
        timestamp="40 seconds ago"
        profilePic="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed560d07fe4060006bbce1e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D422%26cropX2%3D1300%26cropY1%3D0%26cropY2%3D879"
      />
      <Chat
        name="Kardashian"
        message="Everything is fine?"
        timestamp="20 seconds ago"
        profilePic="https://media1.popsugar-assets.com/files/thumbor/mzUiLo-8Y10peZM55u_w6Loa-h4/612x451:2344x2183/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/19/007/n/1922398/d3c823415dd4769f7d9263.82518194_/i/Kim-Kardashian.jpg"
      />
      <Chat
        name="Leo"
        message="Hola!!Como estas??"
        timestamp="40 seconds ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1_MNwroQxL517bpoKP4baHNombJRW5o4ZXA&usqp=CAU"
      />
    </div>
  );
}

export default Chats;
