import Head from 'next/head';
import { connectToDatabase } from '../lib/db';

import { DUMMY_ROOMS } from '../lib/dummy-rooms';

import Banner from '../components/layout/Banner';
import RoomList from '../components/rooms/RoomList';

const Homepage = (props) => {
  return (
    <>
      <Head>
        <title>Majestic Hotels</title>
        <meta
          name="description"
          content="Browse through the best hotel rooms the world has to offer."></meta>
      </Head>
      <Banner></Banner>
      <RoomList rooms={props.rooms} />
    </>
  );
};

// For caching -> getStaticProps
export const getStaticProps = async () => {
  // Fetch data from a database if available, else use DUMMY_ROOMS
  let rooms = DUMMY_ROOMS;
  if (process.env.MONGODB_URI) {
    const { db } = await connectToDatabase();
    rooms = await db.collection('rooms').find().toArray();
  }

  return {
    props: {
      rooms: rooms.map(({ id, _id, title, image, address }) => ({
        id: id || _id.toString(),
        title,
        image,
        address,
      })),
    },
    revalidate: 1,
  };
};

// For accessing request (session cookies) and frequent page updates -> getServerSideProps
// export const getServerSideProps = (context) => {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       rooms: DUMMY_ROOMS,
//     },
//   };
// };

export default Homepage;
