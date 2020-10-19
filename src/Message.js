import React, { forwardRef } from "react";
import "./Message.css";
import * as timeago from 'timeago.js'

export const Message =forwardRef(({
  id,
  contents: { timestamp, email, displayName, uid, photo, message },
}) => {
  return (
    <div className="message">
      <img
        src={photo}
        alt=""
      />
      <div className="message__info">
        <h4>
          {displayName}
          <small className="message__timestamp">
          { timeago.format(new Date(timestamp?.toDate()))}
          {/* {new Date(timestamp?.toDate()).toUTCString()} */}
          
          </small>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
});
//"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_zKAj08G9xm6kgANRpxkW-eK6TskcGxW3mg&usqp=CAU"