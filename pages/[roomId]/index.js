import React from 'react';
import Head from 'next/head';

import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../lib/db';

import { DUMMY_ROOMS } from '../../lib/dummy-rooms';

import RoomDetail from '../../components/rooms/RoomDetail';

const RoomDetails = (props) => {
  return (
    <>
      <Head>
        <title>Room {props.roomData.title}</title>
        <meta
          name="description"
          content="Browse through the best hotel rooms the world has to offer."></meta>
      </Head>
      <RoomDetail roomData={props.roomData} />
    </>
  );
};

export const getStaticPaths = async () => {
  let rooms = DUMMY_ROOMS;
  if (process.env.MONGODB_URI) {
    const { db } = await connectToDatabase();
    const roomsCollection = db.collection('rooms');
    rooms = await roomsCollection.find({}, { _id: 1 }).toArray();
  }

  return {
    paths: rooms.map((room) => ({
      params: {
        roomId: room._id.toString(),
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps = async (context) => {
  const roomId = context.params.roomId;
  let selectedRoom = DUMMY_ROOMS.find((room) => room.id === roomId);
  if (process.env.MONGODB_URI) {
    const { db } = await connectToDatabase();
    const roomsCollection = db.collection('rooms');
    selectedRoom = await roomsCollection.findOne({ _id: ObjectId(roomId) });
  }
  console.log(selectedRoom);

  return {
    props: {
      roomData: {
        id: selectedRoom.id || selectedRoom._id.toString(),
        title: selectedRoom.title,
        image: selectedRoom.image,
        address: selectedRoom.address,
        description: selectedRoom.description,
      },
    },
  };
};

export default RoomDetails;
