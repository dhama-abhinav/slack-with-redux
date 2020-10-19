import React from "react";
import { useDispatch } from "react-redux";
import "./SidebarOption.css";
import { setChannelInfo } from "./features/channelSlice";


export const SidebarOption = ({ Icon, title, id }) => {
    const dispatch = useDispatch()
    const changingHeaderAfterClick = () => {
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: title,
          })
        );
      };
  return (
    <div onClick={changingHeaderAfterClick} className="sidebaroption">
      {Icon && <Icon className="sidebaroption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebaroption__channel">
          <span className="sidebaroption__hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
};
