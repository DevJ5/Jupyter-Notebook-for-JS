import React from 'react';

import classes from './MeetupDetail.module.css';

const MeetupDetail = ({ meetupData }) => {
  return (
    <div className={classes.detail}>
      <img src={meetupData.image} alt="" />
      <h1>{meetupData.title}</h1>
      <address>{meetupData.address}</address>
      <p>{meetupData.description}</p>
    </div>
  );
};

export default MeetupDetail;
