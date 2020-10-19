import React, { useState, useEffect } from "react";
import "./Chat.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
//import { ChatInput } from './ChatInput';
import { Message } from "./Message";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "./features/channelSlice";
import db from "./firebase";
import { selectUser } from "./features/userSlice";
import firebase from "firebase";

export const Chat = () => {
  const channelName = useSelector(selectChannelName);
  const channelId = useSelector(selectChannelId);
  const [messages, setMessages] = useState([]);
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("channels").doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>To : {channelName}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <InfoOutlinedIcon />
          <p>Details</p>
        </div>
      </div>

      <div className="chat__messages">
        {messages.map(({ id, data }) => (
          <Message key={id} contents={data} />
        ))}
        {/* <Message />
                <Message />
                <Message />
                <Message /> */}
      </div>
      <div className="chatinput">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message #Undefined"
          />
          <button onClick={sendMessage} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
