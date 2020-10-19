import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import { SidebarOption } from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const addChannelOnClick =()=>{
  const channelName=prompt('Enter channel name')
  if(channelName){
      db.collection('channels').add({
          channelName:channelName
      })
  }
}

export const Sidebar = () => {

  const user = useSelector(selectUser)
  const [channels,setChannels]=useState([])
  useEffect(()=>{
    db.collection('channels').onSnapshot( snapshot => {
      setChannels(snapshot.docs.map(doc =>(
        {
          id : doc.id,
          channel : doc.data()
        }
      )))
    })
  },[])

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>React-Redux</h2>
          <h3>
            <FiberManualRecordIcon />
            {user.displayName}
          </h3>
        </div>
        <AddIcon onClick={addChannelOnClick}/> 
      </div>
      {
        channels.map(({id,channel})=>(
          <SidebarOption key={id} id={id} title={channel.channelName} />
        ))
      }
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption title="Youtube" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File overview" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption  Icon={CreateIcon} title="Add channel" />
     
    </div>
  );
};

// addChannelOption
