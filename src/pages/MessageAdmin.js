import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/MessageAdmin.css";
import user1 from "../assets/img/user1.jpg";
import user2 from "../assets/img/user2.jpg";
import img_admin from "../assets/img/admin.jpg";
import ChatBubble from "react-chat-bubble";

export default function MessageAdmin() {
  const [state] = useState([
    {
      type: 0,
      image: user1,
      text: "Hello Admin, I Need Your Help!",
    },
    {
      type: 1,
      image: img_admin,
      text: "Hello, is there anything i can help?",
    },
  ]);

  return (
    <div class="msgadm-container container-fluid">
      <div class="message-box row">
        <div class="chat-user col-4">
          <div class="msgadm-row row pt-5">
            <div class="col-2 ">
              <img className="msgadm-user" src={user1} alt="img-admin"></img>
            </div>
            <div class=" col-9">
              <h6 className="msgadm-admins pt-1">Anna_weston</h6>
              <p>Hello Admin, I Need Your Help!</p>
            </div>
          </div>
          <div class="msgadm-row row pt-5">
            <div class="col-2 ">
              <img className="msgadm-user" src={user2} alt="img-admin"></img>
            </div>
            <div class=" col-9">
              <h6 className="msgadm-admins pt-1">Sherly_clark</h6>
              <p>Excuse Me, Could you give me tracking number of my order?</p>
            </div>
          </div>
        </div>
        <div class="chat-box col-8">
          <ChatBubble messages={state}></ChatBubble>
        </div>
      </div>
    </div>
  );
}
