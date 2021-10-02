import React from 'react';

import classes from './RoomDetail.module.css';

const RoomDetail = ({ roomData }) => {
  return (
    <div className={classes.detail}>
      <img src={roomData.image} alt="" />
      <h1>{roomData.title}</h1>
      <address>{roomData.address}</address>
      <p>{roomData.description}</p>
    </div>
  );
};

export default RoomDetail;
